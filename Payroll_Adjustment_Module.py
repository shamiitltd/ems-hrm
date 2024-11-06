from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, Column, Integer, String, Float, Date, ForeignKey, Enum, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
from pydantic import BaseModel, validator
from datetime import date, datetime, timedelta
from typing import List, Optional
from decimal import Decimal, ROUND_HALF_UP
from enum import Enum as PyEnum
import calendar

# Database Configuration
SQLALCHEMY_DATABASE_URL = "mysql://user:password@localhost/payroll_db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Enums
class AdjustmentType(str, PyEnum):
    SALARY_REVISION = "salary_revision"
    BONUS_ADJUSTMENT = "bonus_adjustment"
    DEDUCTION_CORRECTION = "deduction_correction"
    ALLOWANCE_REVISION = "allowance_revision"
    BACKDATED_CHANGE = "backdated_change"

class AdjustmentStatus(str, PyEnum):
    PENDING = "pending"
    APPROVED = "approved"
    PROCESSED = "processed"
    CANCELLED = "cancelled"

# Database Models
class SalaryRevision(Base):
    __tablename__ = "salary_revisions"
    
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    old_salary = Column(Float)
    new_salary = Column(Float)
    effective_date = Column(Date)
    revision_date = Column(Date)
    approved_by = Column(String)
    approval_date = Column(Date, nullable=True)
    is_processed = Column(Boolean, default=False)
    
    employee = relationship("Employee", back_populates="salary_revisions")

class PayrollAdjustment(Base):
    __tablename__ = "payroll_adjustments"
    
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    adjustment_type = Column(Enum(AdjustmentType))
    amount = Column(Float)
    effective_date = Column(Date)
    end_date = Column(Date, nullable=True)
    description = Column(String)
    status = Column(Enum(AdjustmentStatus), default=AdjustmentStatus.PENDING)
    created_at = Column(Date, default=date.today)
    processed_at = Column(Date, nullable=True)
    
    employee = relationship("Employee", back_populates="adjustments")

# Pydantic Models
class SalaryRevisionCreate(BaseModel):
    employee_id: int
    new_salary: float
    effective_date: date
    approved_by: str

    @validator('new_salary')
    def validate_salary(cls, v):
        if v <= 0:
            raise ValueError("Salary must be greater than zero")
        return v

class PayrollAdjustmentCreate(BaseModel):
    employee_id: int
    adjustment_type: AdjustmentType
    amount: float
    effective_date: date
    end_date: Optional[date]
    description: str

class AdjustmentResponse(BaseModel):
    id: int
    employee_id: int
    adjustment_type: AdjustmentType
    amount: float
    effective_date: date
    status: AdjustmentStatus
    description: str

class RevisionCalculation(BaseModel):
    period_start: date
    period_end: date
    old_amount: float
    new_amount: float
    difference: float
    description: str

# FastAPI Application
app = FastAPI(title="Payroll Adjustment Module")

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Utility Functions
def calculate_retroactive_payment(
    old_salary: float,
    new_salary: float,
    effective_date: date,
    current_date: date
) -> List[RevisionCalculation]:
    """Calculate retroactive payments for salary revision"""
    calculations = []
    current_month = current_date.replace(day=1)
    effective_month = effective_date.replace(day=1)
    
    month = effective_month
    while month <= current_month:
        days_in_month = calendar.monthrange(month.year, month.month)[1]
        
        # Handle partial months
        if month == effective_month:
            days_applicable = days_in_month - effective_date.day + 1
            factor = days_applicable / days_in_month
        else:
            days_applicable = days_in_month
            factor = 1.0
            
        old_amount = old_salary * factor
        new_amount = new_salary * factor
        difference = new_amount - old_amount
        
        calculations.append(
            RevisionCalculation(
                period_start=month,
                period_end=month.replace(day=days_in_month),
                old_amount=round(old_amount, 2),
                new_amount=round(new_amount, 2),
                difference=round(difference, 2),
                description=f"Salary revision adjustment for {month.strftime('%B %Y')}"
            )
        )
        
        month = (month + timedelta(days=32)).replace(day=1)
    
    return calculations

# API Endpoints
@app.post("/api/salary-revisions/", response_model=List[RevisionCalculation])
async def create_salary_revision(
    revision: SalaryRevisionCreate,
    db: Session = Depends(get_db)
):
    # Check if employee exists
    employee = db.query(Employee).filter(Employee.id == revision.employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    # Create salary revision record
    new_revision = SalaryRevision(
        employee_id=revision.employee_id,
        old_salary=employee.base_salary,
        new_salary=revision.new_salary,
        effective_date=revision.effective_date,
        revision_date=date.today(),
        approved_by=revision.approved_by
    )
    
    db.add(new_revision)
    
    # Calculate retroactive payments
    calculations = calculate_retroactive_payment(
        employee.base_salary,
        revision.new_salary,
        revision.effective_date,
        date.today()
    )
    
    # Create adjustment records for each month
    for calc in calculations:
        if calc.difference != 0:
            adjustment = PayrollAdjustment(
                employee_id=revision.employee_id,
                adjustment_type=AdjustmentType.SALARY_REVISION,
                amount=calc.difference,
                effective_date=calc.period_start,
                description=calc.description,
                status=AdjustmentStatus.PENDING
            )
            db.add(adjustment)
    
    # Update employee's base salary
    employee.base_salary = revision.new_salary
    
    db.commit()
    
    return calculations

@app.post("/api/adjustments/", response_model=AdjustmentResponse)
async def create_adjustment(
    adjustment: PayrollAdjustmentCreate,
    db: Session = Depends(get_db)
):
    # Validate employee
    employee = db.query(Employee).filter(Employee.id == adjustment.employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    # Create adjustment record
    new_adjustment = PayrollAdjustment(
        employee_id=adjustment.employee_id,
        adjustment_type=adjustment.adjustment_type,
        amount=adjustment.amount,
        effective_date=adjustment.effective_date,
        end_date=adjustment.end_date,
        description=adjustment.description,
        status=AdjustmentStatus.PENDING
    )
    
    db.add(new_adjustment)
    db.commit()
    db.refresh(new_adjustment)
    
    return new_adjustment

@app.get("/api/adjustments/{employee_id}", response_model=List[AdjustmentResponse])
async def get_employee_adjustments(
    employee_id: int,
    status: Optional[AdjustmentStatus] = None,
    db: Session = Depends(get_db)
):
    query = db.query(PayrollAdjustment).filter(PayrollAdjustment.employee_id == employee_id)
    if status:
        query = query.filter(PayrollAdjustment.status == status)
    
    adjustments = query.all()
    if not adjustments:
        raise HTTPException(status_code=404, detail="No adjustments found")
    
    return adjustments

@app.put("/api/adjustments/{adjustment_id}/approve")
async def approve_adjustment(
    adjustment_id: int,
    db: Session = Depends(get_db)
):
    adjustment = db.query(PayrollAdjustment).filter(PayrollAdjustment.id == adjustment_id).first()
    if not adjustment:
        raise HTTPException(status_code=404, detail="Adjustment not found")
    
    if adjustment.status != AdjustmentStatus.PENDING:
        raise HTTPException(status_code=400, detail="Adjustment is not in pending status")
    
    adjustment.status = AdjustmentStatus.APPROVED
    db.commit()
    
    return {"message": "Adjustment approved successfully"}

@app.get("/api/salary-revisions/history/{employee_id}")
async def get_revision_history(
    employee_id: int,
    db: Session = Depends(get_db)
):
    revisions = db.query(SalaryRevision)\
        .filter(SalaryRevision.employee_id == employee_id)\
        .order_by(SalaryRevision.effective_date.desc())\
        .all()
    
    if not revisions:
        raise HTTPException(status_code=404, detail="No revision history found")
    
    return revisions

# Database initialization
Base.metadata.create_all(bind=engine)
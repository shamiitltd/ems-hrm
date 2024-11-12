from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.Float, nullable=False)
    payment_status = db.Column(db.String(50), default='Pending') 

    def __repr__(self):
        return f"<Employee {self.name}, Salary: {self.salary}, Status: {self.payment_status}>"

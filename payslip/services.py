from .models import Payslip, Deduction

def generate_payslip(employee_data):
    basic_salary = employee_data['basic_salary']
    housing_allowance = employee_data.get('housing_allowance', 0)
    transport_allowance = employee_data.get('transport_allowance', 0)
    
    gross_salary = basic_salary + housing_allowance + transport_allowance

    # Create Deduction instances for each deduction provided
    deductions_data = employee_data.get('deductions', [])
    deduction_objects = []
    total_deductions = 0

    for deduction_data in deductions_data:
        deduction = Deduction.objects.create(
            name=deduction_data['name'],
            amount=deduction_data['amount']
        )
        deduction_objects.append(deduction)
        total_deductions += deduction.amount

    net_salary = gross_salary - total_deductions

    # Create Payslip instance
    payslip = Payslip.objects.create(
        employee_name=employee_data['employee_name'],
        employee_id=employee_data['employee_id'],
        basic_salary=basic_salary,
        housing_allowance=housing_allowance,
        transport_allowance=transport_allowance,
        gross_salary=gross_salary,
        net_salary=net_salary
    )

    payslip.deductions.set(deduction_objects)
    return payslip

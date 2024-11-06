def calculate_salary(employee_data):
    salary = employee_data['salary']
    hours_worked = employee_data['hours_worked']
    bonuses = employee_data.get('bonuses', 0)
    deductions = employee_data.get('deductions', 0)

    # Calculate gross and net salary
    gross_salary = salary * hours_worked
    net_salary = gross_salary + bonuses - deductions

    return {
        "gross_salary": gross_salary,
        "net_salary": net_salary,
        "bonuses": bonuses,
        "deductions": deductions
    }

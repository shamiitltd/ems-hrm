from django.db import models

class Employee(models.Model):
    employee_id = models.CharField(max_length=10, unique=True)
    employee_name = models.CharField(max_length=100)

    def __str__(self):
        return self.employee_name

class SalaryStructure(models.Model):
    employee = models.OneToOneField(Employee, on_delete=models.CASCADE, related_name='salary_structure')
    basic_salary = models.DecimalField(max_digits=10, decimal_places=2)
    housing_allowance = models.DecimalField(max_digits=10, decimal_places=2)
    transport_allowance = models.DecimalField(max_digits=10, decimal_places=2)

    def gross_salary(self):
        return self.basic_salary + self.housing_allowance + self.transport_allowance

class Deduction(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='deductions')
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.name} - {self.amount}"

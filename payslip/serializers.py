from rest_framework import serializers
from .models import Employee, SalaryStructure, Deduction
from datetime import datetime

class DeductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deduction
        fields = ['name', 'amount']

class PayslipSerializer(serializers.ModelSerializer):
    housing_allowance = serializers.DecimalField(source='salary_structure.housing_allowance', max_digits=10, decimal_places=2)
    transport_allowance = serializers.DecimalField(source='salary_structure.transport_allowance', max_digits=10, decimal_places=2)
    basic_salary = serializers.DecimalField(source='salary_structure.basic_salary', max_digits=10, decimal_places=2)
    gross_salary = serializers.SerializerMethodField()
    deductions = DeductionSerializer(many=True)
    net_salary = serializers.SerializerMethodField()
    generation_date = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = ['employee_name', 'employee_id', 'pay_period', 'basic_salary', 'housing_allowance', 'transport_allowance', 'gross_salary', 'deductions', 'net_salary', 'generation_date']

    def get_gross_salary(self, obj):
        return obj.salary_structure.gross_salary()

    def get_net_salary(self, obj):
        deductions_total = sum(ded.amount for ded in obj.deductions.all())
        return obj.salary_structure.gross_salary() - deductions_total

    def get_generation_date(self, obj):
        return datetime.now().isoformat()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['pay_period'] = 'October 2024'  # Dynamically, you'd set this.
        return representation

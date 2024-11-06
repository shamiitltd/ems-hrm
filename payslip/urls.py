from django.urls import path
from .views import generate_payslip

urlpatterns = [
    path('payslip/<str:employee_id>/', generate_payslip, name='generate_payslip'),
]

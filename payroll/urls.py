from django.urls import path
from .views import SalaryCalculationView

urlpatterns = [
    path('calculate/', SalaryCalculationView.as_view(), name='calculate_salary'),
]

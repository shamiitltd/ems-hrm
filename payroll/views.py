from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import calculate_salary


class SalaryCalculationView(APIView):
    def post(self, request):
        employee_data = request.data
        salary_details = calculate_salary(employee_data)
        
        return Response(salary_details, status=status.HTTP_200_OK)

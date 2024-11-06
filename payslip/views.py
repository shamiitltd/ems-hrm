from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Employee
from .serializers import PayslipSerializer
from django.conf.urls import handler404, handler500
from django.views.defaults import page_not_found, server_error


@api_view(['GET'])
def generate_payslip(request, employee_id):
    try:
        employee = Employee.objects.get(employee_id=employee_id)
    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = PayslipSerializer(employee)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Use Django's default error views
handler404 = page_not_found
handler500 = server_error
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from django.http import JsonResponse

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


def task_list(request):
    tasks = [
        {"id": 1, "time": "7:00 - 7:45 AM", "title": "Interview with Product Designer Applicant", "status": "completed"},
        {"id": 2, "time": "9:00 - 11:30 AM", "title": "Conduct test for UX Researcher Candidates", "status": "pending"},
        # Add other tasks...
    ]
    return JsonResponse(tasks, safe=False)
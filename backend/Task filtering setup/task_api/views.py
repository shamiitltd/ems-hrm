from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['title', 'description', 'priority']

    def get_queryset(self):
        queryset = super().get_queryset()
        completed = self.request.query_params.get('completed', None)
        due_date = self.request.query_params.get('due_date', None)
        priority = self.request.query_params.get('priority', None)

        if completed is not None:
            queryset = queryset.filter(completed=(completed.lower() == 'true'))
        if due_date is not None:
            queryset = queryset.filter(due_date=due_date)
        if priority is not None:
            queryset = queryset.filter(priority=priority)

        return queryset

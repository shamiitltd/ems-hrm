from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Task, Notification
from .serializers import TaskSerializer, NotificationSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        previous_state = instance.completed
        response = super().update(request, *args, **kwargs)
        
        if instance.completed != previous_state:
            notification_message = f"Task '{instance.title}' status updated to {'completed' if instance.completed else 'incomplete'}."
            Notification.objects.create(task=instance, message=notification_message)
        
        return response


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

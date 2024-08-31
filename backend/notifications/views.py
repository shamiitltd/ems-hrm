from rest_framework import generics, status
from rest_framework.response import Response
from .models import Notification
from .serializers import NotificationSerializer

class NotificationList(generics.ListCreateAPIView):
    queryset = Notification.objects.all().order_by('-created_at')
    serializer_class = NotificationSerializer

    def get(self, request, *args, **kwargs):
        notifications = self.get_queryset()
        serializer = self.get_serializer(notifications, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MarkNotificationAsRead(generics.UpdateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def patch(self, request, *args, **kwargs):
        notification = self.get_object()
        notification.read = True
        notification.save()
        serializer = self.get_serializer(notification)
        return Response(serializer.data)
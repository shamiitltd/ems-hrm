from django.http import JsonResponse
from .models import Notification

def get_notifications(request, user_email):
    notifications = Notification.objects.filter(user_email=user_email, is_read=False)
    data = [
        {"title": n.title, "message": n.message, "created_at": n.created_at} for n in notifications
    ]
    notifications.update(is_read=True)  # Mark notifications as read
    return JsonResponse({"notifications": data}, status=200)

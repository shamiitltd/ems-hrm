from .models import Notification

def send_notification(user_email, title, message):
    Notification.objects.create(user_email=user_email, title=title, message=message)

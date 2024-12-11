from django.db import models

class Notification(models.Model):
    user_email = models.EmailField()
    title = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

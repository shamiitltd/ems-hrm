from django.db import models

class Notification(models.Model):
    day = models.CharField(max_length=50)
    message = models.TextField()
    time = models.CharField(max_length=50)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
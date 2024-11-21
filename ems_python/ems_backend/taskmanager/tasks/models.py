from django.db import models

class Task(models.Model):
    time = models.TimeField(blank=True, null=True)  # Add time field
    

    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed')
    ], default='pending')

    def __str__(self):
        return self.title

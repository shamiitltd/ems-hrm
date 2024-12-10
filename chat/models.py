from django.db import models
from django.contrib.auth.models import User

class ChatRoom(models.Model):
    name = models.CharField(max_length=100, unique= True)
    created_at =models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class ChatMessage(models.Model):
    sender = models.ForeignKey(User, on_delete= models.CASCADE, related_name= 'sent_massages')
    room = models.ForeignKey(ChatRoom, on_delete= models.CASCADE, related_name='messages')
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        return f'{self.sender.username}: {self.message[:100]}' #Character limit to 100 Characters     
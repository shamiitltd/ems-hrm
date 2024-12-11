from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q

class Conversation(models.Model):
    
    #Represents a conversation between two users
  
    participants = models.ManyToManyField(User, related_name='conversations')
    created_at = models.DateTimeField(auto_now_add=True)
    last_message_at = models.DateTimeField(null=True, blank=True)

    def get_other_participant(self, current_user):

        #Returns the other participant in a one-on-one conversation
        return self.participants.exclude(id=current_user.id).first()

    @classmethod
    def get_or_create_conversation(cls, user1, user2):

        #Get or create a conversation between two users
        # Check if conversation already exists
        existing_conversation = cls.objects.filter(
            participants=user1
        ).filter(
            participants=user2
        ).first()

        if existing_conversation:
            return existing_conversation

        # Create new conversation
        new_conversation = cls.objects.create()
        new_conversation.participants.add(user1, user2)
        return new_conversation

class Message(models.Model):

    #Represents individual messages in a conversation
    conversation = models.ForeignKey(
        Conversation, 
        on_delete=models.CASCADE, 
        related_name='messages'
    )
    sender = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='sent_messages'
    )
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True, db_index=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['timestamp']
        indexes = [
            models.Index(fields=['conversation', 'timestamp']),
            models.Index(fields=['sender', 'timestamp'])
        ]

class UserStatus(models.Model):
    
    #Track user online/offline status for performance monitoring
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='status'
    )
    is_online = models.BooleanField(default=False)
    last_seen = models.DateTimeField(auto_now=True)

    def update_status(self, online=True):
        
        #Update user's online status
        self.is_online = online
        self.save(update_fields=['is_online', 'last_seen'])
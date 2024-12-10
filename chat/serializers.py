from rest_framework import serializers
from .models import ChatMessage, ChatRoom
from django.contrib.auth.models import User

class UserSerializer (serializers.ModelSerializer):
    class Meta :
        model = User
        fields = ['id', 'Username']

class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta :
        models = ChatRoom
        fields = '__all__'

class ChatMessageSerializer (serializers.ModelSerializer):
    sender = UserSerializer (read_only=True)

    class Meta:
        model = ChatMessage
        fields = ['id', 'sender', 'room', 'message', 'timestamp', 'is_read']
        read_only_fields = ['timestamp']
                        
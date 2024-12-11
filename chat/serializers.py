from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Conversation, Message, UserStatus

class UserSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'status']

    def get_status(self, obj):
        try:
            user_status = UserStatus.objects.get(user=obj)
            return {
                'is_online': user_status.is_online,
                'last_seen': user_status.last_seen
            }
        except UserStatus.DoesNotExist:
            return {
                'is_online': False,
                'last_seen': None
            }

class MessageSerializer(serializers.ModelSerializer):
    sender_username = serializers.CharField(source='sender.username', read_only=True)

    class Meta:
        model = Message
        fields = ['id', 'content', 'sender_username', 'timestamp', 'is_read']

class ConversationSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True, read_only=True)
    last_message = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = ['id', 'participants', 'created_at', 'last_message']

    def get_last_message(self, obj):
        last_message = obj.messages.order_by('-timestamp').first()
        return MessageSerializer(last_message).data if last_message else None
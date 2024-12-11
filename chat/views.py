from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Conversation, Message, UserStatus
from .serializers import ConversationSerializer, MessageSerializer, UserSerializer

class StartConversationView(generics.CreateAPIView):
    
    #Start a new conversation with another user
    permission_classes = [IsAuthenticated]
    serializer_class = ConversationSerializer

    def create(self, request, *args, **kwargs):
        other_user_id = request.data.get('user_id')
        
        try:
            other_user = User.objects.get(id=other_user_id)
        except User.DoesNotExist:
            return Response(
                {'error': 'User not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )

        conversation = Conversation.get_or_create_conversation(
            request.user, 
            other_user
        )

        serializer = self.get_serializer(conversation)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ConversationListView(generics.ListAPIView):
    
    #List all conversations for the current user
    permission_classes = [IsAuthenticated]
    serializer_class = ConversationSerializer

    def get_queryset(self):
        return Conversation.objects.filter(participants=self.request.user)

class MessageListView(generics.ListCreateAPIView):
    
    #List and create messages in a specific conversation
    permission_classes = [IsAuthenticated]
    serializer_class = MessageSerializer

    def get_queryset(self):
        conversation_id = self.kwargs['conversation_id']
        return Message.objects.filter(
            conversation_id=conversation_id,
            conversation__participants=self.request.user
        )

    def create(self, request, *args, **kwargs):
        conversation_id = self.kwargs['conversation_id']
        
        try:
            conversation = Conversation.objects.get(
                id=conversation_id, 
                participants=request.user
            )
        except Conversation.DoesNotExist:
            return Response(
                {'error': 'Conversation not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(data={
            'conversation': conversation.id,
            'sender': request.user.id,
            'content': request.data.get('content')
        })

        if serializer.is_valid():
            serializer.save(
                conversation=conversation, 
                sender=request.user
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserSearchView(generics.ListAPIView):
    
    #Search for users to start a conversation
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        return User.objects.filter(
            username__icontains=query
        ).exclude(
            id=self.request.user.id
        )[:10]  # Limit to 10 results
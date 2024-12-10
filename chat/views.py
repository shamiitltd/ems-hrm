from django.shortcuts import render
from rest_framework import viewsets, permissions
from.serializers import ChatMessageSerializer, ChatRoomSerializer

class ChatRoomViewSet(viewsets.modelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatRoomSerializer
    permissions_class = [permissions.IsAuthenticated]

class ChatMessageViewSet(viewsets.modelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer
    permissions_class = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

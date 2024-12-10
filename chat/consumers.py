import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.contrib.auth.models import User
from .models import ChatMessages, ChatRoom

class ChatConsumer (AsyncWebsocketConsumer): 
    async def connect (self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        #join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        
    async def disconnect(self, close_code):
        #leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.load(text_data)
        message = text_data_json['message']
        username = text_data_json['username']

        #save message to database
        await self.save_messages(username, message, self.room_group_name)

        #save message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'username': username
            }
        )
    async def chat_message (self, event):
        message = event ['message']
        username = event ['username']

        #send message to WebSocket
        await self.send( text_data = json.dumps({
            'message' : message,
            'username' : username
        }))

    @database_sync_to_async
    def save_message(self, username, message, room_name):
        user = User.objects.get(username=username)
        room, _ = ChatRoom.objects.get_or_create(name=room_name)
        ChatMessages.objects.create(
            sender=user,
            room=room,
            message=message
        )
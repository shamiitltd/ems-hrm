from django.urls import re_path
from .consumers import DirectMessageConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<conversation_id>\d+)/$', DirectMessageConsumer.as_asgi()),
]
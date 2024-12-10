from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChatMessageViewSet, ChatRoomViewSet

router = DefaultRouter()
router.register(r'rooms', ChatRoomViewSet)
router.register(r'message', ChatMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
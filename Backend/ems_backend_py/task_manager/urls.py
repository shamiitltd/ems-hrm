# task_manager/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notifications.views import TaskViewSet, NotificationViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # API routes
]

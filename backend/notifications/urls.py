from django.urls import path
from . import views

urlpatterns = [
    path('notifications/', views.NotificationList.as_view(), name='notification-list'),
    path('notifications/<int:pk>/mark_as_read/', views.MarkNotificationAsRead.as_view(), name='mark-as-read'),
]
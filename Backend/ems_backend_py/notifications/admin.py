# notifications/admin.py
from django.contrib import admin
from .models import Task, Notification

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_at', 'updated_at')

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('task', 'message', 'read', 'created_at')

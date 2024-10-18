from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'assigned_to', 'status', 'created_at', 'updated_at']

class AssignTaskSerializer(serializers.Serializer):
    task_id = serializers.IntegerField()
    user_id = serializers.IntegerField()

    def validate(self, data):
        try:
            task = Task.objects.get(id=data['task_id'])
            user = User.objects.get(id=data['user_id'])
        except Task.DoesNotExist:
            raise serializers.ValidationError("Task not found.")
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found.")
        return data

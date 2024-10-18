from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from django.contrib.auth.models import User
from .serializers import AssignTaskSerializer, TaskSerializer
from django.db import transaction

class AssignTaskView(APIView):
    @transaction.atomic
    def post(self, request):
        serializer = AssignTaskSerializer(data=request.data)

        if serializer.is_valid():
            task_id = serializer.validated_data['task_id']
            user_id = serializer.validated_data['user_id']

            try:
                task = Task.objects.select_for_update().get(id=task_id)
                user = User.objects.get(id=user_id)

                if task.assigned_to:
                    return Response(
                        {"detail": "Task is already assigned."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                task.assigned_to = user
                task.save()

                return Response(
                    {"detail": "Task assigned successfully.", "task": TaskSerializer(task).data},
                    status=status.HTTP_200_OK
                )

            except Task.DoesNotExist:
                return Response(
                    {"detail": "Task not found."},
                    status=status.HTTP_404_NOT_FOUND
                )
            except User.DoesNotExist:
                return Response(
                    {"detail": "User not found."},
                    status=status.HTTP_404_NOT_FOUND
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

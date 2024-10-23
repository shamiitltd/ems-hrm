# notifications/tests.py
from django.test import TestCase
from rest_framework.test import APIClient
from .models import Task, Notification

class TaskAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task = Task.objects.create(
            title='Test Task',
            description='A test task description.',
            status='Pending'
        )

    def test_create_task(self):
        response = self.client.post('/api/tasks/', {
            'title': 'New Task',
            'description': 'A new task description.',
            'status': 'Pending'
        })
        self.assertEqual(response.status_code, 201)

    def test_change_task_status(self):
        response = self.client.post(f'/api/tasks/{self.task.id}/change_status/', {
            'status': 'Completed'
        })
        self.assertEqual(response.status_code, 200)
        self.task.refresh_from_db()
        self.assertEqual(self.task.status, 'Completed')

class NotificationAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task = Task.objects.create(
            title='Task with Notification',
            description='This task will have a notification.',
            status='Pending'
        )
        self.notification = Notification.objects.create(
            task=self.task,
            message='Task created.'
        )

    def test_get_notifications(self):
        response = self.client.get('/api/notifications/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

    def test_mark_notification_as_read(self):
        response = self.client.post(f'/api/notifications/{self.notification.id}/mark_as_read/')
        self.assertEqual(response.status_code, 200)
        self.notification.refresh_from_db()
        self.assertTrue(self.notification.read)

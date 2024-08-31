from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import Notification

class NotificationAPITests(APITestCase):
    
    def setUp(self):
        self.notification1 = Notification.objects.create(
            day='Monday', message='Test message 1', time='10:00 AM', read=False
        )
        self.notification2 = Notification.objects.create(
            day='Tuesday', message='Test message 2', time='11:00 AM', read=True
        )

    def test_get_notifications(self):
        url = reverse('notification-list')  # Use the name defined in your URLs
        response = self.client.get(url)
        notifications = Notification.objects.all()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), notifications.count())
        
    def test_mark_notification_as_read(self):
        url = reverse('mark-as-read', args=[self.notification1.id])
        response = self.client.patch(url)
        self.notification1.refresh_from_db()
        self.assertTrue(self.notification1.read)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
from django.urls import path
from .views import fetch_emails

urlpatterns = [
    path('fetch-emails/', fetch_emails, name='fetch_emails'),
]


# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/notifications/', include('notifications.urls')),  # Include notifications URLs
    path('api/accounts/', include('accounts.urls')),            # Include accounts URLs
]
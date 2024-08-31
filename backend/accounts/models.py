
# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class CustomUser(AbstractUser):
#     username = models.CharField(max_length=100)
#     password = models.TextField()
    
# # class Login(models.Model):
# #     username = models.CharField(max_length=100)
# #     password = models.TextField()

#     def __str__(self):
#         return self.username

# accounts/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    # phone_number = models.CharField(max_length=15, blank=True, null=True)
    # date_of_birth = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.username
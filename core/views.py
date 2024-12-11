from django.shortcuts import render
from rest_framework_simplejwt import TokenObtainPairView
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    permissions_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password:
            return Response(
            {"error": "Username and password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

        try:
            user = User.objects.create_user(
                username=username,
                password=password,
                eamil=email
            )

            #generate Tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                'user_id': user.id,
                'username' : user.username,
                'refresh' : str(refresh),
                'access' : str(refresh.access_token)
            },status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
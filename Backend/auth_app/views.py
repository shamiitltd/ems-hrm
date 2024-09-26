   from django.contrib.auth import authenticate, login, logout
   from django.http import JsonResponse
   from rest_framework.decorators import api_view

   @api_view(['POST'])
   def user_login(request):
       """Handle user login and return a success message or error."""
       username = request.data.get('username')
       password = request.data.get('password')
       user = authenticate(request, username=username, password=password)

       if user is not None:
           login(request, user)
           return JsonResponse({'message': 'Login successful!'})
       else:
           return JsonResponse({'error': 'Invalid credentials'}, status=400)

   @api_view(['POST'])
   def user_logout(request):
       """Log the user out and terminate the session."""
       logout(request)
       return JsonResponse({'message': 'Logout successful!'})

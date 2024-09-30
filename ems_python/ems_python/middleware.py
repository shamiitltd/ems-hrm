import logging
from django.http import JsonResponse

logger = logging.getLogger(__name__)

class GlobalExceptionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        try:
            response = self.get_response(request)
        except Exception as ex:
            logger.error(f"An error occurred: {ex}", exc_info=True)
            return JsonResponse({'error': 'An unexpected error occurred.'}, status=500)
        return response

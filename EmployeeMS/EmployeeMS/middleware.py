# myapp/middleware.py

import logging
from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

logger = logging.getLogger(__name__)

class GlobalErrorHandlingMiddleware(MiddlewareMixin):
    def process_exception(self, request, exception):
        # Log the exception with traceback
        logger.error(f"Error occurred: {str(exception)}", exc_info=True)

        # Return a generic JSON response to the client
        response_data = {
            "error": "An unexpected error occurred. Please try again later."
        }
        return JsonResponse(response_data, status=500)




from django.http import HttpResponse

def test_error(request):
    raise ValueError("This is a test error for global error handling.")

from django.utils.timezone import now
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def hello_world(request):
    """
    A simple API view that returns a JSON response.
    """
    return Response({"message": "Hello from Django!"})

@api_view(['GET'])
def current_datetime(request):
    """
    API view that returns the current date and time.
    """
    current_time = now()
    return Response({"current_datetime": current_time.strftime("%Y-%m-%d %H:%M:%S")})

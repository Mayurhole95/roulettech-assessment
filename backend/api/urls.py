from django.urls import path
from .views import hello_world, current_datetime

urlpatterns = [
    path('hello/', hello_world, name='hello-world'),
    path('datetime/', current_datetime, name='current-datetime'),
]
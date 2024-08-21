from django.urls import path
from .views import hello_world, current_datetime, indian_recipes, match_ingredients

urlpatterns = [
    path('hello/', hello_world, name='hello-world'),
    path('datetime/', current_datetime, name='current-datetime'),
    path('indian-recipes/', indian_recipes, name='indian-recipes'),
    path('match-ingredients/', match_ingredients, name='match-ingredients'),
]
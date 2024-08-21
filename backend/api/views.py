from django.utils.timezone import now
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def hello_world(request):
    """
    A simple API view that returns a JSON response.
    """
    return Response({"message": "Hello, how are you doing today?!"})

@api_view(['GET'])
def current_datetime(request):
    """
    API view that returns the current date and time.
    """
    current_time = now()
    return Response({"current_datetime": current_time.strftime("%Y-%m-%d %H:%M:%S")})

@api_view(['GET'])
def indian_recipes(request):
    # Mock data for Indian recipes
    recipes = [
        {"name": "Butter Chicken", "ingredients": ["chicken", "butter", "spices"], "tools": ["stove", "pan"]},
        {"name": "Paneer Tikka", "ingredients": ["paneer", "yogurt", "spices"], "tools": ["oven", "grill"]},
        {"name": "Aloo Gobi", "ingredients": ["potato", "cauliflower", "spices"], "tools": ["stove", "pan"]},
        {"name": "Dal Tadka", "ingredients": ["lentils", "spices", "ghee"], "tools": ["stove", "pot"]},
        # Add more recipes as needed
    ]
    return Response({"recipes": recipes})

@api_view(['POST'])
def match_ingredients(request):
    print("Request received")
    print("Request data:", request.data)
    
    user_ingredients = request.data.get("ingredients", [])
    print("User ingredients:", user_ingredients)
    
    # Mock data for recipes, including Butter Chicken
    recipes = [
        {"name": "Butter Chicken", "ingredients": ["chicken", "butter", "spices"], "tools": ["stove", "pan"]},
        {"name": "Aloo Gobi", "ingredients": ["potato", "cauliflower", "spices"], "tools": ["stove", "pan"]},
        {"name": "Dal Tadka", "ingredients": ["lentils", "spices", "ghee"], "tools": ["stove", "pot"]},
        {"name": "Chole Bhature", "ingredients": ["chickpeas", "flour", "spices"], "tools": ["stove", "pan"]},
        {"name": "Palak Paneer", "ingredients": ["spinach", "paneer", "spices"], "tools": ["stove", "pan"]},
    ]
    
    matched_recipes = [recipe for recipe in recipes if any(item in recipe["ingredients"] for item in user_ingredients)]
    print("Matched recipes:", matched_recipes)
    
    return Response({"matched_recipes": matched_recipes})

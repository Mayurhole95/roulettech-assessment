# Kangacook Project

## Overview
Kangacook is a web application that helps users find authentic Indian recipes based on the ingredients they have on hand. It bridges the gap between traditional culinary heritage and modern digital needs by providing recipe matching and ingredient utilization features.

## Features
- **Ingredient Matcher**: Match ingredients to recipes based on what you have available.
- **Indian Recipes**: Browse a curated list of authentic Indian recipes.

## Installation

### Prerequisites
- Node.js and npm (for the React frontend)
- Python and Django (for the backend)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/Kangacook.git
   cd Kangacook
   
2: Install Frontend dependencies:
cd my-website
npm install


3: Start the React frontend:
npm start

4. Install backend dependencies:
cd ../backend
python -m venv djangoenv
djangoenv\Scripts\activate  # On Windows
pip install -r requirements.txt

5. Start the Django backend:
python manage.py runserver

API Endpoints
GET /api/hello/: Returns a greeting message.
GET /api/datetime/: Returns the current date and time.
GET /api/indian-recipes/: Returns the Indian recipes.
POST /api/match-ingredients/: Matches user-provided ingredients with available recipes.

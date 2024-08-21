import React, { useState } from 'react';

function IngredientMatcher() {
    const [ingredients, setIngredients] = useState('');
    const [matchedRecipes, setMatchedRecipes] = useState([]);

    const handleMatch = () => {
        fetch('http://localhost:8000/api/match-ingredients/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: ingredients.split(',').map(item => item.trim()) }), // Trim to remove extra spaces
        })
        .then(response => response.json())
        .then(data => setMatchedRecipes(data.matched_recipes))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Ingredient Matcher</h1>
            <div className="mb-3">
                <label htmlFor="ingredients" className="form-label">Enter ingredients separated by commas</label>
                <input
                    type="text"
                    className="form-control"
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </div>
            <button onClick={handleMatch} className="btn btn-primary">Match Recipes</button>
            <div className="mt-4">
                <h2>Matched Recipes</h2>
                <ul className="list-group">
                    {matchedRecipes.map((recipe, index) => (
                        <li key={index} className="list-group-item">
                            <h5>{recipe.name}</h5>
                            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                            <p><strong>Tools:</strong> {recipe.tools.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default IngredientMatcher;

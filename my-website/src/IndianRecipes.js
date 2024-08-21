import React from 'react';

function IndianRecipes() {
    const recipes = [
        { name: 'Butter Chicken', ingredients: ['chicken', 'butter', 'spices'], tools: ['stove', 'pan'] },
        { name: 'Paneer Tikka', ingredients: ['paneer', 'yogurt', 'spices'], tools: ['oven', 'grill'] },
        { name: 'Aloo Gobi', ingredients: ['potato', 'cauliflower', 'spices'], tools: ['stove', 'pan'] },
        { name: 'Dal Tadka', ingredients: ['lentils', 'spices', 'ghee'], tools: ['stove', 'pot'] },
    ];

    return (
        <div>
            <h1>Indian Recipes</h1>
            <div className="row">
                {recipes.map((recipe, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                                <p className="card-text"><strong>Tools:</strong> {recipe.tools.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IndianRecipes;

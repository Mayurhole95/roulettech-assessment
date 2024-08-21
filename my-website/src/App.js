import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MyComponent from './MyComponent';
import IndianRecipes from './IndianRecipes';
import IngredientMatcher from './IngredientMatcher';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Kangacook</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/indian-recipes">Indian Recipes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ingredient-matcher">Ingredient Matcher</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<MyComponent />} />
                        <Route path="/indian-recipes" element={<IndianRecipes />} />
                        <Route path="/ingredient-matcher" element={<IngredientMatcher />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

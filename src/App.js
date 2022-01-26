import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home.js";
import Recipes from "./routes/recipes.js"
import Recipe from "./routes/recipe.js"

function MainNav() {
  return (
    <nav>
        <img src='' alt='menu icon'></img>
        <ul>
          <li><img src='' alt='portfolio'></img></li>
          <li><img src='' alt='linkedin'></img></li>
          <li><img src='' alt='github'></img></li>
        </ul>
      </nav>
  );
}

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

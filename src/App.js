import './App.css';
import React from 'react';
import allRecipes from './recipes.js';

const allRecipes_keys = Object.keys(allRecipes);

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>My Recipes</h1>
      </div>
    );
  }
}

function RecipeItem(props) {
  return (
    <li>
      <p className="text-gray-500">{props.recipe.name}</p>
    </li>
  );
}

function RecipeList(props) {
  const listItems = props.recipes.map((recipe) =>
    <RecipeItem key={recipe.name} recipe={recipe}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function RecipeSections() {
  const listItems = allRecipes_keys.map((recipeSection) =>
    <div key={recipeSection}>
      <h2 className="pt-3">{recipeSection}</h2>
      <RecipeList recipes={allRecipes[recipeSection]} />
    </div>
  );
  return (
      <div>{listItems}</div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <RecipeSections />
    </div>
  );
}

export default App;

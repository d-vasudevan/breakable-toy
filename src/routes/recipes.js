import React from 'react';
import { Link, Outlet } from "react-router-dom";
import allRecipes from './../recipes.js';

const allRecipes_keys = Object.keys(allRecipes);

function Header() {
    return (
      <div>
        <h1>Recipes</h1>
      </div>
    );
}

function RecipeItem(props) {
  return (
    <li>
        <Link
            to={`/recipes/${props.recipe.name}`}
            key={props.recipe.name}
          >
            {props.recipe.name}
        </Link>
      {/* <p className="text-gray-500">{props.recipe.name}</p> */}
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

function Recipes() {
    return (
      <>
        <main>
          <Header />
          <RecipeSections />
          <Outlet />
        </main>
      </>
    );
  }

  export default Recipes;
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getRecipe } from '../recipes';

function IngredientItem({ ingredients }) {
  return ingredients.map((ingredient) => (
    <li
      key={ingredient.ingredient_name}
      className="justify-self-center text-center"
    >
      <img
        src={ingredient.ingredient_img}
        alt={ingredient.ingredient_name}
        className="object-cover rounded-full w-20 h-20 md:w-24 md:h-24 mb-2"
      ></img>
      <div>{ingredient.ingredient_name}</div>
      <div>{ingredient.ingredient_quantity}</div>
    </li>
  ));
}

function RecipeSteps({ instructions }) {
  return instructions.map((instructions) => (
    <li key={instructions}>{instructions}</li>
  ));
}

function KeyIngrdientList({ keyIngredients }) {
  return keyIngredients.map((ingredient) => (
    <span key={ingredient}>{ingredient}, </span>
  ));
}

function Recipe() {
  let params = useParams();
  let recipe = getRecipe(params.recipeId);
  return (
    <>
      <main className="w-full px-8 md:px-16 lg:px-32 bg-bg min-h-screen">
        <h1 className="pt-16 pb-10">My Recipes</h1>
        <nav className="mb-5">
          <Link to="/recipes">Go Back</Link>
        </nav>
        <div className="grid md:grid-rows-1 md:grid-cols-3 w-full gap-x-16">
          <div className="md:col-span-1">
            <div className="mb-5">
              <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"></img>
            </div>
            <h2 className="mb-5">{recipe.name}</h2>
            <h3 className="mb-2">Key Ingredients</h3>
            <div>
              <KeyIngrdientList keyIngredients={recipe.key_ingredients} />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="mt-5 md:mt-0 mb-10">
              <h3 className="mb-3">Ingredients</h3>
              <ul className="grid grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-5">
                <IngredientItem
                  ingredients={recipe.ingredients}
                ></IngredientItem>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="mb-2">Steps</h3>
              <ol className="list-disc list-inside">
                <RecipeSteps instructions={recipe.instructions}></RecipeSteps>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Recipe;

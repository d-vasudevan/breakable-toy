import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getRecipe } from '../recipes';

function IngredientItem(props) {
  const listItems = props.ingredients.map(ingredient => 
    <li key={ingredient.ingredient_name} className='justify-self-center text-center'>
      <img src={ingredient.ingredient_img} alt={ingredient.ingredient_name} className='object-cover rounded-full w-24 h-24 mb-2'></img>
      <div>{ingredient.ingredient_name}</div>
      <div>{ingredient.ingredient_quantity}</div>
    </li>);
  return listItems;
}

function RecipeSteps(props) {
  const listItems = props.instructions.map(instructions => <li key={instructions}>{instructions}</li>);
  return listItems;
}

function KeyIngrdientList(props) {
  const items = props.keyIngredients.map(ingredient => <span key={ingredient}>{ingredient}, </span>);
  return items;
}

function Recipe() {
    let params = useParams();
    let recipe = getRecipe(params.recipeId);
    return (
      <>
        <main className='w-full px-32 bg-bg'>
          <h1 className='pt-16 pb-10'>My Recipes</h1>
          <nav className='mb-5'>
            <Link to="/recipes">Go Back</Link>
          </nav> 
            <div className='grid grid-rows-1 grid-cols-3 w-full gap-x-16'>
              <div className='col-span-1'>
                <div className='mb-5'>
                  <img src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg'></img>
                </div>
                <h2 className='mb-5'>{recipe.name}</h2>
                <h3 className='mb-2'>Key Ingredients</h3>
                <div>
                  <KeyIngrdientList keyIngredients={recipe.key_ingredients}/>
                </div>
              </div>
              <div className='col-span-2'>
                <div className='mb-10'>
                  <h3 className='mb-3'>Ingredients</h3>
                  <ul className='grid lg:grid-cols-5 gap-x-10 gap-y-5'><IngredientItem ingredients={recipe.ingredients}></IngredientItem></ul>
                </div>
                <div>
                  <h3 className='mb-2'>Steps</h3>
                  <ol className='list-disc list-inside'><RecipeSteps instructions={recipe.instructions}></RecipeSteps></ol>
                </div>
              </div>
            </div>
        </main>
        
      </>
    );
  }

  export default Recipe;
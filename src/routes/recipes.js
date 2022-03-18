import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import allRecipes from './../recipes.js';

const allRecipes_keys = Object.keys(allRecipes);

function SectionLink(props) {
    return (
        <HashLink
            smooth to={`/recipes/#${props.recipeSection}`}
        >
            <p className='caption'>{props.recipeSection}</p>
        </HashLink>
    );
}

function SectionMenu() {
    const sections = allRecipes_keys.map((recipeSection) =>
        <SectionLink key={recipeSection} recipeSection={recipeSection} />
    );
    return (
        <nav className='mx-4 md:mx-8 lg:mx-16 py-2 flex space-x-8 border-t border-b justify-center overflow-x-auto'>{sections}</nav>
    );
}

function Header() {
    return (
      <div>
        <h1 className='pt-16 pb-10'>My Recipes</h1>
        <SectionMenu />
      </div>
    );
}

function RecipeItem(props) {
  return (
    <li className='md:w-1/2 lg:w-1/3 shrink p-3'>
        <Link
            to={`/recipes/${props.recipeId}`}
            state= {{
                name: "props.recipe",
                somevalue: true
              }}
            key={props.recipe.name}
          >
            <img src={props.recipe.img_url} className='object-cover border h-60 w-full' alt='recipe'></img>
            <p className='caption border-b border-l border-r p-2'>{props.recipe.name}</p>
        </Link>
    </li>
  );
}

function RecipeList(props) {
  let recipeSection_keys = Object.keys(props.recipes);
  const listItems = recipeSection_keys.map((recipe) => 
    <RecipeItem key={recipe} recipeId={recipe} recipe={props.recipes[recipe]}/>
  );
  return (
    <ul className='flex flex-wrap'>{listItems}</ul>
  );
}

function RecipeSections() {
  const listItems = allRecipes_keys.map((recipeSection) =>
    <div key={recipeSection} id={recipeSection} className='mx-4 md:mx-8 lg:mx-16 mt-10'>
        <div className='px-3 border-gray-400 border-b'>
            <h2 className="pt-3 pb-2">{recipeSection}</h2>
        </div>
        <div className='pt-2'>
            <RecipeList recipes={allRecipes[recipeSection]} />
        </div>
    </div>
  );
  return (
      <div>{listItems}</div>
  );
}

function Recipes() {
    return (
      <>
        <main className='overflow-hidden w-screen bg-bg'>
            <div className='overflow-y-auto h-screen'>
                <Header />
                <RecipeSections />
                <Outlet />
            </div>
        </main>
      </>
    );
  }

  export default Recipes;
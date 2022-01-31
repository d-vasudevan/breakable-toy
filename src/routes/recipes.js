import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import allRecipes from './../recipes.js';

const allRecipes_keys = Object.keys(allRecipes);

function SectionLink(props) {
    //var sectionLink = '#' + {props.recipeSection};
    return (
        <HashLink
            smooth to={`/recipes/#${props.recipeSection}`}
            //key={`#${props.recipeSection}`}
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
        <nav>{sections}</nav>
    );
}

function Header() {
    return (
      <div>
        <h1 className='pt-16'>My Recipes</h1>
        <SectionMenu />
      </div>
    );
}

function RecipeItem(props) {
  return (
    <li className='w-1/3 shrink p-3'>
        <Link
            to={`/recipes/${props.recipe.name}`}
            key={props.recipe.name}
          >
            <div className='bg-gray-400 h-60'></div>
            <p className='caption'>{props.recipe.name}</p>
        </Link>
    </li>
  );
}

function RecipeList(props) {
  const listItems = props.recipes.map((recipe) =>
    <RecipeItem key={recipe.name} recipe={recipe}/>
  );
  return (
    <ul className='flex flex-wrap'>{listItems}</ul>
  );
}

function RecipeSections() {
  const listItems = allRecipes_keys.map((recipeSection) =>
    <div key={recipeSection} id={recipeSection} className='mx-16 mt-10'>
        <div className='px-3 border-gray-400 border-b'>
            <h2 className="pt-3 pl-3">{recipeSection}</h2>
        </div>
        <div className='px-3 pt-2'>
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
        <main className='overflow-hidden w-screen'>
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
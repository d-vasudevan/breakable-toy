import React from 'react';
import { Routes, Route} from "react-router-dom";

import Home from "./Home.js";
import Recipes from "./routes/recipes.js";
import Recipe from "./routes/recipe.js";

//uses svgr under the hood to make it possible to transform and import SVG as a react component
import {ReactComponent as MenuIcon} from './images/menu.svg';
import {ReactComponent as WebIcon} from './images/globe.svg';
import {ReactComponent as LinkedinIcon} from './images/linkedin.svg';
import {ReactComponent as GithubIcon} from './images/github.svg';

class Icons extends React.Component {
  components = {
    web: WebIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
    menu: MenuIcon
  };

  render() {
      const IconComponent = this.components[this.props.componentName];
      return(
        <IconComponent className='w-6 h-6'/>
      );
  }
}

function SMLinks(props) {
  return (
    <li className='pt-4 pb-4'>
      <a href={props.link} target='_blank'><Icons componentName={props.icon}/></a>
    </li>
  );
}

function MainNav() {
  return (
    <nav className='flex flex-col w-20 justify-between items-center h-screen pt-5 pb-10 border-r border-black'>
      <Icons componentName='menu'/>
      <ul>
        <SMLinks link='https://www.google.com/' icon='web'/>
        <SMLinks link='https://www.google.com/' icon='github'/>
        <SMLinks link='https://www.google.com/' icon='linkedin'/>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App flex">
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

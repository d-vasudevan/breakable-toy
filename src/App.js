import React from 'react';
import { Routes, Route, Link} from "react-router-dom";

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
      <a href={props.link} target='_blank' rel="noreferrer" ><Icons componentName={props.icon}/></a>
    </li>
  );
}

function SMLinkNav(props) {
  let classes = "";
  if(props.menunav==='true') {//checking if the sm links are in the main nav or in the slide in nav
    classes+= "lg:hidden"; //hide sm links in slide in when not a mobile screen
  }
  else {
    classes+= "hidden lg:block"; //hide sm links for slide in mobile screens and show on larger ones.
  }
  return (
    <ul className={classes}>
      <SMLinks link='https://www.google.com/' icon='web'/>
      <SMLinks link='https://www.google.com/' icon='github'/>
      <SMLinks link='https://www.google.com/' icon='linkedin'/>
    </ul>
  );
}

function SlideInMenuLinks(props) {
  let link = "/" + props.link;
    return (
      <li>
        <Link to={link} onClick={slideInMenu}>{props.link}</Link>
      </li>
    );
}

function SlideInMenuNav(props) {
    return (
      <nav id={props.id} className='fixed top-0 left-0 h-screen w-full md:w-96 lg:w-60 lg:ml-16 bg-white border-black md:border-r hidden bg-bg flex flex-col space-y-8 justify-center items-center'>
        <ul className='font-cormorant text-2xl font-bold tracking-wide space-y-8'>
          <SlideInMenuLinks link="home"/>
          <SlideInMenuLinks link="recipes"/>
        </ul>
        <SMLinkNav menunav='true'/>
      </nav>
    );
}

function slideInMenu() {
  document.getElementById("slideinmenu").classList.toggle("hidden");
  //change menu icon
}

function MainNav() {
  return (
    <nav className='fixed top-0 left-5 md:top-3 md:left-8 lg:top-0 lg:left-0 lg:relative flex flex-col lg:w-20 justify-between items-center lg:h-screen pt-5 pb-10 lg:border-r lg:border-black lg:bg-bg'>
      <button onClick={slideInMenu} className='z-10'><Icons componentName='menu'/></button>
      <SlideInMenuNav id="slideinmenu"/>
      <SMLinkNav  menunav='false'/>
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

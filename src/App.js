import './App.css';
import React from 'react';
import recipes from './recipes.js';

console.log(recipes);

class Test extends React.Component {
  render () {
    return (
      <div>
        <p class="text-gray-500">{recipes.name}</p>
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>My Recipes</h1>
        <div>
          <p>search feature</p>
          <p>filter feature</p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Header />
      <Test />
    </div>
  );
}

export default App;

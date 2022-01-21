import './App.css';
import React from 'react';
import recipes from './recipes.js';

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>My Recipes</h1>
      </div>
    );
  }
}

function NumberList(props) {
  const listItems = recipes.map((recipe) =>
    <li>{recipe.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// class Test extends React.Component {
//   render () {
//     return (
//       <div>
//         <p class="text-gray-500">{recipes[0].name}</p>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div>
      <Header />
      <NumberList />
    </div>
  );
}

export default App;

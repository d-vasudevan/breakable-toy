import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Recipe() {
    let params = useParams();
    return (
      <>
        <main>
          <h2>Recipe: {params.recipeId}</h2>
        </main>
        <nav>
          <Link to="/recipes">Go Back</Link>
        </nav>
      </>
    );
  }

  export default Recipe;
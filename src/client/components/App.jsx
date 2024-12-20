import React from 'react';
import Hero from './Hero';
import IngredientList from './Ingredients';
import RecipeList from './RecipeList';
import NavBar from './NavBars';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log('check fetch request for Recipe');
      });
  }, []);

  return (
    <div>
      <Hero />
      <IngredientList />
      <RecipeList />
    </div>
  );
};



export default App;

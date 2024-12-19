import React from 'react';
import Hero from './Hero.tsx';
import IngredientList from './Ingredients.jsx';
import RecipeList from './RecipeList.jsx';
import NavBar from './NavBar.jsx';
import { useEffect } from 'react';

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

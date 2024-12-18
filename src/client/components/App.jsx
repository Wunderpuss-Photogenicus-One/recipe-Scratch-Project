import React from 'react';
import Hero from './Hero.tsx';
import IngredientList from './Ingredients.jsx';
import RecipeList from './RecipeList.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <IngredientList />
      <RecipeList />
    </div>
  );
};

export default App;

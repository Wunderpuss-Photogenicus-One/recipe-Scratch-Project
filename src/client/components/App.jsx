import React from 'react';
import Hero from './Hero.tsx';
import IngredientList from './Ingredients.jsx';
import NavBar from './NavBar.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [ingredientList, setIngredientList] = useState([]);

  //function which makes a fetch request from the beginning to grab all of the ingredients for user
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setIngredientList(data);
      })
      .catch((err) => {
        console.log('check fetch request for Recipe');
      });
  }, []);

  return (
    <div>
      <Hero />
      <IngredientList ingredientList={ingredientList} />
    </div>
  );
};

export default App;

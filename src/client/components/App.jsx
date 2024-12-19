import React from 'react';
import Hero from './Hero.tsx';
import IngredientList from './Ingredients.jsx';
import RecipeList from './RecipeList.jsx';
import NavBar from './NavBar.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // const list = data.filter((element) => {
        //   console.log(element.ingredient_name);
        //   return element.ingredient_name;
        // });
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
      <RecipeList />
    </div>
  );
};

export default App;

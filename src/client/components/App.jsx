import React from 'react';
import Hero from './Hero.jsx';
import IngredientList from './Ingredients.jsx';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [showIngredients, setShowIngredients] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === '/') {
      setShowIngredients(false);
    }
  }, [location]);

  const handleGetStarted = () => {
    setShowIngredients(true);
  };

  return (
    <div>
      {/* <Hero />
      <IngredientList ingredientList={ingredientList} /> */}
      {!showIngredients ? (
        <Hero handleGetStarted={handleGetStarted} />
      ) : (
        <IngredientList ingredientList={ingredientList} />
      )}
    </div>
  );
};

export default App;

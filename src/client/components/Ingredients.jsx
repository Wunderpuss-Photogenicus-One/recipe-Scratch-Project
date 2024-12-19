import React, { useEffect } from 'react';
import { useState } from 'react';
import Recipes from './Recipes.jsx';

const IngredientList = (props) => {
  const { ingredientList } = props; //destructuring props object, grabbing the ingredient list fetched results

  // const fakeIngredients = ['apple', 'banana', 'milk']; // this will be deleted just a test
  const [checked, setChecked] = useState({}); //keeps track of all checked boxes
  const [ingredientChosen, setIngredientChosen] = useState(new Set());
  const [recipeList, setRecipeList] = useState(null);

  // console.log('ingredientList:', ingredientList); //just testing to see if ingredient list prints
  let listOfIngredientsChosen = [...ingredientChosen];

  //adds to the stateObject the ingredients that are checked off
  const handleChange = (event) => {
    const { name, checked } = event.target;
    // console.log('name of item checked:', name);
    // console.log(checked);
    setChecked((previous) => ({
      ...previous,
      [name]: checked,
    }));
  };

  const mockRecipeList = [
    {
      recipe_name: 'Spaghetti Carbonara',
      instructions:
        'Cook pasta al dente, reserving water.\nCook guanciale (or substitute) until crispy.\nWhisk eggs, yolks, cheeses, and pepper.\nCombine pasta with guanciale fat.\nToss pasta with egg mixture, adding pasta water as needed.\nServe immediately with extra cheese.',
    },
  ];
  //this function is used for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //fetch request sent to server to fetch recipes based on ingredients
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...ingredientChosen]), //sending ingredients chosen to the backend
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        console.error('Frontend to backend communication breakdown:', err)
      );
  };

  // console.log(checked);
  useEffect(() => {
    const ingredientSet = new Set();
    for (const [key, value] of Object.entries(checked)) {
      if (value) ingredientSet.add(key);
      else ingredientSet.delete(key);
    }
    console.log(ingredientSet);
    setIngredientChosen(ingredientSet);
  }, [checked]);

  return (
    <div>
      <h3>Select from these ingredients:</h3>
      <form method='POST' onSubmit={handleSubmit}>
        <div>
          {ingredientList.map((element) => {
            return (
              <label key={element.ingredient_id} htmlFor={element}>
                {/* htmlFor is what we need in react to connect the label to the input */}
                <input
                  id={element.ingredient_id}
                  name={element.ingredient_name}
                  type='checkbox'
                  checked={checked[element.ingredient_name] || false}
                  onChange={handleChange}
                  value={element.ingredient_name}
                />
                {element.ingredient_name}
              </label>
            );
          })}
        </div>
        <button type='submit'>Submit Ingredients and Find Recipe</button>
        {/* maybe replace the above button with the button below? (tap to generate recipe) */}
      </form>

      <h5>
        Selected ingredients:
        {listOfIngredientsChosen.length > 0 &&
          listOfIngredientsChosen.map((element) => {
            return <li key={element}>{element}</li>;
          })}
      </h5>
      {/* <button>Tap to generate recipe!</button> */}
      <Recipes recipeList={recipeList} />
    </div>
  );
};

export default IngredientList;

//not needed anymore, for submit button, form has own submission event handler
// const handleClick = () => {
//   fetch('/api')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log('check fetch request for Recipe');
//     });
// };

//this form is to be used onhandlesubmit
// const handleIngredientListClick = () => {
//   fetch('/api/recipes', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(fakeIngredients),
//   }).catch(() => {
//     (err) =>
//       console.error('Frontend to backend communication breakdown:', err);
//   });
// };

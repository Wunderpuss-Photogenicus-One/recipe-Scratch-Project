import React, { useEffect } from 'react';
import { useState } from 'react';
import Recipes from './Recipes.jsx';

const IngredientList = (props) => {
  const { ingredientList } = props; //destructuring props object, grabbing the ingredient list fetched results

  // const fakeIngredients = ['apple', 'banana', 'milk']; // this will be deleted just a test
  const [checked, setChecked] = useState({}); //keeps track of all checked boxes
  const [ingredientChosen, setIngredientChosen] = useState(new Set()); //the set that will hold the ingredients that are selected
  const [recipeList, setRecipeList] = useState(null);

  // console.log('ingredientList:', ingredientList); //just testing to see if ingredient list prints
  let listOfIngredientsChosen = [...ingredientChosen];

  //adds to the stateObject the ingredients that are checked off
  const handleChange = (event) => {
    const { name, checked } = event.target; //destructures the name and checked properties from element that was checked
    setChecked((previous) => ({
      ...previous, //grabs previous state
      [name]: checked, //updates only the current box that changes
    }));
  };

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
      .then((res) => res.json())
      .then((data) => {
        setRecipeList(data);
      })
      .catch((err) =>
        console.error('Frontend to backend communication breakdown:', err)
      );
  };

  //adds ingredients to a set if true, otherwise takes them out
  useEffect(() => {
    const ingredientSet = new Set();
    for (const [key, value] of Object.entries(checked)) {
      if (value)
        ingredientSet.add(key); //if value is true(checked off) then add
      else ingredientSet.delete(key); //otherwise delete ingredient from the set
    }
    setIngredientChosen(ingredientSet); //sets the ingredients chosen to the state
  }, [checked]); //only updates when checked box is changed

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

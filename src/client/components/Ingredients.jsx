import React, { useEffect } from 'react';
import { useState } from 'react';

const IngredientList = (props) => {
  const { ingredientList } = props; //destructuring props object, grabbing the ingredient list fetched results

  const fakeIngredients = ['apple', 'banana', 'milk']; // this will be deleted just a test
  const [checked, setChecked] = useState({});
  const [ingredientChosen, setIngredientChosen] = useState(new Set());
  // console.log('ingredientList:', ingredientList); //just testing to see if ingredient list prints
  let listOfIngredientsChosen = [...ingredientChosen];
  console.log('listOfIngredientsChosen:', listOfIngredientsChosen);
  //adds to the object 'checked' the boxes that are checked off
  const handleChange = (event) => {
    const { name, checked } = event.target;
    console.log('name of item checked:', name);
    console.log(checked);

    setChecked((previous) => ({
      ...previous,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...ingredientChosen]),
    }).catch((err) =>
      console.error('Frontend to backend communication breakdown:', err)
    );
  };

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
      <h3>Ingredient List will be shown here</h3>
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
        <button type='submit'>Submit</button>
        {/* maybe replace the above button with the button below? (tap to generate recipe) */}
      </form>

      <h5>
        This container might populate automatically as ingredients are selected
        {listOfIngredientsChosen.length > 0 &&
          listOfIngredientsChosen.map((element) => {
            return <li>{element}</li>;
          })}
      </h5>
      <button>Tap to generate recipe!</button>
    </div>
  );
};

export default IngredientList;

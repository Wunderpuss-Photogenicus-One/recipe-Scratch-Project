import React from 'react';
import { useState } from 'react';

const IngredientList = (props) => {
  const fakeIngredients = ['apple', 'banana', 'milk'];

  const [checked, setChecked] = useState({});
  // let array = [...props.ingredientList];
  const { ingredientList } = props;
  console.log('ingredientList:', ingredientList);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    console.log('I was checked!');
    console.log(event.target.value);
    setChecked((previous) => ({
      ...previous,
      [value]: checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log('formData: ', formData.entries());
    console.log('formMethod: ', form.method);
  };

  const handleClick = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log('check fetch request for Recipe');
      });
  };

  const handleIngredientListClick = () => {
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fakeIngredients),
    }).catch(() => {
      (err) =>
        console.error('Frontend to backend communication breakdown:', err);
    });
  };

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
                  name='test'
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
        <button type='submit' onClick={handleClick}>
          Submit
        </button>
      </form>

      <h5>
        This container might populate automatically as ingredients are selected
      </h5>
      <button onClick={handleIngredientListClick}>
        Tap to generate recipe!
      </button>
    </div>
  );
};

export default IngredientList;

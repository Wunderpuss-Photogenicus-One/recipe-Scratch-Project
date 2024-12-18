import React from 'react';
import { useState } from 'react';

const IngredientList = () => {
  const fakeIngredients = ['apple', 'banana', 'milk'];
  const [checked, setChecked] = useState({});

  const handleChange = (event) => {
    const { value, checked } = event.target;
    console.log('I was checked!');
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

  console.log(fakeIngredients);
  return (
    <div>
      <h3>Ingredient List will be shown here</h3>
      <form method='post' onSubmit={handleSubmit}>
        {fakeIngredients.map((element, index) => {
          return (
            <label key={index} htmlFor={element}>
              {/* htmlFor is what we need in react to connect the label to the input */}
              <input
                id={index}
                name='test'
                type='checkbox'
                checked={checked[element] || false}
                onChange={handleChange}
                value={element}
              />
              {element}
            </label>
          );
        })}
        <button type='submit'>Submit</button>
      </form>

      <h5>
        This container might populate automatically as ingredients are selected
      </h5>
      <button>Tap to generate recipe!</button>
    </div>
  );
};

export default IngredientList;

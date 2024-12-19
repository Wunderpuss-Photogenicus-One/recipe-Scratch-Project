import React from 'react';

const CreateRecipe = () => {
  const handleSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Time to create your own recipe!</h1>
      <form onSubmit={handleSubmission}>
        <label htmlFor='nameOfRecipe'>Name of your recipe: </label>
        <input type='text' id='nameOfRecipe' name='nameOfRecipe'></input>
        <label htmlFor='recipeInstructions'>
          Instructions to make your recipe
        </label>
        <input
          type='text'
          id='recipeInstructions'
          name='recipeInstructions'
        ></input>
      </form>
    </div>
  );
};

export default CreateRecipe;

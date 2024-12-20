import React from 'react';

const CreateRecipe = () => {
  const handleSubmission = (e) => {
    e.preventDefault();
  };

  return (
    // <div>
    //   <h1>Time to create your own recipe!</h1>
    //   <form onSubmit={handleSubmission}>
    //     <label htmlFor='nameOfRecipe'>Name of your recipe: </label>
    //     <input type='text' id='nameOfRecipe' name='nameOfRecipe'></input>
    //     <label htmlFor='recipeInstructions'>
    //       Instructions to make your recipe
    //     </label>
    //     <input
    //       type='text'
    //       id='recipeInstructions'
    //       name='recipeInstructions'
    //     ></input>
    //   </form>
    // </div>
    <div className="create-recipe-container">
      <h1>Time to create your own recipe!</h1>
      <form onSubmit={handleSubmission} className="create-recipe-form">
        <label htmlFor="nameOfRecipe">Name of your recipe: </label>
        <input type="text" id="nameOfRecipe" name="nameOfRecipe" />
        <label htmlFor="recipeInstructions">
          Instructions to make your recipe:
        </label>
        <textarea
          id="recipeInstructions"
          name="recipeInstructions"
          rows="6"
        ></textarea>
        <button type="submit" className="add-recipe-btn">Add</button>
      </form>
    </div>
  );
};

export default CreateRecipe;

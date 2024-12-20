import React from 'react';

const Recipes = (props) => {
  const { recipeList } = props;
  console.log(recipeList);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipeList === null ? (
        <p>If your ingredients match any recipes, they will show up here!</p>
      ) : recipeList.length === 0 ? (
        <p>
          Sorry, no recipes found with those ingredients. Maybe you can upload
          one?
        </p>
      ) : (
        <ul>
          {recipeList.map((recipe, index) => (
            <div key={index}>
              <p>
                <b>Recipe Name:</b> {recipe.recipe_name}
              </p>
              <p>
                <b>Instructions:</b> {recipe.instructions}
              </p>
              <br />
              <br />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recipes;

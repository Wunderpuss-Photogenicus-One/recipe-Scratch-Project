import React from 'react';

const IngredientList = () => {
  return (
    <div>
      <h3>Ingredient List will be shown here</h3>
      {/* then let's make the list into a checklist - for each ingredient, make a checkbox with an onChange prop that'll make h5 populate automatically */}
      <div>
      <Checkbox checked={unchecked} onChange={handleChange} />
      </div>
      <h5>
        This container might populate automatically as ingredients are selected
      </h5>
      <button>Tap to generate recipe!</button>
    </div>
  );
};

export default IngredientList;

const db = require('../recipeModels.js');

const recipeController = {};

recipeController.getIngredients = (req, res, next) => {
  const getIngredients =
    'SELECT ingredient_id, ingredient_name FROM ingredients';

  db.query(getIngredients)
    .then((result) => {
      console.log(result.rows);
      res.locals.ingredients = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('im here');
      return next({
        log: 'getIngredients middleware error' + err.message,
        message: { err: 'Error occured in getIngredients' },
      });
    });
};

recipeController.getRecipe = (req, res, next) => {
  const getRecipe = 'select ingredient_id, ingredient_name from ingredients'; //need to change this query

  db.query(getRecipe)
    .then((result) => {
      res.locals = result.rows; // need to add .recipe to the res.locals AND also in the api!!

      return next();
    })
    .catch((err) => {
      return next({
        log: 'getIngredients middleware error' + err.message,
        message: { err: 'Error occured in getIngredients' },
      });
    });
};
module.exports = recipeController;

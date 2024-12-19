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
    console.log(req.body)
   const [] = req.body;
   
   let x = req.body.length;

    const getRecipe = `SELECT 
    r.recipe_name
FROM 
    recipe r
JOIN 
    recipe_ingredients ri ON r.recipe_id = ri.recipe_id
JOIN 
    ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE 
    i.ingredient_name IN ($1, $2, $3, $4, $5, $6, $7)
GROUP BY 
    r.recipe_name;`



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

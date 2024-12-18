const db = require('../recipeModels.js');

const recipeController = {};

recipeController.getIngredients = (req, res, next) => {
    
    const getIngredients = 'select ingredient_id, ingredient_name, from ingredients';

    db.query(getIngredients).then((result) => {
        res.locals = result.rows;

        return next()
    })
    .catch((err) => {
        return next({
            log: 'getIngredients middleware error' + err.message,
            message: {err: 'Error occured in getIngredients'}

        })
    })
};

recipeController.getRecipe = (req, res, next) => {
    
    const getRecipe = 'select ingredient_id, ingredient_name, from ingredients';

    db.query(getIngredients).then((result) => {
        res.locals = result.rows;

        return next()
    })
    .catch((err) => {
        return next({
            log: 'getIngredients middleware error' + err.message,
            message: {err: 'Error occured in getIngredients'}

        })
    })
}
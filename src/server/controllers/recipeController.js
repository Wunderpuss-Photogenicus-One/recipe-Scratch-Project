const db = require('../recipeModels.js');

const recipeController = {};

recipeController.getIngredients = (req, res, next) => {

    console.log('i enetered ingredients');
    const getIngredients = 'SELECT ingredient_id, ingredient_name FROM ingredients';

    db.query(getIngredients).then((result) => {
        res.locals.ingredients = result.rows;
        return next();
    })
    .catch((err) => {
        return next({
            log: 'getIngredients middleware error' + err.message,
            message: {err: 'Error occured in getIngredients'}

        })
    }) 
};

recipeController.getRecipe = (req, res, next) => {
    // const [] = req.body;
    const getRecipe = `SELECT 
    r.recipe_name
FROM 
    recipe r
JOIN 
    recipe_ingredients ri ON r.recipe_id = ri.recipe_id
JOIN 
    ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE 
    i.ingredient_name = $1
GROUP BY 
    r.recipe_name;`;

    // test.forEach((element)=> {

        db.query(getRecipe, req.body).then((result) => {
            res.locals = result.rows;// need to add .recipe to the res.locals AND also in the api!!
            console.log('im here: ', res.locals)
            return next()
        })
        .catch((err) => {
            return next({
                log: 'getRecipe middleware error' + err.message,
                message: {err: 'Error occured in getIngredients'}
    
            })
        })

    // })
}
module.exports = recipeController;
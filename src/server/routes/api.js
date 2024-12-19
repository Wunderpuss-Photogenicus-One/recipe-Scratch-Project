const express = require('express');
const recipeController = require('../controllers/recipeController.js');
const router = express.Router();

router.get('/', recipeController.getIngredients, (req, res) =>
  res.status(200).json(res.locals.ingredients)
);
router.get('/recipes', recipeController.getRecipe, (req, res) => res.status(200).json(res.locals));
// router.post('/recipes', recipeController.getRecipe, (req, res) =>
//   res.status(200).json(res.locals)
// );

module.exports = router;

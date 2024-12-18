const express = require('express');
const recipeController = require('../controllers/recipeController')

const router = express.Router();

router.get('/', recipeController.getIngredients)
router.get('/recipes', recipeController.getRecipes); 


module.exports = router;



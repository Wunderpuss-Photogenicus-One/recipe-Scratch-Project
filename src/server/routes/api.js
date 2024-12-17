const express = require('express');

const router = express.Router();

router.get('/',
    recipeController.getIngredients,
    (req, res) => res.status(200).json(res.locals)
  );

module.exports = router;

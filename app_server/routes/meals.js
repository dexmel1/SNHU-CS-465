var express = require('express');
var router = express.Router();
var controller = require('../controllers/meals');

/* GET Travel page */
router.get('/', controller.mealsList);

module.exports = router;
var express = require('express');
var router = express.Router();
var controller = require('../controllers/rooms');

/* GET Travel page */
router.get('/', controller.roomsList);

module.exports = router;
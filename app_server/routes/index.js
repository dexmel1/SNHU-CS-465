var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', (req, res) => res.redirect('/index'));
router.get('/index', ctrlMain.index);

module.exports = router;

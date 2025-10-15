const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/register');

router.get('/register', ctrl.registerView);
router.post('/register', ctrl.registerPost);

module.exports = router;

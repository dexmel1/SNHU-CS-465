const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/login');

router.get('/login', ctrl.loginView);
router.post('/login', ctrl.loginPost);
router.get('/logout', ctrl.logout);

module.exports = router;

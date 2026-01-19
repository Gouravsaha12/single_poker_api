const express = require('express');

const { register, login, logout } = require('../controller/auth.controller');
const { isAuth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', isAuth, logout);

module.exports = router;
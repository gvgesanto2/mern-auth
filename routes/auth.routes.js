const express = require('express');
const router = express.Router();

// import controller
const { signup } = require('../controllers/auth.controller');

const { userSignupValidator } = require('../validators/auth.validators');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router;

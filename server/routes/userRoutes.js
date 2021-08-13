const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);

router
    .route('/')
    .post(userController.createUser);

module.exports = router;
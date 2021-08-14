const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
var multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname + "./../uploads/"));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });
const router = express.Router();

router.post('/signup', upload.single('image'), authController.signUp);
router.post('/login', authController.login);

router
    .route('/')
    .get(userController.getAllUsers);

module.exports = router;
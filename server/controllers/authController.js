const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require("jsonwebtoken");

exports.signUp = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })
});
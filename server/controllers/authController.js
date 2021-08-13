const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signUp = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    })
});
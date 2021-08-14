const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require("jsonwebtoken");
var fs = require('fs');
var path = require('path');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signUp = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        image: {
            data: fs.readFileSync(path.join(__dirname + "./../uploads/" + req.file.filename)),
            contentType: ["image/jpeg", "image/png"]
        }
    });

    const token = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })
});

exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide Email and Password', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token
    });

});
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        required: [true, 'User should have an email'],
        unique: true,
        validator: [validator.isEmail, 'Please provide a valid email'],
        lowercase: true
    },
    image: {
        data: Buffer,
        contentType: [String]
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: [8, 'Password should have minimum 8 letters'],
        select: false
    },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
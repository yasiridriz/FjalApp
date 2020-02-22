const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    photo: Buffer,
    birthday: Date,
    highest_points: Number,
    total_points: Number
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    money: {
        type: Number,
        default: 10000,
    },
    histories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History',
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
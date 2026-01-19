const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    currentAmount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
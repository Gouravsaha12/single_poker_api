const mongoose = require("mongoose")

const roundSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    botCards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card",
        required:true
    }],
    userCards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card",
        required:true
    }],
    boardCards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card",
        required:true
    }],
    call1 : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"AmountState",
    },
    call2 : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"AmountState",
    },
    call3 : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"AmountState",
    },
    call4 : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"AmountState",
    }
});

const Round = mongoose.model("Round",roundSchema);

module.exports = Round;



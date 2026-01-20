const mongoose = require("mongoose")

const amountStateSchema = new mongoose.Schema({
    raiseAmount : {
        type : Number,
    },
    isFold : {
        type : Boolean
    },
    isCall : {
        type : Boolean
    }
})

const AmountState = mongoose.model("AmountState", amountStateSchema)
module.exports = AmountState
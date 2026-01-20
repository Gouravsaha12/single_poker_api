const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    sign : {
        type : Number,
        enum : [1,2,3,4]
    },
    value : {
        type : Number,
        enum : [1,2,3,4,5,6,7,8,9,10,11,12,13]
    }
})

const Card = mongoose.model("Card", cardSchema)

module.exports = Card
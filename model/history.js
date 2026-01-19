const mongoose = require("mongoose");
const { type } = require("os");
const { ref } = require("process");
const { Schema } = mongoose;

const historySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  currAmt: {
    type: Number,
    required: true,
  },
  isWin: {
    type: Boolean,
    required: true,
  },
  matchNo: {
    type: Number,
    min: 1,
    required: true,
  },
});

const History = mongoose.model("History", historySchema);
module.exports = History;

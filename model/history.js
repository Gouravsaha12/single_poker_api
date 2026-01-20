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
  matchNo: {
    type: Number,
    required: true,
  },
  isWin: {
    type: Boolean,
    required: true,
  },
  currentAmount: {
    type: Number,
    required: true,
  },
});

const History = mongoose.model("History", historySchema);
module.exports = History;

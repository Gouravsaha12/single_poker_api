const HistoryService = require("../services/history.service");
const HistoryModel = require("../model/history");

const createHistory = async (req, res) => {
  try {
    const { userId, matchNo, win, currentAmount } = req.body;


    if (!userId || !matchNo) throw new Error("Missing fields");


    const result = await HistoryService.recordMatch({ userId, matchNo, win, currentAmount });


    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    if(!userId) throw new Error("Invalid UserId");
    const history = await HistoryModel.find({userId});
    res.status(200).json(history);
  }catch(e){
    res.status(500).json({erro: e.message});
  }
};


module.exports = {
  createHistory,
  getUserHistory
}
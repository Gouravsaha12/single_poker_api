const HistoryService = require("../services/history.services");
const HistoryModel = require("../model/history");
const {getCurrentMatchCount} = require("../services/user.service");

const createHistory = async (req, res) => {
  try {
    // console.log("DATA RECEIVED FROM POSTMAN:", req.body);
    const { isWin, currentAmount } = req.body;
    // console.log("USER ID FROM AUTH MIDDLEWARE:", req.user);
    const userId = req.user.id;
    const matchNo = await getCurrentMatchCount(userId) + 1;

    if (!userId || !matchNo) throw new Error("Missing fields");


    const result = await HistoryService.recordMatch({ userId, matchNo, isWin, currentAmount });


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
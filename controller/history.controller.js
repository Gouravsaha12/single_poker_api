const HistoryService = require("../services/history.service");

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


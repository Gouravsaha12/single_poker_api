
const HistoryModel = require('../models/history.model');
const UserModel = require('../models/user.model');


const recordMatch = async ({ userId, matchNo, win, currentAmount }) => {
    
    // Step A: Create the specific History entry
    const newHistoryEntry = await HistoryModel.create({
        userId,
        matchNo,
        win,
        currentAmount
    });

    await UserModel.findByIdAndUpdate(userId, {
        $inc: { money: currentAmount }, // Example: Add 100 if win, subtract 100 if lose
        $push: { history: newHistoryEntry._id } // Add this specific match ID to their list
    });

    return newHistoryEntry;
};

// Export the service so the Controller can use it
module.exports = {
    recordMatch
};
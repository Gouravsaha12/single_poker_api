
const HistoryModel = require('../model/history');
const UserModel = require('../model/user');


const recordMatch = async ({ userId, matchNo, isWin, currentAmount }) => {
    
    // Step A: Create the specific History entry
    const newHistoryEntry = await HistoryModel.create({
        userId,
        matchNo,
        isWin,
        currentAmount
    });

    await UserModel.findByIdAndUpdate(userId, {
        $set: { money: currentAmount }, // Example: Add 100 if win, subtract 100 if lose
        $push: { history: newHistoryEntry._id } // Add this specific match ID to their list
    });

    return newHistoryEntry;
};

// Export the service so the Controller can use it
module.exports = {
    recordMatch
};

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
        $inc: { numOfGames: 1 },
        $set: { money: currentAmount },
        $push: { history: newHistoryEntry._id } // Add this specific match ID to their list
    });

    return newHistoryEntry;
};

// Export the service so the Controller can use it
module.exports = {
    recordMatch
};
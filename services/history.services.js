// Import your Database Models (assuming you are using Mongoose/MongoDB)
const HistoryModel = require('../models/history.model');
const UserModel = require('../models/user.model');

// Define the logic
const recordMatch = async ({ userId, matchNo, win, currentAmount }) => {
    
    // Step A: Create the specific History entry
    const newHistoryEntry = await HistoryModel.create({
        userId,
        matchNo,
        win,
        currentAmount
    });

    // Step B: Update the User's data (The "Side Effect")
    // We find the user, update their money, and push the new history ID into their array
    await UserModel.findByIdAndUpdate(userId, {
        $inc: { money: win ? 100 : -100 }, // Example: Add 100 if win, subtract 100 if lose
        $push: { history: newHistoryEntry._id } // Add this specific match ID to their list
    });

    return newHistoryEntry;
};

// Export the service so the Controller can use it
module.exports = {
    recordMatch
};
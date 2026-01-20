const User = require('../model/user');

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
}

const getCurrentMatchCount = async (userId) => {
    const user = await User.findById(userId);
    return user ? user.numOfGames : null;
}

module.exports = {
    getUserByEmail,
    getCurrentMatchCount
};
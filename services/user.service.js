const User = require('../model/user');

const getUserById = async (userId) => {
    return await User.findById(userId);
}

module.exports = {
    getUserById,
};
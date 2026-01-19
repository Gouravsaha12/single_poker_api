const User = require('../model/user');

const registerUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
}

module.exports = {
    registerUser,
};
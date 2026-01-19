const {registerUser} = require('../services/auth.service');
const {getUserById} = require('../services/user.service');
const {hashPassword, comparePassword} = require('../utils/password');
const {createToken, verifyToken} = require('../utils/jwtToken');

const register = async (req, res) => {
    try {
        const user = await getUserById(req.body.id);
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const {username, email, password } = req.body;
        const hashedPassword = await hashPassword(password);

        const newUser = await registerUser({ username, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserById(email);

        if (!user || comparePassword(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = createToken(user.username, user.email, user._id);
        res.cookie("token", token, {
            maxAge : 3*24*60*60*1000,
            httpOnly : true
        })

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
}

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
  });
  return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { register, login, logout };
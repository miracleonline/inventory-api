const User = require('../models/userModel'); 
const jwt = require('jsonwebtoken'); 
// Create JWT token 
const createToken = (id) => { 
return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }); 
}; 
exports.register = async (req, res) => { 
const { username, password } = req.body; 
if (!username || !password) 
return res.status(400).json({ message: 'Username and password required' 
}); 
const user = await User.create({ username, password }); 
res.status(201).json({ 
_id: user._id, 
username: user.username, 
token: createToken(user._id) 
}); 
}; 
exports.login = async (req, res) => { 
const { username, password } = req.body; 
const user = await User.findOne({ username }); 
if (!user || !(await user.matchPassword(password))) { 
return res.status(401).json({ message: 'Invalid credentials' }); 
} 
res.json({ 
_id: user._id, 
username: user.username, 
token: createToken(user._id) 
}); 
};
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { readUsers, writeUsers } = require('../models/userModel');
const { readSessions, writeSessions } = require('../models/sessionModel');

// Register User
const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    let users = readUsers();
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: uuidv4(), firstName, lastName, email, password: hashedPassword };

    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ success: true, message: 'User registered successfully' });
};

// Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    let users = readUsers();
    let user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    let token = uuidv4();
    let sessions = readSessions().filter(s => s.userId !== user.id);

    sessions.push({ token, userId: user.id, created: new Date().toISOString() });
    writeSessions(sessions);

    res.json({
        success: true,
        message: 'Login successful',
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email },
        token
    });
};

// Get User Profile
const profile = (req, res) => {
    let user = readUsers().find(u => u.id === req.userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.json({ success: true, user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email } });
};

// Delete User
const deleteUser = (req, res) => {
    const { email } = req.body;

    let users = readUsers();
    let userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    users.splice(userIndex, 1);
    writeUsers(users);

    res.json({ success: true, message: 'User deleted successfully' });
};

module.exports = { register, login, profile, deleteUser };

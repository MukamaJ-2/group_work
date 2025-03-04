const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '../data/users.json');

// Ensure file exists
const initFile = () => {
    if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
};
initFile();

const readUsers = () => {
    try {
        return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    } catch (error) {
        return [];
    }
};

const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

module.exports = { readUsers, writeUsers };

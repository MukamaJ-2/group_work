const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, './users.json');

// Function to read users from the JSON file
function readUsers() {
  const data = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(data);
}

// Function to write users to the JSON file
function writeUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// Function to hash a password
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Function to compare passwords
async function comparePassword(inputPassword, hashedPassword) {
  return await bcrypt.compare(inputPassword, hashedPassword);
}

module.exports = { readUsers, writeUsers, hashPassword, comparePassword };
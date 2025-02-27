const readlineSync = require('readline-sync');
const { readUsers, writeUsers, hashPassword, comparePassword } = require('./utils');


// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]{8,}@gmail\.com$/;
    return emailRegex.test(email);
  }
// Function to register a new user
async function register() {
  const name = readlineSync.question('Enter your name: ');
  const email = readlineSync.question('Enter your email: ');
  const password = readlineSync.question('Enter your password: ', { hideEchoBack: true });

  if (!isValidEmail(email)) {
    console.log("Invalid email. It must have at least 8 characters before you include '@gmail.com'.\n");
    return;
}

  const users = readUsers();
  if (users.find(user => user.email === email)) {
    console.log('User already exists!');
    return;
  }

  const hashedPassword = await hashPassword(password);
  const newUser = { name, email, password: hashedPassword };
  users.push(newUser);
  writeUsers(users);

  console.log('Registration successful!');
}

// Function to log in a user
async function login() {
  const email = readlineSync.question('Enter your email: ');
  const password = readlineSync.question('Enter your password: ', { hideEchoBack: true });

  const users = readUsers();
  const user = users.find(user => user.email === email);

  if (!user) {
    console.log('User not found!');
    return null;
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    console.log('Invalid password!');
    return null;
  }

  console.log('Login successful!');
  return user;
}

module.exports = { register, login };
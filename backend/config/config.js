module.exports = {
    PORT: 3000,
    JWT_SECRET: 'your-secret-key', // Change this to a secure random string in production
    JWT_EXPIRES_IN: '24h',
    SALT_ROUNDS: 10,
    DATA_DIR: process.env.DATA_DIR || './data',
    USERS_FILE: 'users.json',
    SESSIONS_FILE: 'sessions.json'
  };
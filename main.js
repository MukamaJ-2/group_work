const readlineSync = require('readline-sync');
const { register, login } = require('./auth');
const { showMenu } = require('./menu');

// Main function
async function main() {
  while (true) {
    console.log('\n--- Welcome ---');
    console.log('1. Register');
    console.log('2. Login');
    console.log('3. Exit');

    const choice = readlineSync.question('Choose an option: ');

    switch (choice) {
      case '1':
        await register();
        break;
      case '2':
        const user = await login();
        if (user) {
          showMenu(user);
        }
        break;
      case '3':
        console.log('Exiting...');
        process.exit();
      default:
        console.log('Invalid choice!');
    }
  }
}

module.exports = { main };

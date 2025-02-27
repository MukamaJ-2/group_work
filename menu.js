const readlineSync = require('readline-sync');

// Function to display the user menu
function showMenu(user) {
  while (true) {
    console.log('\n--- Menu ---');
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');

    const choice = readlineSync.question('Choose an option: ');

    switch (choice) {
      case '1':
        console.log('\n--- Your Profile ---');
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        break;
      case '2':
        console.log('Logging out...');
        return;
      case '3':
        console.log('Exiting...');
        process.exit();
      default:
        console.log('Invalid choice!');
    }
  }
}

module.exports = { showMenu };



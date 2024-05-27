const bcrypt = require('bcrypt');

// Assuming this is the hashed password 
const hashedPasswordFromDB = 'Your_Hashed_Password_here';

const userInputPassword = 'Your_Password_Here';

bcrypt.compare(userInputPassword, hashedPasswordFromDB, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    if (result) {
      console.log('Password is correct!');
    } else {
      console.log('Password is incorrect!');
    }
  }
});

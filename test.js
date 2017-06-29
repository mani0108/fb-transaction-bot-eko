var User = require('./isadas');

// create a new user called chris
var chris = new User({
  name: 'Chris'
});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

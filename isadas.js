
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://saiganesh:saiganesh6997@ds161121.mlab.com:61121/tester')
// create a schema
var userSchema = new Schema({
  name: String
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

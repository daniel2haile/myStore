const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstname: { type: "string", required: true },
  middlename: { type: "string" },
  lastname: { type: "string", required: true },
  phone: { type: "number", required: true },
  email: { 
    type: "string", 
    required: 'email address is required',
    validate: [validateEmail, 'please fill a valid email address'],
    unique: true
},
password : { type: "string", required: true},
current_city: { type: "string", required: true}
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
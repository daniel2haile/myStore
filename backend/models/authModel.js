const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { 
    type: "string", 
    required: [true, 'email address is required'],
    // validate: [validateEmail, 'please fill a valid email address'],
    trim: true, 
    unique: true
},
password : { type: "string", required: true},
current_city: { type: "string", required: true}
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
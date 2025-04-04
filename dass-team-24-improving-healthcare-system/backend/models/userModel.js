const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    user_name: { type: String, required: true },
    user_phone_no: { type: String, required: true },
    user_email: { type: String, required: true, unique: true },
    user_age: { type: Number, required: true },
    user_password: { type: String, required: true },
    user_type: { type: String, required: true },
  });
  
const User = mongoose.model('User', UserSchema);

module.exports = User;
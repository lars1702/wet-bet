const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: { type: String, unique: true },
  status: {
    type: String, 
    enum: ["Pending Confirmation", "Active"], 
    default: "Pending Confirmation",
  },
  confirmation: { type: String, unique: true },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  weatherPoints: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;
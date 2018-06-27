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
  weatherPoints: Number,
  _bets: [{ type: Schema.Types.ObjectId, ref: "Bet" }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
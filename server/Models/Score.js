import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  playerName: { type: String, required: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model('Score', schema);

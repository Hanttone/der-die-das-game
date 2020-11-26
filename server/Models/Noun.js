import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  germanNoun: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model('Noun', schema);

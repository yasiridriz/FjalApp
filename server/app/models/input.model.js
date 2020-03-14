const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  content: String,
  user: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Answer', answerSchema);
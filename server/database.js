const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aztec_quiz';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
  difficulty: String,
});

const scoreSchema = new mongoose.Schema({
  username: String,
  difficulty: String,
  correctAnswers: Number,
  timeTaken: Number,
  finalScore: Number,
  createdAt: { type: Date, default: Date.now },
});

const Question = mongoose.model('Question', questionSchema);
const Score = mongoose.model('Score', scoreSchema);

module.exports = { Question, Score };
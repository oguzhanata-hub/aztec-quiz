const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;

// Define schemas before connecting
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

const seedDatabase = async () => {
  try {
    const questionCount = await Question.countDocuments();
    if (questionCount === 0) {
      console.log('No questions found. Seeding database...');
      const questionsPath = path.join(__dirname, '..', 'qustions.json');
      const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
      
      await Question.insertMany(questionsData);
      console.log('Database seeded successfully!');
    } else {
      console.log('Questions already exist. Skipping seeding.');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

if (!MONGODB_URI) {
  console.error('FATAL ERROR: MONGODB_URI is not defined.');
  process.exit(1);
}

// Connect to MongoDB and then seed
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    seedDatabase();
  })
  .catch(err => {
    console.error('Could not connect to MongoDB:', err);
    process.exit(1); // Exit if cannot connect to DB
  });

module.exports = { Question, Score };

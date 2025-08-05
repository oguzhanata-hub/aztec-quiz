const mongoose = require('mongoose');
const fs = require('fs');
const { Question } = require('./database');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aztec_quiz';

const seed = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding.');

    // Clear existing questions
    await Question.deleteMany({});
    console.log('Cleared existing questions.');

    const questionsData = JSON.parse(fs.readFileSync('../qustions.json', 'utf8'));

    // Insert new questions
    await Question.insertMany(questionsData.map(q => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      difficulty: q.difficulty,
    })));

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seed();
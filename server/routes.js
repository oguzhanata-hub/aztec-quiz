const express = require('express');
const router = express.Router();
const { Question, Score } = require('./database');

router.get('/questions', async (req, res) => {
  const { difficulty } = req.query;
  try {
    const questions = await Question.find({ difficulty }).sort({ _id: 1 }).limit(10);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/scores', async (req, res) => {
  const { username, correctAnswers, timeTaken, difficulty } = req.body;

  let finalScore;
  if (difficulty === 'easy') {
    finalScore = (correctAnswers * 1000) - (timeTaken * 10);
  } else if (difficulty === 'medium') {
    finalScore = (correctAnswers * 1500) - (timeTaken * 12);
  } else if (difficulty === 'hard') {
    finalScore = (correctAnswers * 2000) - (timeTaken * 15);
  }

  try {
    const newScore = new Score({ username, difficulty, correctAnswers, timeTaken, finalScore });
    await newScore.save();
    res.json({ id: newScore._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Score.find({}).sort({ finalScore: -1 }).limit(20);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
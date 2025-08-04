const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/questions', (req, res) => {
  // Return exactly 10 questions for the requested difficulty in a stable order
  // No randomness so that questions don't repeat across a single quiz session
  const { difficulty } = req.query;

  // Ensure deterministic order by id (or createdAt if present)
  const query = 'SELECT * FROM questions WHERE difficulty = ? ORDER BY id ASC LIMIT 10';

  db.all(query, [difficulty], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

router.post('/scores', (req, res) => {
  const { username, correctAnswers, timeTaken, difficulty } = req.body;

  let finalScore;
  if (difficulty === 'easy') {
    finalScore = (correctAnswers * 1000) - (timeTaken * 10);
  } else if (difficulty === 'medium') {
    finalScore = (correctAnswers * 1500) - (timeTaken * 12);
  } else if (difficulty === 'hard') {
    finalScore = (correctAnswers * 2000) - (timeTaken * 15);
  }

  const query = 'INSERT INTO scores (username, difficulty, correctAnswers, timeTaken, finalScore) VALUES (?, ?, ?, ?, ?)';
  db.run(query, [username, difficulty, correctAnswers, timeTaken, finalScore], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

router.get('/leaderboard', (req, res) => {
  const query = 'SELECT username, finalScore FROM scores ORDER BY finalScore DESC LIMIT 20';

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;

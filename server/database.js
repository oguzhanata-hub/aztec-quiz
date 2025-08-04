const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./quiz.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the quiz database.');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY,
      question TEXT,
      options TEXT,
      correctAnswer TEXT,
      difficulty TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY,
      username TEXT,
      difficulty TEXT,
      correctAnswers INTEGER,
      timeTaken INTEGER,
      finalScore INTEGER,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;

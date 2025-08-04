const db = require('./database');
const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('../qustions.json', 'utf8'));

const seed = () => {
  db.serialize(() => {
    const stmt = db.prepare(`
      INSERT INTO questions (question, options, correctAnswer, difficulty) VALUES (?, ?, ?, ?)
    `);

    questions.forEach(q => {
      stmt.run(q.question, JSON.stringify(q.options), q.correctAnswer, q.difficulty);
    });

    stmt.finalize();
    console.log('Database seeded successfully!');
  });
};

seed();

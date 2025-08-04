import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import UsernameEntry from './pages/UsernameEntry';
import DifficultySelection from './pages/DifficultySelection';
import Rules from './pages/Rules';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="bg-gradient-to-br from-aztec-dark to-[#161421] text-aztec-text min-h-screen text-lg">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/start" element={<UsernameEntry />} />
          <Route path="/difficulty" element={<DifficultySelection />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

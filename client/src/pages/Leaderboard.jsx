import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('https://aztec-quiz.onrender.com/api/leaderboard');
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl p-4 flex flex-col items-center h-screen">
      <h1 className="text-5xl font-bold my-8">Leaderboard</h1>
      <div className="w-full max-w-md bg-white/5 border border-aztec-border rounded-xl shadow-lg p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-aztec-border">
              <th className="p-3 text-aztec-light-purple">Rank</th>
              <th className="p-3 text-aztec-light-purple">Username</th>
              <th className="p-3 text-aztec-light-purple">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index} className="border-b border-aztec-border/50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{entry.username}</td>
                <td className="p-3">{entry.finalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/">
        <button className="bg-aztec-purple text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-aztec-purple/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mt-8">
          <FaHome /> Home
        </button>
      </Link>
    </div>
  );
};

export default Leaderboard;

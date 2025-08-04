import React from 'react';
import { useNavigate } from 'react-router-dom';
import useQuizStore from '../store/useQuizStore';

const DifficultySelection = () => {
  const navigate = useNavigate();
  const setDifficulty = useQuizStore((state) => state.setDifficulty);

  const handleSelectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
    navigate('/rules');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container-page text-center">
        <h1
          className="heading"
          style={{
            textShadow:
              '0 0 24px rgba(255,255,255,0.28), 0 0 60px rgba(112,99,131,0.35)',
          }}
        >
          Choose Your Difficulty
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => handleSelectDifficulty('easy')}
            className="btn !text-black rounded-full px-6 py-3"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)',
              boxShadow:
                '0 10px 30px rgba(52,211,153,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            Easy
          </button>

          <button
            onClick={() => handleSelectDifficulty('medium')}
            className="btn !text-black rounded-full px-6 py-3"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              boxShadow:
                '0 10px 30px rgba(245,158,11,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            Medium
          </button>

          <button
            onClick={() => handleSelectDifficulty('hard')}
            className="btn !text-black rounded-full px-6 py-3"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)',
              boxShadow:
                '0 10px 30px rgba(239,68,68,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelection;

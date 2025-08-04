import React from 'react';

export default function ScoreDisplay({ 
  score, 
  totalQuestions,
  timeTaken,
  onRestart 
}) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Quiz Completed!</h2>
      <div className="text-5xl font-bold">
        {score}/{totalQuestions}
      </div>
      <div className="text-xl">
        {percentage}% Correct
      </div>
      <div className="text-lg">
        Time: {timeTaken} seconds
      </div>
      <button 
        onClick={onRestart}
        className="btn mt-6"
      >
        Try Again
      </button>
    </div>
  );
}

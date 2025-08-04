import React from 'react';

export default function LeaderboardItem({ 
  rank,
  username,
  score,
  time,
  isCurrentUser = false
}) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg ${
      isCurrentUser ? 'bg-primary/10' : 'bg-white/5'
    }`}>
      <div className="flex items-center space-x-4">
        <span className="font-bold w-6 text-right">{rank}.</span>
        <span className={`font-medium ${isCurrentUser ? 'text-primary' : ''}`}>
          {username}
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <span>{score} points</span>
        <span className="text-sm opacity-70">{time}s</span>
      </div>
    </div>
  );
}

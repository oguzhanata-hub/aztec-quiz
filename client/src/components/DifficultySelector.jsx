import React from 'react';
import Button from './Button';

export default function DifficultySelector({ 
  onSelect,
  isLoading = false
}) {
  const difficulties = [
    { id: 'easy', label: 'Easy', description: '10 questions, 30 seconds each' },
    { id: 'medium', label: 'Medium', description: '15 questions, 20 seconds each' },
    { id: 'hard', label: 'Hard', description: '20 questions, 15 seconds each' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium mb-6">Select difficulty</h2>
      <div className="grid gap-4">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty.id}
            onClick={() => onSelect(difficulty.id)}
            disabled={isLoading}
            className="flex flex-col items-start p-4"
          >
            <span className="font-medium">{difficulty.label}</span>
            <span className="text-sm opacity-80">{difficulty.description}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import Button from './Button';

export default function RulesList({ 
  onContinue 
}) {
  const rules = [
    'Each question has a time limit',
    'You can only select one answer per question',
    'Once selected, you cannot change your answer',
    'Points are awarded for correct answers',
    'Faster answers earn bonus points'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium">Quiz Rules</h2>
      <ul className="space-y-3 list-disc pl-5">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <Button 
        onClick={onContinue}
        className="w-full mt-8"
      >
        I Understand
      </Button>
    </div>
  );
}

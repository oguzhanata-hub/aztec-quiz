import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-primary h-2.5 rounded-full transition-all duration-300" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

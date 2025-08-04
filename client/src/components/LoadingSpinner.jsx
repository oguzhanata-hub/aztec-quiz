import React from 'react';

export default function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]}`}
      />
    </div>
  );
}

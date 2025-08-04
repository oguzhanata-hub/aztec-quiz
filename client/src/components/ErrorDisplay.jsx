import React from 'react';
import Button from './Button';

export default function ErrorDisplay({ 
  error,
  onRetry 
}) {
  return (
    <div className="text-center space-y-4">
      <div className="text-red-500 font-medium">
        {error.message || 'An error occurred'}
      </div>
      {onRetry && (
        <Button onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}

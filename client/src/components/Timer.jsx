import React, { useEffect, useState } from 'react';

export default function Timer({ 
  initialTime, 
  onTimeout,
  isRunning = true 
}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onTimeout]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <span className="font-mono text-2xl">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}

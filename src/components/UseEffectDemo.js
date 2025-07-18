import React, { useState, useEffect } from 'react';

export const UseEffectDemo = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="hook-container">
      <h2>useEffect Demo</h2>
      <p className="time-display">Current time: {time.toLocaleTimeString()}</p>
      <button 
        onClick={() => setIsRunning(!isRunning)}
        className="toggle-button"
      >
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};
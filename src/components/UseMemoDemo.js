import React, { useState, useMemo } from 'react';

export const UseMemoDemo = () => {
  const [number, setNumber] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return number * multiplier * 1000000;
  }, [number, multiplier]);

  return (
    <div className="hook-container">
      <h2>useMemo Demo</h2>
      <div className="input-group">
        <div className="input-field">
          <label>Number: </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            className="number-input"
          />
        </div>
        <div className="input-field">
          <label>Multiplier: </label>
          <input
            type="number"
            value={multiplier}
            onChange={(e) => setMultiplier(parseInt(e.target.value) || 0)}
            className="multiplier-input"
          />
        </div>
      </div>
      <p className="calculation-result">
        Calculated Value: {expensiveCalculation.toLocaleString()}
      </p>
    </div>
  );
};
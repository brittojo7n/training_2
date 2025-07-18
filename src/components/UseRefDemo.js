import React, { useRef, useState } from 'react';

export const UseRefDemo = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div className="hook-container">
      <h2>useRef Demo</h2>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="ref-input"
      />
      <div className="button-group">
        <button onClick={focusInput} className="focus-button">
          Focus Input
        </button>
        <button onClick={() => setValue('')} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};
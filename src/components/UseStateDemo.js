import React, { useState } from 'react';

export const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="hook-container">
      <h2>useState Demo</h2>
      <div className="counter-container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span className="count-display">Count: {count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="text-input"
      />
      <p className="text-output">You typed: {text}</p>
    </div>
  );
};
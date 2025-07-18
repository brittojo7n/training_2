import React, { useState, useCallback, memo } from 'react';

const ExpensiveList = memo(({ items, onAdd }) => {
  console.log('ExpensiveList rendered');
  return (
    <div className="list-container">
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
      <button onClick={onAdd} className="add-button">
        Add Item
      </button>
    </div>
  );
});

export const UseCallbackDemo = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [count, setCount] = useState(0);

  const handleAddItem = useCallback(() => {
    setItems([...items, `Item ${items.length + 1}`]);
  }, [items]);

  return (
    <div className="hook-container">
      <h2>useCallback Demo</h2>
      <div className="control-panel">
        <button 
          onClick={() => setCount(count + 1)} 
          className="rerender-button"
        >
          Re-render ({count})
        </button>
      </div>
      <ExpensiveList items={items} onAdd={handleAddItem} />
    </div>
  );
};
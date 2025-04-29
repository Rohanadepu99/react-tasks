import React, { useRef } from 'react';

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  const showAlert = () => {
    alert(`Current count is ${countRef.current}`);
  };

  return (
    <div>
      <h2>Counter Using useRef</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={showAlert}>Show Count</button>
    </div>
  );
}

export default Counter;

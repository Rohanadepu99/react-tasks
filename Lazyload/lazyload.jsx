import React, { useState, Suspense } from 'react';
import './App.css';

// Lazy load the component
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>React Lazy Loading Demo</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>

      {show && (
        <Suspense fallback={<div>Loading component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;

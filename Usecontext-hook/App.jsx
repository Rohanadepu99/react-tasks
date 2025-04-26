// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}

export default App;

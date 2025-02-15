import React, { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Theme.css';

const App = () => {
  // Apply theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <div>
      <header>
        <h1>CrakCode</h1>
        <ThemeToggle />
      </header>
      <main>
        <p>Welcome to CrakCode! Toggle the theme to see the magic.</p>
      </main>
    </div>
  );
};

export default App;

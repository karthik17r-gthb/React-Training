import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
 
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#f59e0b' : '#4f46e5',
    color: '#ffffff',
    boxShadow: isDarkMode ? '0 0 15px rgba(245, 158, 11, 0.4)' : '0 0 15px rgba(79, 70, 229, 0.3)'
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Switch to {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

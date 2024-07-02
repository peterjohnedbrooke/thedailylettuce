import React from 'react';
import './themeToggle.css';

type ThemeToggleProps = {
  toggleTheme: () => void;
  theme: string;
};

const ThemeToggle = ({ toggleTheme, theme }: ThemeToggleProps) => {
  return (
    // <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'smashed'}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;

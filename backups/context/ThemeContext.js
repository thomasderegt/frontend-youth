import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    return stored && themes[stored] ? stored : 'neon';
  };

  const [themeName, setThemeName] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  const theme = themes[themeName] || themes['neon'];

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

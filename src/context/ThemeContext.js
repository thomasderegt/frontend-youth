import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('neon');
  const [theme, setTheme] = useState(themes.neon);

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeName');
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
      setTheme(themes[savedTheme]);
    }
  }, []);

  const updateTheme = (newThemeName) => {
    console.log('Updating theme to:', newThemeName);
    if (themes[newThemeName]) {
      setThemeName(newThemeName);
      setTheme(themes[newThemeName]);
      localStorage.setItem('themeName', newThemeName);
      console.log('Theme updated successfully to:', newThemeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  neon: {
    name: 'Neon',
    background: '#000000',
    primary: '#FF007F',
    secondary: '#00f2fa',
    text: '#FFFFFF',
    border: '#FF007F',
    glow: true,
  },
  story: {
    name: 'Story',
    background: '#f6f1eb',
    primary: '#4a3f78',
    secondary: '#eea243',
    text: '#1e1e1e',
    border: '#c4a484',
    glow: false,
  },
};

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
    if (themes[newThemeName]) {
      setThemeName(newThemeName);
      setTheme(themes[newThemeName]);
      localStorage.setItem('themeName', newThemeName);
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

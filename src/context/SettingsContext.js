import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userGoal, setUserGoal] = useState(localStorage.getItem('userGoal'));
  const [userLevel, setUserLevel] = useState(parseInt(localStorage.getItem('userLevel')) || 1);
  const [creed, setCreed] = useState(localStorage.getItem('userCreed') || '1');
  const [jurisprudence, setJurisprudence] = useState(localStorage.getItem('userJurisprudence') || 'all');
  
  const { themeName, setThemeName } = useTheme();
  const { language, setLanguage } = useLanguage();

  // Update localStorage when settings change
  useEffect(() => {
    if (userGoal) localStorage.setItem('userGoal', userGoal);
  }, [userGoal]);

  useEffect(() => {
    localStorage.setItem('userLevel', userLevel.toString());
  }, [userLevel]);

  useEffect(() => {
    localStorage.setItem('userCreed', creed);
  }, [creed]);

  useEffect(() => {
    localStorage.setItem('userJurisprudence', jurisprudence);
  }, [jurisprudence]);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  const resetOnboarding = () => {
    localStorage.removeItem('userGoal');
    localStorage.removeItem('userLevel');
    localStorage.removeItem('userCreed');
    localStorage.removeItem('userJurisprudence');
    localStorage.removeItem('theme');
    setUserGoal(null);
    setUserLevel(1);
    setCreed('1');
    setJurisprudence('all');
    setThemeName('neon');
    window.location.reload();
  };

  const value = {
    // Settings visibility
    isSettingsOpen,
    openSettings,
    closeSettings,
    
    // User preferences
    userGoal,
    setUserGoal,
    userLevel,
    setUserLevel,
    creed,
    setCreed,
    jurisprudence,
    setJurisprudence,
    
    // Theme and language
    themeName,
    setThemeName,
    language,
    setLanguage,
    
    // Actions
    resetOnboarding
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}; 
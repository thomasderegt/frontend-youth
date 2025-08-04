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
  const [userAgeGroup, setUserAgeGroup] = useState(localStorage.getItem('userAgeGroup'));
  const [creed, setCreed] = useState(localStorage.getItem('userCreed') || '1');
  const [jurisprudence, setJurisprudence] = useState(localStorage.getItem('userJurisprudence') || 'all');
  const [wheelShape, setWheelShape] = useState(localStorage.getItem('wheelShape') || 'circle');
  const [nightMode, setNightMode] = useState(localStorage.getItem('nightMode') === 'true');
  
  console.log('SettingsContext Debug:', {
    wheelShapeFromStorage: localStorage.getItem('wheelShape'),
    wheelShapeState: wheelShape,
    defaultValue: 'circle'
  });

  const { themeName, setThemeName } = useTheme();
  const { language, setLanguage } = useLanguage();

  // Update localStorage when settings change
  useEffect(() => {
    if (userGoal) {
      localStorage.setItem('userGoal', userGoal);
      // Theme is now independent of userGoal - removed automatic theme setting
    }
  }, [userGoal]);

  useEffect(() => {
    localStorage.setItem('userLevel', userLevel.toString());
  }, [userLevel]);

  useEffect(() => {
    if (userAgeGroup) {
      localStorage.setItem('userAgeGroup', userAgeGroup);
    }
  }, [userAgeGroup]);

  useEffect(() => {
    localStorage.setItem('userCreed', creed);
  }, [creed]);

  useEffect(() => {
    localStorage.setItem('userJurisprudence', jurisprudence);
  }, [jurisprudence]);

  useEffect(() => {
    localStorage.setItem('wheelShape', wheelShape);
  }, [wheelShape]);

  useEffect(() => {
    localStorage.setItem('nightMode', nightMode.toString());
  }, [nightMode]);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  const resetOnboarding = () => {
    localStorage.removeItem('userGoal');
    localStorage.removeItem('userLevel');
    localStorage.removeItem('userAgeGroup');
    localStorage.removeItem('userCreed');
    localStorage.removeItem('userJurisprudence');
    localStorage.removeItem('nightMode');
    // Note: theme is not reset - user keeps their theme preference
    setUserGoal(null);
    setUserLevel(1);
    setUserAgeGroup(null);
    setCreed('1');
    setJurisprudence('all');
    setNightMode(false);
    // setThemeName('neon'); // Removed - theme stays independent
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
    userAgeGroup,
    setUserAgeGroup,
    creed,
    setCreed,
    jurisprudence,
    setJurisprudence,
    wheelShape,
    setWheelShape,
    nightMode,
    setNightMode,
    
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
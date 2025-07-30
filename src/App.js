import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { StrategyProvider } from './context/StrategyContext';
import { SettingsProvider, useSettings } from './context/SettingsContext';
import WheelPage from './pages/WheelPage';
import NamesPage from './pages/NamesPage';
import NameDetailPage from './pages/NameDetailPage';
import TazkiyyahPage from './pages/TazkiyyahPage';
import OneTrueGodPage from './pages/OneTrueGodPage';
import Settings from './organisms/Settings';
import OnboardingModal from './organisms/OnboardingModal';
import { getBackgroundStyle } from './utils/backgrounds';
import './App.css';

function AppContent() {
  const { theme, themeName } = useTheme();
  const { openSettings, userGoal, setUserGoal } = useSettings();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (!userGoal) {
      setShowOnboarding(true);
    }
  }, [userGoal]);

  const handleOnboardingSelect = (goal) => {
    setUserGoal(goal);
    setShowOnboarding(false);
  };

  return (
    <div 
      className="App"
      style={{
        backgroundColor: theme.background,
        ...getBackgroundStyle(themeName),
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
    >
      {/* Onboarding Modal */}
      <OnboardingModal
        open={showOnboarding}
        onSelect={handleOnboardingSelect}
        onLevelChange={() => {}}
        selectedLevel={1}
      />
    
      <button
        onClick={openSettings}
        className="fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-200 hover:scale-110"
        style={themeName === 'story' ? {
          backgroundColor: theme.primary,
          color: theme.secondary,
          border: `2px solid ${theme.border}`,
          boxShadow: '0 4px 12px rgba(196,164,132,0.3)',
        } : {
          backgroundColor: 'transparent',
          color: '#00f2fa',
          border: '2px solid #00f2fa',
          boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa',
        }}
        onMouseEnter={e => {
          if (themeName === 'story') {
            e.target.style.backgroundColor = theme.secondary;
            e.target.style.color = theme.primary;
            e.target.style.boxShadow = '0 6px 16px rgba(196,164,132,0.4)';
          } else {
            e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
            e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
          }
        }}
        onMouseLeave={e => {
          if (themeName === 'story') {
            e.target.style.backgroundColor = theme.primary;
            e.target.style.color = theme.secondary;
            e.target.style.boxShadow = '0 4px 12px rgba(196,164,132,0.3)';
          } else {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
          }
        }}
      >
        ⚙️
      </button>

      <Routes>
        <Route path="/" element={<WheelPage />} />
        <Route path="/names" element={<NamesPage />} />
        <Route path="/names/:id" element={<NameDetailPage />} />
        <Route path="/tazkiyyah" element={<TazkiyyahPage />} />
        <Route path="/one-true-god" element={<OneTrueGodPage />} />
      </Routes>
      
      {/* Global Settings Component */}
      <Settings />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <StrategyProvider>
          <SettingsProvider>
            <Router>
              <AppContent />
            </Router>
          </SettingsProvider>
        </StrategyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

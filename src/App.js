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

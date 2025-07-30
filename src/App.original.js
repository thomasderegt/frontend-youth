import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WheelOfIslam from './components/WheelOfIslam';
import NamesOfAllah from './components/NamesOfAllah';
import NameDetail from './components/NameDetail';
import TazkiyyahLanding from './components/TazkiyyahLanding';
import OneTrueGodIntro from './components/OneTrueGodIntro';
import OnboardingModal from './components/OnboardingModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import bgCircuitBoard from './assets/background-circuit-board.png';

function AppContent() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { themeName, setThemeName } = useTheme();

  useEffect(() => {
    const goal = localStorage.getItem('userGoal');
    if (!goal) setShowOnboarding(true);
  }, []);

  const handleOnboardingSelect = (goal) => {
    localStorage.setItem('userGoal', goal);
    setShowOnboarding(false);
  };

  const handleLevelChange = (level) => {
    localStorage.setItem('userLevel', level);
  };

  return (
    <>
      <OnboardingModal
        open={showOnboarding}
        onSelect={handleOnboardingSelect}
        onLevelChange={handleLevelChange}
        selectedLevel={1}
      />
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: -2,
          background: `#000 url(${bgCircuitBoard}) center center/cover no-repeat`,
          opacity: 1,
        }}
      ></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WheelOfIslam />} />
          <Route path="/one-true-god" element={<OneTrueGodIntro />} />
          <Route path="/names" element={<NamesOfAllah />} />
          <Route path="/names/:nameId" element={<NameDetail />} />
          <Route path="/tazkiyyah" element={<TazkiyyahLanding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

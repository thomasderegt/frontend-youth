import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { StrategyProvider } from './context/StrategyContext';
import { SettingsProvider } from './context/SettingsContext';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import WheelOfIslam from './organisms/WheelOfIslam';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import IntroGodPage from './pages/insights/IntroGodPage';
import StoriesProphetsPage from './pages/StoriesProphetsPage';
import GuiltReturnPage from './pages/GuiltReturnPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <StrategyProvider>
          <SettingsProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/wheelofislam" element={<WheelOfIslam />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/god" element={<IntroGodPage />} />
                <Route path="/stories-prophets" element={<StoriesProphetsPage />} />
                <Route path="/guilt-return" element={<GuiltReturnPage />} />
              </Routes>
            </Router>
          </SettingsProvider>
        </StrategyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

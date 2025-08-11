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
import FlowPage from './pages/FlowPage';
import ProgressPage from './pages/ProgressPage';
import TestPage from './pages/TestPage';
import IntroRepentancePage from './pages/spirituality/IntroRepentancePage';
import IntroReturningPage from './pages/spirituality/IntroReturningPage';
import IntroWakefulnessPage from './pages/spirituality/IntroWakefulnessPage';
import IntroSelfReckoningPage from './pages/spirituality/IntroSelfReckoningPage';
import IntroReflectionPage from './pages/spirituality/IntroReflectionPage';
import IntroTakingShelterPage from './pages/spirituality/IntroTakingShelterPage';
import IntroFleeingPage from './pages/spirituality/IntroFleeingPage';
import IntroTrainingPage from './pages/spirituality/IntroTrainingPage';
import IntroHearingPage from './pages/spirituality/IntroHearingPage';
import IntroRemembrancePage from './pages/spirituality/IntroRemembrancePage';
import IntroBeliefPage from './pages/insights/IntroBeliefPage';
import IntroJurisprudencePage from './pages/insights/IntroJurisprudencePage';
import IntroQuranPage from './pages/insights/IntroQuranPage';
import IntroLifeOfTheProphetPage from './pages/insights/IntroLifeOfTheProphetPage';
import IntroIslamicHistoryPage from './pages/insights/IntroIslamicHistoryPage';
import IntroModernIdeologiesPage from './pages/insights/IntroModernIdeologiesPage';
import IntroFamilySocietyPage from './pages/insights/IntroFamilySocietyPage';
import IntroDivineLawPage from './pages/insights/IntroDivineLawPage';
import TopicIntroPage from './pages/TopicIntroPage';
import NamesPage from './pages/NamesPage';
import NameDetailPage from './pages/NameDetailPage';
import OneTrueGodIntro from './organisms/OneTrueGodIntro';

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
                <Route path="/wheel" element={<WheelOfIslam />} />
                <Route path="/wheelofislam" element={<WheelOfIslam />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/god" element={<IntroGodPage />} />
                <Route path="/stories-prophets" element={<StoriesProphetsPage />} />
                <Route path="/guilt-return" element={<GuiltReturnPage />} />
                <Route path="/flow/:slug" element={<FlowPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/intro-repentance" element={<IntroRepentancePage />} />
                <Route path="/intro-returning" element={<IntroReturningPage />} />
                <Route path="/intro-wakefulness" element={<IntroWakefulnessPage />} />
                <Route path="/intro-self-reckoning" element={<IntroSelfReckoningPage />} />
                <Route path="/intro-reflection" element={<IntroReflectionPage />} />
                <Route path="/intro-taking-shelter" element={<IntroTakingShelterPage />} />
                <Route path="/intro-fleeing" element={<IntroFleeingPage />} />
                <Route path="/intro-training" element={<IntroTrainingPage />} />
                <Route path="/intro-hearing" element={<IntroHearingPage />} />
                <Route path="/intro-remembrance" element={<IntroRemembrancePage />} />
                <Route path="/intro-belief" element={<IntroBeliefPage />} />
                <Route path="/intro-jurisprudence" element={<IntroJurisprudencePage />} />
                <Route path="/intro-quran" element={<IntroQuranPage />} />
                <Route path="/intro-life-of-prophet" element={<IntroLifeOfTheProphetPage />} />
                <Route path="/intro-islamic-history" element={<IntroIslamicHistoryPage />} />
                <Route path="/intro-modern-ideologies" element={<IntroModernIdeologiesPage />} />
                <Route path="/intro-family-society" element={<IntroFamilySocietyPage />} />
                <Route path="/intro-divine-law" element={<IntroDivineLawPage />} />
                <Route path="/topic/:topic" element={<TopicIntroPage />} />
                <Route path="/names" element={<NamesPage />} />
                <Route path="/names/:nameId" element={<NameDetailPage />} />
                <Route path="/one-true-god" element={<OneTrueGodIntro />} />
              </Routes>
            </Router>
          </SettingsProvider>
        </StrategyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

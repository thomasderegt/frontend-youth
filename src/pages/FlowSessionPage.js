import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getBackgroundStyle } from '../utils/backgrounds';

const FlowSessionPage = () => {
  const { flowId } = useParams();
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const [currentSession, setCurrentSession] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const backgroundStyle = getBackgroundStyle(themeName);

  // Mock flow data - in real app this would come from API/database
  const flowData = {
    'return-to-mercy': {
      title: 'Return to Mercy',
      subtitle: 'Purification & Self-Acceptance',
      sessions: [
        {
          title: 'A Door That Never Closes',
          duration: '4-5 min',
          content: {
            quran: {
              verse: 'Zeg: "O Mijn dienaren die zichzelf onrecht hebben aangedaan..."',
              reference: '39:53'
            },
            hadith: {
              text: 'Als je tot Mij komt met een wereld aan zonden, maar je ontmoet Mij zonder iets aan Mij toe te schrijven, zal Ik je een wereld aan vergeving geven.',
              reference: 'Muslim'
            },
            reflection: 'Wanneer sloot jij je hart voor terugkeer?',
            exercise: 'Ademhaling, stilte, herhaling van Ya Tawwab',
            dua: 'Ya Tawwab, Ya Ghaffar, Ya Rahman'
          }
        },
        {
          title: 'Who Is Allah, Really?',
          duration: '4-5 min',
          content: {
            quran: {
              verse: 'In de naam van Allah, de Barmhartige, de Genadevolle',
              reference: '1:1'
            },
            hadith: {
              text: 'Mijn barmhartigheid gaat vooraf aan Mijn woede',
              reference: 'Bukhari'
            },
            reflection: 'Hoe ervaar jij Allah\'s barmhartigheid?',
            exercise: 'Visualisatie: de naam Allah als licht',
            dua: 'Ya Rahman, Ya Raheem, Ya Ghaffar'
          }
        }
        // More sessions would be added here
      ]
    },
    'created-for-more': {
      title: 'Created for More',
      subtitle: 'Purpose & Direction',
      sessions: [
        {
          title: 'Born With Meaning',
          duration: '4-5 min',
          content: {
            quran: {
              verse: 'En Ik heb de mens en de djinn slechts geschapen om Mij te aanbidden',
              reference: '51:56'
            },
            hadith: {
              text: 'Elke daad is afhankelijk van intentie',
              reference: 'Bukhari'
            },
            reflection: 'Wat in jou is onvervreemdbaar?',
            exercise: 'Stilteoefening: fitrah als innerlijke richtingwijzer',
            dua: 'Ya Hadi, Ya Rashid'
          }
        }
        // More sessions would be added here
      ]
    }
  };

  const currentFlow = flowData[flowId];
  const currentSessionData = currentFlow?.sessions[currentSession];

  useEffect(() => {
    if (!currentFlow) {
      navigate('/flows');
    }
  }, [currentFlow, navigate]);

  const handleNextSession = () => {
    if (currentSession < currentFlow.sessions.length - 1) {
      setCurrentSession(currentSession + 1);
    } else {
      // Flow completed
      navigate('/flows');
    }
  };

  const handlePreviousSession = () => {
    if (currentSession > 0) {
      setCurrentSession(currentSession - 1);
    }
  };

  const handleBackToFlows = () => {
    navigate('/flows');
  };

  if (!currentFlow) {
    return null;
  }

  const content = {
    english: {
      session: 'Session',
      of: 'of',
      next: 'Next',
      previous: 'Previous',
      complete: 'Complete',
      back: '← Back to Flows',
      play: 'Play Audio',
      pause: 'Pause Audio',
      reflection: 'Reflection',
      exercise: 'Exercise',
      dua: 'Dua'
    },
    dutch: {
      session: 'Sessie',
      of: 'van',
      next: 'Volgende',
      previous: 'Vorige',
      complete: 'Voltooien',
      back: '← Terug naar Flows',
      play: 'Audio Afspelen',
      pause: 'Audio Pauseren',
      reflection: 'Reflectie',
      exercise: 'Oefening',
      dua: 'Dua'
    }
  };

  const currentContent = content[language] || content.english;

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: theme.background,
        ...backgroundStyle,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Header */}
      <div className="p-6 border-b border-opacity-20" style={{ borderColor: theme.border }}>
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBackToFlows}
            className="mb-4 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: theme.text,
              border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
            }}
          >
            {currentContent.back}
          </button>

          <div className="text-center">
            <h1 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: theme.text }}
            >
              {currentFlow.title}
            </h1>
            <p 
              className="text-lg opacity-80 mb-4"
              style={{ color: theme.text }}
            >
              {currentFlow.subtitle}
            </p>
            
            {/* Progress */}
            <div className="flex items-center justify-center space-x-2 text-sm opacity-70">
              <span>{currentContent.session} {currentSession + 1}</span>
              <span>{currentContent.of}</span>
              <span>{currentFlow.sessions.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Session Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {currentSessionData && (
            <div className="space-y-8">
              {/* Session Title */}
              <div className="text-center">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: theme.text }}
                >
                  {currentSessionData.title}
                </h2>
                <p 
                  className="text-sm opacity-70"
                  style={{ color: theme.text }}
                >
                  {currentSessionData.duration}
                </p>
              </div>

              {/* Audio Player */}
              <div className="text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-6 py-3 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: theme.primary || '#6366f1',
                    color: 'white'
                  }}
                >
                  {isPlaying ? currentContent.pause : currentContent.play}
                </button>
              </div>

              {/* Content Sections */}
              <div className="space-y-6">
                {/* Quran */}
                {currentSessionData.content.quran && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: theme.text }}>
                      Qur'an
                    </h3>
                    <blockquote className="text-lg italic mb-2" style={{ color: theme.text }}>
                      "{currentSessionData.content.quran.verse}"
                    </blockquote>
                    <p className="text-sm opacity-70" style={{ color: theme.text }}>
                      {currentSessionData.content.quran.reference}
                    </p>
                  </div>
                )}

                {/* Hadith */}
                {currentSessionData.content.hadith && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: theme.text }}>
                      Hadith
                    </h3>
                    <blockquote className="text-lg italic mb-2" style={{ color: theme.text }}>
                      "{currentSessionData.content.hadith.text}"
                    </blockquote>
                    <p className="text-sm opacity-70" style={{ color: theme.text }}>
                      {currentSessionData.content.hadith.reference}
                    </p>
                  </div>
                )}

                {/* Reflection */}
                {currentSessionData.content.reflection && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: theme.text }}>
                      {currentContent.reflection}
                    </h3>
                    <p className="text-lg" style={{ color: theme.text }}>
                      {currentSessionData.content.reflection}
                    </p>
                  </div>
                )}

                {/* Exercise */}
                {currentSessionData.content.exercise && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: theme.text }}>
                      {currentContent.exercise}
                    </h3>
                    <p className="text-lg" style={{ color: theme.text }}>
                      {currentSessionData.content.exercise}
                    </p>
                  </div>
                )}

                {/* Dua */}
                {currentSessionData.content.dua && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: theme.text }}>
                      {currentContent.dua}
                    </h3>
                    <p className="text-lg" style={{ color: theme.text }}>
                      {currentSessionData.content.dua}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 border-t border-opacity-20" style={{ borderColor: theme.border }}>
        <div className="max-w-4xl mx-auto flex justify-between">
          <button
            onClick={handlePreviousSession}
            disabled={currentSession === 0}
            className="px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: theme.text,
              border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
            }}
          >
            {currentContent.previous}
          </button>

          <button
            onClick={handleNextSession}
            className="px-6 py-3 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: theme.primary || '#6366f1',
              color: 'white'
            }}
          >
            {currentSession === currentFlow.sessions.length - 1 
              ? currentContent.complete 
              : currentContent.next
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowSessionPage; 
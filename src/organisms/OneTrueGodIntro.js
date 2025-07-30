import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import ProgressBar from './ProgressBar';

const OneTrueGodIntro = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme, themeName } = useTheme();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ 
          color: theme.secondary, 
          textShadow: themeName === 'neon' ? `0 0 10px ${theme.secondary}` : 'none' 
        }}>
          The One True God
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-8" style={{ 
          color: theme.secondary, 
          textShadow: themeName === 'neon' ? `0 0 10px ${theme.secondary}, 0 0 20px ${theme.secondary}` : 'none' 
        }}>
          The God of Adam
        </h2>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <div 
                className="aspect-video rounded-lg border-2 flex items-center justify-center"
                style={{
                  backgroundColor: themeName === 'story' ? theme.background : '#1f2937',
                  borderColor: theme.border
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-lg" style={{ color: theme.text }}>Introduction Video</p>
                  <p className="text-sm mt-2" style={{ color: themeName === 'story' ? theme.border : '#6b7280' }}>Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          <button
            onClick={() => navigate('/names')}
            className="px-8 py-4 text-lg font-bold rounded-lg border-2 transition-all duration-200 active:scale-95"
            style={{
              color: theme.secondary,
              borderColor: theme.secondary,
              backgroundColor: 'transparent',
              width: '200px',
              boxShadow: themeName === 'neon' ? `0 0 10px ${theme.secondary}, 0 0 20px ${theme.secondary}` : 'none'
            }}
            onMouseEnter={(e) => {
              if (themeName === 'neon') {
                e.target.style.backgroundColor = `${theme.secondary}1a`;
                e.target.style.boxShadow = `0 0 15px ${theme.secondary}, 0 0 30px ${theme.secondary}, inset 0 0 10px ${theme.secondary}4d`;
              } else {
                e.target.style.backgroundColor = theme.secondary;
                e.target.style.color = theme.primary;
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 4px 12px rgba(196,164,132,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (themeName === 'neon') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = `0 0 10px ${theme.secondary}, 0 0 20px ${theme.secondary}`;
              } else {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = theme.secondary;
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }
            }}
            onMouseDown={(e) => {
              if (themeName === 'neon') {
                e.target.style.transform = 'scale(0.95)';
                e.target.style.boxShadow = `0 0 5px ${theme.secondary}, 0 0 10px ${theme.secondary}, inset 0 0 15px ${theme.secondary}80`;
              } else {
                e.target.style.transform = 'scale(0.98)';
              }
            }}
            onMouseUp={(e) => {
              if (themeName === 'neon') {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = `0 0 15px ${theme.secondary}, 0 0 30px ${theme.secondary}, inset 0 0 10px ${theme.secondary}4d`;
              } else {
                e.target.style.transform = 'scale(1.02)';
              }
            }}
          >
            Names of The One True God
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 text-base rounded-lg border-2 transition-all duration-200 active:scale-95"
            style={{
              color: theme.primary,
              borderColor: theme.primary,
              backgroundColor: 'transparent',
              width: '200px',
              boxShadow: themeName === 'neon' ? `0 0 10px ${theme.primary}, 0 0 20px ${theme.primary}` : 'none'
            }}
            onMouseEnter={(e) => {
              if (themeName === 'neon') {
                e.target.style.backgroundColor = `${theme.primary}1a`;
                e.target.style.boxShadow = `0 0 15px ${theme.primary}, 0 0 30px ${theme.primary}, inset 0 0 10px ${theme.primary}4d`;
              } else {
                e.target.style.backgroundColor = theme.primary;
                e.target.style.color = theme.background;
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 4px 12px rgba(196,164,132,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (themeName === 'neon') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = `0 0 10px ${theme.primary}, 0 0 20px ${theme.primary}`;
              } else {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = theme.primary;
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }
            }}
            onMouseDown={(e) => {
              if (themeName === 'neon') {
                e.target.style.transform = 'scale(0.95)';
                e.target.style.boxShadow = `0 0 5px ${theme.primary}, 0 0 10px ${theme.primary}, inset 0 0 15px ${theme.primary}80`;
              } else {
                e.target.style.transform = 'scale(0.98)';
              }
            }}
            onMouseUp={(e) => {
              if (themeName === 'neon') {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = `0 0 15px ${theme.primary}, 0 0 30px ${theme.primary}, inset 0 0 10px ${theme.primary}4d`;
              } else {
                e.target.style.transform = 'scale(1.02)';
              }
            }}
          >
            Back to Wheel
          </button>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          currentStep={2} 
          totalSteps={4} 
          steps={['Topic', 'Introduction', 'Overview', 'Detail']} 
        />
      </div>
    </div>
  );
};

export default OneTrueGodIntro; 
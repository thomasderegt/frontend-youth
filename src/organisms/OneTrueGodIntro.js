import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getBackgroundStyle } from '../utils/backgrounds';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import ProgressBar from '../atoms/ProgressBar';

const OneTrueGodIntro = () => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();

  const navigationButtons = [
    {
      id: 'wheel',
      label: 'Back to Wheel',
      color: '#8B5CF6',
      onClick: () => navigate('/home')
    }
  ];

  const progressBar = {
    currentStep: 2,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center p-6"
      style={{
        ...getBackgroundStyle(themeName),
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <MenuText variant="title" className="mb-8" color="#ffffff">
          The One True God
        </MenuText>
        
        {/* Subtitle */}
        <MenuText variant="subtitle" className="mb-8" color="#ffffff">
          The God of Adam
        </MenuText>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <video 
                className="w-full rounded-lg"
                style={{
                  border: '2px solid #00f2fa',
                  boxShadow: themeName === 'neon' ? `0 0 20px ${theme.secondary}40` : '0 4px 24px rgba(0,0,0,0.1)'
                }}
                controls
                preload="metadata"
              >
                <source src="/Introduction_Video_The_One_True_God.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          {navigationButtons.map((button, index) => (
            <MenuButton
              key={button.id || index}
              onClick={button.onClick}
              color={button.color}
              width="200px"
              size={button.size || 'medium'}
            >
              {button.label}
            </MenuButton>
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar {...progressBar} />
      </div>
    </div>
  );
};

export default OneTrueGodIntro; 
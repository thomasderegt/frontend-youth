import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import ProgressBar from '../atoms/ProgressBar';

const IntroPage = ({ 
  title = 'The One True God',
  subtitle = 'The God of Adam',
  videoPlaceholder = true,
  navigationButtons = [],
  progressBar = null,
  className = '',
  style = {}
}) => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();

  return (
    <MenuContainer variant="default" className={`min-h-screen text-white flex flex-col items-center justify-center p-6 ${className}`} style={style}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <MenuText variant="title" className="mb-8">
          {title}
        </MenuText>
        
        {/* Subtitle */}
        <MenuText variant="subtitle" className="mb-8">
          {subtitle}
        </MenuText>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          {videoPlaceholder && (
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
          )}
        </div>

        {/* Navigation Buttons */}
        {navigationButtons.length > 0 && (
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
        )}

        {/* Progress Bar */}
        {progressBar && (
          <ProgressBar {...progressBar} />
        )}
      </div>
    </MenuContainer>
  );
};

export default IntroPage; 
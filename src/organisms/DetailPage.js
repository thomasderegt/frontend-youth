import React from 'react';
import { useTheme } from '../context/ThemeContext';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import ProgressBar from '../atoms/ProgressBar';

const DetailPage = ({ 
  title,
  subtitle,
  description = '',
  navigationButtons = [],
  progressBar = null,
  className = '',
  style = {}
}) => {
  const { theme, themeName } = useTheme();

  return (
    <MenuContainer variant="default" className={`p-6 flex flex-col items-center justify-center min-h-screen text-white ${className}`} style={style}>
      {/* Circular Display */}
      <div
        className="border-4 rounded-full flex flex-col items-center justify-center"
        style={{
          color: theme.secondary,
          borderColor: theme.secondary,
          backgroundColor: themeName === 'story' ? theme.background : '#000',
          width: '350px',
          height: '350px',
          padding: '20px',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          boxShadow: themeName === 'neon' ? `0 0 20px ${theme.secondary}40` : '0 4px 24px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '8px' }}>{title}</div>
        <div className="text-lg">{subtitle}</div>
      </div>

      {/* Description */}
      {description && (
        <MenuText variant="body" className="text-lg text-teal-200 mb-6 text-center">
          {description}
        </MenuText>
      )}

      {/* Navigation Buttons */}
      {navigationButtons.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          {navigationButtons.map((button, index) => (
            <MenuButton
              key={button.id || index}
              onClick={button.onClick}
              color={button.color}
              width="200px"
              size="medium"
            >
              {button.label}
            </MenuButton>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {progressBar && (
        <div className="mt-8">
          <ProgressBar {...progressBar} />
        </div>
      )}
    </MenuContainer>
  );
};

export default DetailPage; 
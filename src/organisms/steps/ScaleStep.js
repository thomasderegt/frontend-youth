import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { useButtonStyles } from '../../utils/buttonStyles';

const ScaleStep = ({ step, onNext, onPrevious, onSaveProgress }) => {
  const { themeName } = useTheme();
  const { nightMode } = useSettings();
  const [selectedValue, setSelectedValue] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const { primaryButtonStyle, secondaryButtonStyle, buttonContainerStyle, getHoverEffects } = useButtonStyles();

  const handleValueSelect = (value) => {
    setSelectedValue(value);
    setIsValid(true);
  };

  const handleNext = () => {
    if (selectedValue !== null) {
      onNext({ value: selectedValue });
    }
  };

  const scaleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    textAlign: 'center',
    marginBottom: '1rem',
    color: themeName === 'neon' && nightMode ? '#cccccc' : '#666666',
    fontStyle: 'italic'
  };

  const promptStyle = {
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
    textAlign: 'center',
    marginBottom: '2rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    lineHeight: '1.5'
  };

  const scaleContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    padding: '1rem',
    background: themeName === 'neon' ? 
      (nightMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)') : 
      'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)'
  };

  const scaleNumberStyle = (value) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    padding: '0.75rem',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    background: selectedValue === value ? 
      'rgba(139, 92, 246, 0.8)' : 
      'rgba(255, 255, 255, 0.1)',
    border: selectedValue === value ? 
      '2px solid #8B5CF6' : 
      '2px solid transparent',
    color: selectedValue === value ? 
      '#ffffff' : 
      (themeName === 'neon' && nightMode ? '#ffffff' : '#000000'),
    fontWeight: selectedValue === value ? 'bold' : 'normal',
    transform: selectedValue === value ? 'scale(1.1)' : 'scale(1)',
    boxShadow: selectedValue === value ? 
      '0 4px 15px rgba(139, 92, 246, 0.4)' : 
      'none'
  });

  const numberStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem'
  };

  const labelStyle = {
    fontSize: '0.7rem',
    textAlign: 'center',
    lineHeight: '1.2',
    maxWidth: '60px'
  };



  const scaleLabels = {
    1: 'Very distant',
    2: 'Quite distant',
    3: 'Somewhat distant',
    4: 'A bit distant',
    5: 'Neutral',
    6: 'Somewhat close',
    7: 'Quite close',
    8: 'Very close',
    9: 'Extremely close',
    10: 'Completely connected'
  };

  return (
    <div style={scaleStyle}>
      <h2 style={titleStyle}>{step.title}</h2>
      <p style={subtitleStyle}>{step.subtitle}</p>
      <p style={promptStyle}>{step.content.prompt}</p>

      <div style={scaleContainerStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <div
            key={value}
            style={scaleNumberStyle(value)}
            onClick={() => handleValueSelect(value)}
            onMouseEnter={(e) => {
              if (selectedValue !== value) {
                e.target.style.background = 'rgba(139, 92, 246, 0.3)';
                e.target.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedValue !== value) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            <div style={numberStyle}>{value}</div>
            <div style={labelStyle}>{scaleLabels[value]}</div>
          </div>
        ))}
      </div>

      <div style={buttonContainerStyle}>
        <button
          style={secondaryButtonStyle}
          onClick={onPrevious}
          {...getHoverEffects(false)}
        >
          Previous
        </button>
        <button
          style={{
            ...primaryButtonStyle,
            opacity: isValid ? 1 : 0.5,
            cursor: isValid ? 'pointer' : 'not-allowed'
          }}
          onClick={handleNext}
          disabled={!isValid}
          {...(isValid ? getHoverEffects(true) : {})}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ScaleStep; 
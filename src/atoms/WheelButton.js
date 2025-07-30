import React from 'react';
import { useTheme } from '../context/ThemeContext';

const WheelButton = ({ 
  children, 
  onClick, 
  color, 
  width = '80px',
  className = ''
}) => {
  const { theme, themeName } = useTheme();
  const buttonColor = color || theme.secondary;

  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1.5 text-xs rounded border transition-all duration-200 active:scale-95 ${className}`}
      style={{
        color: buttonColor,
        borderColor: buttonColor,
        backgroundColor: 'transparent',
        width: width,
        boxShadow: themeName === 'neon' ? `0 0 8px ${buttonColor}, 0 0 16px ${buttonColor}` : 'none'
      }}
      onMouseEnter={(e) => {
        if (themeName === 'neon') {
          e.target.style.backgroundColor = `${buttonColor}1a`; // 10% opacity
          e.target.style.boxShadow = `0 0 15px ${buttonColor}, 0 0 30px ${buttonColor}, inset 0 0 10px ${buttonColor}4d`;
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
          e.target.style.boxShadow = `0 0 10px ${buttonColor}, 0 0 20px ${buttonColor}`;
        } else {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = buttonColor;
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }
      }}
      onMouseDown={(e) => {
        if (themeName === 'neon') {
          e.target.style.transform = 'scale(0.95)';
          e.target.style.boxShadow = `0 0 5px ${buttonColor}, 0 0 10px ${buttonColor}, inset 0 0 15px ${buttonColor}80`;
        } else {
          e.target.style.transform = 'scale(0.98)';
        }
      }}
      onMouseUp={(e) => {
        if (themeName === 'neon') {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = `0 0 15px ${buttonColor}, 0 0 30px ${buttonColor}, inset 0 0 10px ${buttonColor}4d`;
        } else {
          e.target.style.transform = 'scale(1.02)';
        }
      }}
    >
      {children}
    </button>
  );
};

export default WheelButton; 
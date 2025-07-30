import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const { theme, themeName } = useTheme();

  const getButtonStyle = () => {
    const baseStyle = {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      ...props.style
    };

    if (themeName === 'story') {
      return {
        ...baseStyle,
        backgroundColor: variant === 'primary' ? theme.primary : theme.secondary,
        color: variant === 'primary' ? theme.secondary : theme.primary,
        border: `2px solid ${theme.border}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      };
    } else {
      // Neon theme
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        color: variant === 'primary' ? theme.primary : theme.secondary,
        border: `2px solid ${variant === 'primary' ? theme.primary : theme.secondary}`,
        boxShadow: `0 0 10px ${variant === 'primary' ? theme.primary : theme.secondary}`,
      };
    }
  };

  return (
    <button
      onClick={onClick}
      className={className}
      style={getButtonStyle()}
      {...props}
    >
      {children}
    </button>
  );
};

export default ThemeButton; 
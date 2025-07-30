import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MenuItem = ({ 
  children, 
  onClick, 
  className = '', 
  style = {},
  disabled = false,
  active = false,
  hover = false
}) => {
  const baseClasses = 'transition-all duration-200 cursor-pointer';
  const activeClasses = active ? 'bg-blue-600 bg-opacity-20 border-blue-500' : '';
  const hoverClasses = hover ? 'hover:scale-105' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const { theme, themeName } = useTheme();
  
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${activeClasses} ${hoverClasses} ${disabledClasses} ${className}`}
      style={themeName === 'story' ? {
        color: theme.text,
        borderColor: theme.border,
        boxShadow: 'none',
        ...style
      } : style}
      onMouseEnter={e => {
        if (!disabled && themeName === 'story') {
          e.target.style.backgroundColor = '#f6f1eb';
          e.target.style.color = theme.text;
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 4px 12px rgba(196,164,132,0.3)';
        }
      }}
      onMouseLeave={e => {
        if (!disabled && themeName === 'story') {
          e.target.style.backgroundColor = '#f6f1eb';
          e.target.style.color = theme.text;
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }
      }}
    >
      {children}
    </div>
  );
};

export default MenuItem; 
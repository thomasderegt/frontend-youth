import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MenuText = ({ 
  children, 
  variant = 'body',
  color = '#ffffff',
  className = '',
  style = {}
}) => {
  const variantClasses = {
    title: 'text-3xl md:text-5xl font-bold',
    subtitle: 'text-base sm:text-2xl font-semibold',
    body: 'text-lg',
    caption: 'text-sm',
    label: 'text-base font-medium'
  };

  const baseClasses = variantClasses[variant] || variantClasses.body;
  const { theme, themeName } = useTheme();

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={themeName === 'story' ? {
        color: variant === 'title' ? theme.primary : variant === 'subtitle' ? theme.secondary : theme.text,
        textShadow: 'none',
        ...style
      } : {
        color: color,
        textShadow: `0 0 6px ${color}`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default MenuText; 
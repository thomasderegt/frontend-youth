import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MenuIcon = ({ 
  icon, 
  size = 'medium',
  color,
  className = '',
  style = {}
}) => {
  const { theme, themeName } = useTheme();
  const iconColor = color || theme.secondary;
  
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl',
    xlarge: 'text-4xl'
  };

  const baseClasses = `${sizeClasses[size]} ${className}`;

  return (
    <div
      className={baseClasses}
      style={{
        color: iconColor,
        textShadow: themeName === 'neon' ? `0 0 6px ${iconColor}` : 'none',
        ...style
      }}
    >
      {icon}
    </div>
  );
};

export default MenuIcon; 
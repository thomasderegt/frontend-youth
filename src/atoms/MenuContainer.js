import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MenuContainer = ({ 
  children, 
  variant = 'default',
  className = '',
  style = {}
}) => {
  const { theme, themeName } = useTheme();
  
  const variantClasses = {
    default: 'min-h-screen flex flex-col items-center justify-center p-4',
    modal: 'fixed inset-0 flex items-center justify-center z-50 p-4',
    fullscreen: 'min-h-screen w-full'
  };

  const baseClasses = variantClasses[variant] || variantClasses.default;

  const getVariantStyle = () => {
    if (variant === 'card') {
      return {
        background: themeName === 'story' 
          ? `linear-gradient(135deg, ${theme.background} 0%, ${theme.primary}20 100%)`
          : `linear-gradient(135deg, #1f2937 0%, #111827 100%)`,
        borderRadius: '8px',
        padding: '24px',
        border: `1px solid ${theme.border}`,
        boxShadow: themeName === 'neon' ? `0 0 20px ${theme.secondary}40` : '0 4px 24px rgba(0,0,0,0.1)'
      };
    }
    return {};
  };

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={{ ...getVariantStyle(), ...style }}
    >
      {children}
    </div>
  );
};

export default MenuContainer; 
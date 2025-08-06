import React from 'react';
import { useButtonStyles } from '../utils/buttonStyles';

const StepButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  className = '',
  ...props 
}) => {
  const { primaryButtonStyle, secondaryButtonStyle, getHoverEffects } = useButtonStyles();
  
  const getButtonStyle = () => {
    const baseStyle = variant === 'primary' ? primaryButtonStyle : secondaryButtonStyle;
    return {
      ...baseStyle,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer'
    };
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyle()}
      {...(disabled ? {} : getHoverEffects(variant === 'primary'))}
      {...props}
    >
      {children}
    </button>
  );
};

export default StepButton; 
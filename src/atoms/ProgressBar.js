import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProgressBar = ({ currentStep, totalSteps, steps }) => {
  const { theme, themeName } = useTheme();
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-2">
      {/* Progress Bar */}
      <div className="mb-1">
        <div 
          className="w-full rounded-full h-0.5"
          style={{
            backgroundColor: themeName === 'story' ? theme.border : '#1f2937',
            boxShadow: themeName === 'neon' ? `0 0 3px ${theme.secondary}` : 'none'
          }}
        >
          <div 
            className="h-0.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ 
              width: `${progressPercentage}%`,
              backgroundColor: theme.secondary,
            }}
          ></div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-4 h-4 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                index < currentStep 
                  ? 'text-black' 
                  : index === currentStep - 1 
                    ? 'text-white' 
                    : 'text-gray-500'
              }`}
              style={{
                backgroundColor: index < currentStep 
                  ? theme.secondary
                  : index === currentStep - 1 
                    ? theme.secondary
                    : themeName === 'story' ? theme.border : '#1f2937',
              }}
            >
              {index < currentStep - 1 ? '✓' : index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar; 
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps, steps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-2">
      {/* Progress Bar */}
      <div className="mb-1">
        <div 
          className="w-full bg-gray-900 rounded-full h-0.5"
          style={{
            boxShadow: '0 0 3px #00f2fa'
          }}
        >
          <div 
            className="h-0.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ 
              width: `${progressPercentage}%`,
              backgroundColor: '#00f2fa',
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
                  ? '#00f2fa' 
                  : index === currentStep - 1 
                    ? '#00f2fa' 
                    : '#1f2937',
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
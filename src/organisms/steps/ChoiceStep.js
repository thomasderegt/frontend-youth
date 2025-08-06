import React, { useState } from 'react';
import { useButtonStyles } from '../../utils/buttonStyles';

const ChoiceStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const [selectedOption, setSelectedOption] = useState(null);
  const { primaryButtonStyle, secondaryButtonStyle, buttonContainerStyle, getHoverEffects } = useButtonStyles();
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  
  const handleContinue = () => {
    if (selectedOption) {
      onNext({ visualization: selectedOption });
    }
  };
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.subtitle}</p>
        </div>
        
        {/* Prompt */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            {content.prompt}
          </h3>
          
          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`p-6 rounded-lg border-2 transition-all duration-200 text-center ${
                  selectedOption?.id === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="mb-3">
                  {option.id === 'door' && (
                    <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  )}
                  {option.id === 'bridge' && (
                    <div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  )}
                  {option.id === 'river' && (
                    <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="text-gray-800 font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div style={buttonContainerStyle}>
          <button
            style={secondaryButtonStyle}
            onClick={onPrevious}
            {...getHoverEffects(false)}
          >
            ← Previous
          </button>
          <button
            style={{
              ...primaryButtonStyle,
              opacity: selectedOption ? 1 : 0.5,
              cursor: selectedOption ? 'pointer' : 'not-allowed'
            }}
            onClick={handleContinue}
            disabled={!selectedOption}
            {...(selectedOption ? getHoverEffects(true) : {})}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceStep; 
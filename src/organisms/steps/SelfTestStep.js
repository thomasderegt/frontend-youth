import React, { useState } from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const SelfTestStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  
  const handleContinue = () => {
    if (selectedOption) {
      onNext({ sincerity: selectedOption.value });
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
        
        {/* Question */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            {content.question}
          </h3>
          
          {/* Options */}
          <div className="space-y-4">
            {content.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedOption?.id === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 ${
                    selectedOption?.id === option.id
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption?.id === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedOption
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfTestStep; 
import React, { useState } from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const InputStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const [inputValue, setInputValue] = useState('');
  
  const handleContinue = () => {
    if (inputValue.trim()) {
      onNext({ dua: inputValue });
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
        
        {/* Input Form */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          {/* Instruction */}
          {content.instruction && (
            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">{content.instruction}</p>
            </div>
          )}
          
          {/* Text Area */}
          <div className="mb-6">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={content.placeholder}
              maxLength={content.maxLength || 500}
              className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg resize-none focus:border-blue-500 focus:outline-none transition-colors"
              style={{ fontFamily: 'serif' }}
            />
            <div className="text-right mt-2">
              <span className="text-sm text-gray-500">
                {inputValue.length}/{content.maxLength || 500}
              </span>
            </div>
          </div>
          
          {/* Example */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">💡 Example:</p>
            <p className="text-sm text-gray-700 italic">
              "Ya Allah, I messed up, but I know Your mercy is greater than my mistakes. Help me return to You with sincerity."
            </p>
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
            disabled={!inputValue.trim()}
            className={`px-6 py-2 rounded-lg transition-colors ${
              inputValue.trim()
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

export default InputStep; 
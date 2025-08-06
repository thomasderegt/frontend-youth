import React, { useState } from 'react';
import StepTitle from '../../atoms/StepTitle';
import StepButton from '../../atoms/StepButton';

const QuestionStep = ({ step, onNext, onPrevious }) => {
  const { title, subtitle, content, navigation } = step;
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleOptionClick = (option) => {
    if (content.allowMultiple) {
      setSelectedOptions(prev => 
        prev.includes(option.value)
          ? prev.filter(v => v !== option.value)
          : [...prev, option.value]
      );
    } else {
      setSelectedOptions([option.value]);
    }
  };
  
  const handleNext = () => {
    onNext(selectedOptions);
  };
  
  const canProceed = selectedOptions.length > 0;
  
  return (
    <div className="flex flex-col min-h-96">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="flex-1">
        <p className="text-lg text-gray-700 mb-6 text-center">
          {content.question}
        </p>
        
        <div className="space-y-3">
          {content.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedOptions.includes(option.value)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium text-gray-900">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        {navigation.previous && (
          <StepButton
            onClick={onPrevious}
            variant="secondary"
          >
            ← Vorige
          </StepButton>
        )}
        
        <StepButton
          onClick={handleNext}
          disabled={!canProceed}
          variant="primary"
          className="ml-auto"
        >
          Volgende →
        </StepButton>
      </div>
    </div>
  );
};

export default QuestionStep; 
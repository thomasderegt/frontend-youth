import React, { useState } from 'react';
import StepTitle from '../../atoms/StepTitle';
import StepButton from '../../atoms/StepButton';

const CommitmentStep = ({ step, onNext, onPrevious }) => {
  const { title, subtitle, content, navigation } = step;
  const [selectedCommitment, setSelectedCommitment] = useState('');
  
  const handleCommitmentSelect = (commitment) => {
    setSelectedCommitment(commitment);
  };
  
  const handleNext = () => {
    onNext(selectedCommitment);
  };
  
  const canProceed = selectedCommitment !== '';
  
  return (
    <div className="flex flex-col min-h-96">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="flex-1">
        <p className="text-lg text-gray-700 mb-6 text-center">
          {content.message}
        </p>
        
        <div className="space-y-3">
          {content.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleCommitmentSelect(option.value)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedCommitment === option.value
                  ? 'border-green-500 bg-green-50'
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
          Ik Beloof →
        </StepButton>
      </div>
    </div>
  );
};

export default CommitmentStep; 
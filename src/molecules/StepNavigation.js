import React from 'react';
import StepButton from '../atoms/StepButton';

const StepNavigation = ({ 
  onPrevious, 
  onNext, 
  onSkip, 
  canGoPrevious = false, 
  canGoNext = false, 
  canSkip = false,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="flex-1">
        {canGoPrevious && (
          <StepButton
            onClick={onPrevious}
            variant="secondary"
            className="mr-4"
          >
            ← Vorige
          </StepButton>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {canSkip && (
          <StepButton
            onClick={onSkip}
            variant="outline"
          >
            Overslaan
          </StepButton>
        )}
        
        {canGoNext && (
          <StepButton
            onClick={onNext}
            variant="primary"
          >
            Volgende →
          </StepButton>
        )}
      </div>
    </div>
  );
};

export default StepNavigation; 
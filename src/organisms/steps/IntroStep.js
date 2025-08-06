import React from 'react';
import StepTitle from '../../atoms/StepTitle';
import { useButtonStyles } from '../../utils/buttonStyles';

const IntroStep = ({ step, onNext, onPrevious }) => {
  const { title, subtitle, content } = step;
  const { primaryButtonStyle, secondaryButtonStyle, buttonContainerStyle, getHoverEffects } = useButtonStyles();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="mb-8">
        {content.image && (
          <div className="mb-6">
            <img 
              src={content.image} 
              alt={title}
              className="w-48 h-48 object-cover rounded-lg mx-auto"
            />
          </div>
        )}
        
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white border-opacity-50">
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
            {content.text}
          </p>
        </div>
      </div>
      
      <div style={buttonContainerStyle}>
        {onPrevious && (
          <button
            style={secondaryButtonStyle}
            onClick={onPrevious}
            {...getHoverEffects(false)}
          >
            ← Previous
          </button>
        )}
        <button
          style={primaryButtonStyle}
          onClick={onNext}
          {...getHoverEffects(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default IntroStep; 
import React from 'react';
import { useButtonStyles } from '../../utils/buttonStyles';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const VisualCardStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const { primaryButtonStyle, secondaryButtonStyle, buttonContainerStyle, getHoverEffects } = useButtonStyles();
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Visual Card */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Image */}
          <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Failed to load background image');
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-800 mb-4 italic">
              "{content.quote}"
            </blockquote>
            <p className="text-gray-600">{step.subtitle}</p>
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
            style={primaryButtonStyle}
            onClick={onNext}
            {...getHoverEffects(true)}
          >
            {content.actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualCardStep; 
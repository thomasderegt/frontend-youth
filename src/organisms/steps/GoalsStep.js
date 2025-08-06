import React from 'react';
import { useButtonStyles } from '../../utils/buttonStyles';

const GoalsStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const { primaryButtonStyle, buttonContainerStyle, getHoverEffects } = useButtonStyles();
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.subtitle}</p>
        </div>
        
        {/* Goals */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          {/* Message */}
          {content.message && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">{content.message}</p>
            </div>
          )}
          
          {/* Goals List */}
          <div className="space-y-4">
            {content.goals.map((goal) => (
              <div key={goal.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 text-2xl">{goal.icon}</div>
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed">{goal.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div style={buttonContainerStyle}>
          <button
            style={primaryButtonStyle}
            onClick={onNext}
            {...getHoverEffects(true)}
          >
            Begin Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalsStep; 
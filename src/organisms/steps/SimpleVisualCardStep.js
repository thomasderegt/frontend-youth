import React from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const SimpleVisualCardStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-2xl w-full">
        {/* Content Card */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Background Test</h2>
            <p className="text-lg text-gray-600 mb-6">This should show the BackgroundHomePageYouth4 image as the page background</p>
            
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <blockquote className="text-xl font-medium text-gray-800 mb-6 italic">
              "{content.quote}"
            </blockquote>
            <p className="text-gray-600 mb-8">{step.subtitle}</p>
            
            <button
              onClick={onNext}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {content.actionText}
            </button>
          </div>
        </div>
        
        {/* Debug Info */}
        <div className="mt-4 p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <p className="text-sm">Step Type: {step.type}</p>
          <p className="text-sm">Step ID: {step.id}</p>
          <p className="text-sm">Content: {JSON.stringify(content)}</p>
          <p className="text-sm">Background Image: {backgroundImage}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleVisualCardStep; 
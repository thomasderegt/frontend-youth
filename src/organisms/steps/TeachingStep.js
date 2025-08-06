import React from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const TeachingStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.subtitle}</p>
        </div>
        
        {/* Content */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          {/* Text Content */}
          {content.text && (
            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">{content.text}</p>
            </div>
          )}
          
          {/* Steps */}
          {content.steps && (
            <div className="space-y-4">
              {content.steps.map((stepItem, index) => (
                <div key={stepItem.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{stepItem.title}</h3>
                    <p className="text-gray-600">{stepItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Illustration */}
          {content.illustration && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Tawbah Steps Diagram</p>
              </div>
            </div>
          )}
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
            onClick={onNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachingStep; 
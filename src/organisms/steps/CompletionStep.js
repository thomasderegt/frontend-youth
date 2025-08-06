import React from 'react';
import StepTitle from '../../atoms/StepTitle';
import StepButton from '../../atoms/StepButton';

const CompletionStep = ({ step, onFinish, onPrevious }) => {
  const { title, subtitle, content, navigation } = step;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto mb-6">
          {content.message}
        </p>
        
        {content.nextSteps && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Volgende Stappen:
            </h3>
            <ul className="space-y-2 text-left">
              {content.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-blue-800">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex space-x-4">
        {navigation.previous && (
          <StepButton
            onClick={onPrevious}
            variant="secondary"
          >
            ← Terug
          </StepButton>
        )}
        
        <StepButton
          onClick={onFinish}
          variant="primary"
        >
          Voltooid
        </StepButton>
      </div>
    </div>
  );
};

export default CompletionStep; 
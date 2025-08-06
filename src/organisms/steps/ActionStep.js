import React from 'react';
import StepTitle from '../../atoms/StepTitle';
import StepButton from '../../atoms/StepButton';

const ActionStep = ({ step, onNext, onPrevious }) => {
  const { title, subtitle, content, navigation } = step;
  
  return (
    <div className="flex flex-col min-h-96">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="flex-1">
        {content.steps && (
          <div className="space-y-4">
            {content.steps.map((action, index) => (
              <div key={action.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {action.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {action.action}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {content.tips && (
          <div className="space-y-4">
            {content.tips.map((tip, index) => (
              <div key={tip.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {tip.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {tip.difficulty}
                      </div>
                      {tip.resources && (
                        <div className="text-sm text-gray-500">
                          {tip.resources.length} bronnen
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {content.methods && (
          <div className="space-y-4">
            {content.methods.map((method, index) => (
              <div key={method.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {method.description}
                    </p>
                    {method.resources && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Bronnen:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {method.resources.map((resource, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
          onClick={onNext}
          variant="primary"
          className="ml-auto"
        >
          Volgende →
        </StepButton>
      </div>
    </div>
  );
};

export default ActionStep; 
import React from 'react';
import StepTitle from '../../atoms/StepTitle';
import StepButton from '../../atoms/StepButton';

const ReflectionStep = ({ step, onNext, onPrevious }) => {
  const { title, subtitle, content, navigation } = step;
  
  return (
    <div className="flex flex-col min-h-96">
      <StepTitle title={title} subtitle={subtitle} />
      
      <div className="flex-1">
        {content.verse && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <span className="text-sm text-green-600 font-medium">
                Koran {content.verse}
              </span>
            </div>
            
            {content.arabic && (
              <div className="text-center mb-4">
                <p className="text-2xl text-green-800 leading-relaxed">
                  {content.arabic}
                </p>
              </div>
            )}
            
            {content.translation && (
              <div className="text-center mb-4">
                <p className="text-lg text-gray-700 italic">
                  "{content.translation}"
                </p>
              </div>
            )}
            
            {content.explanation && (
              <div className="text-center">
                <p className="text-gray-600">
                  {content.explanation}
                </p>
              </div>
            )}
          </div>
        )}
        
        {content.names && (
          <div className="space-y-4">
            {content.names.map((name, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-center">
                  <p className="text-xl text-blue-800 mb-2">
                    {name.arabic}
                  </p>
                  <p className="text-lg font-medium text-blue-700 mb-1">
                    {name.transliteration}
                  </p>
                  <p className="text-gray-600">
                    {name.meaning}
                  </p>
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

export default ReflectionStep; 
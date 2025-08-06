import React from 'react';

const FallbackStep = ({ step, onNext, onPrevious, onFinish }) => {
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Flow is Working!</h2>
          <p className="text-gray-600 mb-6">
            The test flow is loading correctly. This is a fallback step.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold mb-2">Debug Info:</h3>
            <p className="text-sm text-gray-700">
              Step Type: {step?.type || 'unknown'}<br/>
              Step ID: {step?.id || 'unknown'}<br/>
              Step Title: {step?.title || 'unknown'}
            </p>
          </div>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FallbackStep; 
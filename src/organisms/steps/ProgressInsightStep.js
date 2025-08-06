import React from 'react';

const ProgressInsightStep = ({ step, onNext, onPrevious }) => {
  // Progress insights will be handled by backend
  onNext();
  return null;

  return (
    <div className="min-h-96 flex items-center justify-center">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Progress Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Here's what we've noticed about your spiritual growth:
          </p>
          
          <div className="space-y-4 mb-8">
            {/* Progress insights will be handled by backend */}
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-2xl">📈</span>
              <p className="text-sm text-blue-800 font-medium">
                Your progress insights will be displayed here
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={onNext}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Your Journey
            </button>
            
            {onPrevious && (
              <button
                onClick={onPrevious}
                className="w-full text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressInsightStep; 
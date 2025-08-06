import React, { useState } from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const QuoteStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.subtitle}</p>
        </div>
        
        {/* Quote Card */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 mb-8 border border-green-200">
          {/* Arabic Text */}
          {content.arabic && (
            <div className="text-center mb-6">
              <p className="text-2xl font-arabic text-gray-800 leading-relaxed">
                {content.arabic}
              </p>
            </div>
          )}
          
          {/* Translation */}
          <div className="text-center">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "{content.translation}"
            </blockquote>
            <p className="text-sm text-gray-500">Qur'an 39:53</p>
          </div>
        </div>
        
        {/* Audio Player */}
        {content.audio && (
          <div className="text-center mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play Audio'}
            </button>
          </div>
        )}
        
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

export default QuoteStep; 
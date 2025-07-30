import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProgressBar from './ProgressBar';

const OneTrueGodIntro = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#00f2fa', textShadow: '0 0 10px #00f2fa' }}>
          The One True God
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-8" style={{ color: '#00f2fa', textShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa' }}>
          The God of Adam
        </h2>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-lg border-2 border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-lg text-gray-400">Introduction Video</p>
                  <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          <button
            onClick={() => navigate('/names')}
            className="px-8 py-4 text-lg font-bold rounded-lg border-2 transition-all duration-200 active:scale-95"
            style={{
              color: '#00f2fa',
              borderColor: '#00f2fa',
              backgroundColor: 'transparent',
              width: '200px',
              boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
              e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
            }}
            onMouseDown={(e) => {
              e.target.style.transform = 'scale(0.95)';
              e.target.style.boxShadow = '0 0 5px #00f2fa, 0 0 10px #00f2fa, inset 0 0 15px rgba(0, 242, 250, 0.5)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
            }}
          >
            Names of The One True God
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 text-base rounded-lg border-2 transition-all duration-200 active:scale-95"
            style={{
              color: '#FF007F',
              borderColor: '#FF007F',
              backgroundColor: 'transparent',
              width: '200px',
              boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 0, 127, 0.1)';
              e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.boxShadow = '0 0 10px #FF007F, 0 0 20px #FF007F';
            }}
            onMouseDown={(e) => {
              e.target.style.transform = 'scale(0.95)';
              e.target.style.boxShadow = '0 0 5px #FF007F, 0 0 10px #FF007F, inset 0 0 15px rgba(255, 0, 127, 0.5)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
            }}
          >
            Back to Wheel
          </button>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          currentStep={2} 
          totalSteps={4} 
          steps={['Topic', 'Introduction', 'Overview', 'Detail']} 
        />
      </div>
    </div>
  );
};

export default OneTrueGodIntro; 
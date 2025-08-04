import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import ProgressBar from '../atoms/ProgressBar';

const GuiltReturnIntro = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme, themeName } = useTheme();

  const navigationButtons = [
    {
      id: 'start',
      label: 'Start Journey',
      color: '#00f2fa',
      size: 'large',
      onClick: () => navigate('/guilt-return/flow')
    },
    {
      id: 'back',
      label: 'Back to Home',
      color: '#FF007F',
      onClick: () => navigate('/')
    }
  ];

  const progressBar = {
    currentStep: 1,
    totalSteps: 5,
    steps: ['Introduction', 'Understanding', 'Reflection', 'Healing', 'Growth']
  };

  return (
    <MenuContainer variant="default" className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <MenuText variant="title" className="mb-8">
          💔 Guilt & Return
        </MenuText>
        
        {/* Subtitle */}
        <MenuText variant="subtitle" className="mb-8">
          "Have I gone too far?"
        </MenuText>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <video 
                className="w-full rounded-lg"
                style={{
                  border: '2px solid #00f2fa',
                  boxShadow: themeName === 'neon' ? `0 0 20px ${theme.secondary}40` : '0 4px 24px rgba(0,0,0,0.1)'
                }}
                controls
                preload="metadata"
              >
                <source src="/videos/guilt-return-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg leading-relaxed mb-6">
              We all make mistakes. Sometimes we feel like we've crossed a line that can't be uncrossed. 
              But Allah's mercy is greater than any mistake you could ever make.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-left p-4 rounded-lg" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <h4 className="font-bold mb-2">📚 What you'll learn:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Understanding Tawbah (repentance)</li>
                  <li>• Allah as the All-Forgiving</li>
                  <li>• Spiritual healing process</li>
                  <li>• Moving forward with hope</li>
                </ul>
              </div>
              
              <div className="text-left p-4 rounded-lg" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <h4 className="font-bold mb-2">💭 This flow is for you if:</h4>
                <ul className="text-sm space-y-1">
                  <li>• You feel guilty about past actions</li>
                  <li>• You think you're beyond forgiveness</li>
                  <li>• You want to start fresh</li>
                  <li>• You need spiritual healing</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          {navigationButtons.map((button, index) => (
            <MenuButton
              key={button.id || index}
              onClick={button.onClick}
              color={button.color}
              width="200px"
              size={button.size || 'medium'}
            >
              {button.label}
            </MenuButton>
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar {...progressBar} />
      </div>
    </MenuContainer>
  );
};

export default GuiltReturnIntro; 
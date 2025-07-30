import React from 'react';
import WheelSVG from '../organisms/WheelSVG';
import WheelButton from '../atoms/WheelButton';

const WheelTemplate = ({
  // Wheel data
  size,
  center,
  radius,
  centerRadius,
  outerRadius,
  topics,
  topicFontSize,
  themeName,
  language,
  userGoal,
  theme,
  calculatePoint,
  getCenterFontSize,
  handleClick,
  
  // UI state
  wheelTitle,
  wheelSubtitle,
  isPropertiesPanelOpen,
  setIsPropertiesPanelOpen,
  handleResetOnboarding,
  
  // Settings props
  sharedGoal,
  setSharedGoal,
  sharedLevel,
  setSharedLevel,
  Settings
}) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
        themeName === 'story' ? 'animate-fade-in' : ''
      }`}
      style={{
        color: theme.text,
        fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
      }}
    >
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .topic-hover:hover {
          transform: scale(1.08);
          filter: brightness(1.05);
        }
      `}</style>

      <div className="flex flex-col items-center">
        <h1
          className="text-3xl sm:text-5xl font-bold text-center"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginBottom: 0 }}
        >
          {wheelTitle}
        </h1>
        <div
          className="text-base sm:text-2xl font-semibold text-center mb-6"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginTop: 4 }}
        >
          {wheelSubtitle}
        </div>

        <div
          className="w-full aspect-square mx-auto flex items-center justify-center"
          style={{ maxWidth: '100vw', width: '100vw', padding: '0 8px' }}
        >
          <WheelSVG
            size={size}
            center={center}
            radius={radius}
            centerRadius={centerRadius}
            outerRadius={outerRadius}
            topics={topics}
            topicFontSize={topicFontSize}
            themeName={themeName}
            language={language}
            userGoal={userGoal}
            theme={theme}
            calculatePoint={calculatePoint}
            getCenterFontSize={getCenterFontSize}
            handleClick={handleClick}
          />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <WheelButton
            onClick={() => setIsPropertiesPanelOpen(true)}
            color="#00f2fa"
          >
            Settings
          </WheelButton>
          
          <WheelButton
            onClick={handleResetOnboarding}
            color="#FF007F"
          >
            Reset
          </WheelButton>
        </div>
      </div>

      {/* Settings Component */}
      <Settings 
        isOpen={isPropertiesPanelOpen}
        onClose={() => setIsPropertiesPanelOpen(false)}
        sharedGoal={sharedGoal}
        setSharedGoal={setSharedGoal}
        sharedLevel={sharedLevel}
        setSharedLevel={setSharedLevel}
      />
    </div>
  );
};

export default WheelTemplate; 
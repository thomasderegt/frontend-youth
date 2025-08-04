import React from 'react';
import { useNavigate } from 'react-router-dom';
import WheelOfIslam from '../organisms/WheelOfIslam';
import { useSettings } from '../context/SettingsContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const WheelPage = () => {
  const { userGoal, userLevel } = useSettings();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const content = {
    english: {
      backButton: "← Back to Home"
    },
    dutch: {
      backButton: "← Terug naar Home"
    }
  };

  const currentContent = content[language] || content.english;

  return (
    <div className="relative">
      {/* Back Button */}
      <button
        onClick={handleBackToHome}
        className="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-200"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: theme.text,
          border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
        }}
      >
        {currentContent.backButton}
      </button>

    <WheelOfIslam />
    </div>
  );
};

export default WheelPage; 
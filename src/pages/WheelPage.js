import React from 'react';
import CircularMenu from '../organisms/CircularMenu';
import { useSettings } from '../context/SettingsContext';

const WheelPage = () => {
  const { userGoal, userLevel, openSettings, resetOnboarding } = useSettings();

  const handleAIClick = () => {
    const messages = {
      doubts: `Hey! How are you? 👋\n\nI'm here to answer your questions about Islam at Level ${userLevel}.\nNo judgment, no pressure - just honest, helpful answers.\n\nWhat's on your mind?`,
      explore: `Ready to discover? Let's explore together! 🌟\n\nI'm here to guide your learning journey through Islam at Level ${userLevel}.\nLet's find the perfect topics for you to explore!`,
      improve: `Ready to grow? Let's build better habits! 🎯\n\nI'm here to help you set goals, track progress, and improve your practice at Level ${userLevel}.\nWhat area would you like to focus on first?`
    };
    alert(messages[userGoal] || "Hello! How can I help you today?");
  };

  return (
    <CircularMenu
      userGoal={userGoal}
      userLevel={userLevel}
      onSettingsClick={openSettings}
      onResetClick={resetOnboarding}
      onAIClick={handleAIClick}
    />
  );
};

export default WheelPage; 
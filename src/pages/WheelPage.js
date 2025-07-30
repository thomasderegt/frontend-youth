import React from 'react';
import WheelOfIslam from '../organisms/WheelOfIslam';
import { useSettings } from '../context/SettingsContext';

const WheelPage = () => {
  const { userGoal, userLevel } = useSettings();

  return (
    <WheelOfIslam />
  );
};

export default WheelPage; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from '../organisms/IntroPage';

const OneTrueGodPage = () => {
  const navigate = useNavigate();

  const navigationButtons = [
    {
      id: 'names',
      label: 'Names of The One True God',
      color: '#00f2fa',
      size: 'large',
      onClick: () => navigate('/names')
    },
    {
      id: 'back',
      label: 'Back to Wheel',
      color: '#FF007F',
      onClick: () => navigate('/')
    }
  ];

  const progressBar = {
    currentStep: 2,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <IntroPage
      title="The One True God"
      subtitle="The God of Adam"
      videoPlaceholder={true}
      navigationButtons={navigationButtons}
      progressBar={progressBar}
    />
  );
};

export default OneTrueGodPage; 
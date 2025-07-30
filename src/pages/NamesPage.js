import React from 'react';
import { useNavigate } from 'react-router-dom';
import GridMenu from '../organisms/GridMenu';

const NamesPage = () => {
  const navigate = useNavigate();

  const namesOfAllah = [
    { title: 'The Most Merciful', name: 'Ar-Rahman', id: 'ar-rahman' },
    { title: 'The Most Compassionate', name: 'Ar-Rahim', id: 'ar-rahim' },
    { title: 'The Ever-Living', name: 'Al-Hayy', id: 'al-hayy' },
    { title: 'The Self-Subsisting', name: 'Al-Qayyum', id: 'al-qayyum' },
    { title: 'Lord of all the Worlds', name: 'Rabb al-Alamin', id: 'rabb-al-alamin' },
    { title: 'The All-Knowing', name: 'Al-Alim', id: 'al-alim' },
    { title: 'The One and Only', name: 'Al-Ahad', id: 'al-ahad' },
    { title: 'The Self-Sufficient Master', name: 'As-Samad', id: 'as-samad' }
  ];

  const navigationButtons = [
    {
      id: 'quiz',
      label: 'Quiz',
      color: '#00f2fa',
      onClick: () => alert('Coming soon')
    },
    {
      id: 'back',
      label: 'Back to Introduction',
      color: '#FF007F',
      onClick: () => navigate('/one-true-god')
    }
  ];

  const progressBar = {
    currentStep: 3,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <GridMenu
      title="The Names of The One True God"
      subtitle="Press a name to learn more"
      items={namesOfAllah}
      navigationButtons={navigationButtons}
      progressBar={progressBar}
    />
  );
};

export default NamesPage; 
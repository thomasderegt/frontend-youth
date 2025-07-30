import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPage from '../organisms/DetailPage';

const NameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const namesOfAllah = [
    { id: 'ar-rahman', name: 'Ar-Rahman', title: 'The Most Merciful', description: 'Ar-Rahman represents the attribute of Allah\'s mercy that encompasses all of creation. This name emphasizes Allah\'s boundless compassion and kindness towards all beings, regardless of their actions or beliefs.' },
    { id: 'ar-rahim', name: 'Ar-Rahim', title: 'The Most Compassionate', description: 'Ar-Rahim refers to Allah\'s mercy that is specifically directed towards believers. This name highlights the special relationship of mercy that Allah has with those who follow His guidance.' },
    { id: 'al-hayy', name: 'Al-Hayy', title: 'The Ever-Living', description: 'Al-Hayy means "The Ever-Living" and refers to Allah\'s eternal existence. Unlike all creation which has a beginning and end, Allah has always existed and will always exist.' },
    { id: 'al-qayyum', name: 'Al-Qayyum', title: 'The Self-Subsisting', description: 'Al-Qayyum means "The Self-Subsisting" and indicates that Allah is completely independent and self-sufficient. He does not need anything from His creation, while everything depends on Him.' },
    { id: 'rabb-al-alamin', name: 'Rabb al-Alamin', title: 'Lord of all the Worlds', description: 'Rabb al-Alamin means "Lord of all the Worlds" and emphasizes Allah\'s sovereignty over all creation - the heavens, the earth, and everything in between.' },
    { id: 'al-alim', name: 'Al-Alim', title: 'The All-Knowing', description: 'Al-Alim means "The All-Knowing" and refers to Allah\'s complete and perfect knowledge of everything - past, present, and future, both apparent and hidden.' },
    { id: 'al-ahad', name: 'Al-Ahad', title: 'The One and Only', description: 'Al-Ahad means "The One and Only" and emphasizes the absolute oneness of Allah. He is unique in His essence, attributes, and actions - there is nothing like Him.' },
    { id: 'as-samad', name: 'As-Samad', title: 'The Self-Sufficient Master', description: 'As-Samad means "The Self-Sufficient Master" and indicates that Allah is the ultimate refuge and the one to whom all turn for their needs, while He Himself needs nothing.' }
  ];

  const name = namesOfAllah.find(n => n.id === id);

  if (!name) return <div>Name not found</div>;

  const navigationButtons = [
    {
      id: 'more',
      label: 'More',
      color: '#00f2fa',
      onClick: () => alert('Coming soon!')
    },
    {
      id: 'quiz',
      label: 'Quiz',
      color: '#00f2fa',
      onClick: () => alert('Coming soon!')
    },
    {
      id: 'back',
      label: 'Back to Names',
      color: '#FF007F',
      onClick: () => navigate('/names')
    }
  ];

  const progressBar = {
    currentStep: 4,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <DetailPage
      title={name.name}
      subtitle={name.title}
      description={name.description}
      navigationButtons={navigationButtons}
      progressBar={progressBar}
    />
  );
};

export default NameDetailPage; 
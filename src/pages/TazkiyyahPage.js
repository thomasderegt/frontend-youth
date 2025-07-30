import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentPage from '../organisms/ContentPage';
import twoWingsImg from '../assets/thetwowings.png';

const TazkiyyahPage = () => {
  const navigate = useNavigate();

  const navigationButtons = [
    {
      id: 'back',
      label: '🔙 Back to Wheel',
      color: '#00f2fa',
      onClick: () => navigate('/')
    }
  ];

  return (
    <ContentPage
      image={twoWingsImg}
      imageAlt="The Two Wings"
      content="Tazkiyyah, or purification of the heart, is about cleansing the soul from spiritual diseases like pride, envy, and hypocrisy — and nurturing it with sincerity, humility, and love for Allah. The two wings of balance are fear and hope. Without either, the journey cannot take flight."
      navigationButtons={navigationButtons}
    />
  );
};

export default TazkiyyahPage; 
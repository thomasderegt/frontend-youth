import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import VerticalMenu from '../organisms/VerticalMenu';

const SettingsPage = ({ 
  isOpen, 
  onClose, 
  sharedGoal, 
  setSharedGoal, 
  sharedLevel, 
  setSharedLevel 
}) => {
  const [creed, setCreed] = useState(localStorage.getItem('userCreed') || '1');
  const [jurisprudence, setJurisprudence] = useState(localStorage.getItem('userJurisprudence') || 'all');
  const { themeName, setThemeName } = useTheme();
  const { language, setLanguage } = useLanguage();

  const menuItems = [
    {
      id: 'goal',
      label: 'Goal',
      value: sharedGoal || '',
      onChange: (e) => {
        setSharedGoal(e.target.value);
        localStorage.setItem('userGoal', e.target.value);
      },
      options: [
        { value: 'doubts', label: 'Doubts - I\'m experiencing doubts and looking for answers' },
        { value: 'explore', label: 'Explore - I\'m curious and want to have a look around!' },
        { value: 'improve', label: 'Improve - I want to improve my Islam and connection with God' }
      ]
    },
    {
      id: 'level',
      label: 'Level',
      value: sharedLevel || 1,
      onChange: (e) => {
        setSharedLevel(parseInt(e.target.value));
        localStorage.setItem('userLevel', e.target.value);
      },
      options: [
        { value: 1, label: 'Level 1 - Novice' }
      ]
    },
    {
      id: 'creed',
      label: 'Creed',
      value: creed,
      onChange: (e) => {
        setCreed(e.target.value);
        localStorage.setItem('userCreed', e.target.value);
      },
      options: [
        { value: '1', label: 'Maturidi/Ashari' },
        { value: '2', label: 'Athari' },
        { value: '3', label: 'Open to all' }
      ]
    },
    {
      id: 'jurisprudence',
      label: 'Jurisprudence',
      value: jurisprudence,
      onChange: (e) => {
        setJurisprudence(e.target.value);
        localStorage.setItem('userJurisprudence', e.target.value);
      },
      options: [
        { value: 'hanafi', label: 'Hanafi' },
        { value: 'hanbali', label: 'Hanbali' },
        { value: 'shafi', label: 'Shafi\'i' },
        { value: 'maliki', label: 'Maliki' },
        { value: 'all', label: 'Open to all' }
      ]
    },
    {
      id: 'language',
      label: 'Language',
      value: language,
      onChange: (e) => {
        setLanguage(e.target.value);
        localStorage.setItem('language', e.target.value);
      },
      options: [
        { value: 'english', label: 'English' },
        { value: 'phonetic', label: 'Phonetic' }
      ]
    },
    {
      id: 'theme',
      label: 'Theme',
      value: themeName,
      onChange: (e) => {
        setThemeName(e.target.value);
        localStorage.setItem('theme', e.target.value);
      },
      options: [
        { value: 'neon', label: 'Neon' },
        { value: 'story', label: 'Story' }
      ]
    }
  ];

  const actionButtons = [
    {
      id: 'cancel',
      label: 'Cancel',
      color: '#FF007F',
      onClick: onClose
    },
    {
      id: 'save',
      label: 'Save & Reload',
      color: '#00f2fa',
      onClick: () => {
        onClose();
        window.location.reload();
      }
    }
  ];

  return (
    <VerticalMenu
      isOpen={isOpen}
      onClose={onClose}
      title="Settings"
      items={menuItems}
      actionButtons={actionButtons}
    />
  );
};

export default SettingsPage; 
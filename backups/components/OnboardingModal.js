import React, { useState } from 'react';
import { useStrategy, USER_GROUPS } from '../context/StrategyContext';
import { useTheme } from '../context/ThemeContext';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '1rem',
};

const cardStyle = {
  background: '#111',
  borderRadius: '16px',
  padding: '1.5rem',
  width: '100%',
  maxWidth: '500px',
  minWidth: '280px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
  textAlign: 'center',
  color: '#fff',
  border: '2px solid #FF007F',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: '100%',
  padding: '0.875rem',
  margin: '0.5rem 0',
  border: 'none',
  borderRadius: '8px',
  background: '#222',
  color: '#fff',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'background 0.2s, border 0.2s',
  wordWrap: 'break-word',
  textAlign: 'center',
  justifyContent: 'center',
};

// Icons for different goals (currently unused but kept for future use)
// const icons = [
//   '❓', // Doubts
//   '❤️', // Improve practice
//   '👁️', // Just looking
// ];

const levelOptions = [
  { key: 1, label: 'Level 1 - Novice', color: '#FF007F' },
];

const goalOptions = [
  { key: 'doubts', label: 'I\'m experiencing doubts and looking for answers' },
  { key: 'explore', label: 'I\'m curious and want to have a look around!' },
  { key: 'improve', label: 'I want to improve my Islam and connection with God' },
];

const creedOptions = [
  { key: '3', label: 'All' },
  { key: '1', label: 'Maturidi/Ashari' },
  { key: '2', label: 'Athari' },
];

const jurisprudenceOptions = [
  { key: 'all', label: 'All' },
  { key: 'hanafi', label: 'Hanafi' },
  { key: 'hanbali', label: 'Hanbali' },
  { key: 'shafi', label: 'Shafi\'i' },
  { key: 'maliki', label: 'Maliki' },
];

export default function OnboardingModal({ open, onSelect, onLevelChange, selectedLevel }) {
  // Set localLevel to null initially so user must select a level
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedCreed, setSelectedCreed] = useState('');
  const [selectedJurisprudence, setSelectedJurisprudence] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const { theme, themeName, setThemeName } = useTheme();

  if (!open) return null;
  const cardStyleStory = {
    background: theme.background,
    borderRadius: '16px',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '500px',
    minWidth: '280px',
    boxShadow: '0 4px 24px rgba(196,164,132,0.10)',
    textAlign: 'center',
    color: theme.text,
    border: `2px solid ${theme.border}`,
    maxHeight: '90vh',
    overflowY: 'auto',
  };
  const buttonStyleStory = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    width: '100%',
    padding: '0.875rem',
    margin: '0.5rem 0',
    border: `2px solid ${theme.border}`,
    borderRadius: '8px',
    background: theme.primary,
    color: theme.secondary,
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background 0.2s, border 0.2s',
    wordWrap: 'break-word',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    boxShadow: 'none',
  };
  const selectStyleStory = {
    width: '100%',
    maxWidth: '400px',
    padding: '0.875rem',
    borderRadius: '8px',
    background: theme.background,
    color: theme.text,
    border: `2px solid ${theme.border}`,
    fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };
  return (
    <div style={modalStyle}>
      <div style={themeName === 'story' ? cardStyleStory : cardStyle}>
        <h2 style={themeName === 'story' ? {
          marginBottom: '0.5rem',
          color: theme.primary,
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          lineHeight: '1.2',
          textShadow: 'none',
        } : {
          marginBottom: '0.5rem',
          color: '#00f2fa',
          textShadow: '0 0 8px #00f2fa, 0 0 16px #00f2fa',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          lineHeight: '1.2'
        }}>
          Peace be upon you! Glad you are here.
        </h2>
        <p style={themeName === 'story' ? {
          marginBottom: '1.5rem',
          color: theme.secondary,
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          lineHeight: '1.3',
          textShadow: 'none',
        } : {
          marginBottom: '1.5rem',
          color: '#00f2fa',
          textShadow: '0 0 8px #00f2fa, 0 0 16px #00f2fa',
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          lineHeight: '1.3'
        }}>
          Please select your goal, creed, and jurisprudence
        </p>
        {/* Goal Section */}
        <div style={{ 
          color: themeName === 'story' ? theme.primary : '#fff',
          fontWeight: 'bold', 
          marginBottom: '0.5rem', 
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' 
        }}>
          Goal
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem', 
          marginBottom: '1.5rem', 
          alignItems: 'center' 
        }}>
          {goalOptions.map(opt => (
            <button
              key={opt.key}
              style={themeName === 'story' ? {
                ...buttonStyleStory,
                border: selectedGoal === opt.key ? `2px solid ${theme.secondary}` : `2px solid ${theme.border}`,
                background: selectedGoal === opt.key ? theme.secondary : theme.primary,
                color: selectedGoal === opt.key ? theme.primary : theme.secondary,
              } : {
                ...buttonStyle,
                width: '100%',
                maxWidth: '400px',
                minHeight: '60px',
                border: selectedGoal === opt.key ? '2px solid #00f2fa' : '2px solid #444',
                background: selectedGoal === opt.key ? '#222b' : '#222',
                boxShadow: selectedGoal === opt.key ? '0 0 8px 2px #00f2fa' : 'none',
                fontWeight: selectedGoal === opt.key ? 'bold' : 'normal',
                transition: 'all 0.2s',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              }}
              onClick={() => setSelectedGoal(opt.key)}
              onMouseEnter={e => {
                if (themeName === 'story') {
                  e.currentTarget.style.background = theme.secondary;
                  e.currentTarget.style.color = theme.primary;
                } else {
                  e.currentTarget.style.background = '#333';
                }
              }}
              onMouseLeave={e => {
                if (themeName === 'story') {
                  e.currentTarget.style.background = selectedGoal === opt.key ? theme.secondary : theme.primary;
                  e.currentTarget.style.color = selectedGoal === opt.key ? theme.primary : theme.secondary;
                } else {
                  e.currentTarget.style.background = selectedGoal === opt.key ? '#222b' : '#222';
                }
              }}
            >
              {opt.key.charAt(0).toUpperCase() + opt.key.slice(1)} - {opt.label}
            </button>
          ))}
        </div>
        {/* Creed Section */}
        <div style={{ 
          margin: '1.5rem 0 0.75rem', 
          color: themeName === 'story' ? theme.primary : '#fff', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
        }}>
          Creed
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <select
            value={selectedCreed}
            onChange={(e) => setSelectedCreed(e.target.value)}
            style={themeName === 'story' ? selectStyleStory : {
              width: '100%',
              maxWidth: '400px',
              padding: '0.875rem',
              borderRadius: '8px',
              background: '#222',
              color: '#fff',
              border: '2px solid #444',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              if (themeName === 'story') {
                e.target.style.borderColor = theme.secondary;
                e.target.style.boxShadow = '0 0 8px 2px ' + theme.secondary;
              } else {
                e.target.style.borderColor = '#00f2fa';
                e.target.style.boxShadow = '0 0 8px 2px #00f2fa';
              }
            }}
            onMouseLeave={e => {
              if (themeName === 'story') {
                e.target.style.borderColor = theme.border;
                e.target.style.boxShadow = 'none';
              } else {
                e.target.style.borderColor = '#444';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            <option value="">Select creed...</option>
            <option value="1">Maturidi/Ashari</option>
            <option value="2">Athari</option>
            <option value="3">Open to all</option>
          </select>
        </div>
        {/* Jurisprudence Section */}
        <div style={{ 
          margin: '1.5rem 0 0.75rem', 
          color: themeName === 'story' ? theme.primary : '#fff', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
        }}>
          Jurisprudence
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <select
            value={selectedJurisprudence}
            onChange={(e) => setSelectedJurisprudence(e.target.value)}
            style={themeName === 'story' ? selectStyleStory : {
              width: '100%',
              maxWidth: '400px',
              padding: '0.875rem',
              borderRadius: '8px',
              background: '#222',
              color: '#fff',
              border: '2px solid #444',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              if (themeName === 'story') {
                e.target.style.borderColor = theme.secondary;
                e.target.style.boxShadow = '0 0 8px 2px ' + theme.secondary;
              } else {
                e.target.style.borderColor = '#00f2fa';
                e.target.style.boxShadow = '0 0 8px 2px #00f2fa';
              }
            }}
            onMouseLeave={e => {
              if (themeName === 'story') {
                e.target.style.borderColor = theme.border;
                e.target.style.boxShadow = 'none';
              } else {
                e.target.style.borderColor = '#444';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            <option value="">Select jurisprudence...</option>
            <option value="hanafi">Hanafi</option>
            <option value="hanbali">Hanbali</option>
            <option value="shafi">Shafi'i</option>
            <option value="maliki">Maliki</option>
            <option value="all">Open to all</option>
          </select>
        </div>
        
        {/* Theme Section */}
        <div style={{ 
          margin: '1.5rem 0 0.75rem', 
          color: '#fff', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
        }}>
          Theme
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <select
            value={selectedTheme || 'neon'}
            onChange={(e) => setSelectedTheme(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '0.875rem',
              borderRadius: '8px',
              background: '#222',
              color: '#fff',
              border: '2px solid #444',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#00f2fa';
              e.target.style.boxShadow = '0 0 8px 2px #00f2fa';
                }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#444';
              e.target.style.boxShadow = 'none';
                }}
              >
            <option value="">Select theme...</option>
            <option value="neon">Neon (default) - Modern digital</option>
            <option value="story">Story - Warm and cozy</option>
          </select>
        </div>
        
        <button
          style={{
            ...buttonStyle,
            width: '100%',
            maxWidth: '200px',
            margin: '1rem auto 0',
            background: selectedGoal && selectedCreed && selectedJurisprudence ? '#00f2fa' : '#444',
            color: selectedGoal && selectedCreed && selectedJurisprudence ? '#111' : '#888',
            border: 'none',
            fontWeight: 'bold',
            cursor: selectedGoal && selectedCreed && selectedJurisprudence ? 'pointer' : 'not-allowed',
            opacity: selectedGoal && selectedCreed && selectedJurisprudence ? 1 : 0.7,
            transition: 'background 0.2s, color 0.2s, opacity 0.2s',
            display: 'block',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            minHeight: '50px',
          }}
          disabled={!(selectedGoal && selectedCreed && selectedJurisprudence)}
                      onClick={() => {
              // Save creed and jurisprudence settings
              localStorage.setItem('userCreed', selectedCreed);
              localStorage.setItem('userJurisprudence', selectedJurisprudence);
              localStorage.setItem('theme', selectedTheme);
              setThemeName(selectedTheme);
              onSelect(selectedGoal);
            }}
        >
          Lets go!
        </button>
        <p style={{ 
          marginTop: '1rem', 
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', 
          color: '#888',
          lineHeight: '1.4'
        }}>
          You can always change your preferences later in settings.
        </p>
      </div>
    </div>
  );
} 
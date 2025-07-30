import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { 
    isSettingsOpen, 
    closeSettings, 
    userGoal, 
    setUserGoal, 
    userLevel, 
    setUserLevel,
    creed,
    setCreed,
    jurisprudence,
    setJurisprudence,
    themeName,
    setThemeName,
    language,
    setLanguage
  } = useSettings();
  
  const { theme } = useTheme();
  
  if (!isSettingsOpen) return null;

  return (
    <>
      {/* Backdrop */}
      {isSettingsOpen && (
        <div 
          className="fixed inset-0 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
          }}
          onClick={closeSettings}
        />
      )}
      
      <div 
        className="fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isSettingsOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div 
          className="h-full w-full p-6 overflow-y-auto border-l-2"
          style={themeName === 'story' ? {
            backgroundColor: theme.background,
            borderColor: theme.border,
            boxShadow: '-4px 0 24px rgba(196,164,132,0.10)',
            color: theme.text,
          } : {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            borderColor: '#00f2fa',
            boxShadow: '-4px 0 20px #00f2fa, -4px 0 40px #00f2fa, inset 4px 0 20px rgba(0, 242, 250, 0.1)',
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 
              className="text-xl font-bold"
              style={themeName === 'story' ? {
                color: theme.primary,
                textShadow: 'none',
              } : {
                color: '#00f2fa',
                textShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
              }}
            >
              Settings
            </h2>
            <button 
              onClick={closeSettings}
              className="text-2xl transition-all duration-200 hover:scale-110"
              style={themeName === 'story' ? {
                color: theme.secondary,
                textShadow: 'none',
              } : {
                color: '#00f2fa',
                textShadow: '0 0 5px #00f2fa'
              }}
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Goal Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Goal
              </label>
              <select 
                value={userGoal || ''}
                onChange={(e) => {
                  setUserGoal(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value="doubts">Doubts - I'm experiencing doubts and looking for answers</option>
                <option value="explore">Explore - I'm curious and want to have a look around!</option>
                <option value="improve">Improve - I want to improve my Islam and connection with God</option>
              </select>
            </div>

            {/* Level Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Level
              </label>
              <select 
                value={userLevel || 1}
                onChange={(e) => {
                  setUserLevel(parseInt(e.target.value));
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value={1}>Level 1 - Beginner</option>
                <option value={2}>Level 2 - Intermediate</option>
                <option value={3}>Level 3 - Advanced</option>
              </select>
            </div>

            {/* Creed Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Creed
              </label>
              <select 
                value={creed || ''}
                onChange={(e) => {
                  setCreed(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value="">Select your creed</option>
                <option value="sunni">Sunni</option>
                <option value="shia">Shia</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Jurisprudence Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Jurisprudence
              </label>
              <select 
                value={jurisprudence || ''}
                onChange={(e) => {
                  setJurisprudence(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value="">Select your jurisprudence</option>
                <option value="hanafi">Hanafi</option>
                <option value="maliki">Maliki</option>
                <option value="shafi">Shafi'i</option>
                <option value="hanbali">Hanbali</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Language Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Language
              </label>
              <select 
                value={language || 'en'}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="tr">Türkçe</option>
                <option value="ur">اردو</option>
              </select>
            </div>

            {/* Theme Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  textShadow: 'none',
                } : {
                  color: '#00f2fa',
                  textShadow: '0 0 5px #00f2fa'
                }}
              >
                Theme
              </label>
              <select 
                value={themeName || 'neon'}
                onChange={(e) => {
                  setThemeName(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={themeName === 'story' ? {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                  color: theme.text,
                  boxShadow: 'none',
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                <option value="neon">Neon</option>
                <option value="story">Story</option>
              </select>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={closeSettings}
                className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
                style={themeName === 'story' ? {
                  color: theme.primary,
                  borderColor: theme.border,
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                } : {
                  color: '#FF007F',
                  borderColor: '#FF007F',
                  backgroundColor: 'transparent',
                  boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
                }}
                onMouseEnter={e => {
                  if (themeName === 'story') {
                    e.target.style.backgroundColor = theme.secondary;
                    e.target.style.color = theme.primary;
                  } else {
                    e.target.style.backgroundColor = 'rgba(255, 0, 127, 0.1)';
                    e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (themeName === 'story') {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = theme.primary;
                  } else {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.boxShadow = '0 0 10px #FF007F, 0 0 20px #FF007F';
                  }
                }}
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  closeSettings();
                  window.location.reload();
                }}
                className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
                style={themeName === 'story' ? {
                  color: theme.secondary,
                  borderColor: theme.border,
                  backgroundColor: theme.primary,
                  boxShadow: 'none',
                } : {
                  color: '#00f2fa',
                  borderColor: '#00f2fa',
                  backgroundColor: 'transparent',
                  boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
                }}
                onMouseEnter={e => {
                  if (themeName === 'story') {
                    e.target.style.backgroundColor = theme.secondary;
                    e.target.style.color = theme.primary;
                  } else {
                    e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
                    e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (themeName === 'story') {
                    e.target.style.backgroundColor = theme.primary;
                    e.target.style.color = theme.secondary;
                  } else {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
                  }
                }}
              >
                Save & Reload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings; 
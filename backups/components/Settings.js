import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Settings = ({ isOpen, onClose, sharedGoal, setSharedGoal, sharedLevel, setSharedLevel }) => {
  const [creed, setCreed] = useState(localStorage.getItem('userCreed') || '1');
  const [jurisprudence, setJurisprudence] = useState(localStorage.getItem('userJurisprudence') || 'all');
  const { theme, themeName, setThemeName } = useTheme();
  const { language, setLanguage } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={themeName === 'story' ? {
        background: theme.background,
        backgroundImage: 'none',
        backdropFilter: 'none',
      } : {
        background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(22, 33, 62, 0.9) 100%), url(${process.env.PUBLIC_URL}/assets/background-circuit-board.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(15px)',
      }}
    >
      <div 
        className="rounded-lg p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto border-2"
        style={themeName === 'story' ? {
          backgroundColor: theme.background,
          borderColor: theme.border,
          boxShadow: '0 4px 24px rgba(196,164,132,0.10)',
          color: theme.text,
        } : {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: '#00f2fa',
          boxShadow: '0 0 20px #00f2fa, 0 0 40px #00f2fa, inset 0 0 20px rgba(0, 242, 250, 0.1)',
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
            onClick={onClose}
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
              value={sharedGoal || ''}
              onChange={(e) => {
                setSharedGoal(e.target.value);
                localStorage.setItem('userGoal', e.target.value);
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
              value={sharedLevel || 1}
              onChange={(e) => {
                setSharedLevel(parseInt(e.target.value));
                localStorage.setItem('userLevel', e.target.value);
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
              <option value={1}>Level 1 - Novice</option>
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
              value={creed}
              onChange={(e) => {
                setCreed(e.target.value);
                localStorage.setItem('userCreed', e.target.value);
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
              <option value="1">Maturidi/Ashari</option>
              <option value="2">Athari</option>
              <option value="3">Open to all</option>
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
              value={jurisprudence}
              onChange={(e) => {
                setJurisprudence(e.target.value);
                localStorage.setItem('userJurisprudence', e.target.value);
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
              <option value="hanafi">Hanafi</option>
              <option value="hanbali">Hanbali</option>
              <option value="shafi">Shafi'i</option>
              <option value="maliki">Maliki</option>
              <option value="all">Open to all</option>
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
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                localStorage.setItem('language', e.target.value);
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
              <option value="english">English</option>
              <option value="phonetic">Phonetic</option>
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
              value={themeName}
              onChange={(e) => {
                setThemeName(e.target.value);
                localStorage.setItem('theme', e.target.value);
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
              onClick={onClose}
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
                onClose();
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
  );
};

export default Settings; 
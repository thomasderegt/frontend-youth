import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { 
    isSettingsOpen, 
    closeSettings, 
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
  
  // Helper function for theme styling
  const getThemeStyle = (type) => {
    if (themeName === 'zwartWit') {
      // Wireframe theme
      switch (type) {
        case 'label':
          return { color: '#000000', textShadow: 'none' };
        case 'select':
          return {
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            color: '#000000',
            boxShadow: 'none',
          };
        case 'button':
          return {
            color: '#000000',
            borderColor: '#000000',
            backgroundColor: '#ffffff',
            boxShadow: 'none',
          };
        case 'buttonSecondary':
          return {
            color: '#ffffff',
            borderColor: '#000000',
            backgroundColor: '#000000',
            boxShadow: 'none',
          };
        default:
          return {};
      }
    } else if (themeName === 'style') {
      // Style theme (same as Wireframe)
      switch (type) {
        case 'label':
          return { color: '#000000', textShadow: 'none' };
        case 'select':
          return {
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            color: '#000000',
            boxShadow: 'none',
          };
        case 'button':
          return {
            color: '#000000',
            borderColor: '#000000',
            backgroundColor: '#ffffff',
            boxShadow: 'none',
          };
        case 'buttonSecondary':
          return {
            color: '#ffffff',
            borderColor: '#000000',
            backgroundColor: '#000000',
            boxShadow: 'none',
          };
        default:
          return {};
      }
    } else {
      // Neon theme
      switch (type) {
        case 'label':
          return { color: '#00f2fa', textShadow: '0 0 5px #00f2fa' };
        case 'select':
          return {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: '#00f2fa',
            color: '#00f2fa',
            boxShadow: '0 0 5px #00f2fa'
          };
        case 'button':
          return {
            color: '#FF007F',
            borderColor: '#FF007F',
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
          };
        case 'buttonSecondary':
          return {
            color: '#00f2fa',
            borderColor: '#00f2fa',
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
          };
        default:
          return {};
      }
    }
  };
  
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
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-96 max-h-[80vh] overflow-y-auto rounded-lg border-2"
        style={themeName === 'zwartWit' ? {
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          color: '#000000',
        } : {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderColor: '#00f2fa',
          boxShadow: '0 0 20px #00f2fa, 0 0 40px #00f2fa, inset 0 0 20px rgba(0, 242, 250, 0.1)',
        }}
      >
        <div 
          className="p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 
              className="text-xl font-bold"
              style={themeName === 'zwartWit' ? {
                color: '#000000',
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
              style={themeName === 'zwartWit' ? {
                color: '#000000',
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
            {/* Level Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={getThemeStyle('label')}
              >
                Level
              </label>
              <select 
                id="userLevel"
                name="userLevel"
                value={userLevel || 1}
                onChange={(e) => {
                  setUserLevel(parseInt(e.target.value));
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={getThemeStyle('select')}
              >
                <option value={1}>Level 1 - Beginner</option>
                <option value={2}>Level 2 - Intermediate</option>
                <option value={3}>Level 3 - Expert</option>
              </select>
            </div>

            {/* Creed Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={getThemeStyle('label')}
              >
                Creed
              </label>
              <select 
                id="userCreed"
                name="userCreed"
                value={creed || ''}
                onChange={(e) => {
                  setCreed(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={getThemeStyle('select')}
              >
                <option value="">Select your creed</option>
                <option value="maturidi-ashari">Maturidi/Ashari</option>
                <option value="athari">Athari</option>
                <option value="any">Doesn't matter</option>
              </select>
            </div>

            {/* Jurisprudence Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={getThemeStyle('label')}
              >
                Jurisprudence
              </label>
              <select 
                id="userJurisprudence"
                name="userJurisprudence"
                value={jurisprudence || ''}
                onChange={(e) => {
                  setJurisprudence(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={getThemeStyle('select')}
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
                style={getThemeStyle('label')}
              >
                Language
              </label>
              <select 
                id="userLanguage"
                name="userLanguage"
                value={language || 'en'}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={getThemeStyle('select')}
              >
                <option value="en">English</option>
                <option value="nl">Dutch</option>
                <option value="ar">Arabic</option>
                <option value="tr">Turkish</option>
                <option value="ur">Urdu</option>
              </select>
            </div>

            {/* Visual Theme Setting */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={getThemeStyle('label')}
              >
                Visual Theme
              </label>
              <select 
                id="userTheme"
                name="userTheme"
                value={themeName || 'neon'}
                onChange={(e) => {
                  setThemeName(e.target.value);
                }}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={getThemeStyle('select')}
              >
                              <option value="neon">Neon (default) - Modern digital</option>
              <option value="zwartWit">Wireframe - Minimal</option>
              <option value="style">Style - Wireframe copy</option>
              </select>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={closeSettings}
                className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
                style={getThemeStyle('button')}
                onMouseEnter={e => {
                  if (themeName === 'zwartWit') {
                    e.target.style.backgroundColor = '#000000';
                    e.target.style.color = '#ffffff';
                  } else {
                    e.target.style.backgroundColor = 'rgba(255, 0, 127, 0.1)';
                    e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (themeName === 'zwartWit') {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.color = '#000000';
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
                }}
                className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
                style={getThemeStyle('buttonSecondary')}
                onMouseEnter={e => {
                  if (themeName === 'zwartWit') {
                    e.target.style.backgroundColor = '#000000';
                    e.target.style.color = '#ffffff';
                  } else {
                    e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
                    e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (themeName === 'zwartWit') {
                    e.target.style.backgroundColor = '#000000';
                    e.target.style.color = '#ffffff';
                  } else {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings; 
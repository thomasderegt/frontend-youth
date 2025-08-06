import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import backgroundNeon from '../assets/BackgroundHomePageYouth4.png';
import backgroundNeonNight3 from '../assets/BackgroundHomePageYouthNightMode3.png';

const SettingsPage = () => {
  const { themeName, setThemeName: setThemeContext } = useTheme();
  const { 
    userLevel, 
    setUserLevel,
    creed,
    setCreed,
    jurisprudence,
    setJurisprudence,
    setThemeName,
    language,
    setLanguage,
    nightMode,
    setNightMode
  } = useSettings();

  // Local state for form values
  const [localUserLevel, setLocalUserLevel] = React.useState(userLevel || 1);
  const [localCreed, setLocalCreed] = React.useState(creed || '');
  const [localJurisprudence, setLocalJurisprudence] = React.useState(jurisprudence || '');
  const [localLanguage, setLocalLanguage] = React.useState(language || 'en');
  const [localThemeName, setLocalThemeName] = React.useState(themeName || 'neon');
  const [localNightMode, setLocalNightMode] = React.useState(nightMode || false);

  // Sync local state with context values when component mounts or values change
  React.useEffect(() => {
    setLocalUserLevel(userLevel || 1);
    setLocalCreed(creed || '');
    setLocalJurisprudence(jurisprudence || '');
    setLocalLanguage(language || 'en');
    setLocalThemeName(themeName || 'neon');
    setLocalNightMode(nightMode || false);
  }, [userLevel, creed, jurisprudence, language, themeName, nightMode]);

  const handleSave = () => {
    // Update all settings
    setUserLevel(localUserLevel);
    setCreed(localCreed);
    setJurisprudence(localJurisprudence);
    setLanguage(localLanguage);
    setThemeName(localThemeName);
    setThemeContext(localThemeName);
    setNightMode(localNightMode);
    
    // Navigate back to previous page
    window.history.back();
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: themeName === 'neon' 
      ? (nightMode ? `url(${backgroundNeonNight3})` : `url(${backgroundNeon})`)
      : themeName === 'zwartWit'
      ? '#ffffff'
      : 'rgba(0, 0, 0, 0.95)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff'
  };

  const mainStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '2rem',
  };

  const settingsContainerStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.5)'
      : themeName === 'zwartWit' 
      ? '#ffffff' 
      : 'rgba(0, 0, 0, 0.8)',
    backdropFilter: themeName === 'neon' ? 'blur(10px)' : 'none',
    boxShadow: themeName === 'neon'
      ? '0 8px 32px rgba(0, 0, 0, 0.1)'
      : themeName === 'zwartWit' 
      ? 'none' 
      : '0 0 20px #00f2fa, 0 0 40px #00f2fa',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    background: themeName === 'neon' 
      ? 'linear-gradient(45deg, #8b5cf6, #a855f7, #d946ef)'
      : themeName === 'zwartWit' 
      ? 'linear-gradient(45deg, #000000, #333333)'
      : 'linear-gradient(45deg, #00f2fa, #ff007f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const sectionStyle = {
    marginBottom: '2rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: themeName === 'neon' 
      ? '#000000'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
  };

  const selectStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid',
    fontSize: '1rem',
    background: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.8)'
      : themeName === 'zwartWit' 
      ? '#ffffff' 
      : 'rgba(0, 0, 0, 0.6)',
    borderColor: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.5)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    color: themeName === 'neon' 
      ? '#000000'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: '1px solid',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '1rem',
    transition: 'all 0.3s ease',
  };

  const saveButtonStyle = {
    ...buttonStyle,
    background: themeName === 'neon' 
      ? 'linear-gradient(45deg, #8b5cf6, #a855f7)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    borderColor: themeName === 'neon' 
      ? 'rgba(139, 92, 246, 0.5)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    color: themeName === 'neon' 
      ? '#ffffff'
      : themeName === 'zwartWit' 
      ? '#ffffff' 
      : '#000000',
    boxShadow: themeName === 'neon' 
      ? '0 4px 15px rgba(139, 92, 246, 0.3)'
      : 'none'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    background: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent',
    borderColor: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.3)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    color: themeName === 'neon' 
      ? '#000000'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    backdropFilter: themeName === 'neon' ? 'blur(10px)' : 'none'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  };

  return (
    <div style={pageStyle}>
      <Header />
      
      <main style={mainStyle}>
        <div style={settingsContainerStyle}>
          <h1 style={titleStyle}>Settings</h1>
          
          <div style={sectionStyle}>
            <label style={labelStyle}>Level</label>
            <select 
              value={localUserLevel}
              onChange={(e) => setLocalUserLevel(parseInt(e.target.value))}
              style={selectStyle}
            >
              <option value={1}>Level 1 - Beginner</option>
              <option value={2}>Level 2 - Intermediate</option>
              <option value={3}>Level 3 - Expert</option>
            </select>
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>Creed</label>
            <select 
              value={localCreed}
              onChange={(e) => setLocalCreed(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select your creed</option>
              <option value="maturidi-ashari">Maturidi/Ashari</option>
              <option value="athari">Athari</option>
              <option value="any">Doesn't matter</option>
            </select>
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>Jurisprudence</label>
            <select 
              value={localJurisprudence}
              onChange={(e) => setLocalJurisprudence(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select your jurisprudence</option>
              <option value="hanafi">Hanafi</option>
              <option value="maliki">Maliki</option>
              <option value="shafi">Shafi'i</option>
              <option value="hanbali">Hanbali</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>Language</label>
            <select 
              value={localLanguage}
              onChange={(e) => setLocalLanguage(e.target.value)}
              style={selectStyle}
            >
              <option value="en">English</option>
              <option value="nl">Dutch</option>
              <option value="ar">Arabic</option>
              <option value="tr">Turkish</option>
              <option value="ur">Urdu</option>
            </select>
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>Visual Theme</label>
            <select 
              value={localThemeName}
              onChange={(e) => setLocalThemeName(e.target.value)}
              style={selectStyle}
            >
              <option value="neon">Neon (default) - Modern digital</option>
              <option value="zwartWit">Wireframe - Minimal</option>
              <option value="style">Style - Wireframe copy</option>
            </select>
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>
              <input
                type="checkbox"
                checked={localNightMode}
                onChange={(e) => setLocalNightMode(e.target.checked)}
                style={{
                  marginRight: '0.5rem',
                  transform: 'scale(1.2)'
                }}
              />
              Night Mode
            </label>
          </div>

          <div style={buttonContainerStyle}>
            <button 
              style={saveButtonStyle}
              onClick={handleSave}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = themeName === 'zwartWit' 
                  ? '0 4px 8px rgba(0,0,0,0.3)' 
                  : '0 0 10px #00f2fa, 0 0 20px #00f2fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Save & Close
            </button>
            <button 
              style={cancelButtonStyle}
              onClick={() => window.history.back()}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = themeName === 'zwartWit' 
                  ? '0 4px 8px rgba(0,0,0,0.3)' 
                  : '0 0 10px #00f2fa, 0 0 20px #00f2fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SettingsPage; 
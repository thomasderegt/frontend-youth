import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
const IntroQuranPage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    ...getTopicBackgroundStyle(),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transition: 'background 0.3s ease',
  };
  const mainStyle = {
    flex: 1,
    paddingTop: '80px',
    padding: '1rem',
  };
  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    background: themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 
                themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    padding: '2rem',
    backdropFilter: 'none',
  };
  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
  };
  const subtitleStyle = {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    fontWeight: 'normal',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    opacity: 0.8,
  };
  const descriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
  };
  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: themeName === 'neon' ? '#8B5CF6' : '#007bff',
    color: '#ffffff',
    margin: '0.5rem',
  };
  return (
    <div style={pageStyle}>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Qur'an (Qurʾān)</h1>
          <h2 style={subtitleStyle}>God's Message to You</h2>
          
          <p style={descriptionStyle}>
            The Qur'an isn't just a book - it's God's personal message to you. Think of it as the ultimate 
            life guide that speaks directly to your heart and mind. It's not about memorizing verses without 
            understanding; it's about connecting with God's words in a way that transforms your life.
          </p>
          <p style={descriptionStyle}>
            We'll explore how the Qur'an relates to your daily struggles, relationships, and dreams. From dealing 
            with peer pressure to finding your purpose, you'll discover how God's guidance is relevant to every 
            aspect of your life as a young Muslim in today's world.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              style={buttonStyle}
              onClick={() => navigate('/quran')}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Start Learning
            </button>
            <button 
              style={{...buttonStyle, background: 'transparent', border: '2px solid #8B5CF6'}}
              onClick={() => navigate('/home?wheel=outward')}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Back to Wheel
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default IntroQuranPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const IntroBeliefPage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    ...getTopicBackgroundStyle(),
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
          <h1 style={titleStyle}>What Do You Believe? 🤔</h1>
          <h2 style={subtitleStyle}>Time to Figure Out What You Really Think</h2>
          
          <p style={descriptionStyle}>
            Ever wondered what makes your faith tick? Belief, or ʿAqīdah, is like the operating system of your 
            spiritual life. It's not just about saying you believe - it's about understanding why you believe 
            and how that shapes everything you do.
          </p>

          <p style={descriptionStyle}>
            We'll explore the six pillars of faith in a way that makes sense for your life right now. From 
            understanding who God really is to figuring out your purpose in this world, you'll discover how 
            your beliefs affect your choices, relationships, and future. This isn't just theory - it's about 
            building a strong foundation for your life as a young Muslim.
          </p>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              style={buttonStyle}
              onClick={() => navigate('/belief')}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Let's Figure It Out! 🤔
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

export default IntroBeliefPage; 
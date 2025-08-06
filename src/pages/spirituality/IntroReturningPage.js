import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
const IntroReturningPage = () => {
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
    maxWidth: '900px',
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
  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1rem',
    borderRadius: '8px',
    background: themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)') : 
                'rgba(255, 255, 255, 0.1)',
  };
  const sectionTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
  };
  const quranStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '1rem',
    color: themeName === 'neon' ? '#8B5CF6' : '#007bff',
  };
  const listStyle = {
    marginLeft: '1.5rem',
    marginBottom: '1rem',
  };
  const listItemStyle = {
    marginBottom: '0.5rem',
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
          <h1 style={titleStyle}>Come Back! ❤️</h1>
          <h2 style={subtitleStyle}>Time to Find Your Way Home</h2>
          
          <div style={sectionStyle}>
            <p style={quranStyle}>
              "And return [in repentance] to your Lord." [az-Zumar 39:54]
            </p>
            <p style={descriptionStyle}>
              Ever feel lost or like you've wandered too far? Coming back is about finding your way home. 
              It's about three key steps:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Returning to the True One with sincere reform after one has returned to Him with</li>
              <li style={listItemStyle}>Returning to Him with fulfilment after returning to Him with commitment</li>
              <li style={listItemStyle}>Returning to Him with one's [interior] state after responding to His call [with his/her exterior]</li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Fix What You Broke</h3>
            <p style={descriptionStyle}>
              When you mess up, here's how to really fix it:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Mending the consequences [of the sins]</strong> - Repairing the damage caused by one's actions</li>
              <li style={listItemStyle}><strong>Feeling pain over the missteps</strong> - Genuine remorse for the mistakes made</li>
              <li style={listItemStyle}><strong>Making up for what was missed</strong> - Compensating for what was neglected or lost</li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Keep Your Promises</h3>
            <p style={descriptionStyle}>
              When you say you'll do better, here's how to actually follow through:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Escaping from the pleasure of sins</strong> - Moving away from the enjoyment of sinful behavior</li>
              <li style={listItemStyle}><strong>Refraining from looking condescendingly on the people of heedlessness and fearing for them while having hope for yourself</strong> - Avoiding arrogance while maintaining concern for others</li>
              <li style={listItemStyle}><strong>Being all-encompassing when observing the defects of one's service (worship)</strong> - Comprehensive awareness of one's shortcomings in worship</li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Get Real with Yourself</h3>
            <p style={descriptionStyle}>
              The most important part - being honest about where you're at:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Despair over your actions</strong> - Recognizing the inadequacy of one's deeds</li>
              <li style={listItemStyle}><strong>Observing your poverty and need</strong> - Understanding one's complete dependence on God</li>
              <li style={listItemStyle}><strong>Beholding His gentleness and graciousness towards you</strong> - Recognizing God's kindness and mercy</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              style={buttonStyle}
              onClick={() => navigate('/home?wheel=inward')}
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
export default IntroReturningPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const IntroRepentancePage = () => {
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
          <h1 style={titleStyle}>Say Sorry! 🔄</h1>
          <h2 style={subtitleStyle}>The Door That Never Closes</h2>
          
          <div style={sectionStyle}>
            <p style={quranStyle}>
              "And whoever does not repent—then it is those who are the wrongdoers." [al-Ḥujurât 49:11]
            </p>
            <p style={descriptionStyle}>
              When you mess up, you gotta own it. Real repentance starts when you actually recognize 
              what you did wrong. Here's what you need to look at about your mistake:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Your abandonment of [God's] shelter when you attempted it</li>
              <li style={listItemStyle}>Your joy when you attained it</li>
              <li style={listItemStyle}>Your determined failure to refrain from it or make up for it despite your certainty that the True One was watching you</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>How to Really Say Sorry</h3>
            <p style={descriptionStyle}>Real repentance has three parts:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Regretting</strong> - Feeling genuine remorse for the sin</li>
              <li style={listItemStyle}><strong>Apologizing</strong> - Seeking forgiveness from God</li>
              <li style={listItemStyle}><strong>Desisting</strong> - Stopping the sinful behavior</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>The Real Deal</h3>
            <p style={descriptionStyle}>Here's what repentance really means:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Recognizing the enormity of the offense</strong> - Understanding the gravity of one's sin</li>
              <li style={listItemStyle}><strong>Questioning the tawbah</strong> - Doubting the sincerity of one's repentance</li>
              <li style={listItemStyle}><strong>Finding excuses for the creation</strong> - Understanding God's mercy and forgiveness</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>The Deep Stuff</h3>
            <p style={descriptionStyle}>The real secrets of repentance:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Sorting out fear of God from one's pride</strong> - Distinguishing between genuine fear and ego</li>
              <li style={listItemStyle}><strong>Forgetting the offense</strong> - Moving beyond the sin</li>
                              <li style={listItemStyle}><strong>Repenting from the repentance</strong> - Because the repentant is included among the generality of addressees in the saying of God: "And turn to God in repentance, all of you." [an-Noor 24:31]</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>The Fine Details</h3>
            <p style={descriptionStyle}>The little things that matter:</p>
            
            <h4 style={sectionTitleStyle}>The First Subtlety</h4>
            <p style={descriptionStyle}>
                            To look at the offense and the decree and recognize the intent of God when He allowed you to commit it,
              for God allows His slave to commit a sin for one of two reasons:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>The first:</strong> For you to recognize His might in His decrees, His goodness in His concealment, 
              His forbearance in deferring the offender, His generosity in accepting his or her apology, and His grace in forgiving him or her.</li>
              <li style={listItemStyle}><strong>The second:</strong> To establish His plea against His slave, so that He may deservingly punish him or her for their sin.</li>
            </ul>

            <h4 style={sectionTitleStyle}>The Second Subtlety</h4>
            <p style={descriptionStyle}>
              The truthful and insightful person's full awareness of their sins will make them realize that they have not been left with any good deed, 
              for they journey constantly: beholding on one side the grace [of their Lord] and on the other the defects of their nafs and deeds.
            </p>

            <h4 style={sectionTitleStyle}>The Third Subtlety</h4>
            <p style={descriptionStyle}>
              The slave's beholding of the decree will not allow him/her to see good as good or evil as ugly, 
              for he/she will ascend from that to beholding the fact of the decree itself.
            </p>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Different Ways to Say Sorry</h3>
            
            <h4 style={sectionTitleStyle}>The Tawbah of the Public</h4>
            <p style={descriptionStyle}>
              The tawbah of the public is from seeing the abundance of their good deeds, for this leads to three things:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Denying the favor of [His] concealment and deferment</li>
              <li style={listItemStyle}>Feeling one's entitlement to God's favors</li>
              <li style={listItemStyle}>Feeling independence, which is the essence of tyranny and transgression against God</li>
            </ul>

            <h4 style={sectionTitleStyle}>The Tawbah of the Intermediate Seekers</h4>
            <p style={descriptionStyle}>
              The tawbah of the intermediate seekers is from belittling the sin, for this is the essence of audacious rebellion 
              and haughtiness and subsequent slipping into complete desertion.
            </p>

            <h4 style={sectionTitleStyle}>The Tawbah of the Select Few</h4>
            <p style={descriptionStyle}>
              The tawbah of the select few is from wasting time, for it leads to falling into deficiency, 
              extinguishes the light of watchfulness, and spoils the spring of companionship.
            </p>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>The End Goal</h3>
            <p style={descriptionStyle}>
              The ultimate level of repentance is when you're so focused on what's real that you don't even 
              notice the small stuff anymore - you're just trying to stay on track with what matters most.
            </p>
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

export default IntroRepentancePage;
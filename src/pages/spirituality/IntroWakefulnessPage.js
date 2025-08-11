import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { useLanguage } from '../../context/LanguageContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import wakefulnessImage from '../../assets/Wakefulness.png';

const IntroWakefulnessPage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();
  const languageContext = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [userResponse, setUserResponse] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Fallback for language context
  const language = languageContext?.language || 'english';
  const setLanguage = languageContext?.setLanguage || (() => {});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'dutch' : 'english');
  };

  const handleSave = () => {
    if (userResponse.trim()) {
      // Save to localStorage
      const savedBlessings = JSON.parse(localStorage.getItem('wakefulnessBlessings') || '[]');
      const newBlessing = {
        id: Date.now(),
        text: userResponse,
        date: new Date().toISOString(),
        language: language
      };
      savedBlessings.push(newBlessing);
      localStorage.setItem('wakefulnessBlessings', JSON.stringify(savedBlessings));
      
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000); // Reset after 2 seconds
    }
  };

  const content = {
    english: {
      title: 'Wakefulness',
      arabic: 'Al-yaqazah',
      arabicText: 'اليَقَظَةُ',
      intro: 'This station is about al-yaqazah, meaning wakefulness.',
      quran: '"Say, \'Surely I admonish you with one (thing) only, that you rise up to God by twos and singly; thereafter meditate.\'" - Quran 34:46',
      explanation: 'Rising up or stepping up for God means you are waking up from the sleep of forgetting Him and getting out of a dangerous spot during a spiritual low. God lights your heart up with life so you can see the warning light.',
      aspectsTitle: 'It is based on three aspects:',
      aspects: [
        {
          number: 'The first:',
          text: 'I look at the blessings in my life, knowing I can\'t even count them all. I stop and really see what Allah has given me, focusing on understanding the favor He has shown me, and recognizing where I fall short in being grateful for these gifts.'
        },
        {
          number: 'The second:',
          text: 'I honestly look at my mistakes and wrongdoings, I see the danger in them, I get ready to make things right, I free myself from being trapped by my bad habits, and I seek Allah\'s forgiveness by purifying my heart.'
        },
        {
          number: 'The third:',
          text: 'I pay attention to how my days are passing - what I\'m gaining and what I\'m losing. I stop wasting time on things that don\'t matter, and I focus on making the most of each day so I can make up for what I\'ve missed and fill my time with what truly matters.'
        }
      ],
      actionTitle: 'Your Wakefulness Action',
      actionText: 'Write all the blessings down you can think of:',
      responsePlaceholder: 'Write your blessings here...',
      startAction: 'Begin Your Practice',
      languageToggle: 'Nederlands'
    },
    dutch: {
      title: 'Wakkerheid',
      arabic: 'Al-yaqazah',
      arabicText: 'اليَقَظَةُ',
      intro: 'Dit station gaat over al-yaqazah, wat wakkerheid betekent.',
      quran: '"Zeg: \'Ik vermaan jullie slechts met één ding: dat jullie voor Allah opstaan, twee aan twee en alleen, en dan nadenken.\'" - Koran 34:46',
      explanation: 'Opstaan of opklimmen voor Allah betekent dat je wakker wordt uit de slaap van het vergeten van Hem en uit een gevaarlijke situatie komt tijdens een spiritueel dieptepunt. Allah verlicht je hart met leven zodat je het waarschuwingslicht kunt zien.',
      aspectsTitle: 'Het is gebaseerd op drie aspecten:',
      aspects: [
        {
          number: 'Het eerste:',
          text: 'Ik kijk naar de zegeningen in mijn leven, wetend dat ik ze niet eens allemaal kan tellen. Ik stop en zie echt wat Allah mij heeft gegeven, ik focus op het begrijpen van de gunst die Hij mij heeft getoond, en ik herken waar ik tekortschiet in dankbaarheid voor deze geschenken.'
        },
        {
          number: 'Het tweede:',
          text: 'Ik kijk eerlijk naar mijn fouten en verkeerde daden, ik zie het gevaar erin, ik maak me klaar om dingen recht te zetten, ik bevrijd mezelf van het vastzitten in mijn slechte gewoontes, en ik zoek Allah\'s vergeving door mijn hart te zuiveren.'
        },
        {
          number: 'Het derde:',
          text: 'Ik let op hoe mijn dagen voorbijgaan - wat ik win en wat ik verlies. Ik stop met tijd verspillen aan dingen die er niet toe doen, en ik focus op het beste maken van elke dag zodat ik kan inhalen wat ik heb gemist en mijn tijd kan vullen met wat echt belangrijk is.'
        }
      ],
      actionTitle: 'Jouw Wakkerheid Actie',
      actionText: 'Schrijf alle zegeningen op die je kunt bedenken:',
      responsePlaceholder: 'Schrijf hier je zegeningen...',
      startAction: 'Begin Je Beoefening',
      languageToggle: 'English'
    }
  };

  const currentContent = content[language] || content.english;

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
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  const languageToggleStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    border: themeName === 'neon' ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.3)',
    background: themeName === 'neon' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255, 255, 255, 0.1)',
    color: themeName === 'neon' ? '#8B5CF6' : '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
  };

  const arabicTitleStyle = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' ? '#8B5CF6' : '#007bff',
    direction: 'rtl',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
  };

  const introStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    opacity: isVisible ? 0.9 : 0,
    fontStyle: 'italic',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
  };

  const quranStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    fontStyle: 'italic',
    padding: '1.5rem',
    borderRadius: '12px',
    background: themeName === 'neon' ? (nightMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)') : 
                'rgba(255, 255, 255, 0.1)',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
  };

  const explanationStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    padding: '1.5rem',
    borderRadius: '12px',
    background: themeName === 'neon' ? (nightMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)') : 
                'rgba(255, 255, 255, 0.1)',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease 1s, transform 0.8s ease 1s',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    margin: '0 auto 2rem auto',
    display: 'block',
    borderRadius: '12px',
    boxShadow: themeName === 'neon' ? '0 0 20px rgba(139, 92, 246, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: 'opacity 0.8s ease 1.2s, transform 0.8s ease 1.2s',
  };

  const aspectsTitleStyle = {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease 1.4s, transform 0.8s ease 1.4s',
  };

  const aspectsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease 1.6s, transform 0.8s ease 1.6s',
  };

  const aspectStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    lineHeight: '1.6',
    textAlign: 'left',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    padding: '1.5rem',
    borderRadius: '12px',
    background: themeName === 'neon' ? (nightMode ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.05)') : 
                'rgba(255, 255, 255, 0.05)',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
    height: 'fit-content',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const aspectNumberStyle = {
    fontWeight: 'bold',
    color: themeName === 'neon' ? '#8B5CF6' : '#007bff',
  };

  const actionSectionStyle = {
    marginTop: '2rem',
    padding: '2rem',
    borderRadius: '16px',
    background: themeName === 'neon' ? (nightMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.15)') : 
                'rgba(255, 255, 255, 0.15)',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.3)',
    opacity: 1, // Always visible
    transform: 'translateY(0)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '100px',
    padding: '1rem',
    borderRadius: '8px',
    border: themeName === 'neon' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    background: themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)') : 
                'rgba(255, 255, 255, 0.1)',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
    fontSize: '1rem',
    resize: 'vertical',
  };

  const handleAspectHover = (e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = themeName === 'neon' ? 
      '0 8px 25px rgba(139, 92, 246, 0.3)' : 
      '0 8px 25px rgba(0, 0, 0, 0.15)';
  };

  const handleAspectLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={pageStyle}>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <button 
            onClick={toggleLanguage}
            style={languageToggleStyle}
            onMouseEnter={(e) => {
              e.target.style.background = themeName === 'neon' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = themeName === 'neon' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {currentContent.languageToggle}
          </button>

          <h1 style={titleStyle}>{currentContent.title}</h1>
          <div style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textAlign: 'center',
            color: themeName === 'neon' ? '#8B5CF6' : '#007bff',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}>{currentContent.arabic}</div>
          <div style={arabicTitleStyle}>{currentContent.arabicText}</div>
          
          <div style={introStyle}>
            {currentContent.intro}
          </div>
          
          <div style={quranStyle}>
            {currentContent.quran}
          </div>
          
          <div style={explanationStyle}>
            {currentContent.explanation}
          </div>
          
          <img 
            src={wakefulnessImage} 
            alt="Wakefulness" 
            style={imageStyle}
          />
          
          <div style={aspectsTitleStyle}>
            {currentContent.aspectsTitle}
          </div>
          
          <div style={aspectsContainerStyle}>
            {currentContent.aspects.map((aspect, index) => (
              <div 
                key={index}
                style={aspectStyle}
                onMouseEnter={handleAspectHover}
                onMouseLeave={handleAspectLeave}
              >
                <span style={aspectNumberStyle}>{aspect.number}</span> {aspect.text}
              </div>
            ))}
          </div>

          {/* Interactive Reflection Section */}
          <div style={actionSectionStyle}>
            <div style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
            }}>
              {currentContent.actionTitle}
            </div>
            <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              {currentContent.actionText}
            </p>
            <textarea
              placeholder={currentContent.responsePlaceholder}
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              style={textareaStyle}
            />
            {isSaved && (
              <div style={{
                marginTop: '1rem',
                textAlign: 'center',
                color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                fontSize: '0.9rem',
                fontStyle: 'italic',
              }}>
                Blessing saved!
              </div>
            )}
            <button
              onClick={handleSave}
              style={{
                marginTop: '1rem',
                padding: '0.7rem 1.5rem',
                borderRadius: '20px',
                border: 'none',
                background: themeName === 'neon' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                color: themeName === 'neon' ? '#8B5CF6' : '#007bff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = themeName === 'neon' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = themeName === 'neon' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Save Blessing
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntroWakefulnessPage;
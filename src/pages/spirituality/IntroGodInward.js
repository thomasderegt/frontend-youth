import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';
import { useLanguage } from '../../context/LanguageContext';
import { getTopicBackgroundStyle } from '../../utils/backgrounds';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import jamImage from '../../assets/Jam.png';

const IntroGodInward = () => {
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
      const savedReflections = JSON.parse(localStorage.getItem('godInwardReflections') || '[]');
      const newReflection = {
        id: Date.now(),
        text: userResponse,
        date: new Date().toISOString(),
        language: language
      };
      savedReflections.push(newReflection);
      localStorage.setItem('godInwardReflections', JSON.stringify(savedReflections));
      
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000); // Reset after 2 seconds
    }
  };

  const content = {
    english: {
      title: 'Togetherness',
      arabic: 'Jam\'',
      arabicText: 'الجَمْعُ',
      intro: 'This part is about Jam\', meaning togetherness. In life, you can travel to God in two ways: together within yourself or scattered within yourself.',
      explanation: 'Togetherness means your heart, your mind, and your body are all aligned. Everything in you is moving in one direction. When you are together inside, you feel calm. You know where you are going, and everything that happens along the way — good or bad — is just part of one single journey toward Allah.',
      aspectsTitle: 'Understanding Togetherness:',
      aspects: [
        {
          number: 'What is Togetherness (jam\')?:',
          text: 'Togetherness means your heart, your mind, and your body are all aligned. Everything in you is moving in one direction. When you are together inside, you feel calm. You know where you are going, and everything that happens along the way — good or bad — is just part of one single journey toward Allah.'
        },
        {
          number: 'The Opposite: Dispersion (tafarruq):',
          text: 'The opposite is tafarruq — dispersion. That\'s when your heart wants one thing, your mind is chasing something else, and your body is busy with yet another. Sometimes even your mind itself is scattered: too many wants, worries, distractions, and conflicting ideas. You get pulled in every direction and lose sight of your destination.'
        },
        {
          number: 'The Cure:',
          text: 'Togetherness is the cure for tafarruq. It\'s returning to one purpose, one path, one destination: Allah. It\'s choosing to put His will above your own and directing all your energy toward that single goal.'
        }
      ],
      actionTitle: 'Your Togetherness Reflection',
      actionText: 'Write about how you can bring togetherness into your life:',
      responsePlaceholder: 'Write your reflection here...',
      startAction: 'Begin Your Reflection',
      languageToggle: 'Nederlands'
    },
    dutch: {
      title: 'Samenhorigheid',
      arabic: 'Jam\'',
      arabicText: 'الجَمْعُ',
      intro: 'Dit deel gaat over Jam\', wat samenhorigheid betekent. In het leven kun je op twee manieren naar God reizen: samen binnen jezelf of verspreid binnen jezelf.',
      explanation: 'Samenhorigheid betekent dat je hart, je geest en je lichaam allemaal uitgelijnd zijn. Alles in je beweegt in één richting. Wanneer je van binnen samen bent, voel je je kalm. Je weet waar je naartoe gaat, en alles wat onderweg gebeurt — goed of slecht — is gewoon onderdeel van één enkele reis naar Allah.',
      aspectsTitle: 'Samenhorigheid Begrijpen:',
      aspects: [
        {
          number: 'Wat is Samenhorigheid (jam\')?:',
          text: 'Samenhorigheid betekent dat je hart, je geest en je lichaam allemaal uitgelijnd zijn. Alles in je beweegt in één richting. Wanneer je van binnen samen bent, voel je je kalm. Je weet waar je naartoe gaat, en alles wat onderweg gebeurt — goed of slecht — is gewoon onderdeel van één enkele reis naar Allah.'
        },
        {
          number: 'Het Tegenovergestelde: Verspreiding (tafarruq):',
          text: 'Het tegenovergestelde is tafarruq — verspreiding. Dat is wanneer je hart één ding wil, je geest iets anders achtervolgt, en je lichaam bezig is met nog iets anders. Soms is zelfs je geest zelf verspreid: te veel verlangens, zorgen, afleidingen en conflicterende ideeën. Je wordt in alle richtingen getrokken en verliest je bestemming uit het oog.'
        },
        {
          number: 'De Genezing:',
          text: 'Samenhorigheid is de genezing voor tafarruq. Het is terugkeren naar één doel, één pad, één bestemming: Allah. Het is kiezen om Zijn wil boven die van jezelf te plaatsen en al je energie naar dat ene doel te richten.'
        }
      ],
      actionTitle: 'Jouw Samenhorigheid Reflectie',
      actionText: 'Schrijf over hoe je samenhorigheid in je leven kunt brengen:',
      responsePlaceholder: 'Schrijf hier je reflectie...',
      startAction: 'Begin Je Reflectie',
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
            src={jamImage} 
            alt="Togetherness - Jam'" 
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
                Reflection saved!
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
              Save Reflection
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntroGodInward; 
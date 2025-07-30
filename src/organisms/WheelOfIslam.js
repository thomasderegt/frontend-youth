import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import NamesOfAllah from './NamesOfAllah';
import NameDetail from './NameDetail';
import TazkiyyahLanding from './TazkiyyahLanding';
import Settings from './Settings';
import ChatBox from './ChatBox';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useSettings } from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';

// Goal-based topic configurations
const askTopics = [
  { english: 'Suffering', phonetic: 'Rihlah Shakhsiyyah', color: '#B5838D', icon: '🌟' },
  { english: 'Natural State', phonetic: 'Fitrah', color: '#E76F51', icon: '🧬' },
  { english: 'Misconceptions', phonetic: 'Su\' al-Mafahim', color: '#2A9D8F', icon: '💭' },
  { english: 'Scientific Evidence', phonetic: 'Burhan Ilmi', color: '#F4A261', icon: '🔬' },
  { english: 'Historical Evidence', phonetic: 'Burhan Tarikhi', color: '#E9C46A', icon: '📚' },
  { english: 'Rational Evidence', phonetic: 'Hujaj Mantiqiyyah', color: '#A26769', icon: '🧠' },
  { english: 'Quranic Evidence', phonetic: 'Ta\'awun', color: '#6C91BF', icon: '🤝' },
  { english: 'Prophetic Evidence', phonetic: 'Adillah', color: '#8E7DBE', icon: '🔍' },
];

const exploreTopics = [
  { english: 'Purification', phonetic: 'Tazkiyyah', color: '#8E7DBE', icon: '💖' },
  { english: 'Prophets', phonetic: 'Anbiya', color: '#F4A261', icon: '📖' },
  { english: 'History', phonetic: 'Tarikh', color: '#2A9D8F', icon: '🏛️' },
  { english: 'Art', phonetic: 'Fann', color: '#E76F51', icon: '🎨' },
  { english: 'Science', phonetic: 'Ulum', color: '#E9C46A', icon: '🔬' },
  { english: 'Creed', phonetic: 'Aqeedah', color: '#A26769', icon: '🧠' },
  { english: 'Literature', phonetic: 'Adab', color: '#6C91BF', icon: '📚' },
  { english: 'Architecture', phonetic: 'Mi\'mar', color: '#B5838D', icon: '🕌' },
];

const improveTopics = [
  { english: 'Prayer', phonetic: 'Salah', color: '#8E7DBE', icon: '🕌' },
  { english: 'Fasting', phonetic: 'Sawm', color: '#F4A261', icon: '🌙' },
  { english: 'Charity', phonetic: 'Zakah', color: '#2A9D8F', icon: '🤲' },
  { english: 'Pilgrimage', phonetic: 'Hajj', color: '#E76F51', icon: '🕋' },
  { english: 'Good Character', phonetic: 'Akhlaq', color: '#E9C46A', icon: '💎' },
  { english: 'Family', phonetic: 'Usrah', color: '#A26769', icon: '👨‍👩‍👧‍👦' },
  { english: 'Quran', phonetic: 'Quran', color: '#6C91BF', icon: '📖' },
  { english: 'Sunnah', phonetic: 'Dhikr', color: '#B5838D', icon: '📿' },
];



const WheelOfIslam = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [userGoal, setUserGoal] = useState(localStorage.getItem('userGoal'));
  const [userLevel, setUserLevel] = useState(parseInt(localStorage.getItem('userLevel')) || 1);
  const svgRef = useRef(null);
  const [size, setSize] = useState(0);
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const { openSettings } = useSettings();
  const navigate = useNavigate();

  // Shared state for PropertiesPanel
  const [sharedGoal, setSharedGoal] = useState(userGoal);
  const [sharedLevel, setSharedLevel] = useState(userLevel);

  // Update shared state when userGoal/userLevel changes
  useEffect(() => {
    setSharedGoal(userGoal);
    setSharedLevel(userLevel);
  }, [userGoal, userLevel]);

  const handleResetOnboarding = () => {
    localStorage.removeItem('userGoal');
    localStorage.removeItem('userLevel');
    setUserGoal(null);
    setUserLevel(1);
    window.location.reload();
  };
  let topics;
  let wheelTitle;
  let wheelSubtitle;


  
  // Use shared state for determining topics
  const activeGoal = sharedGoal || userGoal;
  const activeLevel = sharedLevel || userLevel;
  
  switch (activeGoal) {
    case 'doubts':
      topics = askTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = `Address Doubts - Level ${activeLevel}`;
      break;
    case 'explore':
      topics = exploreTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = `Explore & Discover - Level ${activeLevel}`;
      break;
    case 'improve':
      topics = improveTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = `Grow & Improve - Level ${activeLevel}`;
      break;
    default:
      topics = exploreTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = `Explore & Discover - Level ${activeLevel}`;
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setSize(Math.min(rect.width, rect.height));
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const center = size / 2;
  const radius = center * 0.7;
  const outerRadius = center * 0.18;
  const centerRadius = center * 0.25;

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (topic) => {
    if (topic === 'The (One and Only) True God' || topic === 'One True God') {
      navigate('/one-true-god');
    } else if (topic === 'Settings') {
      openSettings();
    } else if (topic === 'Purification') {
      navigate('/tazkiyyah');
    } else {
      // Show different messages based on user goal and level
      const userGoal = localStorage.getItem('userGoal');
      const userLevel = localStorage.getItem('userLevel') || 1;
      let message = 'Coming soon!';
      
      if (userGoal === 'doubts') {
        message = `This section will help you find evidence and answers to your questions at Level ${userLevel}. Coming soon!`;
      } else if (userGoal === 'explore') {
        message = `This section will help you explore and discover new aspects of Islam at Level ${userLevel}. Coming soon!`;
      } else if (userGoal === 'improve') {
        message = `This section will help you improve your practice and build better habits at Level ${userLevel}. Coming soon!`;
      }
      
      alert(message);
    }
  };

  // Use a fixed font size for all topic titles (outer circles)
  const topicFontSize = outerRadius * 0.18;
  // Calculate font size for center title to fit within the center circle
  const getCenterFontSize = (text) => {
    const base = centerRadius * 0.22;
    if (text.length > 18) return base * 0.7;
    if (text.length > 14) return base * 0.8;
    if (text.length > 10) return base * 0.9;
    return base;
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
        themeName === 'story' ? 'animate-fade-in' : ''
      }`}
      style={{
        // backgroundColor: theme.background, // Removed to allow background image to show
        color: theme.text,
        fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
      }}
    >
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .topic-hover:hover {
          transform: scale(1.08);
          filter: brightness(1.05);
        }
      `}</style>

      <div className="flex flex-col items-center">
        <h1
          className="text-3xl sm:text-5xl font-bold text-center"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginBottom: 0 }}
        >
          {wheelTitle}
        </h1>
        <div
          className="text-base sm:text-2xl font-semibold text-center mb-6"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginTop: 4 }}
        >
          {wheelSubtitle}
        </div>

        <div
          ref={svgRef}
          className="w-full aspect-square mx-auto flex items-center justify-center"
          style={{ maxWidth: '100vw', width: '100vw', padding: '0 8px' }}
        >
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
            {/* Radial gradient (Story only) */}
            {themeName === 'story' && (
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#b18fff" />
                  <stop offset="100%" stopColor="#805ad5" />
                </radialGradient>
              </defs>
            )}

            {/* Buitenste ring */}
            <circle
              cx={center}
              cy={center}
              r={radius * 0.86}
              fill="none"
              stroke={theme.border}
              strokeWidth="2"
              style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
            />

            {/* Stralenlijnen */}
            {topics.map((_, index) => {
              const angle = (index / topics.length) * 2 * Math.PI;
              const lineStart = calculatePoint(angle, centerRadius);
              const lineEnd = calculatePoint(angle, radius * 0.86);
              return (
                <line
                  key={`line-${index}`}
                  x1={lineStart.x}
                  y1={lineStart.y}
                  x2={lineEnd.x}
                  y2={lineEnd.y}
                  stroke={theme.border}
                  strokeWidth="2"
                  style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
                />
              );
            })}

            {/* Centrale cirkel */}
            {(() => {
              const centerFill =
                themeName === 'story' ? 'url(#centerGradient)' : theme.background;
              const centerStroke =
                themeName === 'story' ? '#a084e8' : theme.border;
              const centerTextColor =
                themeName === 'story' ? '#ffffff' : theme.secondary;

              return (
                <>
                  <circle
                    cx={center}
                    cy={center}
                    r={centerRadius}
                    fill={centerFill}
                    stroke={centerStroke}
                    strokeWidth="3"
                    onClick={() => handleClick('The (One and Only) True God')}
                    style={themeName === 'neon' ? { cursor: 'pointer', filter: `drop-shadow(0 0 6px ${theme.border})` } : { cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = `drop-shadow(0 0 15px ${centerStroke}) drop-shadow(0 0 30px ${centerStroke})`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = themeName === 'neon' ? `drop-shadow(0 0 6px ${theme.border})` : 'none';
                    }}
                    onMouseDown={(e) => {
                      e.target.style.filter = `drop-shadow(0 0 5px ${centerStroke}) drop-shadow(0 0 10px ${centerStroke}) inset 0 0 10px rgba(0, 0, 0, 0.3)`;
                    }}
                    onMouseUp={(e) => {
                      e.target.style.filter = `drop-shadow(0 0 15px ${centerStroke}) drop-shadow(0 0 30px ${centerStroke})`;
                    }}
                  />
                  {userGoal === 'improve' ? (
                    <>
                      <text
                        x={center}
                        y={center - 25}
                        textAnchor="middle"
                        fill={centerTextColor}
                        fontSize={getCenterFontSize('Remembrance of the One True God')}
                        fontWeight="bold"
                        dy=".3em"
                        pointerEvents="none"
                        style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                      >
                        {'Remembrance of'.toUpperCase()}
                      </text>
                      <text
                        x={center}
                        y={center + 25}
                        textAnchor="middle"
                        fill={centerTextColor}
                        fontSize={getCenterFontSize('Remembrance of the One True God')}
                        fontWeight="bold"
                        dy=".3em"
                        pointerEvents="none"
                        style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                      >
                        {'The One True God'.toUpperCase()}
                      </text>
                    </>
                  ) : (
                    <text
                      x={center}
                      y={center}
                      textAnchor="middle"
                      fill={centerTextColor}
                      fontSize={getCenterFontSize('The One True God')}
                      fontWeight="bold"
                      dy=".3em"
                      pointerEvents="none"
                      style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                    >
                      {'The One True God'.toUpperCase()}
                    </text>
                  )}
                </>
              );
            })()}

            {/* Buitenste cirkels + labels */}
            {topics.map((topic, index) => {
              const angle = (index / topics.length) * 2 * Math.PI;
              const pos = calculatePoint(angle, radius * 0.86);

              const fillColor =
                themeName === 'story' ? topic.color : theme.background;
              const textColor =
                themeName === 'story' ? '#ffffff' : theme.secondary;
              const strokeColor =
                themeName === 'story' ? topic.color : theme.border;

              return (
                <g
                  key={`topic-${index}`}
                  onClick={() => handleClick(topic.english)}
                  className={themeName === 'story' ? 'transition-all duration-300 topic-hover' : ''}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    const circle = e.currentTarget.querySelector('circle');
                    const texts = e.currentTarget.querySelectorAll('text');
                    if (circle) {
                      circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
                    }
                    texts.forEach(text => {
                      text.style.textShadow = `0 0 10px ${textColor} 0 0 20px ${textColor}`;
                    });
                  }}
                  onMouseLeave={(e) => {
                    const circle = e.currentTarget.querySelector('circle');
                    const texts = e.currentTarget.querySelectorAll('text');
                    if (circle) {
                      circle.style.filter = themeName === 'neon' ? `drop-shadow(0 0 6px ${strokeColor})` : 'none';
                    }
                    texts.forEach(text => {
                      text.style.textShadow = '0 0 6px #00f2fa';
                    });
                  }}
                  onMouseDown={(e) => {
                    const circle = e.currentTarget.querySelector('circle');
                    if (circle) {
                      circle.style.filter = `drop-shadow(0 0 5px ${strokeColor}) drop-shadow(0 0 10px ${strokeColor}) inset 0 0 10px rgba(0, 0, 0, 0.3)`;
                    }
                  }}
                  onMouseUp={(e) => {
                    const circle = e.currentTarget.querySelector('circle');
                    if (circle) {
                      circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
                    }
                  }}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={outerRadius}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2"
                    style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${strokeColor})` } : {}}
                  />
                  {themeName === 'story' && (
                    <text
                      x={pos.x}
                      y={pos.y - outerRadius * 0.5}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize={outerRadius * 0.24}
                      dy="0"
                    >
                      {topic.icon}
                    </text>
                  )}
                  {topic.english.includes('\n') ? (
                    <>
                      <text
                        x={pos.x}
                        y={pos.y - 15}
                        textAnchor="middle"
                        fill={textColor}
                        fontSize={topicFontSize}
                        fontWeight="bold"
                        dy="0"
                        style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                      >
                        {topic.english.split('\n')[0].toUpperCase()}
                      </text>
                      <text
                        x={pos.x}
                        y={pos.y + 15}
                        textAnchor="middle"
                        fill={textColor}
                        fontSize={topicFontSize}
                        fontWeight="bold"
                        dy="0"
                        style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                      >
                        {topic.english.split('\n')[1].toUpperCase()}
                      </text>
                    </>
                  ) : (
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize={topicFontSize}
                      fontWeight="bold"
                      dy="0"
                      style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                    >
                      {topic.english.toUpperCase()}
                    </text>
                  )}
                  {language === 'english_phonetic' && (
                    <text
                      x={pos.x}
                      y={pos.y + outerRadius * 0.25}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize={outerRadius * 0.13}
                    >
                      {topic.phonetic}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>


        {/* Settings Button - Fixed position top right */}
        <button 
          onClick={openSettings}
          className="fixed top-4 right-4 z-[9999] px-4 py-2 rounded-lg border-2 transition-all duration-200 active:scale-95 flex items-center justify-center"
          style={{
            color: '#00f2fa',
            borderColor: '#00f2fa',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: '120px',
            height: '32px',
            boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa',
            backdropFilter: 'blur(10px)',
            fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '12px',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
            e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
            e.target.style.boxShadow = '0 0 5px #00f2fa, 0 0 10px #00f2fa, inset 0 0 15px rgba(0, 242, 250, 0.5)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
          }}
        >
          Settings
        </button>




      </div>



      {/* Remove all view state and conditional rendering for 'names', 'detail', etc. Only keep the wheel rendering for now. */}
      {/* {view === 'names' && (
        <NamesOfAllah
          onBack={() => setView('wheel')}
          onNameClick={(name) => {
            setSelectedName(name);
            setView('detail');
          }}
          language={language}
        />
      )} */}

      {/* {view === 'detail' && selectedName && (
        <NameDetail
          name={selectedName}
          onBack={() => setView('names')}
          onMore={() => alert('More info coming soon')}
        />
      )} */}

      {/* {view === 'settings' && (
        <Settings
          language={language}
          setLanguage={setLanguage}
          onBack={() => setView('wheel')}
        />
      )} */}

      {/* {view === 'tazkiyyah' && (
        <TazkiyyahLanding onBack={() => setView('wheel')} />
      )} */}

            {/* Settings Component */}
      <Settings />

      {/* ChatBox Component */}
      {console.log('WheelOfIslam ChatBox props:', { userGoal, userLevel })}
      <ChatBox userGoal={userGoal} userLevel={userLevel} />
    </div>
  );
};

export default WheelOfIslam;

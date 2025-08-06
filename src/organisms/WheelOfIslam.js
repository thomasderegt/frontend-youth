import React, { useState, useRef, useLayoutEffect } from 'react';
import Settings from './Settings';
import ChatBox from './ChatBox';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useSettings } from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';

// Statische wheel segments met unieke GUID's
const WHEEL_SEGMENTS = [
  { id: 'SEGMENT_002', position: 1, angle: 0 },
  { id: 'SEGMENT_003', position: 2, angle: 45 },
  { id: 'SEGMENT_004', position: 3, angle: 90 },
  { id: 'SEGMENT_005', position: 4, angle: 135 },
  { id: 'SEGMENT_006', position: 5, angle: 180 },
  { id: 'SEGMENT_007', position: 6, angle: 225 },
  { id: 'SEGMENT_008', position: 7, angle: 270 },
  { id: 'SEGMENT_009', position: 8, angle: 315 },
];

// Theme styling op basis van segment ID's
const themeStyles = {
  neon: {
    'SEGMENT_002': { color: '#FF007F', glow: true, icon: '💔' },
    'SEGMENT_003': { color: '#00f2fa', glow: true, icon: '🧬' },
    'SEGMENT_004': { color: '#FF6B35', glow: true, icon: '💭' },
    'SEGMENT_005': { color: '#FFD700', glow: true, icon: '🧠' },
    'SEGMENT_006': { color: '#FF007F', glow: true, icon: '🔬' },
    'SEGMENT_007': { color: '#00f2fa', glow: true, icon: '📚' },
    'SEGMENT_008': { color: '#FF6B35', glow: true, icon: '📖' },
    'SEGMENT_009': { color: '#FFD700', glow: true, icon: '🕌' },
  },

};

// Eenvoudige content mapping voor segmenten
const segmentContent = {
  'SEGMENT_001': { english: 'SEGMENT_001', phonetic: '' },
  'SEGMENT_002': { english: 'SEGMENT_002', phonetic: '' },
  'SEGMENT_003': { english: 'SEGMENT_003', phonetic: '' },
  'SEGMENT_004': { english: 'SEGMENT_004', phonetic: '' },
  'SEGMENT_005': { english: 'SEGMENT_005', phonetic: '' },
  'SEGMENT_006': { english: 'SEGMENT_006', phonetic: '' },
  'SEGMENT_007': { english: 'SEGMENT_007', phonetic: '' },
  'SEGMENT_008': { english: 'SEGMENT_008', phonetic: '' },
  'SEGMENT_009': { english: 'SEGMENT_009', phonetic: '' },
};

const WheelOfIslam = () => {
  const svgRef = useRef(null);
  const [size, setSize] = useState(0);
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const { openSettings, isSettingsOpen, userLevel } = useSettings();
  const navigate = useNavigate();

  // Bepaal wheel titel en subtitle
  const getWheelInfo = () => {
    return {
      title: 'Wheel of Islam',
      subtitle: `Level ${userLevel}`
    };
  };

  const wheelInfo = getWheelInfo();

  useLayoutEffect(() => {
    const updateSize = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const containerSize = Math.min(rect.width, rect.height);
        const newSize = Math.max(containerSize * 0.95, 400);
        setSize(newSize);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const center = size / 2;
  const radius = center * 0.7;
  const outerRadius = center * 0.12; // Even smaller circle size to prevent overlap
  const centerRadius = center * 0.18; // Even smaller center circle size
  
  // Circle mode only - no donut shape
  const topicRadius = radius * 0.75; // Moved segments even closer together
  const centerTextRadius = centerRadius;
  const centerCircleRadius = centerRadius * 1.2; // Maak de centrale cirkel groter

  console.log('WheelOfIslam Debug:', {
    topicRadius,
    centerTextRadius,
    centerCircleRadius,
    radius,
    centerRadius
  });

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (segmentId) => {
    const content = segmentContent[segmentId];
    
    // Als er geen content is of lege content, doe niets
    if (!content || !content.english) {
      console.log('Empty segment clicked:', segmentId);
      return;
    }

    const topic = content.english;
    
    if (topic === 'The (One and Only) True God' || topic === 'One True God') {
      navigate('/god');
    } else if (topic === 'Settings') {
      openSettings();
    } else if (topic === 'Purification' || topic === 'Tazkiyyah') {
      navigate('/tazkiyyah');
    } else if (topic === 'Repentance') {
      navigate('/intro-repentance');
    } else {
      // Convert topic name to URL-friendly format
      const topicSlug = topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      navigate(`/topic/${topicSlug}`);
    }
  };

  // Use a responsive font size for all topic titles (outer circles)
  const topicFontSize = Math.max(outerRadius * 0.18, 12); // Minimum 12px
  // Calculate font size for center title to fit within the center circle
  const getCenterFontSize = (text) => {
    const base = centerTextRadius * 0.22;
    if (text.length > 18) return base * 0.7;
    if (text.length > 14) return base * 0.8;
    if (text.length > 10) return base * 0.9;
    return base;
  };

  return (
          <div
        className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: 'inherit',
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

      {/* Wheel Section */}
      <section className="flex flex-col items-center w-full mb-8">
        <div className="relative flex items-center justify-center">
          <h1
            className="font-bold text-center mb-2"
            style={{ 
              color: themeName === 'classicEarth' ? theme.primary : 
                     themeName === 'zwartWit' ? '#000000' : theme.secondary, 
              textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none',
              fontSize: 'clamp(2rem, 4vw, 4rem)'
            }}
          >
            {wheelInfo.title}
          </h1>
          
          {/* Settings Button - Positioned next to title */}
          {!isSettingsOpen && (
            <button 
              onClick={openSettings}
              className="absolute -right-32 top-1/2 transform -translate-y-1/2 z-[9999] px-4 py-2 rounded-lg border-2 transition-all duration-200 active:scale-95 flex items-center justify-center"
              style={{
                color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                width: 'clamp(100px, 8vw, 150px)',
                height: 'clamp(28px, 2.5vw, 40px)',
                boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 'clamp(10px, 1vw, 14px)',
                transform: 'rotate(90deg)',
              }}
              onMouseEnter={(e) => {
                if (themeName === 'classicEarth') {
                  e.target.style.backgroundColor = theme.secondary;
                  e.target.style.color = theme.background;
                } else {
                  e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
                  e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (themeName === 'classicEarth') {
                  e.target.style.backgroundColor = theme.background;
                  e.target.style.color = theme.border;
                } else {
                  e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                  e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
                }
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'scale(0.95) rotate(90deg)';
                if (themeName !== 'classicEarth') {
                  e.target.style.boxShadow = '0 0 5px #00f2fa, 0 0 10px #00f2fa, inset 0 0 15px rgba(0, 242, 250, 0.5)';
                }
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'scale(1) rotate(90deg)';
                if (themeName !== 'classicEarth') {
                  e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
                }
              }}
            >
              Settings
            </button>
          )}
        </div>
        
        <div
          className="font-semibold text-center mb-8"
          style={{ 
            color: themeName === 'classicEarth' ? theme.primary : 
                   themeName === 'zwartWit' ? '#000000' : theme.secondary, 
            textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none',
            fontSize: 'clamp(1rem, 2vw, 2rem)'
          }}
        >
          {wheelInfo.subtitle}
        </div>

        <div
          ref={svgRef}
          className="w-full h-full mx-auto flex items-center justify-center"
          style={{ 
            padding: '0 4px',
            width: '100%',
            height: '100%',
            minHeight: '500px'
          }}
        >
          <svg 
            viewBox={`0 0 ${size} ${size}`} 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >


            {/* Circle mode: Traditionele cirkels */}
            <>
              {/* Stralenlijnen - Verbind de buitenste cirkels */}
              {WHEEL_SEGMENTS.map((segment, index) => {
                const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
                const nextAngle = ((index + 1) / WHEEL_SEGMENTS.length) * 2 * Math.PI;
                
                const currentPos = calculatePoint(angle, topicRadius);
                const nextPos = calculatePoint(nextAngle, topicRadius);
                
                const lineColor = themeName === 'zwartWit' ? '#000000' : '#ffffff';
                
                return (
                  <line
                    key={`line-${segment.id}`}
                    x1={currentPos.x}
                    y1={currentPos.y}
                    x2={nextPos.x}
                    y2={nextPos.y}
                    stroke={lineColor}
                    strokeWidth={Math.max(size / 400, 1)}
                  />
                );
              })}

              {/* Radiale lijnen - Verbind centrale cirkel met buitenste cirkels */}
              {WHEEL_SEGMENTS.map((segment, index) => {
                const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
                const outerPos = calculatePoint(angle, topicRadius);
                
                const lineColor = themeName === 'zwartWit' ? '#000000' : '#ffffff';
                
                return (
                  <line
                    key={`radial-${segment.id}`}
                    x1={center}
                    y1={center}
                    x2={outerPos.x}
                    y2={outerPos.y}
                    stroke={lineColor}
                    strokeWidth={Math.max(size / 400, 1)}
                  />
                );
              })}

              {/* Buitenste cirkels + labels */}
              {WHEEL_SEGMENTS.map((segment, index) => {
                const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
                const pos = calculatePoint(angle, topicRadius);
                
                const segmentStyle = themeStyles[themeName]?.[segment.id] || themeStyles.neon[segment.id];
                const content = segmentContent[segment.id];

                if (!content) return null;

                const fillColor = themeName === 'zwartWit' ? '#ffffff' : theme.background;
                const textColor = themeName === 'zwartWit' ? '#000000' : theme.secondary;
                const strokeColor = themeName === 'zwartWit' ? '#000000' : theme.border;

                return (
                  <g
                    key={segment.id}
                    onClick={() => handleClick(segment.id)}
                    className="transition-all duration-300 topic-hover"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      const circle = e.currentTarget.querySelector('circle');
                      const texts = e.currentTarget.querySelectorAll('text');
                      if (circle) {
                        if (themeName === 'zwartWit') {
                          circle.style.filter = 'none';
                        } else {
                          circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
                        }
                      }
                      texts.forEach(text => {
                        if (themeName === 'zwartWit') {
                          text.style.textShadow = 'none';
                        } else {
                          text.style.textShadow = `0 0 10px ${textColor} 0 0 20px ${textColor}`;
                        }
                      });
                    }}
                    onMouseLeave={(e) => {
                      const circle = e.currentTarget.querySelector('circle');
                      const texts = e.currentTarget.querySelectorAll('text');
                      if (circle) {
                        if (themeName === 'zwartWit') {
                          circle.style.filter = 'none';
                        } else {
                          circle.style.filter = themeName === 'neon' ? `drop-shadow(0 0 6px ${strokeColor})` : 'none';
                        }
                      }
                      texts.forEach(text => {
                        if (themeName === 'zwartWit') {
                          text.style.textShadow = 'none';
                        } else {
                          text.style.textShadow = '0 0 6px #00f2fa';
                        }
                      });
                    }}
                    onMouseDown={(e) => {
                      const circle = e.currentTarget.querySelector('circle');
                      if (circle) {
                        if (themeName === 'zwartWit') {
                          circle.style.filter = 'none';
                        } else {
                          circle.style.filter = `drop-shadow(0 0 5px ${strokeColor}) drop-shadow(0 0 10px ${strokeColor}) inset 0 0 10px rgba(0, 242, 250, 0.5)`;
                        }
                      }
                    }}
                    onMouseUp={(e) => {
                      const circle = e.currentTarget.querySelector('circle');
                      if (circle) {
                        if (themeName === 'zwartWit') {
                          circle.style.filter = 'none';
                        } else {
                          circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
                        }
                      }
                    }}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={outerRadius}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={Math.max(size / 400, 1)}
                      style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${strokeColor})` } : 
                             themeName === 'zwartWit' ? { filter: 'none' } : {}}
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
                        {segmentStyle.icon}
                      </text>
                    )}
                    {content.english && (
                      content.english.includes('\n') ? (
                        <>
                          <text
                            x={pos.x}
                            y={pos.y - 15}
                            textAnchor="middle"
                            fill={textColor}
                            fontSize={topicFontSize}
                            fontWeight="bold"
                            dy="0"
                            style={{ 
                              textShadow: themeName === 'zwartWit' ? 'none' : '0 0 6px #00f2fa', 
                              textTransform: 'uppercase' 
                            }}
                          >
                            {content.english.split('\n')[0].toUpperCase()}
                          </text>
                          <text
                            x={pos.x}
                            y={pos.y + 15}
                            textAnchor="middle"
                            fill={textColor}
                            fontSize={topicFontSize}
                            fontWeight="bold"
                            dy="0"
                            style={{ 
                              textShadow: themeName === 'zwartWit' ? 'none' : '0 0 6px #00f2fa', 
                              textTransform: 'uppercase' 
                            }}
                          >
                            {content.english.split('\n')[1].toUpperCase()}
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
                          style={{ 
                            textShadow: themeName === 'zwartWit' ? 'none' : '0 0 6px #00f2fa', 
                            textTransform: 'uppercase' 
                          }}
                        >
                          {content.english.toUpperCase()}
                        </text>
                      )
                    )}
                    {language === 'phonetic' && content.phonetic && (
                      <text
                        x={pos.x}
                        y={pos.y + outerRadius * 0.25}
                        textAnchor="middle"
                        fill={textColor}
                        fontSize={outerRadius * 0.15}
                        fontWeight="bold"
                      >
                        {content.phonetic}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Centrale cirkel */}
              {(() => {
                const centerFill = themeName === 'zwartWit' ? '#ffffff' : theme.background;
                const centerStroke = themeName === 'zwartWit' ? '#000000' : centerFill; // Zwarte border voor Wireframe
                const centerTextColor = themeName === 'zwartWit' ? '#000000' : theme.secondary;

                return (
                  <>
                    <circle
                      cx={center}
                      cy={center}
                      r={centerCircleRadius}
                      fill={centerFill}
                      stroke={centerStroke}
                      strokeWidth="2"
                      onClick={() => handleClick('CENTER')}
                      style={{ 
                        cursor: 'pointer',
                        filter: themeName === 'neon' ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (themeName === 'neon') {
                          e.target.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (themeName === 'neon') {
                          e.target.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                        }
                      }}
                      onMouseDown={(e) => {
                        if (themeName === 'neon') {
                          e.target.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.7))';
                        }
                      }}
                      onMouseUp={(e) => {
                        if (themeName === 'neon') {
                          e.target.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))';
                        }
                      }}
                    />
                    <text
                      x={center}
                      y={center}
                      textAnchor="middle"
                      fill={centerTextColor}
                      fontSize={getCenterFontSize('SEGMENT_001')}
                      fontWeight="bold"
                      dy=".3em"
                      pointerEvents="none"
                      style={{ 
                        textShadow: themeName === 'neon' ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
                        textTransform: 'uppercase' 
                      }}
                    >
                      {'SEGMENT_001'.toUpperCase()}
                    </text>
                  </>
                );
              })()}
            </>
          </svg>
        </div>
      </section>

      {/* ChatBox Section */}
      <section className="w-full flex justify-center">
        <ChatBox userLevel={userLevel} />
      </section>

      {/* Settings Component */}
      <Settings />
    </div>
  );
};

export default WheelOfIslam;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

// Statische wheel segments - Youth Outward (Identity, Society, Meaning)
const WHEEL_SEGMENTS = [
  { id: 'Belief', phonetic: 'ʿAqīdah', position: 1, angle: 0 },
  { id: 'Jurisprudence', phonetic: 'Fiqh', position: 2, angle: 45 },
  { id: 'Qur\'an', phonetic: 'Qurʾān', position: 3, angle: 90 },
  { id: 'Life of the Prophet', phonetic: 'Sīrah', position: 4, angle: 135 },
  { id: 'Islamic History', phonetic: 'Tārīkh', position: 5, angle: 180 },
  { id: 'Modern Ideologies', phonetic: 'Afkār Muʿāṣirah', position: 6, angle: 225 },
  { id: 'Family & Society', phonetic: 'Usrah wa Mujtamaʿ', position: 7, angle: 270 },
  { id: 'DIVINE LAW', phonetic: 'Shariʿah', position: 8, angle: 315 },
];

// Neon theme styling voor Youth Outward segmenten
const neonSegmentStyles = {
  'Belief': { color: '#8B5CF6', glow: true, icon: '🕌' }, // Paars - Geloof
  'Jurisprudence': { color: '#3B82F6', glow: true, icon: '📿' }, // Blauw - Jurisprudentie
  'Qur\'an': { color: '#7C3AED', glow: true, icon: '📖' }, // Violet - Koran
  'Life of the Prophet': { color: '#1D4ED8', glow: true, icon: '🌟' }, // Donkerblauw - Profeet
  'Islamic History': { color: '#A855F7', glow: true, icon: '🏛️' }, // Lila - Geschiedenis
  'Modern Ideologies': { color: '#2563EB', glow: true, icon: '🌍' }, // Koningsblauw - Modern
  'Family & Society': { color: '#9333EA', glow: true, icon: '👥' }, // Paars - Familie
  'DIVINE LAW': { color: '#3B82F6', glow: true, icon: '⚖️' }, // Blauw - Goddelijke Wet
};

const WheelOrganism = () => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();
  const { nightMode } = useSettings();
  const [size, setSize] = useState(400);

  // Calculate responsive size based on container
  React.useEffect(() => {
    const updateSize = () => {
      const container = document.querySelector('.wheel-container');
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const newSize = Math.min(Math.min(containerWidth, containerHeight) * 0.9, 600);
        console.log('Container width:', containerWidth, 'Container height:', containerHeight, 'New size:', newSize);
        setSize(newSize);
      }
    };

    // Initial update after a short delay to ensure container is rendered
    const timer = setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const center = size / 2;
  const radius = center * 0.7;
  const outerRadius = center * 0.30; // Increased circle size for better clickability
  
  // Circle mode only
  const topicRadius = radius * 0.90; // Moved segments closer together
  const centerCircleRadius = outerRadius; // Same size as other circles

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (segmentId) => {
    console.log('Clicked segment:', segmentId);
    console.log('Segment type:', typeof segmentId);
    
    // Navigate to intro pages based on segment
    if (segmentId === 'Belief' || segmentId === 'CENTER') {
      console.log('Navigating to /intro-belief');
      navigate('/intro-belief');
    } else if (segmentId === 'Jurisprudence') {
      console.log('Navigating to /intro-jurisprudence');
      console.log('About to navigate to /intro-jurisprudence');
      navigate('/intro-jurisprudence');
    } else if (segmentId === 'Qur\'an') {
      console.log('Navigating to /intro-quran');
      navigate('/intro-quran');
    } else if (segmentId === 'Life of the Prophet') {
      console.log('Navigating to /intro-life-of-prophet');
      navigate('/intro-life-of-prophet');
    } else if (segmentId === 'Islamic History') {
      console.log('Navigating to /intro-islamic-history');
      navigate('/intro-islamic-history');
    } else if (segmentId === 'Modern Ideologies') {
      console.log('Navigating to /intro-modern-ideologies');
      navigate('/intro-modern-ideologies');
    } else if (segmentId === 'Family & Society') {
      console.log('Navigating to /intro-family-society');
      navigate('/intro-family-society');
    } else if (segmentId === 'DIVINE LAW') {
      console.log('Navigating to /intro-jurisprudence');
      navigate('/intro-jurisprudence');
    } else {
      console.log('No navigation found for segment:', segmentId);
    }
  };

  const getCenterFontSize = (text) => {
    const base = outerRadius * 0.4; // Adjusted for smaller circles
    if (text.length > 18) return base * 0.7;
    if (text.length > 14) return base * 0.8;
    if (text.length > 10) return base * 0.9;
    return base;
  };

  return (
    <div className="wheel-container" style={{ 
      width: '100%', 
      height: '100%',
      minHeight: '400px',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '1rem 0'
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '400px'
        }}
      >
        <defs>
          {/* Neon glow filters */}
          {themeName === 'neon' && (
            <>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="neonGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </>
          )}
        </defs>

                  {/* Circle mode: Traditionele cirkels */}
          <>
            {/* Verbindingslijnen tussen buitenste cirkels - Op de randen */}
            {WHEEL_SEGMENTS.map((segment, index) => {
            const currentAngle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const currentPos = calculatePoint(currentAngle, topicRadius);
            
            // Verbind met de volgende cirkel
            const nextIndex = (index + 1) % WHEEL_SEGMENTS.length;
            const nextAngle = (nextIndex / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const nextPos = calculatePoint(nextAngle, topicRadius);
            
            // Bereken richting van huidige naar volgende cirkel
            const dx = nextPos.x - currentPos.x;
            const dy = nextPos.y - currentPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const normalizedX = dx / distance;
            const normalizedY = dy / distance;
            
            // Start punt: rand van huidige cirkel
            const startX = currentPos.x + normalizedX * outerRadius;
            const startY = currentPos.y + normalizedY * outerRadius;
            
            // Eind punt: rand van volgende cirkel
            const endX = nextPos.x - normalizedX * outerRadius;
            const endY = nextPos.y - normalizedY * outerRadius;
            
            const lineColor = themeName === 'zwartWit' ? '#000000' : 
                             themeName === 'neon' ? '#8B5CF6' : '#ffffff';
            
            return (
              <line
                key={`connection-${segment.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={lineColor}
                strokeWidth={Math.max(size / 400, 1)}
                style={{}}
              />
            );
          })}

          {/* Radiale lijnen - Verbind centrale cirkel met buitenste cirkels */}
          {WHEEL_SEGMENTS.map((segment, index) => {
            const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const outerPos = calculatePoint(angle, topicRadius);
            
            // Bereken het punt op de rand van de cirkel
            const distanceFromCenter = Math.sqrt((outerPos.x - center) ** 2 + (outerPos.y - center) ** 2);
            const normalizedX = (outerPos.x - center) / distanceFromCenter;
            const normalizedY = (outerPos.y - center) / distanceFromCenter;
            
            // Start punt: rand van centrale cirkel
            const startX = center + normalizedX * centerCircleRadius;
            const startY = center + normalizedY * centerCircleRadius;
            
            // Eind punt: rand van buitenste cirkel
            const endX = outerPos.x - normalizedX * outerRadius;
            const endY = outerPos.y - normalizedY * outerRadius;
            
            const lineColor = themeName === 'zwartWit' ? '#000000' : 
                             themeName === 'neon' ? '#3B82F6' : '#ffffff';
            
            return (
              <line
                key={`radial-${segment.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={lineColor}
                strokeWidth={Math.max(size / 400, 1)}
                style={{}}
              />
            );
          })}



          {/* Buitenste cirkels + labels */}
          {WHEEL_SEGMENTS.map((segment, index) => {
            const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const pos = calculatePoint(angle, topicRadius);
            
            const segmentStyle = themeName === 'neon' ? neonSegmentStyles[segment.id] : null;
            
            const fillColor = themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 'rgba(255, 255, 255, 0.3)'; // Dynamic background for neon
            const textColor = themeName === 'neon' && nightMode ? '#ffffff' : '#000000'; // White text for neon nightmode
            const strokeColor = themeName === 'zwartWit' ? '#000000' : 
                               themeName === 'neon' ? (segmentStyle?.color || '#00f2fa') : theme.border;

            return (
              <g
                key={segment.id}
                onClick={() => handleClick(segment.id)}
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {/* Invisible larger click area */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={outerRadius * 1.5}
                  fill="transparent"
                  stroke="none"
                  style={{ pointerEvents: 'auto' }}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={outerRadius}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={Math.max(size / 400, 1)}
                  style={{ pointerEvents: 'none' }}
                />

                <text
                  x={pos.x}
                  y={pos.y - 8}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize={Math.max(outerRadius * 0.22, 11)} // Main title
                  fontWeight="bold"
                  dy=".3em"
                  style={{ 
                    textShadow: 'none',
                    textTransform: 'uppercase',
                    transition: 'text-shadow 0.3s ease',
                    pointerEvents: 'none'
                  }}
                >
                  {segment.id.toUpperCase()}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize={Math.max(outerRadius * 0.18, 9)} // Phonetic text
                  fontWeight="normal"
                  dy=".3em"
                  style={{ 
                    textShadow: 'none',
                    textTransform: 'none',
                    transition: 'text-shadow 0.3s ease',
                    pointerEvents: 'none',
                    opacity: 0.8
                  }}
                >
                  {segment.phonetic}
                </text>
              </g>
            );
          })}

          {/* Centrale cirkel */}
          {(() => {
            const centerFill = themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 'rgba(255, 255, 255, 0.3)'; // Dynamic background for neon
            const centerStroke = themeName === 'zwartWit' ? '#000000' : 
                                themeName === 'neon' ? '#8B5CF6' : centerFill;
            const centerTextColor = themeName === 'neon' && nightMode ? '#ffffff' : '#000000'; // White text for neon nightmode

            return (
              <>
                <circle
                  cx={center}
                  cy={center}
                  r={centerCircleRadius}
                  fill={centerFill}
                  stroke={centerStroke}
                  strokeWidth={Math.max(size / 400, 1)}
                  onClick={() => handleClick('CENTER')}
                  style={{ 
                    cursor: 'pointer'
                  }}
                />
                <text
                  x={center}
                  y={center}
                  textAnchor="middle"
                  fill={centerTextColor}
                  fontSize={getCenterFontSize('GOD')}
                  fontWeight="bold"
                  dy=".3em"
                  pointerEvents="none"
                  style={{ 
                    textShadow: 'none',
                    textTransform: 'uppercase',
                    transition: 'text-shadow 0.3s ease'
                  }}
                >
                  {'GOD'}
                </text>
              </>
            );
          })()}
        </>
      </svg>
    </div>
  );
};

export default WheelOrganism; 
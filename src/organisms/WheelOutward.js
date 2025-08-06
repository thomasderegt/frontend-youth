import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

// Wheel segments for Youth Outward (Insights) - Wheel 1
const WHEEL_SEGMENTS = [
  { id: 'Belief', phonetic: 'ʿAqīdah', position: 1, angle: 0 },
  { id: 'Jurisprudence', phonetic: 'Fiqh', position: 2, angle: 45 },
  { id: 'Qur\'an', phonetic: 'Qurʾān', position: 3, angle: 90 },
  { id: 'Life of the Prophet', phonetic: 'Sīrah', position: 4, angle: 135 },
  { id: 'Islamic History', phonetic: 'Tārīkh', position: 5, angle: 180 },
  { id: 'Modern Ideologies', phonetic: 'Afkār Muʿāṣirah', position: 6, angle: 225 },
  { id: 'Family & Society', phonetic: 'Usrah wa Mujtamaʿ', position: 7, angle: 270 },
  { id: 'Divine Law', phonetic: 'Shariʿah', position: 8, angle: 315 },
];

// Neon theme styling for Youth Outward segments
const neonSegmentStyles = {
  'Belief': { color: '#8B5CF6', glow: true, icon: '🕌' }, // Purple - Belief
  'Jurisprudence': { color: '#3B82F6', glow: true, icon: '📿' }, // Blue - Jurisprudence
  'Qur\'an': { color: '#7C3AED', glow: true, icon: '📖' }, // Violet - Quran
  'Life of the Prophet': { color: '#1D4ED8', glow: true, icon: '🌟' }, // Dark Blue - Prophet
  'Islamic History': { color: '#A855F7', glow: true, icon: '🏛️' }, // Lilac - History
  'Modern Ideologies': { color: '#2563EB', glow: true, icon: '🌍' }, // Royal Blue - Modern
  'Family & Society': { color: '#9333EA', glow: true, icon: '👥' }, // Purple - Family
  'Divine Law': { color: '#3B82F6', glow: true, icon: '⚖️' }, // Blue - Divine Law
};

const WheelOutward = () => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();
  const { nightMode } = useSettings();
  const [size, setSize] = useState(400);

  // Calculate stroke width based on screen size and wheel size

  // Calculate stroke width based on screen size and wheel size
  const getStrokeWidth = () => {
    const screenWidth = window.innerWidth;
    const baseStrokeWidth = size / 400; // Base stroke width relative to wheel size
    
    // Scale stroke width based on screen size
    if (screenWidth >= 2560) { // 34 inch and above
      return Math.max(baseStrokeWidth * 1.2, 1.5);
    } else if (screenWidth >= 1920) { // Large screens
      return Math.max(baseStrokeWidth * 1.1, 1.2);
    } else if (screenWidth >= 1366) { // Medium screens
      return Math.max(baseStrokeWidth, 1);
    } else { // Mobile and small screens
      return Math.max(baseStrokeWidth * 0.8, 0.8);
    }
  };

  // Calculate responsive size based on container
  useEffect(() => {
    const updateSize = () => {
      const container = document.querySelector('.wheel-container');
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const screenWidth = window.innerWidth;
        
        // Calculate optimal size based on screen dimensions
        let newSize;
        
        // For very large screens (34 inch and above), center and limit maximum size
        if (screenWidth >= 2560) { // 34 inch 2560x1440
          newSize = Math.min(Math.min(containerWidth, containerHeight) * 0.6, 600);
        } 
        // For large screens (24-27 inch)
        else if (screenWidth >= 1920) {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * 0.75, 500);
        }
        // For medium screens (laptop)
        else if (screenWidth >= 1366) {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * 0.85, 450);
        }
        // For mobile and small screens
        else {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * 0.85, 400);
        }
        
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
  const radius = center * 0.8; // Increased radius to spread out more
  const outerRadius = center * 0.18; // Slightly larger circles
  
  // Circle mode only
  const topicRadius = radius * 0.95; // Spread segments out more
  const centerCircleRadius = outerRadius; // Same size as other circles

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (segmentId) => {
    console.log('WheelOutward - Clicked segment:', segmentId);
    
    // Navigate to intro pages based on segment
    if (segmentId === 'Belief') {
      console.log('Navigating to /intro-belief');
      navigate('/intro-belief');
    } else if (segmentId === 'CENTER') {
      console.log('Navigating to /god');
      navigate('/god');
    } else if (segmentId === 'Jurisprudence') {
      console.log('Navigating to /intro-jurisprudence');
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
    } else if (segmentId === 'Divine Law') {
      console.log('Navigating to /intro-divine-law');
      navigate('/intro-divine-law');
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
      minHeight: '350px',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '0.5rem 0',
      maxWidth: window.innerWidth >= 2560 ? '1200px' : '100%',
      margin: '0 auto'
    }}>
              <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${size} ${size}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ 
            width: '100%', 
            height: '100%',
            minHeight: '350px',
            maxWidth: window.innerWidth >= 2560 ? '800px' : '100vw',
            maxHeight: '100vh'
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

        {/* Circle mode: Traditional circles */}
        <>
          {/* Connection lines between outer circles - On the edges */}
          {WHEEL_SEGMENTS.map((segment, index) => {
            const currentAngle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const currentPos = calculatePoint(currentAngle, topicRadius);
            
            // Connect to the next circle
            const nextIndex = (index + 1) % WHEEL_SEGMENTS.length;
            const nextAngle = (nextIndex / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const nextPos = calculatePoint(nextAngle, topicRadius);
            
            // Calculate direction from current to next circle
            const dx = nextPos.x - currentPos.x;
            const dy = nextPos.y - currentPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Normalize direction vector
            const dirX = dx / distance;
            const dirY = dy / distance;
            
            // Calculate start and end points for the line
            const startX = currentPos.x + dirX * outerRadius;
            const startY = currentPos.y + dirY * outerRadius;
            const endX = nextPos.x - dirX * outerRadius;
            const endY = nextPos.y - dirY * outerRadius;
            
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
                strokeWidth={getStrokeWidth()}
                style={{}}
              />
            );
          })}

          {/* Radial lines - Connect center circle with outer circles */}
          {WHEEL_SEGMENTS.map((segment, index) => {
            const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const outerPos = calculatePoint(angle, topicRadius);
            
            // Calculate the point on the edge of the circle
            const distanceFromCenter = Math.sqrt((outerPos.x - center) ** 2 + (outerPos.y - center) ** 2);
            const normalizedX = (outerPos.x - center) / distanceFromCenter;
            const normalizedY = (outerPos.y - center) / distanceFromCenter;
            
            // Start point: edge of center circle
            const startX = center + normalizedX * centerCircleRadius;
            const startY = center + normalizedY * centerCircleRadius;
            
            // End point: edge of outer circle
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
                strokeWidth={getStrokeWidth()}
                style={{}}
              />
            );
          })}

          {/* Wheel segments */}
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
                  strokeWidth={getStrokeWidth()}
                  style={{ pointerEvents: 'none' }}
                />

                <text
                  x={pos.x}
                  y={pos.y - 8}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize={Math.max(Math.min(outerRadius * 0.18, 14), 8)} // Responsive font size with max 14px
                  fontWeight="bold"
                  dy=".3em"
                  style={{ 
                    textShadow: 'none',
                    textTransform: 'uppercase',
                    transition: 'text-shadow 0.3s ease',
                    pointerEvents: 'none'
                  }}
                >
                  {segment.id.length > 12 ? segment.id.substring(0, 12).toUpperCase() : segment.id.toUpperCase()}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize={Math.max(Math.min(outerRadius * 0.15, 12), 7)} // Responsive font size with max 12px
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
                  {segment.phonetic.length > 15 ? segment.phonetic.substring(0, 15) : segment.phonetic}
                </text>
              </g>
            );
          })}

          {/* Center circle */}
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
                  strokeWidth={getStrokeWidth()}
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
                  style={{ 
                    textShadow: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  GOD
                </text>
              </>
            );
          })()}
        </>
      </svg>
    </div>
  );
};

export default WheelOutward; 
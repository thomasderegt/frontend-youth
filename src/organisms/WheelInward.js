import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

// Statische wheel segments - Youth Inward (Spiritual Journey) - Combined Wheel 2 & 3
const WHEEL_SEGMENTS = [
  { id: 'Wakefulness', phonetic: 'Yaqzah', position: 1, angle: 0 },
  { id: 'Self-Reckoning', phonetic: 'Muḥāsabah', position: 2, angle: 30 },
  { id: 'Returning', phonetic: 'Inābah', position: 3, angle: 60 },
  { id: 'Reflection', phonetic: 'Tafakkur', position: 4, angle: 90 },
  { id: 'Taking Shelter', phonetic: 'Iʿtiṣām', position: 5, angle: 120 },
  { id: 'Fleeing', phonetic: 'Firār', position: 6, angle: 150 },
  { id: 'Training', phonetic: 'Riyāḍah', position: 7, angle: 180 },
  { id: 'Hearing', phonetic: 'Samāʿ', position: 8, angle: 210 },
  { id: 'Remembrance', phonetic: 'Dhikr', position: 9, angle: 240 },
  { id: 'Repentance', phonetic: 'Tawbah', position: 10, angle: 270 },
];

// Neon theme styling voor Youth Inward segmenten - Combined Wheel 2 & 3
const neonSegmentStyles = {
  'Wakefulness': { color: '#8B5CF6', glow: true, icon: '🌅' }, // Paars - Ontwaken
  'Self-Reckoning': { color: '#7C3AED', glow: true, icon: '🔍' }, // Violet - Zelfverantwoording
  'Returning': { color: '#1D4ED8', glow: true, icon: '❤️' }, // Donkerblauw - Terugkeer
  'Reflection': { color: '#A855F7', glow: true, icon: '💭' }, // Lila - Reflectie
  'Taking Shelter': { color: '#9333EA', glow: true, icon: '🛡️' }, // Paars - Toevlucht
  'Fleeing': { color: '#8B5CF6', glow: true, icon: '🏃' }, // Paars - Vluchten
  'Training': { color: '#3B82F6', glow: true, icon: '💪' }, // Blauw - Training
  'Hearing': { color: '#7C3AED', glow: true, icon: '👂' }, // Violet - Luisteren
  'Remembrance': { color: '#3B82F6', glow: true, icon: '🕊️' }, // Blauw - Herinnering
  'Repentance': { color: '#7C3AED', glow: true, icon: '🔄' }, // Violet - Berouw
};

const WheelInward = () => {
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
        
        console.log('Container width:', containerWidth, 'Container height:', containerHeight, 'Screen width:', screenWidth, 'New size:', newSize);
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
  // const centerRadius = center * 0.28; // Larger center circle - unused
  
  // Circle mode only
  const topicRadius = radius * 0.95; // Spread segments out more
  // const centerTextRadius = centerRadius; // Unused variable
  const centerCircleRadius = outerRadius; // Same size as other circles

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (segmentId) => {
    console.log('=== CLICK DEBUG ===');
    console.log('Clicked segment:', segmentId);
    console.log('Segment type:', typeof segmentId);
    
    // Navigate to intro pages based on segment
    if (segmentId === 'Wakefulness') {
      console.log('Navigating to /intro-wakefulness');
      navigate('/intro-wakefulness');
    } else if (segmentId === 'CENTER') {
      console.log('Navigating to /god');
      navigate('/god');
    } else if (segmentId === 'Self-Reckoning') {
      console.log('Navigating to /intro-self-reckoning');
      navigate('/intro-self-reckoning');
    } else if (segmentId === 'Returning') {
      console.log('Navigating to /intro-returning');
      navigate('/intro-returning');
    } else if (segmentId === 'Reflection') {
      console.log('Navigating to /intro-reflection');
      navigate('/intro-reflection');
    } else if (segmentId === 'Taking Shelter') {
      console.log('Navigating to /intro-taking-shelter');
      navigate('/intro-taking-shelter');
    } else if (segmentId === 'Fleeing') {
      console.log('Navigating to /intro-fleeing');
      navigate('/intro-fleeing');
    } else if (segmentId === 'Training') {
      console.log('Navigating to /intro-training');
      navigate('/intro-training');
    } else if (segmentId === 'Hearing') {
      console.log('Navigating to /intro-hearing');
      navigate('/intro-hearing');
    } else if (segmentId === 'Remembrance') {
      console.log('Navigating to /intro-remembrance');
      navigate('/intro-remembrance');
    } else if (segmentId === 'Repentance') {
      console.log('Navigating to /intro-repentance');
      navigate('/intro-repentance');
    } else {
      console.log('No navigation found for segment:', segmentId);
    }
    console.log('=== END DEBUG ===');
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
          
          {/* Curved text path for "Stage 1: The Beginning" */}
          <path
            id="curvedTextPath"
            d={`M ${center - radius * 0.7} ${center - radius * 0.7} A ${radius * 0.7} ${radius * 0.7} 0 0 1 ${center + radius * 0.7} ${center - radius * 0.7}`}
            fill="none"
          />
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
            
            const strokeWidth = getStrokeWidth();
            console.log('Line strokeWidth:', strokeWidth, 'Window width:', window.innerWidth, 'size:', size);
            return (
              <line
                key={`connection-${segment.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={lineColor}
                strokeWidth={strokeWidth}
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
                strokeWidth={getStrokeWidth()}
                style={{}}
              />
            );
          })}

          {/* Buitenste cirkels met segmenten */}
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
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {/* Cirkel */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={outerRadius}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={getStrokeWidth()}
                  style={{ 
                    cursor: 'pointer',
                    filter: themeName === 'neon' && segmentStyle?.glow ? 'url(#neonGlow)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => handleClick(segment.id)}
                />
                
                {/* Title in circle - Responsive font size */}
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
                
                {/* Phonetic text - Responsive font size */}
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

          {/* Centrale cirkel */}
          {(() => {
            const fillColor = themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 'rgba(255, 255, 255, 0.3)'; // Dynamic background for neon
            const centerStroke = themeName === 'zwartWit' ? '#000000' : 
                                themeName === 'neon' ? '#8B5CF6' : theme.border;
            const centerTextColor = themeName === 'neon' && nightMode ? '#ffffff' : '#000000'; // White text for neon nightmode

            return (
              <>
                <circle
                  cx={center}
                  cy={center}
                  r={centerCircleRadius}
                  fill={fillColor}
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
        
        {/* Curved text "Stage 1: The Beginning" - rendered on top */}
        <text
          style={{
            fontSize: Math.max(Math.min(radius * 0.08, 24), 16),
            fontWeight: 'bold',
            fill: themeName === 'neon' ? '#8B5CF6' : themeName === 'zwartWit' ? '#000000' : '#ffffff',
            textShadow: themeName === 'neon' ? '0 0 8px rgba(139, 92, 246, 0.6)' : 'none',
            pointerEvents: 'none'
          }}
        >
          <textPath
            href="#curvedTextPath"
            startOffset="45%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Stage 1: The Beginning
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default WheelInward; 
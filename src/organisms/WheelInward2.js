import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

// Statische wheel segments - Youth Inward (Spiritual Journey) - Combined Wheel 2 & 3
const WHEEL_SEGMENTS = [
  { id: 'Wakefulness', phonetic: 'Yaqzah', position: 1, angle: 0, number: 1 },
  { id: 'Returning', phonetic: 'Inābah', position: 2, angle: 36, number: 4 },
  { id: 'Fleeing', phonetic: 'Firār', position: 3, angle: 72, number: 8 },
  { id: 'Self Reckoning', phonetic: 'Muḥāsabah', position: 4, angle: 108, number: 3 },
  { id: 'Reflection', phonetic: 'Tafakkur', position: 5, angle: 144, number: 5 },
  { id: 'Taking Shelter', phonetic: 'Iʿtiṣām', position: 6, angle: 180, number: 7 },
  { id: 'Training', phonetic: 'Riyāḍah', position: 7, angle: 216, number: 9 },
  { id: 'Hearing', phonetic: 'Samāʿ', position: 8, angle: 252, number: 10 },
  { id: 'Remembrance', phonetic: 'Dhikr', position: 9, angle: 288, number: 6 },
  { id: 'Repentance', phonetic: 'Tawbah', position: 10, angle: 324, number: 2 },
];

// Rainbow theme styling voor Youth Inward segmenten - rainbow colors
const rainbowSegmentStyles = {
  'Wakefulness': { color: '#DC2626', glow: true, icon: '🌅' }, // Dark Red - Ontwaken
  'Returning': { color: '#EF4444', glow: true, icon: '❤️' }, // Red - Terugkeer
  'Fleeing': { color: '#EC4899', glow: true, icon: '🏃' }, // Violet - Vluchten
  'Self Reckoning': { color: '#8B5CF6', glow: true, icon: '🔍' }, // Indigo - Zelfverantwoording
  'Reflection': { color: '#06B6D4', glow: true, icon: '💭' }, // Cyan - Reflectie
  'Taking Shelter': { color: '#3B82F6', glow: true, icon: '🛡️' }, // Blue - Toevlucht
  'Training': { color: '#059669', glow: true, icon: '💪' }, // Dark Green - Training
  'Hearing': { color: '#10B981', glow: true, icon: '👂' }, // Green - Luisteren
  'Remembrance': { color: '#EAB308', glow: true, icon: '🕊️' }, // Bright Yellow - Herinnering
  'Repentance': { color: '#F59E0B', glow: true, icon: '🔄' }, // Yellow - Berouw
};

// Neon theme styling voor Youth Inward segmenten (fallback)
const neonSegmentStyles = {
  'Wakefulness': { color: '#8B5CF6', glow: true, icon: '🌅' }, // Paars - Ontwaken
  'Returning': { color: '#1D4ED8', glow: true, icon: '❤️' }, // Donkerblauw - Terugkeer
  'Fleeing': { color: '#6366F1', glow: true, icon: '🏃' }, // Indigo - Vluchten
  'Self Reckoning': { color: '#7C3AED', glow: true, icon: '🔍' }, // Violet - Zelfverantwoording
  'Reflection': { color: '#A855F7', glow: true, icon: '💭' }, // Lila - Reflectie
  'Taking Shelter': { color: '#9333EA', glow: true, icon: '🛡️' }, // Paars - Toevlucht
  'Training': { color: '#3B82F6', glow: true, icon: '💪' }, // Blauw - Training
  'Hearing': { color: '#8B5CF6', glow: true, icon: '👂' }, // Paars - Luisteren
  'Remembrance': { color: '#1E40AF', glow: true, icon: '🕊️' }, // Dark Blue - Herinnering
  'Repentance': { color: '#5B21B6', glow: true, icon: '🔄' }, // Dark Purple - Berouw
};

const WheelInward2 = () => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();
  const { nightMode } = useSettings();
  const [size, setSize] = useState(400);
  const [rotation, setRotation] = useState(0); // Rotatie state - start at 0
  const [targetRotation, setTargetRotation] = useState(0); // Target rotation for smooth animation
  const offset = 5; // Schuifafstand voor hover animatie

  // Smooth rotation animation
  useEffect(() => {
    if (targetRotation !== rotation) {
      const animationDuration = 800; // 800ms for smooth animation
      const startTime = Date.now();
      const startRotation = rotation;
      const rotationDifference = targetRotation - startRotation;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const currentRotation = startRotation + (rotationDifference * easeOutCubic);
        setRotation(currentRotation);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [targetRotation, rotation]);

  // Calculate stroke width based on screen size and wheel size - more depth
  const getStrokeWidth = () => {
    const screenWidth = window.innerWidth;
    const baseStrokeWidth = size / 400; // Increased base stroke width for more depth
    
    // Scale stroke width based on screen size
    if (screenWidth >= 2560) { // 34 inch and above
      return Math.max(baseStrokeWidth * 1.2, 2.0);
    } else if (screenWidth >= 1920) { // Large screens
      return Math.max(baseStrokeWidth * 1.1, 1.8);
    } else if (screenWidth >= 1366) { // Medium screens
      return Math.max(baseStrokeWidth, 1.5);
    } else { // Mobile and small screens
      return Math.max(baseStrokeWidth * 0.9, 1.2);
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
  const radius = center * 0.8; // Same as original WheelInward
  const topicRadius = radius * 1.05; // Slightly larger wheel
  const innerRadius = topicRadius * 0.70; // Inner radius for the donut hole - larger
  const outerRadius = topicRadius * 1.05; // Outer radius for the donut - smaller
  const centerCircleRadius = innerRadius; // Center circle touches the inner edge of the donut ring

  const handleClick = (segmentId) => {
    console.log('WheelInward2 - Clicked segment:', segmentId);
    
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
  };

  const getCenterFontSize = (text) => {
    const base = centerCircleRadius * 0.4;
    if (text.length > 18) return base * 0.7;
    if (text.length > 14) return base * 0.8;
    if (text.length > 10) return base * 0.9;
    return base;
  };

  // Rotatie functie
  const handleRotate = () => {
    setTargetRotation(prevRotation => prevRotation + 45);
  };

  // Arc generator removed - using manual SVG path generation instead

  // Calculate arc angles for each segment
  const segmentAngle = (2 * Math.PI) / WHEEL_SEGMENTS.length;

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
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Rotatie knop */}
      <button
        onClick={handleRotate}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10,
          padding: '10px 15px',
          backgroundColor: themeName === 'neon' ? '#8B5CF6' : '#DC2626',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        🔄 Rotate
      </button>
      
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
          {/* No glow filters */}
          
          {/* Curved text path for "The Beginning" */}
          <path
            id="curvedTextPath2"
            d={`M ${center - radius * 0.6} ${center - radius * 0.6} A ${radius * 0.6} ${radius * 0.6} 0 0 1 ${center + radius * 0.6} ${center - radius * 0.6}`}
            fill="none"
          />
        </defs>

        {/* Roterende groep voor alle segmenten */}
        <g
          transform={`rotate(${rotation} ${center} ${center})`}
        >
          {/* Donut segments using manual SVG path generation */}
          {WHEEL_SEGMENTS.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          
          const segmentStyle = rainbowSegmentStyles[segment.id] || neonSegmentStyles[segment.id];
          
          console.log(`Segment ${segment.id}:`, segmentStyle); // Debug log
          
          const fillColor = themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.85)' : 
            (segmentStyle?.color ? segmentStyle.color + 'E6' : 'rgba(255, 255, 255, 0.85)'); // Much higher opacity
          
          console.log(`Fill color for ${segment.id}:`, fillColor); // Debug log
          
          const strokeColor = themeName === 'zwartWit' ? '#000000' : 
                             (segmentStyle?.color || theme.border);

          // Generate arc path manually for testing
          const startX = center + outerRadius * Math.cos(startAngle);
          const startY = center + outerRadius * Math.sin(startAngle);
          const endX = center + outerRadius * Math.cos(endAngle);
          const endY = center + outerRadius * Math.sin(endAngle);
          
          const innerStartX = center + innerRadius * Math.cos(startAngle);
          const innerStartY = center + innerRadius * Math.sin(startAngle);
          const innerEndX = center + innerRadius * Math.cos(endAngle);
          const innerEndY = center + innerRadius * Math.sin(endAngle);
          
          // Create a simple donut segment path
          const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
          const sweepFlag = 1; // Always sweep in positive direction
          
          const arcPath = `
            M ${startX} ${startY}
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}
            L ${innerEndX} ${innerEndY}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
            Z
          `;

          // Calculate center point of the arc for text positioning
          const arcCenterAngle = startAngle + (endAngle - startAngle) / 2;
          const textRadius = (innerRadius + outerRadius) / 2; // Center of the donut segment
          const textX = center + textRadius * Math.cos(arcCenterAngle);
          const textY = center + textRadius * Math.sin(arcCenterAngle);
          
          // Calculate text rotation to align with arc direction
          const textRotation = (arcCenterAngle * 180 / Math.PI) + 90;

          return (
            <g
              key={segment.id}
              onClick={() => handleClick(segment.id)}
              style={{ 
                cursor: 'pointer',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {/* Arc segment */}
              <path
                d={arcPath}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={getStrokeWidth()}
                style={{ 
                  pointerEvents: 'auto'
                }}
              >
                <title>{segment.id}</title>
              </path>
              
              {/* Segment text */}
              {segment.id.split(' ').map((word, index) => (
                <text
                  key={index}
                  x={textX}
                  y={textY + (index * 12)}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="bold"
                  style={{ 
                    pointerEvents: 'none',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                  }}
                  transform={`rotate(${textRotation} ${textX} ${textY})`}
                >
                  {word}
                </text>
              ))}
              
              {/* Segment number */}
              <text
                x={textX}
                y={textY + (segment.id.split(' ').length * 12) + 8}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="14"
                fontWeight="bold"
                style={{ 
                  pointerEvents: 'none',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
                transform={`rotate(${textRotation} ${textX} ${textY})`}
              >
                {segment.number}
              </text>
            </g>
          );
        })}
        </g>

        {/* Center circle */}
        {(() => {
          const centerFill = themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.1)' : 
            (themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 'rgba(255, 255, 255, 0.3)'); // Same opacity as guided flows
          
          const centerStroke = themeName === 'zwartWit' ? '#000000' : 
                              themeName === 'neon' ? '#8B5CF6' : centerFill;
          
          const centerTextColor = themeName === 'neon' && nightMode ? '#ffffff' : '#000000';

          return (
            <>
              <circle
                cx={center}
                cy={center}
                r={centerCircleRadius * 0.8}
                fill={centerFill}
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
        
        {/* Curved text "The Beginning" - rendered on top */}
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
            href="#curvedTextPath2"
            startOffset="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            The Beginning
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default WheelInward2;
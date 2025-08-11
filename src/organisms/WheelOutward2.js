import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
// Removed d3-shape import - using manual SVG path generation

// Wheel segments for Youth Outward (Insights) - Wheel 1
const WHEEL_SEGMENTS = [
  { id: 'Belief', phonetic: 'ʿAqīdah', position: 1, angle: 0 },
  { id: 'Jurisprudence', phonetic: 'Fiqh', position: 2, angle: 45 },
  { id: 'Qur\'an', phonetic: 'Qurʾān', position: 3, angle: 90 },
  { id: 'Prophet\'s Life', phonetic: 'Sīrah', position: 4, angle: 135 },
  { id: 'Islamic History', phonetic: 'Tārīkh', position: 5, angle: 180 },
  { id: 'Modern Ideologies', phonetic: 'Afkār Muʿāṣirah', position: 6, angle: 225 },
  { id: 'Family & Society', phonetic: 'Usrah wa Mujtamaʿ', position: 7, angle: 270 },
  { id: 'Divine Law', phonetic: 'Shariʿah', position: 8, angle: 315 },
];

// Rainbow theme styling for Youth Outward segments - medium colors
const rainbowSegmentStyles = {
  'Belief': { color: '#DC2626', glow: true, icon: '/icons/mosque.svg' }, // Medium Red - Belief
  'Jurisprudence': { color: '#EA580C', glow: true, icon: '/icons/prayer-beads.svg' }, // Medium Orange - Jurisprudence
  'Qur\'an': { color: '#D97706', glow: true, icon: '/icons/quran.svg' }, // Medium Yellow - Quran
  'Prophet\'s Life': { color: '#16A34A', glow: true, icon: '/icons/star.svg' }, // Medium Green - Prophet
  'Islamic History': { color: '#2563EB', glow: true, icon: '/icons/history.svg' }, // Medium Blue - History
  'Modern Ideologies': { color: '#7C3AED', glow: true, icon: '/icons/globe.svg' }, // Medium Indigo - Modern
  'Family & Society': { color: '#9333EA', glow: true, icon: '/icons/group.svg' }, // Medium Violet - Family
  'Divine Law': { color: '#EC4899', glow: true, icon: '/icons/scales.svg' }, // Medium Pink - Divine Law
};

// Neon theme styling for Youth Outward segments (fallback)
const neonSegmentStyles = {
  'Belief': { color: '#8B5CF6', glow: true, icon: '/icons/mosque.svg' }, // Purple - Belief
  'Jurisprudence': { color: '#3B82F6', glow: true, icon: '/icons/prayer-beads.svg' }, // Blue - Jurisprudence
  'Qur\'an': { color: '#7C3AED', glow: true, icon: '/icons/quran.svg' }, // Violet - Quran
  'Prophet\'s Life': { color: '#1D4ED8', glow: true, icon: '/icons/star.svg' }, // Dark Blue - Prophet
  'Islamic History': { color: '#A855F7', glow: true, icon: '/icons/history.svg' }, // Lilac - History
  'Modern Ideologies': { color: '#2563EB', glow: true, icon: '/icons/globe.svg' }, // Royal Blue - Modern
  'Family & Society': { color: '#9333EA', glow: true, icon: '/icons/group.svg' }, // Purple - Family
  'Divine Law': { color: '#3B82F6', glow: true, icon: '/icons/scales.svg' }, // Blue - Divine Law
};

const WheelOutward2 = () => {
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
  const radius = center * 0.8; // Same as original WheelOutward
  const topicRadius = radius * 1.05; // Slightly larger wheel
  const innerRadius = topicRadius * 0.70; // Inner radius for the donut hole - larger
  const outerRadius = topicRadius * 1.05; // Outer radius for the donut - smaller
  const centerCircleRadius = innerRadius; // Center circle touches the inner edge of the donut ring

  const handleClick = (segmentId) => {
    console.log('WheelOutward2 - Clicked segment:', segmentId);
    
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
    } else if (segmentId === 'Prophet\'s Life') {
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
          
          {/* Curved text path for "Stage 1: The Beginning" */}
          <path
            id="curvedTextPathOutward"
            d={`M ${center - radius * 0.7} ${center - radius * 0.7} A ${radius * 0.7} ${radius * 0.7} 0 0 1 ${center + radius * 0.7} ${center - radius * 0.7}`}
            fill="none"
          />
        </defs>

        {/* Roterende groep voor alle segmenten */}
        <g
          transform={`rotate(${rotation} ${center} ${center})`}
        >
          {/* Donut segments using d3-shape arc */}
          {WHEEL_SEGMENTS.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          
          const segmentStyle = rainbowSegmentStyles[segment.id] || neonSegmentStyles[segment.id];
          
          const fillColor = themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.3)' : 
            (segmentStyle?.color ? segmentStyle.color : 'rgba(255, 255, 255, 0.3)'); // No opacity
          
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
          
          // Calculate icon size based on segment size
          const iconSize = Math.max(Math.min((outerRadius - innerRadius) * 0.6, 24), 16);

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
                  y={textY + (index * 16)}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ 
                    pointerEvents: 'none'
                  }}
                  transform={`rotate(${textRotation})`}
                  transformOrigin={`${textX} ${textY}`}
                >
                  {word}
                </text>
              ))}
              
              {/* SVG Icon */}
              {/* <image
                x={textX - iconSize / 2}
                y={textY + 35}
                width={iconSize}
                height={iconSize}
                href={segmentStyle.icon}
                style={{ 
                  pointerEvents: 'none'
                }}
              >
                <title>{segment.id}</title>
              </image> */}
            </g>
          );
        })}
        </g>

        {/* Center circle */}
        {(() => {
          const centerFill = themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.3)' : 
            (themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 'rgba(255, 255, 255, 0.3)'); // Same opacity as guided flows
          
          const centerStroke = themeName === 'zwartWit' ? '#000000' : 
                              '#8B5CF6'; // Purple for center
          
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
            href="#curvedTextPathOutward"
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

export default WheelOutward2; 
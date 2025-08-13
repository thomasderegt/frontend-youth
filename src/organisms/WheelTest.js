import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { useTheme } from '../context/ThemeContext';

// Atomic components
import MenuButton from '../atoms/MenuButton';

// Molecular components
import WheelSegments from '../molecules/WheelSegments';

// Atomic components
import WheelCenter from '../atoms/WheelCenter';
import WheelStageText from '../atoms/WheelStageText';

// Statische wheel segments - Youth Inward (Spiritual Journey) - Combined Wheel 2 & 3
const WHEEL_SEGMENTS = [
  { id: 'Wakefulness', phonetic: 'Yaqzah', position: 1, angle: 0, number: 1 },
  { id: 'Returning', phonetic: 'Inābah', position: 2, angle: 36, number: 2 },
  { id: 'Fleeing', phonetic: 'Firār', position: 3, angle: 72, number: 3 },
  { id: 'Self Reckoning', phonetic: 'Muḥāsabah', position: 4, angle: 108, number: 4 },
  { id: 'Reflection', phonetic: 'Tafakkur', position: 5, angle: 144, number: 5 },
  { id: 'Taking Shelter', phonetic: 'Iʿtiṣām', position: 6, angle: 180, number: 6 },
  { id: 'Training', phonetic: 'Riyāḍah', position: 7, angle: 216, number: 7 },
  { id: 'Hearing', phonetic: 'Samāʿ', position: 8, angle: 252, number: 8 },
  { id: 'Remembrance', phonetic: 'Dhikr', position: 9, angle: 288, number: 9 },
  { id: 'Repentance', phonetic: 'Tawbah', position: 10, angle: 324, number: 10 },
];

const WheelTest = ({ 
  // Container props
  containerProps = {},
  
  // Wheel props
  wheelProps = {},
  
  // Segment props
  segmentProps = {},
  
  // Center props
  centerProps = {},
  
  // Text props
  textProps = {},
  
  // Button props
  buttonProps = {},
  
  // Animation props
  animationProps = {},
  
  // Navigation props
  navigationProps = {},
  
  // Custom className and style
  className = '',
  style = {}
}) => {
  const navigate = useNavigate();
  const { donutColorDesign } = useSettings();
  const { getComponentProps } = useTheme();
  
  const [size, setSize] = useState(wheelProps.size || 400);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

  // Get theme-aware styling
  const containerThemeProps = getComponentProps('container', 'default');
  const buttonThemeProps = getComponentProps('button', 'primary');
  const textThemeProps = getComponentProps('text', 'title');
  const centerThemeProps = getComponentProps('container', 'default');

  // Smooth rotation animation
  useEffect(() => {
    if (targetRotation !== rotation) {
      const animationDuration = animationProps.duration || 800;
      const startTime = Date.now();
      const startRotation = rotation;
      const rotationDifference = targetRotation - startRotation;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentRotation = startRotation + (rotationDifference * easeOutCubic);
        setRotation(currentRotation);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [targetRotation, rotation, animationProps.duration]);

  // Calculate responsive size based on props
  useEffect(() => {
    const updateSize = () => {
      const container = document.querySelector('.wheel-container');
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const screenWidth = window.innerWidth;
        
        let newSize;
        
        if (screenWidth >= 2560) {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * (wheelProps.largeScreenRatio || 0.6), wheelProps.maxSize || 600);
        } else if (screenWidth >= 1920) {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * (wheelProps.desktopRatio || 0.75), wheelProps.maxSize || 500);
        } else if (screenWidth >= 1366) {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * (wheelProps.laptopRatio || 0.85), wheelProps.maxSize || 450);
        } else {
          newSize = Math.min(Math.min(containerWidth, containerHeight) * (wheelProps.mobileRatio || 0.85), wheelProps.maxSize || 400);
        }
        
        setSize(newSize);
      }
    };

    const timer = setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSize);
    };
  }, [wheelProps]);

  const center = size / 2;
  const radius = center * (wheelProps.radiusRatio || 0.8);
  const topicRadius = radius * (wheelProps.topicRadiusRatio || 1.05);
  const innerRadius = topicRadius * (wheelProps.innerRadiusRatio || 0.70);
  const outerRadius = topicRadius * (wheelProps.outerRadiusRatio || 1.05);
  const centerCircleRadius = innerRadius * (centerProps.radiusRatio || 0.8);

  const handleClick = (segmentId) => {
    if (navigationProps.onSegmentClick) {
      navigationProps.onSegmentClick(segmentId);
    } else {
      // Default navigation logic
      const routes = navigationProps.routes || {
        'Wakefulness': '/spirituality/wakefulness',
        'CENTER': '/spirituality/god-inward',
        'Self Reckoning': '/spirituality/self-reckoning',
        'Returning': '/spirituality/returning',
        'Reflection': '/spirituality/reflection',
        'Taking Shelter': '/spirituality/taking-shelter',
        'Fleeing': '/spirituality/fleeing',
        'Training': '/spirituality/training',
        'Hearing': '/spirituality/hearing',
        'Remembrance': '/spirituality/remembrance',
        'Repentance': '/spirituality/repentance'
      };
      
      const route = routes[segmentId];
      if (route) {
        navigate(route);
      }
    }
  };

  const handleRotate = () => {
    setTargetRotation(prevRotation => prevRotation + (buttonProps.rotationAngle || 45));
  };

  return (
    <div 
      className={`wheel-container ${className}`} 
      style={{ 
        width: containerProps.width || '100%', 
        height: containerProps.height || '100%',
        minHeight: containerProps.minHeight || '350px',
        display: containerProps.display || 'flex', 
        justifyContent: containerProps.justifyContent || 'center', 
        alignItems: containerProps.alignItems || 'center',
        padding: containerProps.padding || '0.5rem 0',
        maxWidth: containerProps.maxWidth || (window.innerWidth >= 2560 ? '1200px' : '100%'),
        margin: containerProps.margin || '0 auto',
        position: containerProps.position || 'relative',
        background: containerProps.backgroundColor || '#fffced',
        borderRadius: '24px',
        ...style
      }}
    >
      {/* Rotatie knop */}
      <MenuButton
        onClick={handleRotate}
        color={buttonProps.textColor || buttonThemeProps.color}
        backgroundColor={buttonProps.backgroundColor || buttonThemeProps.backgroundColor}
        borderColor={buttonProps.borderColor || buttonThemeProps.borderColor}
        size={buttonProps.size || 'small'}
        style={{
          position: buttonProps.position || 'absolute',
          top: buttonProps.top || '20px',
          right: buttonProps.right || '20px',
          zIndex: buttonProps.zIndex || 10,
          ...buttonProps.style
        }}
      >
        {buttonProps.text || '🔄 Rotate'}
      </MenuButton>
      
      {/* SVG Container - Direct in organism zonder WheelSVG wrapper */}
      <svg
        width={wheelProps.svgWidth || '100%'}
        height={wheelProps.svgHeight || '100%'}
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          minHeight: wheelProps.svgMinHeight || '350px',
          maxWidth: wheelProps.svgMaxWidth || (window.innerWidth >= 2560 ? '800px' : '100vw'),
          maxHeight: wheelProps.svgMaxHeight || '100vh',
          ...wheelProps.svgStyle
        }}
      >
        <defs>
          <filter id="wheelShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow 
              dx={wheelProps.shadowDx || 3} 
              dy={wheelProps.shadowDy || 3} 
              stdDeviation={wheelProps.shadowStdDeviation || 4} 
              floodColor={wheelProps.shadowColor || 'rgba(0,0,0,0.3)'}
              floodOpacity={wheelProps.shadowOpacity || 0.4}
            />
          </filter>
        </defs>

        {/* Invisible circle for click detection */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 10}
          fill="transparent"
          stroke="transparent"
          strokeWidth="2"
        />

        <WheelSegments
          segments={WHEEL_SEGMENTS}
          center={center}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          rotation={rotation}
          onSegmentClick={handleClick}
          segmentProps={{
            backgroundColor: segmentProps.backgroundColor,
            borderColor: segmentProps.borderColor,
            textColor: segmentProps.textColor || textThemeProps.color,
            fontSize: segmentProps.fontSize,
            fontWeight: segmentProps.fontWeight,
            numberFontSize: segmentProps.numberFontSize,
            wordSpacing: segmentProps.wordSpacing,
            textRadiusRatio: segmentProps.textRadiusRatio,
            strokeWidth: segmentProps.strokeWidth || (size / 400),
            textShadow: segmentProps.textShadow,
            numberTextShadow: segmentProps.numberTextShadow,
            hoverOpacity: segmentProps.hoverOpacity,
            transition: segmentProps.transition,
            cursor: segmentProps.cursor,
            shadowDx: segmentProps.shadowDx,
            shadowDy: segmentProps.shadowDy,
            shadowStdDeviation: segmentProps.shadowStdDeviation,
            shadowColor: segmentProps.shadowColor,
            shadowOpacity: segmentProps.shadowOpacity
          }}
        />

        <WheelCenter
          center={center}
          radius={centerCircleRadius}
          onClick={() => handleClick('CENTER')}
          title={centerProps.title || 'The One True God'}
          subtitle={centerProps.subtitle || 'Allah'}
          arabicText={centerProps.arabicText || 'الله'}
          backgroundColor={centerProps.backgroundColor || centerThemeProps.backgroundColor}
          borderColor={centerProps.borderColor || centerThemeProps.borderColor}
          textColor={centerProps.textColor || centerThemeProps.color}
          borderWidth={centerProps.borderWidth || 2}
          cursor={centerProps.cursor || 'pointer'}
          titleFontSize={centerProps.titleFontSize}
          subtitleFontSize={centerProps.subtitleFontSize || 14}
          arabicFontSize={centerProps.arabicFontSize || 16}
          fontWeight={centerProps.fontWeight}
          textShadow={centerProps.textShadow}
        />
        
        <WheelStageText
          center={center}
          radius={radius}
          text={textProps.stageText || ''}
          color={textProps.color || textThemeProps.color}
          fontSize={textProps.fontSize}
          fontWeight={textProps.fontWeight}
          textShadow={textProps.textShadow}
        />
      </svg>
    </div>
  );
};

export default WheelTest; 
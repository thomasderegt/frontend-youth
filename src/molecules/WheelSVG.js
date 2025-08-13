import React from 'react';

const WheelSVG = ({
  size,
  children,
  // SVG props
  width = '100%',
  height = '100%',
  minHeight = '350px',
  maxWidth,
  maxHeight = '100vh',
  // Shadow props
  shadowDx = 3,
  shadowDy = 3,
  shadowStdDeviation = 4,
  shadowColor = 'rgba(0,0,0,0.3)',
  shadowOpacity = 0.4,
  className = '',
  style = {}
}) => {
  const calculatedMaxWidth = maxWidth || (window.innerWidth >= 2560 ? '800px' : '100vw');

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ 
        minHeight,
        maxWidth: calculatedMaxWidth,
        maxHeight,
        ...style
      }}
    >
      {/* SVG Background */}
      <rect
        width="100%"
        height="100%"
        fill="#fffced"
      />
      <defs>
        <filter id="wheelShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow 
            dx={shadowDx} 
            dy={shadowDy} 
            stdDeviation={shadowStdDeviation} 
            floodColor={shadowColor}
            floodOpacity={shadowOpacity}
          />
        </filter>
      </defs>

      {/* Invisible circle for click detection */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size / 2) * 0.8 * 1.05 + 10}
        fill="transparent"
        stroke="transparent"
        strokeWidth="2"
      />

      {children}
    </svg>
  );
};

export default WheelSVG; 
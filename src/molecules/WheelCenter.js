import React from 'react';
import WheelCircle from '../atoms/WheelCircle';
import WheelText from '../atoms/WheelText';

const WheelCenter = ({
  center,
  centerRadius,
  themeName,
  userGoal,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  getCenterFontSize
}) => {
  const centerFill = themeName === 'story' ? 'url(#centerGradient)' : '#000';
  const centerStroke = themeName === 'story' ? '#a084e8' : '#00f2fa';
  const centerTextColor = themeName === 'story' ? '#ffffff' : '#00f2fa';

  return (
    <>
      <WheelCircle
        cx={center}
        cy={center}
        r={centerRadius}
        fill={centerFill}
        stroke={centerStroke}
        strokeWidth="3"
        onClick={onClick}
        style={themeName === 'neon' ? { cursor: 'pointer', filter: `drop-shadow(0 0 6px ${centerStroke})` } : { cursor: 'pointer' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
      
      {userGoal === 'improve' ? (
        <>
          <WheelText
            x={center}
            y={center - 25}
            fontSize={getCenterFontSize('Remembrance of the One True God')}
            fill={centerTextColor}
            style={{ 
              textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
              textTransform: 'uppercase' 
            }}
          >
            {'Remembrance of'.toUpperCase()}
          </WheelText>
          <WheelText
            x={center}
            y={center + 25}
            fontSize={getCenterFontSize('Remembrance of the One True God')}
            fill={centerTextColor}
            style={{ 
              textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
              textTransform: 'uppercase' 
            }}
          >
            {'The One True God'.toUpperCase()}
          </WheelText>
        </>
      ) : (
        <WheelText
          x={center}
          y={center}
          fontSize={getCenterFontSize('The One True God')}
          fill={centerTextColor}
          style={{ 
            textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
            textTransform: 'uppercase' 
          }}
        >
          {'The One True God'.toUpperCase()}
        </WheelText>
      )}
    </>
  );
};

export default WheelCenter; 
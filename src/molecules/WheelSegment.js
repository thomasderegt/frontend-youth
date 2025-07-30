import React from 'react';
import WheelCircle from '../atoms/WheelCircle';
import WheelText from '../atoms/WheelText';

const WheelSegment = ({
  topic,
  position,
  outerRadius,
  topicFontSize,
  themeName,
  language,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp
}) => {
  const fillColor = themeName === 'story' ? topic.color : '#000';
  const textColor = themeName === 'story' ? '#ffffff' : '#00f2fa';
  const strokeColor = themeName === 'story' ? topic.color : '#00f2fa';

  return (
    <g
      onClick={() => onClick(topic.english)}
      className={themeName === 'story' ? 'transition-all duration-300 topic-hover' : ''}
      style={{ cursor: 'pointer' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <WheelCircle
        cx={position.x}
        cy={position.y}
        r={outerRadius}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${strokeColor})` } : {}}
      />
      
      {themeName === 'story' && (
        <WheelText
          x={position.x}
          y={position.y - outerRadius * 0.5}
          fontSize={outerRadius * 0.24}
          fill={textColor}
        >
          {topic.icon}
        </WheelText>
      )}
      
      {topic.english.includes('\n') ? (
        <>
          <WheelText
            x={position.x}
            y={position.y - 15}
            fontSize={topicFontSize}
            fill={textColor}
            style={{ 
              textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
              textTransform: 'uppercase' 
            }}
          >
            {topic.english.split('\n')[0].toUpperCase()}
          </WheelText>
          <WheelText
            x={position.x}
            y={position.y + 15}
            fontSize={topicFontSize}
            fill={textColor}
            style={{ 
              textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
              textTransform: 'uppercase' 
            }}
          >
            {topic.english.split('\n')[1].toUpperCase()}
          </WheelText>
        </>
      ) : (
        <WheelText
          x={position.x}
          y={position.y}
          fontSize={topicFontSize}
          fill={textColor}
          style={{ 
            textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none', 
            textTransform: 'uppercase' 
          }}
        >
          {topic.english.toUpperCase()}
        </WheelText>
      )}
      
      {language === 'english_phonetic' && (
        <WheelText
          x={position.x}
          y={position.y + outerRadius * 0.25}
          fontSize={outerRadius * 0.13}
          fill={textColor}
        >
          {topic.phonetic}
        </WheelText>
      )}
    </g>
  );
};

export default WheelSegment; 
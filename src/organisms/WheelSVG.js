import React from 'react';
import WheelSegment from '../molecules/WheelSegment';
import WheelCenter from '../molecules/WheelCenter';
import WheelCircle from '../atoms/WheelCircle';
import WheelText from '../atoms/WheelText';

const WheelSVG = ({
  size,
  center,
  radius,
  centerRadius,
  outerRadius,
  topics,
  topicFontSize,
  themeName,
  language,
  userGoal,
  theme,
  calculatePoint,
  getCenterFontSize,
  handleClick
}) => {
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      {/* Radial gradient (Story only) */}
      {themeName === 'story' && (
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b18fff" />
            <stop offset="100%" stopColor="#805ad5" />
          </radialGradient>
        </defs>
      )}

      {/* Outer ring */}
      <WheelCircle
        cx={center}
        cy={center}
        r={radius * 0.86}
        fill="none"
        stroke={theme.border}
        strokeWidth="2"
        style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
      />

      {/* Radial lines */}
      {topics.map((_, index) => {
        const angle = (index / topics.length) * 2 * Math.PI;
        const lineStart = calculatePoint(angle, centerRadius);
        const lineEnd = calculatePoint(angle, radius * 0.86);
        return (
          <line
            key={`line-${index}`}
            x1={lineStart.x}
            y1={lineStart.y}
            x2={lineEnd.x}
            y2={lineEnd.y}
            stroke={theme.border}
            strokeWidth="2"
            style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
          />
        );
      })}

      {/* Center circle */}
      <WheelCenter
        center={center}
        centerRadius={centerRadius}
        themeName={themeName}
        userGoal={userGoal}
        onClick={() => handleClick('The (One and Only) True God')}
        onMouseEnter={(e) => {
          e.target.style.filter = `drop-shadow(0 0 15px ${theme.border}) drop-shadow(0 0 30px ${theme.border})`;
        }}
        onMouseLeave={(e) => {
          e.target.style.filter = themeName === 'neon' ? `drop-shadow(0 0 6px ${theme.border})` : 'none';
        }}
        onMouseDown={(e) => {
          e.target.style.filter = `drop-shadow(0 0 5px ${theme.border}) drop-shadow(0 0 10px ${theme.border}) inset 0 0 10px rgba(0, 0, 0, 0.3)`;
        }}
        onMouseUp={(e) => {
          e.target.style.filter = `drop-shadow(0 0 15px ${theme.border}) drop-shadow(0 0 30px ${theme.border})`;
        }}
        getCenterFontSize={getCenterFontSize}
      />

      {/* Outer segments */}
      {topics.map((topic, index) => {
        const angle = (index / topics.length) * 2 * Math.PI;
        const pos = calculatePoint(angle, radius * 0.86);

        return (
          <WheelSegment
            key={`topic-${index}`}
            topic={topic}
            position={pos}
            outerRadius={outerRadius}
            topicFontSize={topicFontSize}
            themeName={themeName}
            language={language}
            onClick={handleClick}
            onMouseEnter={(e) => {
              const circle = e.currentTarget.querySelector('circle');
              const texts = e.currentTarget.querySelectorAll('text');
              if (circle) {
                const strokeColor = themeName === 'story' ? topic.color : theme.border;
                circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
              }
              texts.forEach(text => {
                const textColor = themeName === 'story' ? '#ffffff' : theme.secondary;
                text.style.textShadow = `0 0 10px ${textColor} 0 0 20px ${textColor}`;
              });
            }}
            onMouseLeave={(e) => {
              const circle = e.currentTarget.querySelector('circle');
              const texts = e.currentTarget.querySelectorAll('text');
              if (circle) {
                const strokeColor = themeName === 'story' ? topic.color : theme.border;
                circle.style.filter = themeName === 'neon' ? `drop-shadow(0 0 6px ${strokeColor})` : 'none';
              }
              texts.forEach(text => {
                text.style.textShadow = '0 0 6px #00f2fa';
              });
            }}
            onMouseDown={(e) => {
              const circle = e.currentTarget.querySelector('circle');
              if (circle) {
                const strokeColor = themeName === 'story' ? topic.color : theme.border;
                circle.style.filter = `drop-shadow(0 0 5px ${strokeColor}) drop-shadow(0 0 10px ${strokeColor}) inset 0 0 10px rgba(0, 0, 0, 0.3)`;
              }
            }}
            onMouseUp={(e) => {
              const circle = e.currentTarget.querySelector('circle');
              if (circle) {
                const strokeColor = themeName === 'story' ? topic.color : theme.border;
                circle.style.filter = `drop-shadow(0 0 15px ${strokeColor}) drop-shadow(0 0 30px ${strokeColor})`;
              }
            }}
          />
        );
      })}
    </svg>
  );
};

export default WheelSVG; 
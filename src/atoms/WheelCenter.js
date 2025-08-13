import React from 'react';
import { useTheme } from '../context/ThemeContext';

const WheelCenter = ({
  center,
  radius,
  onClick,
  // Content props
  title = 'The One True God',
  subtitle = 'Allah',
  arabicText = 'الله',
  // Styling props
  backgroundColor = '#ffffff',
  borderColor = '#efc368',
  textColor = '#000000',
  borderWidth = 2,
  cursor = 'pointer',
  // Text styling
  titleFontSize,
  subtitleFontSize = 14,
  arabicFontSize = 16,
  fontWeight = 'bold',
  textShadow = 'none',
  className = '',
  style = {}
}) => {
  const { getComponentProps } = useTheme();
  const themeProps = getComponentProps('container', 'default');

  const fillColor = backgroundColor || themeProps.backgroundColor;
  const strokeColor = borderColor || themeProps.borderColor;
  const textFillColor = textColor || themeProps.color;

  // Calculate title font size based on radius if not provided
  const calculatedTitleFontSize = titleFontSize || Math.max(radius * 0.15, 12);

  return (
    <g className={className} style={style}>
      {/* Center circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={borderWidth}
        onClick={onClick}
        style={{ 
          cursor
        }}
      />
      
      {/* Title text */}
      <text
        x={center}
        y={center - 15}
        textAnchor="middle"
        fill={textFillColor}
        fontSize={calculatedTitleFontSize}
        fontWeight={fontWeight}
        style={{ 
          textShadow,
          pointerEvents: 'none'
        }}
      >
        {title}
      </text>
      
      {/* Subtitle text */}
      <text
        x={center}
        y={center + 15}
        textAnchor="middle"
        fill={textFillColor}
        fontSize={subtitleFontSize}
        fontWeight={fontWeight}
        style={{ 
          textShadow,
          pointerEvents: 'none'
        }}
      >
        {subtitle}
      </text>
      
      {/* Arabic text */}
      <text
        x={center}
        y={center + 35}
        textAnchor="middle"
        fill={textFillColor}
        fontSize={arabicFontSize}
        fontWeight={fontWeight}
        style={{ 
          textShadow,
          pointerEvents: 'none',
          direction: 'rtl'
        }}
      >
        {arabicText}
      </text>
    </g>
  );
};

export default WheelCenter; 
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const WheelStageText = ({
  center,
  radius,
  text = '',
  // Styling props
  color = '#000000',
  fontSize,
  fontWeight = 'bold',
  textShadow = 'none',
  className = '',
  style = {}
}) => {
  const { getComponentProps } = useTheme();
  const themeProps = getComponentProps('text', 'title');

  const textColor = color || themeProps.color;
  const calculatedFontSize = fontSize || Math.max(Math.min(radius * 0.08, 24), 16);

  return (
    <text
      x={center}
      y={center - radius * 1.3}
      textAnchor="middle"
      className={className}
      style={{
        fontSize: calculatedFontSize,
        fontWeight,
        fill: textColor,
        textShadow,
        pointerEvents: 'none',
        ...style
      }}
    >
      {text}
    </text>
  );
};

export default WheelStageText; 
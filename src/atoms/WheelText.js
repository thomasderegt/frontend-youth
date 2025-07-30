import React from 'react';

const WheelText = ({ 
  x, 
  y, 
  children, 
  fontSize, 
  fontWeight = "bold",
  fill,
  textAnchor = "middle",
  dy = "0",
  style = {},
  className = '',
  pointerEvents = "none"
}) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      dy={dy}
      style={style}
      className={className}
      pointerEvents={pointerEvents}
    >
      {children}
    </text>
  );
};

export default WheelText; 
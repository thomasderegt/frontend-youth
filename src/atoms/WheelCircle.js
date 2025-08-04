import React from 'react';

const WheelCircle = ({ 
  cx, 
  cy, 
  r, 
  fill, 
  stroke, 
  strokeWidth = "2",
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  className = '',
  style = {},
  children,
  id,
  ...props
}) => {
  return (
    <circle
      id={id}
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </circle>
  );
};

export default WheelCircle; 
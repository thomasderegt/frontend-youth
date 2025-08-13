import React from 'react';
import WheelSegment from '../atoms/WheelSegment';

const WheelSegments = ({
  segments,
  center,
  innerRadius,
  outerRadius,
  rotation,
  onSegmentClick,
  // Segment styling props
  segmentProps = {},
  className = '',
  style = {}
}) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.opacity = segmentProps.hoverOpacity || 0.8;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.opacity = 1;
  };

  return (
    <g 
      transform={`rotate(${rotation} ${center} ${center})`}
      className={className}
      style={style}
    >
      {segments.map((segment, index) => (
        <WheelSegment
          key={segment.id}
          segment={segment}
          index={index}
          totalSegments={segments.length}
          center={center}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          onClick={onSegmentClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // Pass through all segment props
          backgroundColor={segmentProps.backgroundColor}
          borderColor={segmentProps.borderColor}
          textColor={segmentProps.textColor}
          fontSize={segmentProps.fontSize}
          fontWeight={segmentProps.fontWeight}
          numberFontSize={segmentProps.numberFontSize}
          wordSpacing={segmentProps.wordSpacing}
          textRadiusRatio={segmentProps.textRadiusRatio}
          strokeWidth={segmentProps.strokeWidth}
          textShadow={segmentProps.textShadow}
          numberTextShadow={segmentProps.numberTextShadow}
          hoverOpacity={segmentProps.hoverOpacity}
          transition={segmentProps.transition}
          cursor={segmentProps.cursor}
          shadowDx={segmentProps.shadowDx}
          shadowDy={segmentProps.shadowDy}
          shadowStdDeviation={segmentProps.shadowStdDeviation}
          shadowColor={segmentProps.shadowColor}
          shadowOpacity={segmentProps.shadowOpacity}
        />
      ))}
    </g>
  );
};

export default WheelSegments; 
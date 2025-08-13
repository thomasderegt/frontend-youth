import React from 'react';

const WheelSegment = ({
  segment,
  index,
  totalSegments,
  center,
  innerRadius,
  outerRadius,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = '',
  style = {}
}) => {
  const segmentAngle = (2 * Math.PI) / totalSegments;
  const startAngle = index * segmentAngle;
  const endAngle = (index + 1) * segmentAngle;

  const startX = center + outerRadius * Math.cos(startAngle);
  const startY = center + outerRadius * Math.sin(startAngle);
  const endX = center + outerRadius * Math.cos(endAngle);
  const endY = center + outerRadius * Math.sin(endAngle);
  
  const innerStartX = center + innerRadius * Math.cos(startAngle);
  const innerStartY = center + innerRadius * Math.sin(startAngle);
  const innerEndX = center + innerRadius * Math.cos(endAngle);
  const innerEndY = center + innerRadius * Math.sin(endAngle);
  
  const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
  const sweepFlag = 1;
  
  const arcPath = `
    M ${startX} ${startY}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}
    L ${innerEndX} ${innerEndY}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
    Z
  `;

  const arcCenterAngle = startAngle + (endAngle - startAngle) / 2;
  const textRadius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const textX = center + textRadius * Math.cos(arcCenterAngle);
  const textY = center + textRadius * Math.sin(arcCenterAngle);
  const textRotation = (arcCenterAngle * 180 / Math.PI) + 90;

  return (
    <g
      key={segment.id}
      onClick={() => onClick(segment.id)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ 
        cursor: 'pointer',
        ...style
      }}
    >
      <path
        d={arcPath}
        fill="transparent"
        stroke="#efc368"
        strokeWidth="1"
        style={{ 
          pointerEvents: 'auto'
        }}
      >
        <title>{segment.id}</title>
      </path>
      
      {/* Segment text */}
      {segment.id.split(' ').map((word, wordIndex) => (
        <text
          key={wordIndex}
          x={textX}
          y={textY + (wordIndex * 12)}
          textAnchor="middle"
          fill="#000000"
          fontSize="12"
          style={{ 
            pointerEvents: 'none'
          }}
          transform={`rotate(${textRotation} ${textX} ${textY})`}
        >
          {word}
        </text>
      ))}
      
      {/* Segment number */}
      <text
        x={textX}
        y={textY + (segment.id.split(' ').length * 12) + 8}
        textAnchor="middle"
        fill="#000000"
        fontSize="14"
        style={{ 
          pointerEvents: 'none'
        }}
        transform={`rotate(${textRotation} ${textX} ${textY})`}
      >
        {segment.number}
      </text>
    </g>
  );
};

export default WheelSegment; 
import React, { useState, useEffect } from 'react';

const SVGTest = () => {
  const [size, setSize] = useState(400);

  useEffect(() => {
    const updateSize = () => {
      const container = document.querySelector('.test-container');
      if (container) {
        const containerSize = Math.min(container.clientWidth, container.clientHeight);
        setSize(Math.max(containerSize * 0.9, 300));
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const center = size / 2;
  const radius = center * 0.8;

  return (
    <div className="test-container" style={{ 
      width: '100%', 
      height: '100vh',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <svg 
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '400px'
        }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#00f2fa"
          strokeWidth="4"
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          fill="#00f2fa"
          fontSize={radius * 0.2}
          dy="0.3em"
        >
          Test SVG Scaling
        </text>
      </svg>
    </div>
  );
};

export default SVGTest; 
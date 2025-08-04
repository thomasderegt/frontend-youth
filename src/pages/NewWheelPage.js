import React, { useState, useRef, useLayoutEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useSettings } from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';

// Wheel segments for Youth
const WHEEL_SEGMENTS = [
  { id: 'SEGMENT_001', title: 'BELIEF' },
  { id: 'SEGMENT_002', title: 'WORSHIP & CONNECTION' },
  { id: 'SEGMENT_003', title: 'INNER SELF' },
  { id: 'SEGMENT_004', title: 'SOCIETY & IDENTITY' },
];

const NewWheelPage = () => {
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const { userGoal } = useSettings();
  const navigate = useNavigate();
  
  const svgRef = useRef(null);
  const [size, setSize] = useState(800);
  const [center, setCenter] = useState(400);

  // Update size on window resize
  useLayoutEffect(() => {
    const updateSize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        const containerSize = Math.min(container.clientWidth, container.clientHeight);
        const newSize = Math.max(containerSize * 0.95, 500);
        setSize(newSize);
        setCenter(newSize / 2);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate responsive dimensions
  const centerRadius = center * 0.15; // Even smaller center circle radius to prevent overlap
  const innerRadius = centerRadius + 12; // Further reduced space from center circle
  const outerRadius = center * 0.35; // Even smaller outer edge of sectors

  // Calculate point on circle
  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle)
  });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500"
      style={{
        color: theme.text,
        fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
      }}
    >
      {/* Page Title */}
      <h1
        className="font-bold text-center mb-8"
        style={{ 
          color: themeName === 'classicEarth' ? theme.primary : theme.secondary, 
          textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none',
          fontSize: 'clamp(2rem, 4vw, 4rem)'
        }}
      >
        New Wheel
      </h1>

      {/* Wheel Container */}
      <div
        ref={svgRef}
        className="w-full h-full mx-auto flex items-center justify-center mb-8"
        style={{ 
          padding: '0 4px',
          width: '100%',
          height: '100%',
          minHeight: '500px'
        }}
      >
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Center Circle */}
          <circle
            cx={center}
            cy={center}
            r={centerRadius}
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          
          {/* Center Text */}
          <text
            x={center}
            y={center}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={Math.max(centerRadius * 0.2, 16)}
            fontWeight="bold"
            dy=".3em"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          >
            DOUBT IN GOD
          </text>
          
          {/* 4 Sectors */}
          {WHEEL_SEGMENTS.map((segment, index) => {
            const angle = (index / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            const nextAngle = ((index + 1) / WHEEL_SEGMENTS.length) * 2 * Math.PI;
            
            // Add small gap between sectors
            const gapAngle = 0.02;
            const adjustedAngle = angle + gapAngle;
            const adjustedNextAngle = nextAngle - gapAngle;
            
            // Calculate path data for sector
            const x1 = center + innerRadius * Math.cos(adjustedAngle);
            const y1 = center + innerRadius * Math.sin(adjustedAngle);
            const x2 = center + outerRadius * Math.cos(adjustedAngle);
            const y2 = center + outerRadius * Math.sin(adjustedAngle);
            const x3 = center + outerRadius * Math.cos(adjustedNextAngle);
            const y3 = center + outerRadius * Math.sin(adjustedNextAngle);
            const x4 = center + innerRadius * Math.cos(adjustedNextAngle);
            const y4 = center + innerRadius * Math.sin(adjustedNextAngle);
            
            const largeArcFlag = (adjustedNextAngle - adjustedAngle) > Math.PI ? 1 : 0;
            
            const pathData = `
              M ${x1} ${y1}
              L ${x2} ${y2}
              A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
              L ${x4} ${y4}
              A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
              Z
            `;
            
            // Calculate text position in the middle of the sector
            const textAngle = adjustedAngle + (adjustedNextAngle - adjustedAngle) / 2;
            const textRadius = (innerRadius + outerRadius) / 2;
            const textX = center + textRadius * Math.cos(textAngle);
            const textY = center + textRadius * Math.sin(textAngle);
            
            return (
              <g key={index}>
                <path
                  d={pathData}
                  fill="transparent"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={Math.max((outerRadius - innerRadius) * 0.15, 12)}
                  fontWeight="bold"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {segment.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Guided Flows Section */}
      <div className="w-full max-w-6xl mx-auto">
        <h2
          className="text-center mb-8"
          style={{ 
            color: themeName === 'classicEarth' ? theme.primary : theme.secondary, 
            textShadow: themeName === 'neon' ? '0 0 6px #00f2fa' : 'none',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 'bold'
          }}
        >
          Guided Flows
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Belief Flows */}
          <div className="space-y-4">
            <h3
              className="text-lg font-bold mb-4 text-center"
              style={{ 
                color: themeName === 'classicEarth' ? theme.primary : '#00f2fa',
                textShadow: themeName === 'neon' ? '0 0 4px #00f2fa' : 'none'
              }}
            >
              🟢 Belief
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/flow/doubt-in-god')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Doubt in God
              </button>
              <button
                onClick={() => navigate('/flow/why-islam')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Why Islam?
              </button>
              <button
                onClick={() => navigate('/flow/why-believe')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Why believe at all?
              </button>
            </div>
          </div>

          {/* Worship & Connection Flows */}
          <div className="space-y-4">
            <h3
              className="text-lg font-bold mb-4 text-center"
              style={{ 
                color: themeName === 'classicEarth' ? theme.primary : '#00f2fa',
                textShadow: themeName === 'neon' ? '0 0 4px #00f2fa' : 'none'
              }}
            >
              🟠 Worship & Connection
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/flow/why-pray')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Why Pray?
              </button>
              <button
                onClick={() => navigate('/flow/feeling-empty')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Feeling Empty
              </button>
              <button
                onClick={() => navigate('/flow/no-feelings')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                What if I don't feel anything?
              </button>
            </div>
          </div>

          {/* Inner Self Flows */}
          <div className="space-y-4">
            <h3
              className="text-lg font-bold mb-4 text-center"
              style={{ 
                color: themeName === 'classicEarth' ? theme.primary : '#00f2fa',
                textShadow: themeName === 'neon' ? '0 0 4px #00f2fa' : 'none'
              }}
            >
              🔵 Inner Self
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/flow/guilt-mistakes')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Guilt & Mistakes
              </button>
              <button
                onClick={() => navigate('/flow/no-spiritual-feelings')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                No Spiritual Feelings
              </button>
              <button
                onClick={() => navigate('/flow/overthinking')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Overthinking, Laziness, Regret
              </button>
            </div>
          </div>

          {/* Society & Identity Flows */}
          <div className="space-y-4">
            <h3
              className="text-lg font-bold mb-4 text-center"
              style={{ 
                color: themeName === 'classicEarth' ? theme.primary : '#00f2fa',
                textShadow: themeName === 'neon' ? '0 0 4px #00f2fa' : 'none'
              }}
            >
              🔴 Society & Identity
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/flow/friends-dont-get-it')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                My friends don't get it
              </button>
              <button
                onClick={() => navigate('/flow/love-boundaries')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Love & Boundaries
              </button>
              <button
                onClick={() => navigate('/flow/feel-judged')}
                className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-left"
                style={{
                  color: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  borderColor: themeName === 'classicEarth' ? theme.border : '#00f2fa',
                  backgroundColor: themeName === 'classicEarth' ? theme.background : 'rgba(0, 0, 0, 0.8)',
                  boxShadow: themeName === 'classicEarth' ? 'none' : '0 0 10px #00f2fa, 0 0 20px #00f2fa',
                  backdropFilter: themeName === 'classicEarth' ? 'none' : 'blur(10px)',
                  fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                I feel judged
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWheelPage; 
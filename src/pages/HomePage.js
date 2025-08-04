import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import WheelOrganism from '../organisms/WheelOrganism';
import WheelInward from '../organisms/WheelInward';

import fileSvg from '../assets/file.svg';
import backgroundNeon from '../assets/BackgroundHomePageYouth4.png';
import backgroundNeonNight from '../assets/BackgroundHomePageYouthNightMode.png';
import backgroundNeonNight3 from '../assets/BackgroundHomePageYouthNightMode3.png';

const HomePage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode, setNightMode } = useSettings();
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentWheel, setCurrentWheel] = useState('outward'); // 'outward', 'inward', of 'inward2'

  // Mapping data from the Mapping file
  const mappingData = [
    {
      need: 'Guilt & Redemption',
      poeticTitle: 'The Door That Never Closes',
      wheel1Topics: ['Repentance', 'Loving Return', 'Self-Reckoning', 'Wakefulness'],
      wheel2Topics: ['Jurisprudence (Salah)']
    },
    {
      need: 'Love & Safety',
      poeticTitle: 'Held in His Mercy',
      wheel1Topics: ['Repentance', 'Loving Return', 'Remembrance', 'Taking Shelter'],
      wheel2Topics: ['Belief', 'Qur\'an']
    },
    {
      need: 'Inner Self',
      poeticTitle: 'Whispers Beneath the Surface',
      wheel1Topics: ['Self-Reckoning', 'Sincerity', 'Wakefulness', 'Discipline', 'Hearing'],
      wheel2Topics: ['Jurisprudence (emotional worship)']
    },
    {
      need: 'Purpose & Meaning',
      poeticTitle: 'You Were Meant for More',
      wheel1Topics: ['Wakefulness', 'Reflection'],
      wheel2Topics: ['Belief', 'Life of the Prophet', 'Qur\'an']
    },
    {
      need: 'Struggle & Pressure',
      poeticTitle: 'The Weight and the Wings',
      wheel1Topics: ['Self-Reckoning', 'Sincerity', 'Fleeing', 'Taking Shelter', 'Discipline'],
      wheel2Topics: ['Modern Ideologies']
    },
    {
      need: 'Identity & Belonging',
      poeticTitle: 'Between Worlds, Still Whole',
      wheel1Topics: ['Islamic History', 'Family & Society', 'Modern Ideologies', 'Reflection'],
      wheel2Topics: ['Belief', 'Qur\'an']
    },
    {
      need: 'Worship & Connection',
      poeticTitle: 'When Silence Speaks to Allah',
      wheel1Topics: ['Remembrance', 'Hearing', 'Wakefulness'],
      wheel2Topics: ['Jurisprudence (Salah)', 'Qur\'an', 'Divine Watchfulness']
    }
  ];

  // Flow to mapping mapping
  const flowToMapping = {
    'guilt-return': 0, // Guilt & Redemption
    'love-return': 1,  // Love & Safety
    'inner-self': 2,   // Inner Self
    'purpose': 3,      // Purpose & Meaning
    'struggle': 4,     // Struggle & Pressure
    'identity-belonging': 5, // Identity & Belonging
    'worship-connection': 6  // Worship & Connection
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    background: themeName === 'style' ? `url(${fileSvg})` : 
               themeName === 'neon' && nightMode ? `url(${backgroundNeonNight3})` :
               themeName === 'neon' ? `url(${backgroundNeon})` : '#ffffff',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transition: 'background 0.3s ease',
  };

  const mainStyle = {
    flex: 1,
    paddingTop: '80px', // Space for fixed header
    padding: '0.5rem', // Reduced padding for mobile
  };

  const contentStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 0.5rem', // Reduced padding for mobile
  };

  const sectionStyle = {
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'left',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000', // White text for neon nightmode
  };

  const wheelContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'clamp(300px, 50vh, 400px)', // Responsive height for mobile
    width: '100%',
    marginBottom: 'clamp(1rem, 3vw, 2rem)',
    padding: '0 0.5rem', // Add padding for mobile
  };

  const flowsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 3vw, 1.5rem)',
    width: '100%',
    maxWidth: '100%',
  };

  const getFlowRowStyle = (isExpanded) => ({
    display: 'flex',
    flexDirection: isExpanded ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: isExpanded ? 'center' : 'space-between',
    padding: isExpanded ? 'clamp(1rem, 3vw, 1.5rem)' : 'clamp(0.75rem, 2vw, 1rem)',
    borderRadius: '16px',
    border: themeName === 'zwartWit' ? '2px solid #000000' : 
            themeName === 'neon' ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.2)',
    background: themeName === 'neon' ? (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 
                themeName === 'zwartWit' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minHeight: isExpanded ? 'clamp(100px, 12vw, 140px)' : 'clamp(40px, 5vw, 60px)',
    width: '100%',
    boxShadow: themeName === 'neon' ? '0 4px 20px rgba(139, 92, 246, 0.3)' : 
               themeName === 'zwartWit' ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
  });



  const flowContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    gap: '0.5rem',
  };

  const flowTitleStyle = {
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    marginBottom: '0.25rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000', // White text for neon nightmode
  };

  const flowDescriptionStyle = {
    fontSize: '0.9rem',
    opacity: 0.8,
    lineHeight: '1.3',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000', // White text for neon nightmode
  };



  const handleFlowClick = (flowId) => {
    // Toggle card expansion
    if (expandedCard === flowId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(flowId);
    }
  };

  const handleFlowStart = (flowId) => {
    // Navigate to specific flow pages
    if (flowId === 'guilt-return') {
      navigate('/flow/return-to-mercy');
    } else if (flowId === 'love-return') {
      navigate('/flow/return-to-mercy');
    } else if (flowId === 'inner-self') {
      navigate('/flow/quiet-heart');
    } else if (flowId === 'purpose') {
      navigate('/flow/created-for-more');
    } else if (flowId === 'struggle') {
      navigate('/flow/return-to-mercy');
    } else if (flowId === 'identity-belonging') {
      navigate('/flow/created-for-more');
    } else if (flowId === 'worship-connection') {
      navigate('/flow/quiet-heart');
    } else {
      navigate(`/flow/${flowId}`);
    }
  };

  return (
    <div style={pageStyle}>
      <style jsx>{`
        .flows-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <Header />
      

      
      <main style={mainStyle}>
        <div style={contentStyle}>
                      {/* Main Title */}
            <section style={sectionStyle}>
              <h1 style={{
                ...titleStyle,
                textAlign: 'center',
                marginBottom: '3rem',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                {currentWheel === 'outward' ? 'Knowledge & Insight' : 'Purification of the Heart - Tazkiyah Al-Nafs'}
              </h1>
            </section>

          {/* Wheel Section */}
          <section style={sectionStyle}>

            
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'clamp(300px, 50vh, 400px)', // Responsive height for mobile
              width: '100%',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              padding: '0 0.5rem', // Add padding for mobile
            }}>
              {currentWheel === 'outward' ? <WheelOrganism /> : <WheelInward />}
              
              {/* Navigation arrows - responsive positioning */}
              <div style={{
                position: 'absolute',
                bottom: 'clamp(-15px, -2vw, -20px)',
                right: 'clamp(10px, 3vw, 20px)',
                display: 'flex',
                gap: 'clamp(0.3rem, 1vw, 0.5rem)',
                zIndex: 10
              }}>
                <button
                  onClick={() => setCurrentWheel('outward')}
                  style={{
                    background: nightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                    border: `2px solid ${currentWheel === 'outward' ? '#8B5CF6' : '#666'}`,
                    color: currentWheel === 'outward' ? '#8B5CF6' : '#333',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    cursor: 'pointer',
                    padding: 'clamp(0.3rem, 1vw, 0.5rem)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    opacity: currentWheel === 'outward' ? 1 : 0.7,
                    width: 'clamp(35px, 8vw, 45px)',
                    height: 'clamp(35px, 8vw, 45px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    fontWeight: 'bold'
                  }}
                  disabled={currentWheel === 'outward'}
                >
                  ←
                </button>
                
                <button
                  onClick={() => setCurrentWheel('inward')}
                  style={{
                    background: nightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                    border: `2px solid ${currentWheel === 'inward' ? '#8B5CF6' : '#666'}`,
                    color: currentWheel === 'inward' ? '#8B5CF6' : '#333',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    cursor: 'pointer',
                    padding: 'clamp(0.3rem, 1vw, 0.5rem)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    opacity: currentWheel === 'inward' ? 1 : 0.7,
                    width: 'clamp(35px, 8vw, 45px)',
                    height: 'clamp(35px, 8vw, 45px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    fontWeight: 'bold'
                  }}
                  disabled={currentWheel === 'inward'}
                >
                  →
                </button>
              </div>
            </div>
          </section>

          {/* Guided Flows Section */}
          <section style={sectionStyle}>
            <h2 style={{
              ...titleStyle,
              fontSize: 'clamp(1.5rem, 4vw, 2rem)', // Responsive font size
              marginBottom: 'clamp(1rem, 3vw, 2rem)', // Responsive margin
            }}>Guided Flows</h2>
            <div style={{
              ...flowsContainerStyle,
              padding: '0 0.5rem', // Add padding for mobile
            }} className="flows-container">
              <div 
                style={getFlowRowStyle(expandedCard === 'guilt-return')}
                onClick={() => handleFlowClick('guilt-return')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'guilt-return' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>The Door That Never Closes</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About Allah's eternal welcome, even after mistakes</p>
                    

                    
                    {/* Topics Section */}
                    {console.log('Debug - mappingData:', mappingData, 'flowToMapping guilt-return:', flowToMapping['guilt-return'], 'result:', mappingData[flowToMapping['guilt-return']])}
                    {mappingData[flowToMapping['guilt-return']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['guilt-return']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['guilt-return']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('guilt-return');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>The Door That Never Closes</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About Allah's eternal welcome, even after mistakes</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'love-return')}
                onClick={() => handleFlowClick('love-return')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'love-return' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>Held in His Mercy</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About wondering whether Allah still loves them</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['love-return']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['love-return']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['love-return']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('love-return');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>Held in His Mercy</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About wondering whether Allah still loves them</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'inner-self')}
                onClick={() => handleFlowClick('inner-self')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'inner-self' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>Whispers Beneath the Surface</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About emotions, inner storms, and what lives beneath the surface</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['inner-self']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['inner-self']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['inner-self']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('inner-self');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>Whispers Beneath the Surface</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About emotions, inner storms, and what lives beneath the surface</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'purpose')}
                onClick={() => handleFlowClick('purpose')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'purpose' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>You Were Meant for More</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About the feeling: "Why am I here?"</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['purpose']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['purpose']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['purpose']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('purpose');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>You Were Meant for More</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About the feeling: "Why am I here?"</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'struggle')}
                onClick={() => handleFlowClick('struggle')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'struggle' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>The Weight and the Wings</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About pressure, school stress, peer dynamics — and the desire to rise above</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['struggle']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['struggle']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['struggle']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('struggle');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>The Weight and the Wings</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About pressure, school stress, peer dynamics — and the desire to rise above</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'identity-belonging')}
                onClick={() => handleFlowClick('identity-belonging')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'identity-belonging' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>Between Worlds, Still Whole</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About those who feel out of place but are rediscovering themselves</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['identity-belonging']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['identity-belonging']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['identity-belonging']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('identity-belonging');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>Between Worlds, Still Whole</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About those who feel out of place but are rediscovering themselves</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
              
              <div 
                style={getFlowRowStyle(expandedCard === 'worship-connection')}
                onClick={() => handleFlowClick('worship-connection')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {expandedCard === 'worship-connection' ? (
                  <div style={flowContentStyle}>
                    <h3 style={flowTitleStyle}>When Silence Speaks to Allah</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>About those who feel nothing in prayer — but still long for closeness</p>
                    
                    {/* Topics Section */}
                    {mappingData[flowToMapping['worship-connection']] && (
                      <div style={{ 
                        marginTop: '1rem', 
                        width: '100%',
                        textAlign: 'left'
                      }}>
                        <p style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold', 
                          marginBottom: '0.5rem',
                          color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                        }}>
                          Related Topics:
                        </p>
                        
                        {/* Wheel 1 Topics */}
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 1 (Youth Hybrid):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['worship-connection']].wheel1Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Wheel 2 Topics */}
                        <div>
                          <p style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.25rem',
                            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
                          }}>
                            Wheel 2 (Youth Outward):
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {mappingData[flowToMapping['worship-connection']].wheel2Topics.map((topic, index) => (
                              <span
                                key={index}
                                style={{
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlowStart('worship-connection');
                      }}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Start Journey
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <h3 style={{ ...flowTitleStyle, margin: 0 }}>When Silence Speaks to Allah</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        opacity: 0.7, 
                        margin: '0.2rem 0 0 0',
                        color: nightMode ? '#ffffff' : '#000000'
                      }}>About those who feel nothing in prayer — but still long for closeness</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>▼</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage; 
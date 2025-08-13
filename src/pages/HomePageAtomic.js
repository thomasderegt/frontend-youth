import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import WheelOutward from '../organisms/WheelOutward2';
import WheelInward from '../organisms/WheelInward';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import MenuItem from '../atoms/MenuItem';
import MenuIcon from '../atoms/MenuIcon';

const HomePageAtomic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getComponentProps, themeName } = useTheme();
  const { nightMode, backgroundImage } = useSettings();
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentWheel, setCurrentWheel] = useState('inward');
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  // Get theme-based props
  const containerProps = getComponentProps('container', 'default');
  const textProps = getComponentProps('text', 'title');
  const buttonProps = getComponentProps('button', 'primary');
  const cardProps = getComponentProps('container', 'card');

  // Check URL parameters for wheel selection
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const wheelParam = urlParams.get('wheel');
    if (wheelParam === 'inward') {
      setCurrentWheel('inward');
    }
  }, [location.search]);

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
    }
  ];

  // Flow to mapping mapping
  const flowToMapping = {
    'guilt-return': 0,
    'love-return': 1,
    'inner-self': 2
  };

  const handleFlowClick = (flowId) => {
    if (expandedCard === flowId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(flowId);
    }
  };

  const handleFlowStart = (flowId) => {
    console.log('Starting flow:', flowId, 'navigating to /flow/test3');
    navigate('/flow/test3');
  };

  // Instructions Modal Component
  const InstructionsModal = () => {
    const modalProps = getComponentProps('container', 'modal');
    
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}
        onClick={() => setShowInstructionsModal(false)}
      >
        <MenuContainer 
          variant="modal"
          backgroundColor={modalProps.backgroundColor}
          borderColor={modalProps.borderColor}
          style={{ maxWidth: '500px', width: '100%', maxHeight: '80vh', overflow: 'auto' }}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuButton
            onClick={() => setShowInstructionsModal(false)}
            {...buttonProps}
            size="small"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%'
            }}
          >
            ×
          </MenuButton>
          
          <MenuText variant="title" color={textProps.color} className="mb-6 text-center">
            Your path as a spiritual traveler
          </MenuText>
          
          <div className="text-center mb-6">
            <img 
              src={require('../assets/StationsSalik.png')}
              alt="Spiritual Journey"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '1rem'
              }}
            />
          </div>
          
          <MenuText variant="body" color={textProps.color} className="mb-6 text-center">
            This is a spiritual journey where we move from station to station, drawing closer to God with each step.
          </MenuText>
          
          <MenuContainer 
            variant="card"
            backgroundColor={cardProps.backgroundColor}
            borderColor={cardProps.borderColor}
            className="p-4"
          >
            <MenuText variant="caption" color={textProps.color}>
              Each station on the wheel represents a different aspect of spiritual growth. As you explore these stations, 
              you'll discover deeper insights and practices that help purify your heart and strengthen your connection with Allah.
            </MenuText>
          </MenuContainer>
        </MenuContainer>
      </div>
    );
  };

  // Flow Card Component
  const FlowCard = ({ flowId, title, description, mappingIndex }) => {
    const isExpanded = expandedCard === flowId;
    const mapping = mappingData[mappingIndex];
    
    return (
      <MenuContainer 
        variant="card"
        backgroundColor={cardProps.backgroundColor}
        borderColor={cardProps.borderColor}
        className={`cursor-pointer transition-all duration-300 ${isExpanded ? 'min-h-40' : 'min-h-16'}`}
        onClick={() => handleFlowClick(flowId)}
      >
        {isExpanded ? (
          <div className="text-center">
            <MenuText variant="subtitle" color={textProps.color} className="mb-2">
              {title}
            </MenuText>
            <MenuText variant="body" color={textProps.color} className="mb-4">
              {description}
            </MenuText>
            
            {mapping && (
              <div className="text-left">
                <MenuText variant="label" color={textProps.color} className="mb-2">
                  Related Topics:
                </MenuText>
                
                <div className="mb-2">
                  <MenuText variant="caption" color={textProps.color} className="mb-1">
                    Wheel 1 (Youth Hybrid):
                  </MenuText>
                  <div className="flex flex-wrap gap-1">
                    {mapping.wheel1Topics.map((topic, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: textProps.color,
                          border: `1px solid ${cardProps.borderColor}`
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <MenuText variant="caption" color={textProps.color} className="mb-1">
                    Wheel 2 (Youth Outward):
                  </MenuText>
                  <div className="flex flex-wrap gap-1">
                    {mapping.wheel2Topics.map((topic, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: textProps.color,
                          border: `1px solid ${cardProps.borderColor}`
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <MenuButton
              onClick={(e) => {
                e.stopPropagation();
                handleFlowStart(flowId);
              }}
              {...buttonProps}
              size="medium"
              className="mt-4"
            >
              Start Journey
            </MenuButton>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start flex-1">
              <MenuText variant="subtitle" color={textProps.color}>
                {title}
              </MenuText>
              <MenuText variant="caption" color={textProps.color}>
                {description}
              </MenuText>
            </div>
            
            <div className="flex items-center gap-2">
              <MenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlowStart(flowId);
                }}
                {...buttonProps}
                size="small"
              >
                Start Journey
              </MenuButton>
              <MenuIcon 
                icon="▼"
                color={textProps.color}
                size="16px"
              />
            </div>
          </div>
        )}
      </MenuContainer>
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: containerProps.backgroundColor,
      color: textProps.color
    }}>
      <Header />
      
      <main className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Instructions Button */}
          <div className="text-right mb-8">
            <MenuButton
              onClick={() => setShowInstructionsModal(true)}
              {...buttonProps}
              size="small"
              style={{
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                marginLeft: 'auto'
              }}
            >
              i
            </MenuButton>
          </div>

          {/* Quran Verse */}
          <div className="text-center mb-8">
            <MenuText variant="subtitle" color={textProps.color} className="mb-2 italic">
              The Day when neither wealth nor children will benefit, except one who comes to Allah with a sound heart
            </MenuText>
            <MenuText variant="caption" color={textProps.color} className="italic">
              — Quran 26:88-89
            </MenuText>
          </div>

          {/* Wheel Section */}
          <div className="mb-8">
            <div className="flex justify-center items-center min-h-80 mb-4">
              {currentWheel === 'outward' ? (
                <WheelOutward 
                  backgroundColor={containerProps.backgroundColor}
                  textColor={textProps.color}
                  borderColor={containerProps.borderColor}
                  segmentBackgroundColor={cardProps.backgroundColor}
                  segmentBorderColor={cardProps.borderColor}
                  centerBackgroundColor={containerProps.backgroundColor}
                  centerBorderColor={containerProps.borderColor}
                  centerTextColor={textProps.color}
                />
              ) : (
                <WheelInward 
                  backgroundColor={containerProps.backgroundColor}
                  textColor={textProps.color}
                  borderColor={containerProps.borderColor}
                  segmentBackgroundColor={cardProps.backgroundColor}
                  segmentBorderColor={cardProps.borderColor}
                  centerBackgroundColor={containerProps.backgroundColor}
                  centerBorderColor={containerProps.borderColor}
                  centerTextColor={textProps.color}
                />
              )}
              
              {/* Navigation arrows */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <MenuButton
                  onClick={() => setCurrentWheel('outward')}
                  {...buttonProps}
                  size="small"
                  style={{
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    opacity: currentWheel === 'outward' ? 1 : 0.7
                  }}
                  disabled={currentWheel === 'outward'}
                >
                  ←
                </MenuButton>
                
                <MenuButton
                  onClick={() => setCurrentWheel('inward')}
                  {...buttonProps}
                  size="small"
                  style={{
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    opacity: currentWheel === 'inward' ? 1 : 0.7
                  }}
                  disabled={currentWheel === 'inward'}
                >
                  →
                </MenuButton>
              </div>
            </div>
          </div>

          {/* Guided Flows Section */}
          <div className="space-y-4">
            <FlowCard 
              flowId="guilt-return"
              title="The Door That Never Closes"
              description="About Allah's eternal welcome, even after mistakes"
              mappingIndex={flowToMapping['guilt-return']}
            />
            
            <FlowCard 
              flowId="love-return"
              title="Held in His Mercy"
              description="About wondering whether Allah still loves them"
              mappingIndex={flowToMapping['love-return']}
            />
            
            <FlowCard 
              flowId="inner-self"
              title="Whispers Beneath the Surface"
              description="About emotions, inner storms, and what lives beneath the surface"
              mappingIndex={flowToMapping['inner-self']}
            />
          </div>
        </div>
      </main>

      <Footer />
      
      {showInstructionsModal && <InstructionsModal />}
    </div>
  );
};

export default HomePageAtomic; 
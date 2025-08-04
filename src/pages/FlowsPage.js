import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getBackgroundStyle } from '../utils/backgrounds';

const FlowsPage = () => {
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedFlow, setSelectedFlow] = useState(null);
  const [expandedFlow, setExpandedFlow] = useState(null);

  const backgroundStyle = getBackgroundStyle(themeName);

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
      wheel1Topics: ['Repentance', 'Loving Return', 'Remembrance', 'Taking Shelter', 'Gratitude'],
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

  const flows = [
    {
      id: 'return-to-mercy',
      title: 'Return to Mercy',
      subtitle: 'Purification & Self-Acceptance',
      description: 'A gentle, healing journey to reconnect with Allah after mistakes, shame, or spiritual absence.',
      duration: '20-25 min',
      sessions: 5,
      wheel: 'Wheel 4 - Inward (Purification)',
      modules: ['Tawbah', 'Tazkiyyah', 'Dhikr', 'Ikhlas', 'Qur\'an', 'Hadith'],
      icon: '🕊️',
      color: 'purple',
      targetAudience: 'Those feeling distant, ashamed, or seeking forgiveness',
      mappingIndex: 0 // Guilt & Redemption
    },
    {
      id: 'created-for-more',
      title: 'Created for More',
      subtitle: 'Purpose & Direction',
      description: 'A narrative journey of existence, prophetic perspective, and spiritual direction.',
      duration: '25-30 min',
      sessions: 5,
      wheel: 'Wheel 2 - Outward (Core)',
      modules: ['Aqeedah', 'Seerah', 'Hadith', 'Qur\'an', 'Islamic Thought'],
      icon: '🌟',
      color: 'blue',
      targetAudience: 'Muslims who want more than ritual, seeking meaning and mission',
      mappingIndex: 3 // Purpose & Meaning
    },
    {
      id: 'quiet-heart',
      title: 'The Quiet Heart',
      subtitle: 'Inner Peace & Surrender',
      description: 'A journey to inner peace and surrender through patience and sincerity.',
      duration: '20-25 min',
      sessions: 5,
      wheel: 'Wheel 4 - Inward (Purification)',
      modules: ['Sabr', 'Ikhlas', 'Dhikr', 'Qur\'an'],
      icon: '🧘',
      color: 'green',
      targetAudience: 'Those seeking inner peace, dealing with anxiety or restlessness',
      mappingIndex: 2 // Inner Self
    }
  ];

  const handleFlowSelect = (flowId) => {
    setSelectedFlow(flowId);
    
    // Add a small delay for visual feedback
    setTimeout(() => {
      navigate(`/flow/${flowId}`);
    }, 300);
  };

  const handleCardExpand = (flowId, event) => {
    event.stopPropagation();
    setExpandedFlow(expandedFlow === flowId ? null : flowId);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const content = {
    english: {
      title: "Choose Your Guided Journey",
      subtitle: "Each flow is a complete spiritual experience designed to meet you where you are",
      backButton: "← Back to Home",
      durationLabel: "Duration",
      sessionsLabel: "Sessions",
      modulesLabel: "Modules included",
      targetLabel: "Perfect for",
      topicsLabel: "Related Topics",
      wheel1Label: "Wheel 1 (Youth Hybrid)",
      wheel2Label: "Wheel 2 (Youth Outward)",
      expandButton: "Show Topics",
      collapseButton: "Hide Topics"
    },
    dutch: {
      title: "Kies Je Begeleide Reis",
      subtitle: "Elke flow is een complete spirituele ervaring ontworpen om je te ontmoeten waar je bent",
      backButton: "← Terug naar Home",
      durationLabel: "Duur",
      sessionsLabel: "Sessies",
      modulesLabel: "Inbegrepen modules",
      targetLabel: "Perfect voor",
      topicsLabel: "Gerelateerde Onderwerpen",
      wheel1Label: "Wiel 1 (Youth Hybrid)",
      wheel2Label: "Wiel 2 (Youth Outward)",
      expandButton: "Toon Onderwerpen",
      collapseButton: "Verberg Onderwerpen"
    }
  };

  const currentContent = content[language] || content.english;

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        border: 'border-purple-400',
        ring: 'ring-purple-400',
        text: 'text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-900/20'
      },
      blue: {
        border: 'border-blue-400',
        ring: 'ring-blue-400',
        text: 'text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-900/20'
      },
      green: {
        border: 'border-green-400',
        ring: 'ring-green-400',
        text: 'text-green-400',
        bg: 'bg-green-50 dark:bg-green-900/20'
      }
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <div 
      className="min-h-screen p-6"
      style={{
        backgroundColor: theme.background,
        ...backgroundStyle,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <button
          onClick={handleBackToHome}
          className="mb-6 px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all duration-200"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.text,
            border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
          }}
        >
          {currentContent.backButton}
        </button>

        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: theme.text }}
          >
            {currentContent.title}
          </h1>
          <p 
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
            style={{ color: theme.text }}
          >
            {currentContent.subtitle}
          </p>
        </div>

        {/* Flows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flows.map((flow) => {
            const colorClasses = getColorClasses(flow.color);
            const isExpanded = expandedFlow === flow.id;
            const mappingIndex = flow.mappingIndex;
            const topics = mappingIndex !== undefined ? mappingData[mappingIndex] : null;
            
            return (
              <div
                key={flow.id}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedFlow === flow.id ? `${colorClasses.ring} ring-4` : ''
                }`}
                style={{
                  backgroundColor: theme.cardBackground || 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`,
                  color: theme.text
                }}
                onClick={() => handleFlowSelect(flow.id)}
              >
                {/* Flow Icon */}
                <div className="text-4xl mb-4 text-center">
                  {flow.icon}
                </div>

                {/* Flow Title */}
                <h3 className="text-xl font-bold mb-2 text-center">
                  {flow.title}
                </h3>

                {/* Flow Subtitle */}
                <p className={`text-sm text-center mb-4 ${colorClasses.text}`}>
                  {flow.subtitle}
                </p>

                {/* Flow Description */}
                <p className="text-sm mb-4 leading-relaxed">
                  {flow.description}
                </p>

                {/* Flow Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-70">{currentContent.durationLabel}:</span>
                    <span>{flow.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">{currentContent.sessionsLabel}:</span>
                    <span>{flow.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">{flow.wheel}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="mt-4">
                  <p className="text-xs opacity-70 mb-2">{currentContent.modulesLabel}:</p>
                  <div className="flex flex-wrap gap-1">
                    {flow.modules.map((module, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs ${colorClasses.bg} ${colorClasses.text}`}
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mt-4 pt-4 border-t border-opacity-20" style={{ borderColor: theme.border }}>
                  <p className="text-xs opacity-70 mb-1">{currentContent.targetLabel}:</p>
                  <p className="text-xs leading-relaxed">
                    {flow.targetAudience}
                  </p>
                </div>

                {/* Expand/Collapse Button */}
                <div className="mt-4 pt-4 border-t border-opacity-20" style={{ borderColor: theme.border }}>
                  <button
                    onClick={(e) => handleCardExpand(flow.id, e)}
                    className={`w-full px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isExpanded 
                        ? `${colorClasses.bg} ${colorClasses.text}` 
                        : 'bg-opacity-10 hover:bg-opacity-20'
                    }`}
                    style={{
                      backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      color: theme.text,
                      border: `1px solid ${theme.border || 'rgba(255, 255, 255, 0.2)'}`
                    }}
                  >
                    {isExpanded ? currentContent.collapseButton : currentContent.expandButton}
                  </button>
                </div>

                {/* Expanded Topics Section */}
                {isExpanded && topics && (
                  <div 
                    className="mt-4 pt-4 border-t border-opacity-20 animate-fadeIn"
                    style={{ borderColor: theme.border }}
                  >
                    <p className="text-xs opacity-70 mb-3">{currentContent.topicsLabel}:</p>
                    
                    {/* Wheel 1 Topics */}
                    <div className="mb-3">
                      <p className="text-xs font-medium mb-2" style={{ color: theme.text }}>
                        {currentContent.wheel1Label}:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {topics.wheel1Topics?.map((topic, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded text-xs bg-opacity-20"
                            style={{
                              backgroundColor: `${colorClasses.text}20`,
                              color: colorClasses.text
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Wheel 2 Topics */}
                    <div>
                      <p className="text-xs font-medium mb-2" style={{ color: theme.text }}>
                        {currentContent.wheel2Label}:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {topics.wheel2Topics?.map((topic, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded text-xs bg-opacity-20"
                            style={{
                              backgroundColor: `${colorClasses.text}20`,
                              color: colorClasses.text
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlowsPage; 
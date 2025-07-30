import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

const ChatBox = ({ userGoal, userLevel }) => {
  console.log('ChatBox props:', { userGoal, userLevel }); // Debug log
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme, themeName } = useTheme();
  const { isSettingsOpen } = useSettings();

  // Goal-specific AI personalities
  const aiPersonalities = {
    doubts: {
      icon: '❓',
      name: 'DoubtlyBot',
      welcomeMessage: `Hey! How are you? 👋\n\nI'm here to answer your questions about Islam at Level ${userLevel}.\nNo judgment, no pressure - just honest, helpful answers.\n\nWhat's on your mind?`
    },
    explore: {
      icon: '🌟',
      name: 'ExploreBot',
      welcomeMessage: `Ready to discover? Let's explore together! 🌟\n\nI'm here to guide your learning journey through Islam at Level ${userLevel}.\nLet's find the perfect topics for you to explore!`
    },
    improve: {
      icon: '🎯',
      name: 'PracticeBot',
      welcomeMessage: `Ready to grow? Let's build better habits! 🎯\n\nI'm here to help you set goals, track progress, and improve your practice at Level ${userLevel}.\nWhat area would you like to focus on first?`
    }
  };

  const currentAI = aiPersonalities[userGoal] || aiPersonalities.explore;

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (userGoal && messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'ai',
          text: currentAI.welcomeMessage,
          timestamp: new Date()
        }
      ]);
    }
  }, [userGoal, userLevel, currentAI.welcomeMessage, messages.length]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Expand the chat box when sending a message
    if (!isExpanded) {
      setIsExpanded(true);
    }

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Thanks for your question! I'm working on a response at Level ${userLevel}...\n\n(This is a placeholder - real AI responses will be implemented when the AI backend is ready)`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const chatBoxStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    left: '20px', // Full width on mobile
    width: 'calc(100vw - 40px)', // Viewport width minus margins
    maxWidth: '350px', // Max width on desktop
    maxHeight: '500px',
    background: 'rgba(0, 0, 0, 0.9)', // Black background
    border: `2px solid ${themeName === 'story' ? theme.border : '#00f2fa'}`, // Blue border
    borderRadius: '12px', // Rounded corners
    overflow: 'hidden',
    boxShadow: themeName === 'story' 
      ? '0 2px 12px rgba(196,164,132,0.10)' 
      : '0 0 20px #00f2fa, 0 0 40px #00f2fa, inset 0 0 20px rgba(0, 242, 250, 0.1)', // Same glow as settings
    height: isExpanded ? 'auto' : '60px', // Slightly taller when collapsed
    transition: 'all 0.3s ease',
    zIndex: 1000,
  };

  const headerStyle = {
    background: 'rgba(0, 0, 0, 0.8)',
    color: themeName === 'story' ? theme.secondary : '#00f2fa',
    padding: '0.5rem', // Minimal padding
    display: isExpanded ? 'flex' : 'none', // Hide when collapsed
    alignItems: 'center',
    gap: '0.25rem', // Minimal gap
    cursor: 'pointer',
    borderBottom: `1px solid ${themeName === 'story' ? theme.border : '#333'}`,
  };

  const messagesContainerStyle = {
    height: isExpanded ? '150px' : '0px', // Smaller height
    overflowY: 'auto',
    transition: 'height 0.3s ease',
    background: 'rgba(0, 0, 0, 0.8)',
    display: isExpanded ? 'block' : 'none', // Hide when collapsed
  };

  const messageStyle = (sender) => ({
    margin: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    maxWidth: '85%',
    wordWrap: 'break-word',
    fontSize: '0.8rem',
    lineHeight: '1.3',
    ...(sender === 'user' ? {
      background: themeName === 'story' ? theme.secondary : '#00f2fa',
      color: themeName === 'story' ? theme.primary : '#111',
      marginLeft: 'auto',
      textAlign: 'right',
    } : {
      background: themeName === 'story' ? theme.primary : '#222',
      color: themeName === 'story' ? theme.secondary : '#fff',
      marginRight: 'auto',
    })
  });

  const inputContainerStyle = {
    display: 'flex',
    gap: '0.25rem',
    padding: isExpanded ? '0.75rem' : '1rem', // More padding when collapsed
    background: 'transparent', // No background
    borderTop: 'none', // No border
    borderBottom: 'none', // No bottom border
    cursor: 'pointer',
  };

  const inputStyle = {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '6px',
    border: isExpanded ? `1px solid ${themeName === 'story' ? theme.border : '#444'}` : 'none',
    background: 'rgba(0, 0, 0, 0.9)', // Keep some background for visibility
    color: themeName === 'story' ? theme.text : '#00f2fa',
    fontSize: '0.8rem',
    resize: 'none',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const sendButtonStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    border: isExpanded ? 'none' : '1px solid rgba(0, 242, 250, 0.3)', // Subtle blue border when collapsed
    background: 'rgba(0, 0, 0, 0.9)', // Keep some background for visibility
    color: themeName === 'story' ? theme.primary : '#00f2fa',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
  };

  // Hide ChatBox when Settings are open
  if (isSettingsOpen) {
    return null;
  }

  // Show placeholder if no goal is set
  if (!userGoal) {
    return (
      <div style={chatBoxStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: '1.5rem' }}>💬</span>
          <div>
            <div style={{ fontWeight: 'bold' }}>AI Companion</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
              Complete onboarding to start chatting
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop when expanded */}
      {isExpanded && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 999,
          }}
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <div style={chatBoxStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <span style={{ fontSize: '1.5rem' }}>{currentAI.icon}</span>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{currentAI.name}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
              Level {userLevel} • {userGoal.charAt(0).toUpperCase() + userGoal.slice(1)}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              color: themeName === 'story' ? theme.secondary : '#00f2fa',
              cursor: 'pointer',
              fontSize: '1.2rem',
              padding: '0.25rem',
              borderRadius: '4px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            −
          </button>
        </div>

        {/* Messages Container */}
        <div style={messagesContainerStyle}>
          {messages.map((message) => (
            <div key={message.id} style={messageStyle(message.sender)}>
              {message.text.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Container */}
        <div 
          style={inputContainerStyle}
          onClick={() => !isExpanded && setIsExpanded(true)}
        >
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isExpanded ? "Type your question..." : "Click to chat..."}
            style={inputStyle}
            rows={1}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSendMessage();
            }}
            disabled={!inputValue.trim()}
            style={{
              ...sendButtonStyle,
              opacity: inputValue.trim() ? 1 : 0.5,
            }}
          >
            Send
          </button>
          {!isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: themeName === 'story' ? theme.secondary : '#00f2fa',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: '0.25rem',
                borderRadius: '4px',
                transition: 'opacity 0.2s',
                marginLeft: '0.25rem',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBox; 
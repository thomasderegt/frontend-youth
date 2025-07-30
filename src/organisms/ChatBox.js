import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ChatBox = ({ userGoal, userLevel }) => {
  console.log('ChatBox props:', { userGoal, userLevel }); // Debug log
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme, themeName } = useTheme();

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
    width: '100%',
    maxWidth: '400px', // Smaller max width
    margin: '1rem auto 0', // Less margin
    background: themeName === 'story' ? theme.background : '#111',
    border: `2px solid ${themeName === 'story' ? theme.border : '#00f2fa'}`, // Normal border
    borderRadius: '8px', // Smaller border radius
    overflow: 'hidden',
    boxShadow: themeName === 'story' 
      ? '0 2px 12px rgba(196,164,132,0.10)' 
      : '0 0 10px rgba(0, 242, 250, 0.2)',
  };

  const headerStyle = {
    background: themeName === 'story' ? theme.primary : '#222',
    color: themeName === 'story' ? theme.secondary : '#00f2fa',
    padding: '0.75rem', // Smaller padding
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem', // Smaller gap
    cursor: 'pointer',
    borderBottom: `1px solid ${themeName === 'story' ? theme.border : '#333'}`,
  };

  const messagesContainerStyle = {
    height: isExpanded ? '200px' : '0px', // Smaller height
    overflowY: 'auto',
    transition: 'height 0.3s ease',
    background: themeName === 'story' ? theme.background : '#111',
  };

  const messageStyle = (sender) => ({
    margin: '0.75rem',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    maxWidth: '80%',
    wordWrap: 'break-word',
    fontSize: '0.9rem',
    lineHeight: '1.4',
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
    gap: '0.5rem',
    padding: '0.75rem', // Smaller padding
    background: themeName === 'story' ? theme.background : '#111',
    borderTop: `1px solid ${themeName === 'story' ? theme.border : '#333'}`,
  };

  const inputStyle = {
    flex: 1,
    padding: '0.75rem',
    borderRadius: '8px',
    border: `2px solid ${themeName === 'story' ? theme.border : '#444'}`,
    background: themeName === 'story' ? theme.background : '#222',
    color: themeName === 'story' ? theme.text : '#fff',
    fontSize: '0.9rem',
    resize: 'none',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const sendButtonStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    background: themeName === 'story' ? theme.secondary : '#00f2fa',
    color: themeName === 'story' ? theme.primary : '#111',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
  };

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
    <div style={chatBoxStyle}>
      {/* Header */}
      <div 
        style={headerStyle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span style={{ fontSize: '1.5rem' }}>{currentAI.icon}</span>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{currentAI.name}</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Level {userLevel} • {userGoal.charAt(0).toUpperCase() + userGoal.slice(1)}
          </div>
        </div>
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
      <div style={inputContainerStyle}>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
          style={inputStyle}
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          style={{
            ...sendButtonStyle,
            opacity: inputValue.trim() ? 1 : 0.5,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox; 
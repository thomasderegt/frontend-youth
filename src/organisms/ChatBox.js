import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import apiService from '../utils/api';

const ChatBox = ({ userLevel }) => {
  console.log('ChatBox props:', { userLevel }); // Debug log
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme, themeName } = useTheme();
  const { isSettingsOpen } = useSettings();

  // Simplified AI personality
  const aiPersonality = {
    icon: '🌟',
    name: 'IslamBot',
    welcomeMessage: `Ready to explore? Let's discover together! 🌟\n\nI'm here to guide your learning journey through Islam at Level ${userLevel}.\nWhat would you like to learn about today?`
  };

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'ai',
          text: aiPersonality.welcomeMessage,
          timestamp: new Date()
        }
      ]);
    }
  }, [aiPersonality.welcomeMessage, messages.length]);

  const handleSendMessage = async () => {
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
    const currentInput = inputValue;
    setInputValue('');

    // Show typing indicator
    const typingMessage = {
      id: Date.now() + 1,
      sender: 'ai',
      text: '...',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      // Generate unique user ID (in production, this would come from authentication)
      const userId = `user_${Date.now()}`;
      
      // Send message to AI backend
      const response = await apiService.sendChatMessage(
        userId,
        currentInput,
        'explore', // Default to explore for now
        userLevel
      );

      // Remove typing indicator and add AI response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: Date.now() + 2,
          sender: 'ai',
          text: response.response,
          timestamp: new Date()
        }];
      });

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Remove typing indicator and show error message
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: Date.now() + 2,
          sender: 'ai',
          text: `Sorry, I'm having trouble connecting to my knowledge base right now. Please try again later. (Error: ${error.message})`,
          timestamp: new Date()
        }];
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const chatBoxStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    width: isExpanded ? 'clamp(300px, 25vw, 400px)' : '60px',
    height: isExpanded ? 'clamp(400px, 50vh, 500px)' : '60px',
    background: themeName === 'story' ? theme.background : 
                themeName === 'classicEarth' ? theme.background :
                themeName === 'zwartWit' ? '#ffffff' : 'rgba(0, 0, 0, 0.9)',
    border: themeName === 'story' ? `2px solid ${theme.border}` : 
            themeName === 'classicEarth' ? `2px solid ${theme.border}` :
            themeName === 'zwartWit' ? '2px solid #000000' : '2px solid #00f2fa',
    borderRadius: '12px',
    boxShadow: themeName === 'story' ? '0 4px 24px rgba(196,164,132,0.10)' :
               themeName === 'classicEarth' ? '0 4px 24px rgba(111,48,0,0.15)' :
               themeName === 'zwartWit' ? '0 4px 24px rgba(0,0,0,0.15)' : '0 0 20px #00f2fa',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    overflow: 'hidden',
    backdropFilter: themeName === 'story' || themeName === 'classicEarth' || themeName === 'zwartWit' ? 'none' : 'blur(10px)',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    background: themeName === 'story' ? theme.primary : 
                themeName === 'classicEarth' ? theme.primary :
                themeName === 'zwartWit' ? '#ffffff' : 'rgba(0, 0, 0, 0.8)',
    color: themeName === 'story' ? theme.secondary : 
           themeName === 'classicEarth' ? theme.secondary :
           themeName === 'zwartWit' ? '#000000' : '#fff',
    borderBottom: themeName === 'story' ? `1px solid ${theme.border}` : 
                  themeName === 'classicEarth' ? `1px solid ${theme.border}` :
                  themeName === 'zwartWit' ? '1px solid #000000' : '1px solid #333',
    cursor: 'pointer',
    gap: '0.75rem',
  };

  const messagesContainerStyle = {
    height: isExpanded ? 'min(300px, 40vh)' : '0px', // Responsive height for large screens
    overflowY: 'auto',
    transition: 'height 0.3s ease',
    background: 'rgba(0, 0, 0, 0.8)',
    display: isExpanded ? 'block' : 'none', // Hide when collapsed
  };

  const messageStyle = (sender, isTyping = false) => ({
    padding: '0.75rem',
    margin: '0.5rem',
    borderRadius: '8px',
    maxWidth: '80%',
    wordWrap: 'break-word',
    ...(sender === 'user' ? {
      marginLeft: 'auto',
      background: themeName === 'story' ? theme.primary : 
                  themeName === 'classicEarth' ? theme.primary :
                  themeName === 'zwartWit' ? '#000000' : '#00f2fa',
      color: themeName === 'story' ? theme.secondary : 
             themeName === 'classicEarth' ? theme.secondary :
             themeName === 'zwartWit' ? '#ffffff' : '#000',
    } : {
      background: themeName === 'story' ? theme.primary : 
                  themeName === 'classicEarth' ? theme.primary :
                  themeName === 'zwartWit' ? '#ffffff' : '#222',
      color: themeName === 'story' ? theme.secondary : 
             themeName === 'classicEarth' ? theme.secondary :
             themeName === 'zwartWit' ? '#000000' : '#fff',
      marginRight: 'auto',
      ...(isTyping && {
        fontStyle: 'italic',
        opacity: 0.7,
      })
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
    border: isExpanded ? `1px solid ${themeName === 'story' ? theme.border : 
                          themeName === 'classicEarth' ? theme.border :
                          themeName === 'zwartWit' ? '#000000' : '#444'}` : 'none',
    background: themeName === 'story' ? theme.background : 
                themeName === 'classicEarth' ? theme.background :
                themeName === 'zwartWit' ? '#ffffff' : 'rgba(0, 0, 0, 0.9)',
    color: themeName === 'story' ? theme.text : 
           themeName === 'classicEarth' ? theme.text :
           themeName === 'zwartWit' ? '#000000' : '#00f2fa',
    fontSize: 'clamp(0.8rem, 1vw, 1.1rem)', // Responsive font size
    resize: 'none',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const sendButtonStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    border: isExpanded ? 'none' : `1px solid ${themeName === 'story' ? theme.border : 
                                   themeName === 'classicEarth' ? theme.border :
                                   themeName === 'zwartWit' ? '#000000' : 'rgba(0, 242, 250, 0.3)'}`,
    background: themeName === 'story' ? theme.background : 
                themeName === 'classicEarth' ? theme.background :
                themeName === 'zwartWit' ? '#ffffff' : 'rgba(0, 0, 0, 0.9)',
    color: themeName === 'story' ? theme.primary : 
           themeName === 'classicEarth' ? theme.primary :
           themeName === 'zwartWit' ? '#000000' : '#00f2fa',
    cursor: 'pointer',
    fontSize: 'clamp(0.8rem, 1vw, 1.1rem)', // Responsive font size
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
  };

  // Hide ChatBox when Settings are open
  if (isSettingsOpen) {
    return null;
  }

  // Show placeholder if no goal is set
  if (!userLevel) {
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
      {/* No backdrop needed since ChatBox is now relative positioned */}
      
      <div style={chatBoxStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <span style={{ fontSize: '1.5rem' }}>{aiPersonality.icon}</span>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: 'clamp(0.9rem, 1.2vw, 1.3rem)' }}>{aiPersonality.name}</div>
            <div style={{ fontSize: 'clamp(0.7rem, 0.9vw, 1rem)', opacity: 0.8 }}>
              Level {userLevel} • Explore
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
            <div key={message.id} style={messageStyle(message.sender, message.isTyping)}>
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
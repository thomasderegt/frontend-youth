import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

const Header = () => {
  const navigate = useNavigate();
  const { theme, themeName } = useTheme();
  const { nightMode } = useSettings();

  const headerStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 2rem',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: themeName === 'zwartWit' ? '#000000' : 
           themeName === 'neon' ? (nightMode ? '#ffffff' : '#000000') : '#00f2fa',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
  };

  const menuItemStyle = {
    color: themeName === 'zwartWit' ? '#000000' : 
           themeName === 'neon' ? (nightMode ? '#ffffff' : '#000000') : '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
    cursor: 'pointer',
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div 
          style={logoStyle}
          onClick={() => handleMenuClick('/home')}
        >
          <div style={{ lineHeight: '1.2' }}>
            Wheel of Islam
            <div style={{ 
              fontSize: '0.7rem', 
              fontStyle: 'italic',
              fontWeight: 'normal',
              marginTop: '0.2rem'
            }}>
              Insight. Spirituality. Direction
            </div>
          </div>
        </div>
        <ul style={menuStyle}>
          <li>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/home')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Home
            </span>
          </li>

          <li>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/settings')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Settings
            </span>
          </li>
          <li>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/about')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              About
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
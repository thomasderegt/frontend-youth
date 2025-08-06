import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import logoImage from '../assets/Logo2.png';

const Header = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const headerStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 2rem',
    height: '80px',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid rgba(255, 255, 255, 1)',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    width: '100%',
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
    display: isMobile ? 'none' : 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: themeName === 'neon' && nightMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    flexDirection: 'column',
    gap: '0',
  };

  const menuItemStyle = {
    color: themeName === 'zwartWit' ? '#000000' : 
           themeName === 'neon' ? (nightMode ? '#ffffff' : '#000000') : '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
    cursor: 'pointer',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  };

  const mobileMenuItemStyle = {
    ...menuItemStyle,
    padding: '1rem 2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
    justifyContent: 'center',
    height: 'auto',
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.5rem',
    background: 'none',
    border: 'none',
    gap: '0.25rem',
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    background: themeName === 'zwartWit' ? '#000000' : 
                themeName === 'neon' ? (nightMode ? '#ffffff' : '#000000') : '#ffffff',
    transition: '0.3s',
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div 
          style={{
            ...logoStyle,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
          onClick={() => handleMenuClick('/home')}
        >
          <img 
            src={logoImage} 
            alt="Wheel of Islam Logo"
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              mixBlendMode: 'darken'
            }}
          />
          <div style={{ lineHeight: '1.2' }}>
            Wheel of Islam
            <div style={{ 
              fontSize: '0.7rem', 
              fontStyle: 'italic',
              fontWeight: 'normal',
              marginTop: '0.2rem'
            }}>
              Insight. Spirituality. Growth
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul style={menuStyle}>
          <li style={{ display: 'flex', alignItems: 'center', height: '3rem', minHeight: '3rem' }}>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/home')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Home
            </span>
          </li>

          <li style={{ display: 'flex', alignItems: 'center', height: '3rem', minHeight: '3rem' }}>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/progress')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Progress
            </span>
          </li>

          <li style={{ display: 'flex', alignItems: 'center', height: '3rem', minHeight: '3rem' }}>
            <span 
              style={menuItemStyle}
              onClick={() => handleMenuClick('/settings')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Settings
            </span>
          </li>

        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          style={hamburgerStyle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div style={{
            ...hamburgerLineStyle,
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></div>
          <div style={{
            ...hamburgerLineStyle,
            opacity: isMenuOpen ? 0 : 1
          }}></div>
          <div style={{
            ...hamburgerLineStyle,
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></div>
        </button>

        {/* Mobile Menu */}
        <ul style={mobileMenuStyle}>
          <li>
            <span 
              style={mobileMenuItemStyle}
              onClick={() => handleMenuClick('/home')}
            >
              Home
            </span>
          </li>
          <li>
            <span 
              style={mobileMenuItemStyle}
              onClick={() => handleMenuClick('/progress')}
            >
              Progress
            </span>
          </li>
          <li>
            <span 
              style={mobileMenuItemStyle}
              onClick={() => handleMenuClick('/settings')}
            >
              Settings
            </span>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header; 
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme, themeName } = useTheme();

  const footerStyle = {
    padding: '2rem 0 1rem 0',
    marginTop: 'auto',
  };

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const footerSectionsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const footerSectionStyle = {
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
  };

  const footerTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: themeName === 'zwartWit' ? '#000000' : '#00f2fa',
  };

  const footerLinkStyle = {
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  };

  const footerBottomStyle = {
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: themeName === 'zwartWit' ? '1px solid #000000' : '1px solid #333',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {/* <div style={footerSectionsStyle}>
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>About</h3>
            <p>
              Wheel of Islam is an educational platform designed to help youth 
              explore Islamic teachings through interactive learning experiences.
            </p>
          </div>
          
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>Contact</h3>
            <p>Email: info@wheelofislam.com</p>
            <p>Phone: +31 6 12345678</p>
            <p>Address: Amsterdam, Netherlands</p>
          </div>
          
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>Links</h3>
            <span 
              style={footerLinkStyle}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Privacy Policy
            </span>
            <span 
              style={footerLinkStyle}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Terms of Service
            </span>
            <span 
              style={footerLinkStyle}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Cookie Policy
            </span>
          </div>
        </div> */}
        
        {/* <div style={footerBottomStyle}>
          <p>&copy; 2024 Wheel of Islam. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 
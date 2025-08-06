import { useTheme } from '../context/ThemeContext';

export const useButtonStyles = () => {
  const { themeName } = useTheme();

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: '1px solid',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '1rem',
    transition: 'all 0.3s ease',
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: themeName === 'neon' 
      ? 'linear-gradient(45deg, #8b5cf6, #a855f7)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    borderColor: themeName === 'neon' 
      ? 'rgba(139, 92, 246, 0.5)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    color: themeName === 'neon' 
      ? '#ffffff'
      : themeName === 'zwartWit' 
      ? '#ffffff' 
      : '#000000',
    boxShadow: themeName === 'neon' 
      ? '0 4px 15px rgba(139, 92, 246, 0.3)'
      : 'none'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent',
    borderColor: themeName === 'neon' 
      ? 'rgba(255, 255, 255, 0.3)'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    color: themeName === 'neon' 
      ? '#000000'
      : themeName === 'zwartWit' 
      ? '#000000' 
      : '#00f2fa',
    backdropFilter: themeName === 'neon' ? 'blur(10px)' : 'none'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  };

  const getHoverEffects = (isPrimary = true) => ({
    onMouseEnter: (e) => {
      e.target.style.transform = 'scale(1.05)';
      e.target.style.boxShadow = themeName === 'zwartWit' 
        ? '0 4px 8px rgba(0,0,0,0.3)' 
        : '0 0 10px #00f2fa, 0 0 20px #00f2fa';
    },
    onMouseLeave: (e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = 'none';
    }
  });

  return {
    primaryButtonStyle,
    secondaryButtonStyle,
    buttonContainerStyle,
    getHoverEffects
  };
}; 
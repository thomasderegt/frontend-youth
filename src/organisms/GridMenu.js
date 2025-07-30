import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import MenuItem from '../atoms/MenuItem';
import ProgressBar from '../atoms/ProgressBar';

const GridMenu = ({ 
  title = 'The Names of The One True God',
  subtitle = 'Press a name to learn more',
  items = [],
  navigationButtons = [],
  progressBar = null,
  onItemClick = null
}) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme, themeName } = useTheme();

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.id) {
      navigate(`/names/${item.id}`);
    }
  };

  return (
    <MenuContainer variant="default" className="min-h-screen p-6 text-center text-white">
      {/* Header */}
      <MenuText variant="title" className="mb-2">
        {title}
      </MenuText>
      <MenuText variant="subtitle" className="mb-6">
        {subtitle}
      </MenuText>

      {/* Grid Items */}
      <div className="grid grid-cols-2 gap-0">
        {items.map((item, index) => (
          <MenuItem
            key={item.id || index}
            onClick={() => handleItemClick(item)}
            className="p-4 h-40 flex flex-col items-center justify-center text-center"
            style={themeName === 'story' ? {
              color: theme.text,
              border: `1px solid ${theme.border}`,
              backgroundColor: '#f6f1eb !important',
              minWidth: '150px',
              minHeight: '150px',
              borderRadius: '8px',
              boxShadow: '0 4px 24px rgba(196,164,132,0.10)',
              margin: '0px',
            } : {
              color: '#00f2fa',
              borderColor: '#00f2fa',
              minWidth: '150px',
              minHeight: '150px',
              borderBottom: '1px solid #00f2fa',
              borderRight: index % 2 === 0 ? '1px solid #00f2fa' : 'none'
            }}
          >
            <MenuText variant="label" className="text-xl font-bold">
              {item.title}
            </MenuText>
            <MenuText variant="body" className="text-lg">
              {language === 'phonetic' && item.phonetic ? item.phonetic : item.name}
            </MenuText>
          </MenuItem>
        ))}
      </div>

      {/* Navigation Buttons */}
      {navigationButtons.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
          {navigationButtons.map((button, index) => (
            <MenuButton
              key={button.id || index}
              onClick={button.onClick}
              color={button.color || '#00f2fa'}
              width="200px"
              size="medium"
            >
              {button.label}
            </MenuButton>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {progressBar && (
        <div className="mt-8">
          <ProgressBar {...progressBar} />
        </div>
      )}
    </MenuContainer>
  );
};

export default GridMenu; 
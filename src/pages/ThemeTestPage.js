import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../organisms/Header';
import MenuButton from '../atoms/MenuButton';
import MenuText from '../atoms/MenuText';
import MenuContainer from '../atoms/MenuContainer';
import ProgressBar from '../atoms/ProgressBar';
import MenuItem from '../atoms/MenuItem';
import MenuIcon from '../atoms/MenuIcon';
import WheelButton from '../atoms/WheelButton';

const ThemeTestPage = () => {
  const { theme, themeName, getComponentProps, setThemeName } = useTheme();

  const buttonProps = getComponentProps('button', 'primary');
  const textProps = getComponentProps('text', 'title');
  const containerProps = getComponentProps('container', 'default');
  const progressProps = getComponentProps('progress', 'primary');
  const iconProps = getComponentProps('icon', 'primary');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: containerProps.backgroundColor }}>
      <Header />
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <MenuText variant="title" color={textProps.color} className="mb-8">
          Theme Test Page - {themeName}
        </MenuText>

        <MenuText variant="subtitle" color={textProps.color} className="mb-6">
          Testing atomic design theme application
        </MenuText>

        {/* Theme Controls */}
        <MenuContainer 
          variant="card" 
          backgroundColor={containerProps.backgroundColor}
          borderColor={containerProps.borderColor}
          className="mb-8"
        >
          <MenuText variant="label" color={textProps.color} className="mb-4">
            Theme Controls:
          </MenuText>
          <div className="flex gap-4 flex-wrap">
            <MenuButton
              onClick={() => setThemeName('default')}
              {...buttonProps}
              size="small"
            >
              Default Theme
            </MenuButton>
            <MenuButton
              onClick={() => setThemeName('neon')}
              {...buttonProps}
              size="small"
            >
              Neon Theme
            </MenuButton>
            <MenuButton
              onClick={() => setThemeName('zwartWit')}
              {...buttonProps}
              size="small"
            >
              Wireframe Theme
            </MenuButton>
          </div>
        </MenuContainer>

        {/* Atoms Testing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <MenuContainer 
            variant="card" 
            backgroundColor={containerProps.backgroundColor}
            borderColor={containerProps.borderColor}
          >
            <MenuText variant="label" color={textProps.color} className="mb-4">
              Buttons (Atoms):
            </MenuText>
            <div className="space-y-4">
              <MenuButton {...buttonProps} size="small">
                Small Button
              </MenuButton>
              <MenuButton {...buttonProps} size="medium">
                Medium Button
              </MenuButton>
              <MenuButton {...buttonProps} size="large">
                Large Button
              </MenuButton>
              <WheelButton {...buttonProps} size="medium">
                Wheel Button
              </WheelButton>
            </div>
          </MenuContainer>

          {/* Text */}
          <MenuContainer 
            variant="card" 
            backgroundColor={containerProps.backgroundColor}
            borderColor={containerProps.borderColor}
          >
            <MenuText variant="label" color={textProps.color} className="mb-4">
              Text (Atoms):
            </MenuText>
            <div className="space-y-2">
              <MenuText variant="title" color={textProps.color}>
                Title Text
              </MenuText>
              <MenuText variant="subtitle" color={textProps.color}>
                Subtitle Text
              </MenuText>
              <MenuText variant="body" color={textProps.color}>
                Body Text
              </MenuText>
              <MenuText variant="caption" color={textProps.color}>
                Caption Text
              </MenuText>
              <MenuText variant="label" color={textProps.color}>
                Label Text
              </MenuText>
            </div>
          </MenuContainer>

          {/* Progress */}
          <MenuContainer 
            variant="card" 
            backgroundColor={containerProps.backgroundColor}
            borderColor={containerProps.borderColor}
          >
            <MenuText variant="label" color={textProps.color} className="mb-4">
              Progress (Atoms):
            </MenuText>
            <div className="space-y-4">
              <ProgressBar 
                {...progressProps}
                progress={25}
                max={100}
                showLabel={true}
                label="Progress 25%"
              />
              <ProgressBar 
                {...progressProps}
                progress={50}
                max={100}
                showLabel={true}
                label="Progress 50%"
              />
              <ProgressBar 
                {...progressProps}
                progress={75}
                max={100}
                showLabel={true}
                label="Progress 75%"
              />
            </div>
          </MenuContainer>

          {/* Icons and Items */}
          <MenuContainer 
            variant="card" 
            backgroundColor={containerProps.backgroundColor}
            borderColor={containerProps.borderColor}
          >
            <MenuText variant="label" color={textProps.color} className="mb-4">
              Icons & Items (Atoms):
            </MenuText>
            <div className="space-y-4">
              <MenuIcon 
                {...iconProps}
                icon="🔍"
                size="32px"
              />
              <MenuItem 
                {...buttonProps}
                onClick={() => alert('Menu item clicked!')}
              >
                Menu Item 1
              </MenuItem>
              <MenuItem 
                {...buttonProps}
                onClick={() => alert('Menu item clicked!')}
              >
                Menu Item 2
              </MenuItem>
            </div>
          </MenuContainer>
        </div>

        {/* Theme Info */}
        <MenuContainer 
          variant="modal" 
          backgroundColor={containerProps.backgroundColor}
          borderColor={containerProps.borderColor}
          className="mt-8"
        >
          <MenuText variant="label" color={textProps.color} className="mb-4">
            Current Theme Info:
          </MenuText>
          <pre style={{ 
            color: textProps.color, 
            fontSize: '12px',
            backgroundColor: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            {JSON.stringify(theme, null, 2)}
          </pre>
        </MenuContainer>
      </div>
    </div>
  );
};

export default ThemeTestPage; 
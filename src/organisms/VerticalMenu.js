import React from 'react';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import MenuItem from '../atoms/MenuItem';

const VerticalMenu = ({ 
  isOpen = false,
  onClose,
  title = 'Settings',
  items = [],
  actionButtons = [],
  className = '',
  style = {}
}) => {
  if (!isOpen) return null;

  return (
    <MenuContainer 
      variant="modal" 
      className={className}
      style={{
        background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(22, 33, 62, 0.9) 100%)`,
        backdropFilter: 'blur(15px)',
        ...style
      }}
    >
      <div 
        className="rounded-lg p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto border-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: '#00f2fa',
          boxShadow: '0 0 20px #00f2fa, 0 0 40px #00f2fa, inset 0 0 20px rgba(0, 242, 250, 0.1)',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <MenuText variant="label" className="text-xl font-bold">
            {title}
          </MenuText>
          <button 
            onClick={onClose}
            className="text-2xl transition-all duration-200 hover:scale-110"
            style={{ 
              color: '#00f2fa',
              textShadow: '0 0 5px #00f2fa'
            }}
          >
            ✕
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={item.id || index}>
              <MenuText variant="caption" className="block text-sm font-medium mb-2">
                {item.label}
              </MenuText>
              <select 
                value={item.value}
                onChange={item.onChange}
                className="w-full p-3 rounded border-2 transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: '#00f2fa',
                  color: '#00f2fa',
                  boxShadow: '0 0 5px #00f2fa'
                }}
              >
                {item.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        {actionButtons.length > 0 && (
          <div className="flex gap-4 pt-4">
            {actionButtons.map((button, index) => (
              <MenuButton
                key={button.id || index}
                onClick={button.onClick}
                color={button.color || '#00f2fa'}
                className="flex-1"
                size="medium"
              >
                {button.label}
              </MenuButton>
            ))}
          </div>
        )}
      </div>
    </MenuContainer>
  );
};

export default VerticalMenu; 
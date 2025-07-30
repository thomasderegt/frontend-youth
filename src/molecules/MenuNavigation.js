import React from 'react';
import MenuButton from '../atoms/MenuButton';

const MenuNavigation = ({ 
  buttons = [], 
  layout = 'horizontal',
  className = '',
  style = {}
}) => {
  const layoutClasses = {
    horizontal: 'flex flex-row gap-4 justify-center',
    vertical: 'flex flex-col gap-4 justify-center',
    grid: 'grid grid-cols-2 gap-4'
  };

  const baseClasses = layoutClasses[layout] || layoutClasses.horizontal;

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {buttons.map((button, index) => (
        <MenuButton
          key={button.id || index}
          onClick={button.onClick}
          color={button.color}
          width={button.width}
          size={button.size}
          disabled={button.disabled}
        >
          {button.label}
        </MenuButton>
      ))}
    </div>
  );
};

export default MenuNavigation; 
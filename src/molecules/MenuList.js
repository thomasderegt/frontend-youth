import React from 'react';
import MenuItem from '../atoms/MenuItem';

const MenuList = ({ 
  items = [], 
  layout = 'vertical',
  className = '',
  style = {}
}) => {
  const layoutClasses = {
    vertical: 'flex flex-col gap-4',
    horizontal: 'flex flex-row gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    circular: 'relative' // Special case for wheel
  };

  const baseClasses = layoutClasses[layout] || layoutClasses.vertical;

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {items.map((item, index) => (
        <MenuItem
          key={item.id || index}
          onClick={item.onClick}
          className={item.className}
          style={item.style}
          disabled={item.disabled}
          active={item.active}
        >
          {item.content}
        </MenuItem>
      ))}
    </div>
  );
};

export default MenuList; 
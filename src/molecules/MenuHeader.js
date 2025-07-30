import React from 'react';
import MenuText from '../atoms/MenuText';

const MenuHeader = ({ 
  title, 
  subtitle, 
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`text-center mb-8 ${className}`}
      style={style}
    >
      {title && (
        <MenuText
          variant="title"
          className="mb-4"
        >
          {title}
        </MenuText>
      )}
      
      {subtitle && (
        <MenuText
          variant="subtitle"
          className="mb-6"
        >
          {subtitle}
        </MenuText>
      )}
    </div>
  );
};

export default MenuHeader; 
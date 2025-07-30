import React from 'react';
import MenuContainer from '../atoms/MenuContainer';
import MenuHeader from '../molecules/MenuHeader';
import MenuNavigation from '../molecules/MenuNavigation';

const MenuTemplate = ({
  title,
  subtitle,
  children,
  navigationButtons = [],
  containerVariant = 'default',
  className = '',
  style = {}
}) => {
  return (
    <MenuContainer variant={containerVariant} className={className} style={style}>
      <MenuHeader title={title} subtitle={subtitle} />
      
      <div className="flex-1 w-full">
        {children}
      </div>
      
      {navigationButtons.length > 0 && (
        <MenuNavigation buttons={navigationButtons} />
      )}
    </MenuContainer>
  );
};

export default MenuTemplate; 
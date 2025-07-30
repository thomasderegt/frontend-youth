import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';

const ContentPage = ({ 
  title,
  content,
  image = null,
  imageAlt = '',
  navigationButtons = [],
  className = '',
  style = {}
}) => {
  const navigate = useNavigate();

  return (
    <MenuContainer variant="default" className={`min-h-screen text-white flex flex-col items-center justify-center p-6 ${className}`} style={style}>
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="max-w-md w-full rounded-lg shadow-lg mb-6"
        />
      )}

      {/* Title */}
      {title && (
        <MenuText variant="title" className="mb-4">
          {title}
        </MenuText>
      )}

      {/* Content */}
      {content && (
        <MenuText variant="body" className="text-center max-w-xl text-lg leading-relaxed mb-8">
          {content}
        </MenuText>
      )}

      {/* Navigation Buttons */}
      {navigationButtons.length > 0 && (
        <div className="flex flex-col gap-4">
          {navigationButtons.map((button, index) => (
            <MenuButton
              key={button.id || index}
              onClick={button.onClick}
              color={button.color || '#00f2fa'}
              size="medium"
            >
              {button.label}
            </MenuButton>
          ))}
        </div>
      )}
    </MenuContainer>
  );
};

export default ContentPage; 
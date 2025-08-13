import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import MenuIcon from '../atoms/MenuIcon';

const LandingPageAtomic = () => {
  const { language } = useLanguage();
  const { getComponentProps } = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Get theme-based props
  const containerProps = getComponentProps('container', 'default');
  const textProps = getComponentProps('text', 'title');
  const buttonProps = getComponentProps('button', 'primary');
  const cardProps = getComponentProps('container', 'card');

  const handleContinue = (method) => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 500);
  };

  const content = {
    english: {
      title: "Discover Your Path",
      subtitle: "Learn. Let go. Grow",
      description: "",
      callToActions: [
        {
          id: 'apple',
          title: 'Start Your Journey',
          icon: '🚀'
        },
        {
          id: 'email',
          title: 'Join with Email',
          icon: '✉️'
        },
        {
          id: 'guest',
          title: 'Explore as Guest',
          icon: '👤'
        }
      ],
      terms: "By continuing, you agree to our Terms and Privacy Policy.",
      login: "Already have an account? Login"
    },
    dutch: {
      title: "Ontdek Je Pad",
      subtitle: "Duik in de interactieve content en leer over Islam!",
      description: "",
      callToActions: [
        {
          id: 'apple',
          title: 'Start Je Reis',
          icon: '🚀'
        },
        {
          id: 'email',
          title: 'Aanmelden met Email',
          icon: '✉️'
        },
        {
          id: 'guest',
          title: 'Verken als Gast',
          icon: '👤'
        }
      ],
      terms: "Door door te gaan ga je akkoord met onze Voorwaarden en Privacybeleid.",
      login: "Heb je al een account? Inloggen"
    }
  };

  const currentContent = content[language] || content.english;

  // Call to Action Button Component
  const CallToActionButton = ({ action, onClick, isLoading }) => (
    <MenuButton
      onClick={() => onClick(action.id)}
      {...buttonProps}
      size="large"
      className="w-full mb-4"
      disabled={isLoading}
    >
      <div className="flex items-center justify-center gap-3">
        <MenuIcon 
          icon={action.icon}
          color={buttonProps.color}
          size="24px"
        />
        <span>{action.title}</span>
      </div>
    </MenuButton>
  );

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      style={{
        backgroundColor: containerProps.backgroundColor,
        color: textProps.color
      }}
    >
      <MenuContainer 
        variant="card"
        backgroundColor={cardProps.backgroundColor}
        borderColor={cardProps.borderColor}
        className="w-full max-w-md text-center p-8"
      >
        {/* Logo */}
        <div className="mb-8">
          <div 
            className="mx-auto mb-4"
            style={{ 
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: buttonProps.backgroundColor,
              border: `3px solid ${buttonProps.borderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MenuIcon 
              icon="🕌"
              color={buttonProps.color}
              size="48px"
            />
          </div>
        </div>

        {/* Title */}
        <MenuText variant="title" color={textProps.color} className="mb-4">
          {currentContent.title}
        </MenuText>

        {/* Subtitle */}
        <MenuText variant="subtitle" color={textProps.color} className="mb-8">
          {currentContent.subtitle}
        </MenuText>

        {/* Call to Action Buttons */}
        <div className="space-y-4 mb-8">
          {currentContent.callToActions.map((action) => (
            <CallToActionButton
              key={action.id}
              action={action}
              onClick={handleContinue}
              isLoading={isLoading}
            />
          ))}
        </div>

        {/* Terms */}
        <MenuText variant="caption" color={textProps.color} className="mb-4">
          {currentContent.terms}
        </MenuText>

        {/* Login Link */}
        <MenuButton
          onClick={() => handleContinue('login')}
          {...buttonProps}
          size="small"
          variant="secondary"
          className="w-full"
        >
          {currentContent.login}
        </MenuButton>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-4">
            <MenuText variant="caption" color={textProps.color}>
              Loading...
            </MenuText>
          </div>
        )}
      </MenuContainer>
    </div>
  );
};

export default LandingPageAtomic; 
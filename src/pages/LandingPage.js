import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import youthBackgroundImage from '../assets/BackgroundLandingPageYouth.png';

const LandingPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = (method) => {
    navigate('/home');
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
          icon: '🚀',
          color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        },
        {
          id: 'email',
          title: 'Join with Email',
          icon: '✉️',
          color: 'bg-white text-gray-800 border border-gray-300'
        },
        {
          id: 'guest',
          title: 'Explore as Guest',
          icon: '👤',
          color: 'bg-transparent text-white border border-white'
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
          icon: '🚀',
          color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        },
        {
          id: 'email',
          title: 'Aanmelden met Email',
          icon: '✉️',
          color: 'bg-white text-gray-800 border border-gray-300'
        },
        {
          id: 'guest',
          title: 'Verken als Gast',
          icon: '👤',
          color: 'bg-transparent text-white border border-white'
        }
      ],
      terms: "Door door te gaan ga je akkoord met onze Voorwaarden en Privacybeleid.",
      login: "Heb je al een account? Inloggen"
    }
  };

  const currentContent = content[language] || content.english;

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${youthBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
          
          {/* Logo */}
          <div className="mb-4 md:mb-8">
            <div 
              className="mb-2 md:mb-4"
              style={{ 
                width: 'clamp(80px, 15vw, 120px)',
                height: 'clamp(80px, 15vw, 120px)',
                margin: '0 auto'
              }}
            >
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
              >
                <path 
                  d="M50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 Z M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20 Z M50 30 C40 30 30 40 30 50 C30 60 40 70 50 70 C60 70 70 60 70 50 C70 40 60 30 50 30 Z M50 40 C45 40 40 45 40 50 C40 55 45 60 50 60 C55 60 60 55 60 50 C60 45 55 40 50 40 Z" 
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Branding */}
          <div className="mb-24 md:mb-48">
            <h1 
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 md:mb-4 tracking-tight"
              style={{ 
                color: '#ffffff',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                textAlign: 'center',
                width: '100%',
                letterSpacing: '0.1em'
              }}
            >
              {currentContent.title}
            </h1>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-3 md:mb-6 tracking-wide uppercase"
              style={{ 
                color: '#ffffff',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                textAlign: 'center',
                width: '100%',
                letterSpacing: '0.05em'
              }}
            >
              {currentContent.subtitle}
            </p>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-80 tracking-wide mb-12 md:mb-24"
              style={{ 
                color: '#ffffff',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                textAlign: 'center',
                width: '100%',
                letterSpacing: '0.02em'
              }}
            >
              {currentContent.description}
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8" style={{ marginTop: '-1rem' }}>
            {currentContent.callToActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleContinue(action.id)}
                disabled={isLoading}
                className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-full font-medium text-lg md:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  border: '2px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="flex items-center justify-center">
                  <span>{action.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Terms */}
          <p 
            className="text-sm opacity-70 mb-6"
            style={{ color: '#ffffff' }}
          >
            {currentContent.terms}
          </p>

          {/* Login Link */}
          <button
            onClick={() => handleContinue('login')}
            className="text-sm underline hover:no-underline transition-all duration-200"
            style={{ color: '#ffffff' }}
          >
            {currentContent.login}
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          style={{ backdropFilter: 'blur(5px)' }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p style={{ color: '#ecf0f1' }}>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage; 
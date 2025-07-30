import circuitBoardBg from '../assets/background-circuit-board.png';
import storylineBg from '../assets/background_storyline.png';

export const backgroundImages = {
  neon: circuitBoardBg,
  story: storylineBg,
};

export const getBackgroundStyle = (themeName) => {
  const backgroundImage = backgroundImages[themeName];
  
  console.log('Theme:', themeName);
  console.log('Background image:', backgroundImage);
  
  if (themeName === 'neon') {
    const style = {
      backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 100%), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
    console.log('Neon style:', style);
    return style;
  } else if (themeName === 'story') {
    const style = {
      backgroundImage: `linear-gradient(135deg, rgba(246, 241, 235, 0.95) 0%, rgba(196, 164, 132, 0.1) 100%), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
    console.log('Story style:', style);
    return style;
  }
  
  return {};
}; 
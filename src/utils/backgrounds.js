import storylineBg from '../assets/background_storyline.png';
import youthBg from '../assets/BackgroundLandingPageYouth.png';

export const backgroundImages = {
  neon: youthBg, // Use youth background for neon theme
  story: storylineBg,
  classicEarth: null, // No background image for Classic Earth - pure earthy look
  zwartWit: null, // No background image for Wireframe - pure white background
};

export const getBackgroundStyle = (themeName) => {
  const backgroundImage = backgroundImages[themeName];
  
  console.log('Theme:', themeName);
  console.log('Background image:', backgroundImage);
  
  if (themeName === 'neon') {
    const style = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover !important',
      backgroundPosition: 'center !important',
      backgroundRepeat: 'no-repeat !important',
    };
    console.log('Neon style:', style);
    return style;
  } else if (themeName === 'story') {
    const style = {
      backgroundImage: `linear-gradient(135deg, rgba(246, 241, 235, 0.95) 0%, rgba(196, 164, 132, 0.1) 100%), url(${backgroundImage})`,
      backgroundSize: 'cover !important',
      backgroundPosition: 'center !important',
      backgroundRepeat: 'no-repeat !important',
    };
    console.log('Story style:', style);
    return style;
  } else if (themeName === 'classicEarth') {
    const style = {
      // No background image for Classic Earth - pure solid color
      backgroundColor: '#e8d6b9', // Warm beige background
    };
    console.log('Classic Earth style applied:', style);
    console.log('Classic Earth colors - Background:', '#e8d6b9', 'Center Circle:', '#cbac81', 'Text:', '#0c0800');
    return style;
  } else if (themeName === 'zwartWit') {
    const style = {
      // No background image for Wireframe - pure white background
      backgroundColor: '#ffffff', // Pure white background
    };
    console.log('Wireframe style applied:', style);
    return style;
  }
  
  return {};
}; 
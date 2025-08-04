import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IntroPage from '../organisms/IntroPage';

const TopicIntroPage = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  // Topic configurations
  const topicConfigs = {
    // Doubts topics
    'suffering': {
      title: 'Suffering',
      subtitle: 'Why is there evil if God is good?',
      videoPath: '/videos/suffering-intro.mp4'
    },
    'natural-state': {
      title: 'Natural State',
      subtitle: 'Our natural disposition for faith',
      videoPath: '/videos/natural-state-intro.mp4'
    },
    'misconceptions': {
      title: 'Misconceptions',
      subtitle: 'Understanding Islam correctly',
      videoPath: '/videos/misconceptions-intro.mp4'
    },
    'rational-evidence': {
      title: 'Rational Evidence',
      subtitle: 'Logic & philosophy behind faith',
      videoPath: '/videos/rational-evidence-intro.mp4'
    },
    'scientific-signs': {
      title: 'Scientific Signs',
      subtitle: 'Islamic scholars vs modern discoveries',
      videoPath: '/videos/scientific-signs-intro.mp4'
    },
    'historical-proofs': {
      title: 'Historical Proofs',
      subtitle: 'What did Islam bring to the world?',
      videoPath: '/videos/historical-proofs-intro.mp4'
    },
    'quranic-evidence': {
      title: 'Quranic Evidence',
      subtitle: 'Linguistic miracles of the Quran',
      videoPath: '/videos/quranic-evidence-intro.mp4'
    },
    'prophetic-model': {
      title: 'Prophetic Model',
      subtitle: 'How the Prophet dealt with doubt',
      videoPath: '/videos/prophetic-model-intro.mp4'
    },

    // Inspiration topics
    'prophets': {
      title: 'Prophets',
      subtitle: 'Stories of divine guidance',
      videoPath: '/videos/prophets-intro.mp4'
    },
    'creed': {
      title: 'Creed',
      subtitle: 'The six pillars of faith',
      videoPath: '/videos/creed-intro.mp4'
    },
    'law': {
      title: 'Law',
      subtitle: 'Islamic jurisprudence and ethics',
      videoPath: '/videos/law-intro.mp4'
    },
    'history': {
      title: 'History',
      subtitle: 'Islamic world history',
      videoPath: '/videos/history-intro.mp4'
    },
    'literature': {
      title: 'Literature',
      subtitle: 'Islamic poetry and prose',
      videoPath: '/videos/literature-intro.mp4'
    },
    'art': {
      title: 'Art',
      subtitle: 'Islamic art and calligraphy',
      videoPath: '/videos/art-intro.mp4'
    },
    'architecture': {
      title: 'Architecture',
      subtitle: 'Islamic buildings and design',
      videoPath: '/videos/architecture-intro.mp4'
    },
    'science': {
      title: 'Science',
      subtitle: 'Islamic contributions to knowledge',
      videoPath: '/videos/science-intro.mp4'
    },

    // Deepen topics
    'prayer': {
      title: 'Prayer',
      subtitle: 'Connecting with Allah through salah',
      videoPath: '/videos/prayer-intro.mp4'
    },
    'fasting': {
      title: 'Fasting',
      subtitle: 'The spiritual side of hunger',
      videoPath: '/videos/fasting-intro.mp4'
    },
    'charity': {
      title: 'Charity',
      subtitle: 'Giving and helping others',
      videoPath: '/videos/charity-intro.mp4'
    },
    'pilgrimage': {
      title: 'Pilgrimage',
      subtitle: 'The journey to the Ka\'bah',
      videoPath: '/videos/pilgrimage-intro.mp4'
    },
    'good-character': {
      title: 'Good Character',
      subtitle: 'Developing Islamic morals',
      videoPath: '/videos/good-character-intro.mp4'
    },
    'family': {
      title: 'Family',
      subtitle: 'Islamic family values',
      videoPath: '/videos/family-intro.mp4'
    },
    'quran': {
      title: 'Quran',
      subtitle: 'The divine revelation',
      videoPath: '/videos/quran-intro.mp4'
    },
    'sunnah': {
      title: 'Sunnah',
      subtitle: 'Following the Prophet\'s example',
      videoPath: '/videos/sunnah-intro.mp4'
    },

    // Purify topics
    'purification': {
      title: 'Purification',
      subtitle: 'Cleansing the soul',
      videoPath: '/videos/tazkiyyah-intro.mp4'
    },
    'soul': {
      title: 'Soul',
      subtitle: 'Understanding the self',
      videoPath: '/videos/nafs-intro.mp4'
    },
    'remembrance': {
      title: 'Remembrance',
      subtitle: 'Remembering Allah',
      videoPath: '/videos/dhikr-intro.mp4'
    },
    'repentance': {
      title: 'Repentance',
      subtitle: 'Seeking forgiveness',
      videoPath: '/videos/tawbah-intro.mp4'
    },
    'sincerity': {
      title: 'Sincerity',
      subtitle: 'Pure intentions',
      videoPath: '/videos/ikhlas-intro.mp4'
    },
    'patience': {
      title: 'Patience',
      subtitle: 'Enduring with grace',
      videoPath: '/videos/sabr-intro.mp4'
    },
    'gratitude': {
      title: 'Gratitude',
      subtitle: 'Being thankful',
      videoPath: '/videos/gratitude-intro.mp4'
    },
    'difference': {
      title: 'Difference',
      subtitle: 'Respecting diverse opinions',
      videoPath: '/videos/ikhtilaf-intro.mp4'
    }
  };

  const config = topicConfigs[topic] || {
    title: 'Topic',
    subtitle: 'Introduction to this topic',
    videoPath: '/videos/default-intro.mp4'
  };

  const navigationButtons = [
    {
      id: 'learn',
      label: 'Learn More',
      color: '#00f2fa',
      size: 'large',
      onClick: () => navigate(`/topic/${topic}/learn`)
    },
    {
      id: 'back',
      label: 'Back to Wheel',
      color: '#FF007F',
      onClick: () => navigate('/')
    }
  ];

  const progressBar = {
    currentStep: 2,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <IntroPage
      title={config.title}
      subtitle={config.subtitle}
      videoPlaceholder={true}
      navigationButtons={navigationButtons}
      progressBar={progressBar}
    />
  );
};

export default TopicIntroPage; 
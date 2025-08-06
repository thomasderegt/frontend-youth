const testFlow3 = {
  id: 'test3',
  slug: 'test3',
  title: 'Testflow 3: The Door That Never Closes',
  subtitle: 'A journey of return and rediscovery.',
  description: 'For young people who have made mistakes and wonder if Allah still wants them.',
  category: 'spirituality',
  estimatedDuration: '15 minutes',
  coreNeed: 'Guilt & Redemption',
  theme: '"When I mess up, is Allah still there for me?"',
  topics: {
    wheel1: ['Aqeedah', 'Quran', 'Fiqh'],
    wheel2: ['Returning', 'Wakefulness', 'Self-Reckoning', 'Reflection', 'Repentance']
  },
  goals: [
    { type: 'insight', description: 'I understand that mistakes are part of normal development.' },
    { type: 'reflection', description: 'I can assess my current spiritual state honestly.' },
    { type: 'practice', description: 'I learn to write a personal dua for returning to Allah.' },
    { type: 'intention', description: 'I realize that Allah\'s door is always open for return.' }
  ],
  
  steps: [
    {
      id: 'intro',
      type: 'intro',
      title: 'Where you are right now',
      subtitle: 'Understanding your journey',
      content: {
        text: 'You\'re in a phase of identity development where making mistakes is normal and expected. This is part of your learning process - not a sign of failure. Every young person goes through this phase of questioning, making mistakes, and learning from them.',
        media: '/videos/identity-development.mp4'
      },
      navigation: {
        next: 'visual-card',
        canSkip: false
      }
    },

    {
      id: 'visual-card',
      type: 'visual-card',
      title: 'The door to Allah never closes',
      subtitle: 'Only our backs turn',
      content: {
        quote: 'The door to Allah never closes — only our backs turn.',
        actionText: 'Tap to step back inside'
      },
      navigation: {
        previous: 'intro',
        next: 'scale',
        canSkip: false
      }
    },

    {
      id: 'scale',
      type: 'scale',
      title: 'How close do you feel to Allah today?',
      subtitle: 'Be honest with yourself',
      content: {
        prompt: 'On a scale of 1-10, how close do you feel to Allah today? (1 = very distant, 10 = very close)'
      },
      navigation: {
        previous: 'visual-card',
        next: 'choice',
        canSkip: false
      }
    },

    {
      id: 'choice',
      type: 'choice',
      title: 'What\'s holding you back?',
      subtitle: 'Understanding your barriers',
      content: {
        prompt: 'What emotion do you feel most strongly when thinking about returning to Allah?',
        options: [
          { id: 'guilt', text: 'Guilt - I feel bad about my mistakes', value: 'guilt' },
          { id: 'shame', text: 'Shame - I feel unworthy', value: 'shame' },
          { id: 'fear', text: 'Fear - I\'m afraid of failing again', value: 'fear' },
          { id: 'doubt', text: 'Doubt - I\'m not sure Allah wants me', value: 'doubt' }
        ],
        allowMultiple: false
      },
      navigation: {
        previous: 'scale',
        next: 'quote',
        canSkip: false
      }
    },

    {
      id: 'quote',
      type: 'quote',
      title: 'Do not despair of Allah\'s mercy',
      subtitle: 'Qur\'an 39:53',
      content: {
        arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
        translation: 'O My servants who have transgressed against themselves... Despair not of the mercy of Allah.',
        audio: '/audio/quran-39-53.mp3'
      },
      navigation: {
        previous: 'choice',
        next: 'reflection',
        canSkip: false
      }
    },

    {
      id: 'reflection',
      type: 'reflection',
      title: 'What does this verse mean to you?',
      subtitle: 'Personal interpretation',
      content: {
        text: 'Take a moment to reflect on what this verse means to you personally.',
        reflection: 'How does this verse speak to your current situation? What does it tell you about Allah\'s mercy?'
      },
      navigation: {
        previous: 'quote',
        next: 'teaching-tawbah',
        canSkip: false
      }
    },

    {
      id: 'teaching-tawbah',
      type: 'teaching',
      title: 'What is Tawbah?',
      subtitle: 'The four conditions of repentance',
      content: {
        text: 'Tawbah (repentance) has four essential conditions that must be met for it to be valid:',
        illustration: '/images/tawbah-steps.svg',
        steps: [
          { id: 'regret', title: 'Regret', description: 'Feeling genuine remorse for the sin' },
          { id: 'stop', title: 'Stop', description: 'Ceasing the sinful behavior immediately' },
          { id: 'resolve', title: 'Resolve', description: 'Making sincere intention not to repeat' },
          { id: 'repair', title: 'Repair', description: 'Making amends if possible' }
        ]
      },
      navigation: {
        previous: 'reflection',
        next: 'teaching-inabah',
        canSkip: false
      }
    },

    {
      id: 'teaching-inabah',
      type: 'teaching',
      title: 'From fear to love: What is Inābah?',
      subtitle: 'Returning with love',
      content: {
        text: 'Inābah means returning to Allah with love, not just out of fear or guilt. It\'s about restoring your inner relationship with Allah from a place of love and longing.',
        media: '/videos/inabah-explanation.mp4'
      },
      navigation: {
        previous: 'teaching-tawbah',
        next: 'input',
        canSkip: false
      }
    },

    {
      id: 'input',
      type: 'input',
      title: 'Write your own duʿāʼ',
      subtitle: 'Personal prayer',
      content: {
        placeholder: 'Ya Allah, I want to return to You...',
        instruction: 'Write your own personal dua (prayer) expressing your desire to return to Allah. Be honest and speak from your heart.',
        maxLength: 300
      },
      navigation: {
        previous: 'teaching-inabah',
        next: 'summary',
        canSkip: false
      }
    },

    {
      id: 'summary',
      type: 'summary',
      title: 'What did you learn?',
      subtitle: 'Reflecting on your journey',
      content: {
        checklist: [
          { id: 'identity', text: 'I understand that mistakes are part of normal development', completed: false },
          { id: 'assessment', text: 'I can assess my spiritual state honestly', completed: false },
          { id: 'mercy', text: 'I know that Allah\'s mercy is greater than my mistakes', completed: false },
          { id: 'tawbah', text: 'I understand the conditions of tawbah', completed: false },
          { id: 'inabah', text: 'I know the difference between tawbah and inabah', completed: false },
          { id: 'dua', text: 'I have written my own personal dua', completed: false }
        ],
        journalPrompt: 'What will you take with you from this experience?',
        message: 'Remember: The door to Allah never closes. You can always return, and Allah is always waiting with open arms.'
      },
      navigation: {
        previous: 'input',
        canSkip: false
      }
    }
  ],
  
  metadata: {
    tags: ['mercy', 'forgiveness', 'repentance', 'spirituality', 'tawbah', 'inabah', 'development'],
    difficulty: 'beginner',
    language: 'mixed',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
};

export default testFlow3; 
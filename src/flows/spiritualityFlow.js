const spiritualityFlow = {
  id: 'spirituality',
  slug: 'spirituality',
  title: 'Spirituele Groei',
  subtitle: 'Versterk je band met Allah',
  description: 'Ontdek praktische manieren om je spirituele reis te verdiepen en je band met Allah te versterken.',
  category: 'spirituality',
  estimatedDuration: '20 minuten',
  
  steps: [
    {
      id: 'intro',
      type: 'intro',
      title: 'Je Spirituele Reis',
      subtitle: 'Welkom bij je groei',
      content: {
        text: 'Spirituele groei is een reis die nooit eindigt. Laten we samen ontdekken hoe je je band met Allah kunt verdiepen.',
        image: '/assets/spirituality-intro.jpg'
      },
      navigation: {
        next: 'current-practice',
        canSkip: false
      }
    },
    {
      id: 'current-practice',
      type: 'question',
      title: 'Je Huidige Praktijk',
      subtitle: 'Wat doe je al?',
      content: {
        question: 'Welke spirituele praktijken beoefen je momenteel?',
        options: [
          { id: 'prayer', text: 'Gebed (Salah)', value: 'prayer' },
          { id: 'quran', text: 'Koran lezen', value: 'quran' },
          { id: 'dhikr', text: 'Dhikr (herinnering)', value: 'dhikr' },
          { id: 'dua', text: 'Dua (smeekbeden)', value: 'dua' },
          { id: 'none', text: 'Geen van bovenstaande', value: 'none' }
        ],
        allowMultiple: true
      },
      navigation: {
        previous: 'intro',
        next: 'goals',
        canSkip: false
      }
    },
    {
      id: 'goals',
      type: 'question',
      title: 'Je Doelen',
      subtitle: 'Wat wil je bereiken?',
      content: {
        question: 'Wat is je belangrijkste spirituele doel voor de komende maand?',
        options: [
          { id: 'consistency', text: 'Consistentie in gebed', value: 'consistency' },
          { id: 'understanding', text: 'Meer begrip van de Koran', value: 'understanding' },
          { id: 'connection', text: 'Diepere band met Allah', value: 'connection' },
          { id: 'patience', text: 'Meer geduld ontwikkelen', value: 'patience' },
          { id: 'gratitude', text: 'Meer dankbaarheid', value: 'gratitude' }
        ],
        allowMultiple: false
      },
      navigation: {
        previous: 'current-practice',
        next: 'practical-tips',
        canSkip: false
      }
    },
    {
      id: 'practical-tips',
      type: 'action',
      title: 'Praktische Tips',
      subtitle: 'Stappen naar groei',
      content: {
        tips: [
          {
            id: 'morning-routine',
            title: 'Ochtendroutine',
            description: 'Begin je dag met 10 minuten dhikr en dua',
            difficulty: 'easy'
          },
          {
            id: 'quran-study',
            title: 'Koran Studie',
            description: 'Lees dagelijks 1 vers met betekenis',
            difficulty: 'medium'
          },
          {
            id: 'reflection',
            title: 'Dagelijkse Reflectie',
            description: 'Neem 5 minuten om te reflecteren op je dag',
            difficulty: 'easy'
          },
          {
            id: 'gratitude-practice',
            title: 'Dankbaarheid',
            description: 'Schrijf 3 dingen op waar je dankbaar voor bent',
            difficulty: 'easy'
          }
        ]
      },
      navigation: {
        previous: 'goals',
        next: 'commitment',
        canSkip: false
      }
    },
    {
      id: 'commitment',
      type: 'commitment',
      title: 'Je Toezegging',
      subtitle: 'Maak een belofte aan jezelf',
      content: {
        message: 'Kies één praktijk die je de komende week wilt proberen:',
        options: [
          { id: 'tip1', text: 'Ochtendroutine met dhikr', value: 'morning-routine' },
          { id: 'tip2', text: 'Dagelijks 1 vers Koran', value: 'quran-study' },
          { id: 'tip3', text: '5 minuten reflectie', value: 'reflection' },
          { id: 'tip4', text: 'Dankbaarheid oefenen', value: 'gratitude-practice' }
        ]
      },
      navigation: {
        previous: 'practical-tips',
        next: 'completion',
        canSkip: false
      }
    },
    {
      id: 'completion',
      type: 'completion',
      title: 'Je Reis Begint',
      subtitle: 'Welkom op je spirituele pad',
      content: {
        message: 'Je hebt de eerste stap gezet op je spirituele reis. Onthoud dat groei geleidelijk gaat - wees geduldig met jezelf.',
        nextSteps: [
          'Houd je toezegging vol',
          'Wees consistent, niet perfect',
          'Vraag Allah om hulp',
          'Vier kleine vooruitgang'
        ]
      },
      navigation: {
        previous: 'commitment',
        canSkip: false
      }
    }
  ],
  
  metadata: {
    tags: ['spiritualiteit', 'groei', 'gebed', 'koran', 'dhikr'],
    difficulty: 'beginner',
    language: 'nl',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
};

export default spiritualityFlow; 
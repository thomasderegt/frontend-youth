const beliefFlow = {
  id: 'belief',
  slug: 'belief',
  title: 'Versterk je Geloof',
  subtitle: 'Dieper begrip van de islamitische geloofsleer',
  description: 'Ontdek de fundamenten van je geloof en versterk je begrip van de islamitische geloofsleer.',
  category: 'belief',
  estimatedDuration: '25 minuten',
  
  steps: [
    {
      id: 'intro',
      type: 'intro',
      title: 'Je Geloof Versterken',
      subtitle: 'Welkom bij je geloofsreis',
      content: {
        text: 'Geloof is als een plant - het heeft zorg en aandacht nodig om te groeien. Laten we samen je geloof verdiepen.',
        image: '/assets/belief-intro.jpg'
      },
      navigation: {
        next: 'pillars-understanding',
        canSkip: false
      }
    },
    {
      id: 'pillars-understanding',
      type: 'question',
      title: 'De Vijf Zuilen',
      subtitle: 'Hoe goed ken je ze?',
      content: {
        question: 'Welke van de vijf zuilen van de islam vind je het moeilijkst om te begrijpen?',
        options: [
          { id: 'shahada', text: 'Shahada (geloofsbelijdenis)', value: 'shahada' },
          { id: 'salah', text: 'Salah (gebed)', value: 'salah' },
          { id: 'zakat', text: 'Zakat (liefdadigheid)', value: 'zakat' },
          { id: 'sawm', text: 'Sawm (vasten)', value: 'sawm' },
          { id: 'hajj', text: 'Hajj (bedevaart)', value: 'hajj' }
        ],
        allowMultiple: false
      },
      navigation: {
        previous: 'intro',
        next: 'allah-names',
        canSkip: false
      }
    },
    {
      id: 'allah-names',
      type: 'reflection',
      title: 'Allah\'s Namen',
      subtitle: 'Ken je Schepper',
      content: {
        verse: '7:180',
        arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
        translation: 'En aan Allah behoren de schoonste namen toe, roep Hem daarmee aan.',
        explanation: 'Allah heeft 99 namen die Zijn eigenschappen beschrijven. Door deze namen te leren, leer je Allah beter kennen.',
        names: [
          { arabic: 'الرَّحْمَٰنُ', transliteration: 'Ar-Rahman', meaning: 'De Barmhartige' },
          { arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', meaning: 'De Genadevolle' },
          { arabic: 'اللَّطِيفُ', transliteration: 'Al-Lateef', meaning: 'De Subtiele' }
        ]
      },
      navigation: {
        previous: 'pillars-understanding',
        next: 'practical-learning',
        canSkip: false
      }
    },
    {
      id: 'practical-learning',
      type: 'action',
      title: 'Praktisch Leren',
      subtitle: 'Hoe kun je meer leren?',
      content: {
        methods: [
          {
            id: 'daily-study',
            title: 'Dagelijkse Studie',
            description: 'Neem 10 minuten per dag om over je geloof te leren',
            resources: ['Koran lezen', 'Hadith bestuderen', 'Boeken lezen']
          },
          {
            id: 'community',
            title: 'Gemeenschap',
            description: 'Leer van anderen in je gemeenschap',
            resources: ['Moskee bezoeken', 'Studiegroepen', 'Online cursussen']
          },
          {
            id: 'reflection',
            title: 'Reflectie',
            description: 'Neem tijd om na te denken over wat je leert',
            resources: ['Dagboek bijhouden', 'Met anderen bespreken', 'Meditatie']
          }
        ]
      },
      navigation: {
        previous: 'allah-names',
        next: 'challenges',
        canSkip: false
      }
    },
    {
      id: 'challenges',
      type: 'question',
      title: 'Uitdagingen',
      subtitle: 'Wat vind je moeilijk?',
      content: {
        question: 'Welke uitdaging ervaar je het meest in je geloof?',
        options: [
          { id: 'doubts', text: 'Twijfels en vragen', value: 'doubts' },
          { id: 'consistency', text: 'Consistentie in praktijken', value: 'consistency' },
          { id: 'understanding', text: 'Begrip van teksten', value: 'understanding' },
          { id: 'balance', text: 'Balans tussen wereld en geloof', value: 'balance' },
          { id: 'community', text: 'Vinden van een gemeenschap', value: 'community' }
        ],
        allowMultiple: false
      },
      navigation: {
        previous: 'practical-learning',
        next: 'completion',
        canSkip: false
      }
    },
    {
      id: 'completion',
      type: 'completion',
      title: 'Je Geloof Groeit',
      subtitle: 'Blijf leren en groeien',
      content: {
        message: 'Je hebt de eerste stappen gezet om je geloof te verdiepen. Onthoud dat geloof een levenslange reis is.',
        nextSteps: [
          'Blijf dagelijks leren',
          'Stel vragen aan geleerden',
          'Oefen wat je leert',
          'Deel je kennis met anderen'
        ]
      },
      navigation: {
        previous: 'challenges',
        canSkip: false
      }
    }
  ],
  
  metadata: {
    tags: ['geloof', 'islam', 'zuilen', 'allah', 'leer'],
    difficulty: 'beginner',
    language: 'nl',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
};

export default beliefFlow; 
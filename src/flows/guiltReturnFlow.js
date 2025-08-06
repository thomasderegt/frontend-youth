const guiltReturnFlow = {
  id: 'guilt-return',
  slug: 'guilt-return',
  title: 'Return to Mercy',
  subtitle: 'A journey from guilt to forgiveness',
  description: 'Ontdek hoe je kunt terugkeren naar Allah\'s genade door deze begeleide reis.',
  category: 'spirituality',
  estimatedDuration: '15 minuten',
  
  steps: [
    {
      id: 'intro',
      type: 'intro',
      title: 'Welkom bij je reis',
      subtitle: 'Terug naar Genade',
      content: {
        text: 'Weet je dat Allah altijd klaar staat om je te vergeven? Deze reis helpt je om dichter bij Hem te komen.',
        image: '/assets/guilt-return-intro.jpg'
      },
      navigation: {
        next: 'understanding-guilt',
        canSkip: false
      }
    },
    {
      id: 'understanding-guilt',
      type: 'question',
      title: 'Hoe voel je je?',
      subtitle: 'Begrijp je emoties',
      content: {
        question: 'Welke emotie ervaar je het sterkst op dit moment?',
        options: [
          { id: 'shame', text: 'Schaamte', value: 'shame' },
          { id: 'regret', text: 'Spijt', value: 'regret' },
          { id: 'fear', text: 'Angst', value: 'fear' },
          { id: 'confusion', text: 'Verwarring', value: 'confusion' }
        ],
        allowMultiple: false
      },
      navigation: {
        previous: 'intro',
        next: 'quran-reflection',
        canSkip: false
      }
    },
    {
      id: 'quran-reflection',
      type: 'reflection',
      title: 'Allah\'s Woord',
      subtitle: 'Luister naar de Koran',
      content: {
        verse: '39:53',
        arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
        translation: 'Zeg: "O Mijn dienaren die buitensporig zijn geweest tegenover zichzelf, wanhoop niet aan Allah\'s barmhartigheid."',
        explanation: 'Allah roept ons op om nooit te wanhopen aan Zijn barmhartigheid, hoe groot onze zonden ook zijn.'
      },
      navigation: {
        previous: 'understanding-guilt',
        next: 'practical-steps',
        canSkip: false
      }
    },
    {
      id: 'practical-steps',
      type: 'action',
      title: 'Praktische Stappen',
      subtitle: 'Wat kun je nu doen?',
      content: {
        steps: [
          {
            id: 'tawbah',
            title: 'Berouw (Tawbah)',
            description: 'Spreek je berouw uit tegenover Allah',
            action: 'pray'
          },
          {
            id: 'istighfar',
            title: 'Vergeving vragen (Istighfar)',
            description: 'Zeg "Astaghfirullah" van harte',
            action: 'recite'
          },
          {
            id: 'resolve',
            title: 'Besluit tot verandering',
            description: 'Maak een oprecht besluit om te veranderen',
            action: 'reflect'
          }
        ]
      },
      navigation: {
        previous: 'quran-reflection',
        next: 'completion',
        canSkip: false
      }
    },
    {
      id: 'completion',
      type: 'completion',
      title: 'Je reis is voltooid',
      subtitle: 'Welkom terug bij Allah\'s genade',
      content: {
        message: 'Je hebt de eerste stap gezet op je weg naar Allah\'s vergeving. Blijf volharden in je berouw en vergeet niet dat Allah altijd klaar staat om je te vergeven.',
        nextSteps: [
          'Bid regelmatig',
          'Lees dagelijks uit de Koran',
          'Doe goede daden',
          'Blijf Istighfar zeggen'
        ]
      },
      navigation: {
        previous: 'practical-steps',
        canSkip: false
      }
    }
  ],
  
  metadata: {
    tags: ['vergeving', 'berouw', 'genade', 'spiritualiteit'],
    difficulty: 'beginner',
    language: 'nl',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
};

export default guiltReturnFlow; 
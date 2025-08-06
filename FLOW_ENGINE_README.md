# 🧠 Flow Engine - Dynamische Frontend Flow-Engine

Een herbruikbare flow-architectuur gebaseerd op Atomic Design voor het Wheel of Islam project.

## 📋 Overzicht

De flow-engine is een configuratiegedreven systeem dat begeleide spirituele reizen mogelijk maakt. Elke flow bestaat uit meerdere stappen (steps) met verschillende types zoals intro, question, reflection, action, commitment en completion.

## 🏗️ Architectuur

### Atomic Design Structuur

```
src/
├── atoms/           # Basis componenten
│   ├── StepButton.js
│   ├── StepProgress.js
│   └── StepTitle.js
├── molecules/       # Samengestelde componenten
│   ├── StepNavigation.js
│   └── StepContent.js
├── organisms/       # Complexe componenten
│   ├── StepRenderer.js
│   └── steps/
│       ├── IntroStep.js
│       ├── QuestionStep.js
│       ├── ReflectionStep.js
│       ├── ActionStep.js
│       ├── CommitmentStep.js
│       └── CompletionStep.js
├── templates/       # Layout templates
│   └── GuidedFlowTemplate.js
├── pages/          # Route pages
│   ├── FlowsPage.js
│   └── FlowPage.js
└── flows/          # Flow configuraties
    ├── index.js
    ├── guiltReturnFlow.js
    ├── spiritualityFlow.js
    └── beliefFlow.js
```

## 🔧 Configuratie

### Flow Configuratie Structuur

```javascript
const exampleFlow = {
  id: 'flow-id',
  slug: 'flow-slug',
  title: 'Flow Titel',
  subtitle: 'Flow Subtitel',
  description: 'Beschrijving van de flow',
  category: 'spirituality',
  estimatedDuration: '15 minuten',
  
  steps: [
    {
      id: 'step-id',
      type: 'intro|question|reflection|action|commitment|completion',
      title: 'Stap Titel',
      subtitle: 'Stap Subtitel',
      content: {
        // Stap-specifieke content
      },
      navigation: {
        next: 'next-step-id',
        previous: 'previous-step-id',
        canSkip: false
      }
    }
  ],
  
  metadata: {
    tags: ['tag1', 'tag2'],
    difficulty: 'beginner',
    language: 'nl',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
};
```

### Stap Types

#### 1. Intro Step
```javascript
{
  type: 'intro',
  content: {
    text: 'Welkomsttekst',
    image: '/path/to/image.jpg'
  }
}
```

#### 2. Question Step
```javascript
{
  type: 'question',
  content: {
    question: 'Vraag tekst',
    options: [
      { id: 'option1', text: 'Optie 1', value: 'value1' },
      { id: 'option2', text: 'Optie 2', value: 'value2' }
    ],
    allowMultiple: false
  }
}
```

#### 3. Reflection Step
```javascript
{
  type: 'reflection',
  content: {
    verse: '39:53',
    arabic: 'Arabische tekst',
    translation: 'Nederlandse vertaling',
    explanation: 'Uitleg van de vers',
    names: [
      {
        arabic: 'الرَّحْمَٰنُ',
        transliteration: 'Ar-Rahman',
        meaning: 'De Barmhartige'
      }
    ]
  }
}
```

#### 4. Action Step
```javascript
{
  type: 'action',
  content: {
    steps: [
      {
        id: 'action1',
        title: 'Actie Titel',
        description: 'Actie beschrijving',
        action: 'action-type'
      }
    ],
    tips: [
      {
        id: 'tip1',
        title: 'Tip Titel',
        description: 'Tip beschrijving',
        difficulty: 'easy',
        resources: ['Bron 1', 'Bron 2']
      }
    ],
    methods: [
      {
        id: 'method1',
        title: 'Methode Titel',
        description: 'Methode beschrijving',
        resources: ['Bron 1', 'Bron 2']
      }
    ]
  }
}
```

#### 5. Commitment Step
```javascript
{
  type: 'commitment',
  content: {
    message: 'Commitment bericht',
    options: [
      { id: 'commit1', text: 'Commitment 1', value: 'value1' },
      { id: 'commit2', text: 'Commitment 2', value: 'value2' }
    ]
  }
}
```

#### 6. Completion Step
```javascript
{
  type: 'completion',
  content: {
    message: 'Voltooiingsbericht',
    nextSteps: [
      'Volgende stap 1',
      'Volgende stap 2'
    ]
  }
}
```

## 🚀 Gebruik

### 1. Nieuwe Flow Toevoegen

1. Maak een nieuw configuratiebestand in `src/flows/`
2. Export de flow als default
3. Voeg toe aan `src/flows/index.js`

```javascript
// src/flows/myNewFlow.js
const myNewFlow = {
  id: 'my-new-flow',
  slug: 'my-new-flow',
  title: 'Mijn Nieuwe Flow',
  // ... rest van configuratie
};

export default myNewFlow;
```

```javascript
// src/flows/index.js
export { default as myNewFlow } from './myNewFlow';

export const flowRegistry = {
  // ... bestaande flows
  'my-new-flow': () => import('./myNewFlow'),
};
```

### 2. Routing

De flow-engine gebruikt React Router met de volgende routes:

- `/flows` - Overzicht van alle beschikbare flows
- `/flow/:slug` - Specifieke flow op basis van slug

### 3. Flow Data Opslag

Flow data wordt opgeslagen in de `GuidedFlowTemplate` component en kan worden uitgebreid voor:

- localStorage opslag
- API calls
- Analytics tracking

## 🎨 Customization

### Theming

De flow-engine gebruikt Tailwind CSS voor styling. Custom theming kan worden toegevoegd door:

1. CSS classes aan te passen in de componenten
2. Theme context te integreren
3. Custom CSS variabelen te definiëren

### Nieuwe Stap Types

Om een nieuw stap type toe te voegen:

1. Maak een nieuwe component in `src/organisms/steps/`
2. Voeg toe aan `StepRenderer.js`
3. Update de flow configuratie documentatie

### Internationalisatie

De flow-engine ondersteunt meertaligheid door:

1. Language context te integreren
2. Content vertalingen toe te voegen
3. RTL support voor Arabische tekst

## 🔍 Debugging

### Console Logs

De flow-engine logt belangrijke events:

```javascript
// Flow loading
console.log('Loading flow:', slug);

// Step navigation
console.log('Step data:', stepData);

// Flow completion
console.log('Flow completed with data:', flowData);
```

### Error Handling

- Flow niet gevonden: Toont error pagina
- Stap type niet herkend: Toont fallback component
- Network errors: Retry mechanisme

## 📈 Performance

### Optimalisaties

1. **Lazy Loading**: Flows worden dynamisch geladen
2. **Memoization**: React.memo voor step components
3. **Code Splitting**: Elke flow in aparte bundle
4. **Progressive Loading**: Stap-voor-stap navigatie

### Monitoring

```javascript
// Performance metrics
const flowMetrics = {
  loadTime: Date.now() - startTime,
  stepsCompleted: currentStepIndex,
  totalSteps: flow.steps.length,
  userInteractions: interactionCount
};
```

## 🧪 Testing

### Unit Tests

```javascript
// Test flow configuratie
test('flow has valid structure', () => {
  expect(flow.id).toBeDefined();
  expect(flow.steps).toBeInstanceOf(Array);
  expect(flow.steps.length).toBeGreaterThan(0);
});

// Test step rendering
test('step renders correctly', () => {
  const step = flow.steps[0];
  const component = render(<StepRenderer step={step} />);
  expect(component).toBeInTheDocument();
});
```

### Integration Tests

```javascript
// Test complete flow
test('user can complete flow', async () => {
  const user = userEvent.setup();
  
  // Navigate to flow
  await user.click(screen.getByText('Start Flow'));
  
  // Complete steps
  for (let i = 0; i < flow.steps.length; i++) {
    await user.click(screen.getByText('Volgende'));
  }
  
  // Verify completion
  expect(screen.getByText('Voltooid')).toBeInTheDocument();
});
```

## 🔮 Toekomstige Uitbreidingen

### Geplande Features

1. **Flow Analytics**: Gebruikersgedrag tracking
2. **Personalization**: Aangepaste flows op basis van gebruikersprofiel
3. **Offline Support**: Service worker voor offline gebruik
4. **Social Features**: Delen van flow resultaten
5. **AI Integration**: Dynamische content generatie

### API Integration

```javascript
// Flow data API
const flowAPI = {
  saveProgress: (flowId, stepData) => api.post('/flows/progress', { flowId, stepData }),
  getProgress: (flowId) => api.get(`/flows/progress/${flowId}`),
  completeFlow: (flowId, completionData) => api.post(`/flows/${flowId}/complete`, completionData)
};
```

## 📚 Bronnen

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

**Auteur**: AI Engineer  
**Versie**: 1.0.0  
**Datum**: 2024-01-01 
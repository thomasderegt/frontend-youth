# D3-Shape Donut Implementation - Wheel of Islam

## Overzicht

Dit document beschrijft de implementatie van een donut-chart structuur voor de Wheel of Islam app, waarbij we zowel D3-shape als handmatige SVG path generatie hebben geëxploreerd.

## Probleemstelling

De originele `WheelOutward` component gebruikte individuele `<circle>` elementen om de wheel segments weer te geven. Dit resulteerde in:
- Losse cirkels zonder visuele verbinding
- Minder professionele uitstraling
- Beperkte mogelijkheden voor interactieve effecten

## Oplossing: Donut-Structuur

### Optie 1: D3-Shape Arc Generator

```javascript
import { arc } from 'd3-shape';

// D3-shape arc generator
const arcGenerator = arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

// Gebruik
const arcPath = arcGenerator({
  startAngle: startAngle,
  endAngle: endAngle
});
```

**Voordelen:**
- Professionele arc berekeningen
- Automatische path generatie
- Goede performance voor complexe shapes

**Nadelen:**
- Extra dependency (d3-shape)
- Coordinate system conflicten met SVG
- Complexe transformatie nodig

### Optie 2: Handmatige SVG Path Generatie (Gekozen)

```javascript
// Handmatige donut segment path generatie
const startX = center + outerRadius * Math.cos(startAngle);
const startY = center + outerRadius * Math.sin(startAngle);
const endX = center + outerRadius * Math.cos(endAngle);
const endY = center + outerRadius * Math.sin(endAngle);

const innerStartX = center + innerRadius * Math.cos(startAngle);
const innerStartY = center + innerRadius * Math.sin(startAngle);
const innerEndX = center + innerRadius * Math.cos(endAngle);
const innerEndY = center + innerRadius * Math.sin(endAngle);

// SVG Path commands voor donut segment
const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
const sweepFlag = 1;

const arcPath = `
  M ${startX} ${startY}
  A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}
  L ${innerEndX} ${innerEndY}
  A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
  Z
`;
```

**Voordelen:**
- Geen extra dependencies
- Volledige controle over path generatie
- Directe SVG coordinate system
- Eenvoudiger debugging

## Implementatie Details

### 1. Radius Berekeningen

```javascript
const center = size / 2;
const radius = center * 0.8; // Basis radius
const topicRadius = radius * 0.95; // Segment radius
const innerRadius = topicRadius * 0.6; // Donut hole
const outerRadius = topicRadius * 1.2; // Donut buitenkant
```

### 2. Segment Angles

```javascript
const segmentAngle = (2 * Math.PI) / WHEEL_SEGMENTS.length;

WHEEL_SEGMENTS.map((segment, index) => {
  const startAngle = index * segmentAngle;
  const endAngle = (index + 1) * segmentAngle;
  // ...
});
```

### 3. Text Positioning

```javascript
const arcCenterAngle = startAngle + (endAngle - startAngle) / 2;
const textRadius = topicRadius; // Zelfde radius als originele cirkels
const textX = center + textRadius * Math.cos(arcCenterAngle);
const textY = center + textRadius * Math.sin(arcCenterAngle);
```

### 4. SVG Path Commands

| Command | Beschrijving |
|---------|-------------|
| `M x y` | Move to point (start van outer arc) |
| `A r r 0 flag sweep x y` | Arc met radius r naar punt (x,y) |
| `L x y` | Line naar punt (x,y) |
| `Z` | Close path |

**Arc Flags:**
- `largeArcFlag`: 1 als arc > 180°, anders 0
- `sweepFlag`: 1 voor positieve richting, 0 voor negatief

## Rotatie Animatie - Belangrijke Les

### ❌ Probleem: CSS vs SVG Transform Conflict

```javascript
// DIT WERKT NIET - veroorzaakt rare bewegingen
<g
  transform={`rotate(${rotation} ${center} ${center})`}
  style={{
    transition: 'transform 0.8s ease', // ❌ Conflicteert met SVG transform
    transformOrigin: `${center} ${center}`
  }}
>
```

**Symptomen:**
- Wheel beweegt van links naar rechts in plaats van te roteren
- Rare, onvoorspelbare bewegingen
- CSS en SVG transformaties vechten om controle

### ✅ Oplossing: Custom React Animatie

```javascript
// State voor soepele animatie
const [rotation, setRotation] = useState(0);
const [targetRotation, setTargetRotation] = useState(0);

// Custom animatie systeem
useEffect(() => {
  if (targetRotation !== rotation) {
    const animationDuration = 800;
    const startTime = Date.now();
    const startRotation = rotation;
    const rotationDifference = targetRotation - startRotation;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Easing functie voor natuurlijke beweging
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentRotation = startRotation + (rotationDifference * easeOutCubic);
      setRotation(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}, [targetRotation, rotation]);

// Rotatie functie
const handleRotate = () => {
  setTargetRotation(prevRotation => prevRotation + 45);
};

// SVG zonder CSS transitions
<g transform={`rotate(${rotation} ${center} ${center})`}>
  {/* Wheel segments */}
</g>
```

**Voordelen:**
- ✅ Geen conflicterende transformaties
- ✅ Volledige controle over animatie
- ✅ Soepele 60fps animatie
- ✅ Natuurlijke easing functie
- ✅ Werkt met zowel d3-shape als handmatige SVG

### 🎯 Belangrijke Les

**CSS transitions en SVG transform attributes conflicteren altijd.** Gebruik altijd:
- **React state** voor animatie controle
- **requestAnimationFrame** voor soepele animatie
- **Geen CSS transitions** op SVG transform attributes

## Vergelijking: D3 vs Handmatig

| Aspect | D3-Shape | Handmatig |
|--------|----------|-----------|
| Dependencies | d3-shape | Geen |
| Bundle Size | +15KB | 0KB |
| Coordinate System | Complex | Direct |
| Debugging | Moeilijk | Eenvoudig |
| Performance | Goed | Zeer goed |
| Flexibiliteit | Beperkt | Volledig |

## Best Practices

### 1. Responsive Design
```javascript
const getStrokeWidth = () => {
  const screenWidth = window.innerWidth;
  const baseStrokeWidth = size / 400;
  
  if (screenWidth >= 2560) return Math.max(baseStrokeWidth * 1.2, 1.5);
  if (screenWidth >= 1920) return Math.max(baseStrokeWidth * 1.1, 1.2);
  if (screenWidth >= 1366) return Math.max(baseStrokeWidth, 1);
  return Math.max(baseStrokeWidth * 0.8, 0.8);
};
```

### 2. Theme Support
```javascript
const fillColor = themeName === 'neon' ? 
  (nightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)') : 
  'rgba(255, 255, 255, 0.3)';
```

### 3. Interactive Effects
```javascript
<path
  d={arcPath}
  fill={fillColor}
  stroke={strokeColor}
  strokeWidth={getStrokeWidth()}
  style={{ 
    pointerEvents: 'auto',
    filter: themeName === 'neon' && segmentStyle?.glow ? 'url(#neonGlow)' : 'none'
  }}
  onClick={() => handleClick(segment.id)}
/>
```

## Resultaat

De nieuwe `WheelOutward2` component biedt:

✅ **Visuele verbetering**: Echte donut-structuur in plaats van losse cirkels
✅ **Betere performance**: Geen extra dependencies
✅ **Volledige controle**: Handmatige path generatie
✅ **Responsive design**: Werkt op alle schermformaten
✅ **Theme support**: Behoud van alle bestaande thema's
✅ **Interactieve effecten**: Hover, glow, klik functionaliteit
✅ **Soepele rotatie**: Zonder CSS vs SVG conflicts

## Recente Verbeteringen

### 🎨 **Regenboog Kleurenschema**
```javascript
const rainbowSegmentStyles = {
  'Belief': { color: '#DC2626', glow: true, icon: '🕌' }, // Medium Red
  'Jurisprudence': { color: '#EA580C', glow: true, icon: '📿' }, // Medium Orange
  'Qur\'an': { color: '#D97706', glow: true, icon: '📖' }, // Medium Yellow
  'Life of the Prophet': { color: '#16A34A', glow: true, icon: '🌟' }, // Medium Green
  'Islamic History': { color: '#2563EB', glow: true, icon: '🏛️' }, // Medium Blue
  'Modern Ideologies': { color: '#7C3AED', glow: true, icon: '🌍' }, // Medium Indigo
  'Family & Society': { color: '#9333EA', glow: true, icon: '👥' }, // Medium Violet
  'Divine Law': { color: '#EC4899', glow: true, icon: '⚖' }, // Medium Pink
};
```

### 📏 **Geoptimaliseerde Segment Dikte**
```javascript
const innerRadius = topicRadius * 0.70; // Inner radius for the donut hole
const outerRadius = topicRadius * 1.10; // Outer radius for the donut
```

### 🎯 **Perfecte Centrale Cirkel**
```javascript
const centerCircleRadius = innerRadius; // Touches the inner edge of the donut ring
```

### 📝 **Verbeterde Tekst Positioning**
```javascript
const textRadius = (innerRadius + outerRadius) / 2; // Center of the donut segment
const fontSize = Math.max(Math.min((outerRadius - innerRadius) * 0.4, 12), 8);
```

### 🎨 **Vlakke Design**
- Verwijderde glow effecten voor clean look
- Dunne stroke width voor subtiele uitstraling
- Normale font weight voor betere leesbaarheid
- Geen opacity op segment kleuren

### 🌈 **Balanced Color Palette**
- Medium regenboog kleuren (niet te fel, niet te zacht)
- Volledig ondoorzichtige segmenten
- Consistente kleuren voor stroke en fill

### 🔄 **Soepele Rotatie Animatie**
- Custom React animatie systeem
- Geen CSS vs SVG conflicts
- Natuurlijke easing functie
- 60fps soepele animatie

## Conclusie

Voor dit specifieke use case is handmatige SVG path generatie de beste keuze omdat:
- Het geen extra dependencies vereist
- Het volledige controle geeft over de visualisatie
- Het beter presteert dan D3-shape voor eenvoudige donut charts
- Het eenvoudiger te debuggen en onderhouden is
- Het geen CSS vs SVG transform conflicts heeft

De implementatie toont hoe moderne web development technieken kunnen worden gecombineerd met traditionele SVG path commands voor optimale resultaten. 
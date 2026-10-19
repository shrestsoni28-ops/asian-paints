import type { ColorSwatch, CuratedPalette } from '../types';

export const individualSwatches: ColorSwatch[] = [
  // Warm Neutrals
  { code: '0387', name: 'Morning Frost', hex: '#F4EFEA', family: 'warm', description: 'Soft airy ivory white with a whisper of morning warmth' },
  { code: '0952', name: 'Cream Velvet', hex: '#EFE7DA', family: 'warm', description: 'Silky warm beige reminiscent of hand-spun cotton' },
  { code: '0412', name: 'Antique Ivory', hex: '#E7DEC8', family: 'warm', description: 'Timeless heritage cream with gentle golden undertones' },
  { code: '8491', name: 'Cashmere Glow', hex: '#DBCBB6', family: 'warm', description: 'Subtle toasted almond with refined depth' },

  // Cool & Serene
  { code: '7241', name: 'Misty Blue', hex: '#D2DFE6', family: 'cool', description: 'Calming pale sky tone that opens up compact spaces' },
  { code: '7394', name: 'Peacock Jewel', hex: '#1C5D79', family: 'cool', description: 'Deep majestic oceanic teal inspired by Indian peacock plumage' },
  { code: '7612', name: 'Sage Whisper', hex: '#C2D1C1', family: 'cool', description: 'Earthy botanical green bringing nature inside the home' },
  { code: '7729', name: 'Forest Jade', hex: '#2A5C45', family: 'cool', description: 'Regal dark emerald with sophisticated botanical luxury' },

  // Earthy & Indian Contemporary
  { code: '0514', name: 'Terracotta Earth', hex: '#C66E4E', family: 'earthy', description: 'Warm artisanal clay shade celebrating Indian handcrafted potteries' },
  { code: '7982', name: 'Rajputana Ochre', hex: '#D89B37', family: 'earthy', description: 'Sun-drenched golden mustard inspired by Rajasthan sandstone' },
  { code: '8012', name: 'Almond Biscuit', hex: '#CDB195', family: 'earthy', description: 'Gentle biscuit taupe that harmonizes with teak and oak woodwork' },
  { code: '8610', name: 'Mocha Delight', hex: '#6D5143', family: 'earthy', description: 'Rich roasted espresso brown ideal for cozy luxury corners' },

  // Accent & Festive
  { code: '8093', name: 'Royal Ruby', hex: '#991B33', family: 'accent', description: 'Opulent crimson celebrating Indian festive warmth and grandeur' },
  { code: '8031', name: 'Gulal Pink', hex: '#D95C7A', family: 'accent', description: 'Joyful rose pink that adds radiant charm to dressing and guest areas' },
  { code: '8204', name: 'Marigold Sunshine', hex: '#F5A623', family: 'accent', description: 'Vibrant auspicious yellow reflecting morning sunlight and festivity' },
  { code: '7442', name: 'Midnight Navy', hex: '#162842', family: 'accent', description: 'Dramatic deep indigo ideal for statement TV media walls' },

  // Modern Neutrals
  { code: '8310', name: 'Pure Chalk', hex: '#FAF9F6', family: 'neutral', description: 'Ultra-clean architectural white with zero yellow tint' },
  { code: '8294', name: 'Silver Flute', hex: '#DDE2E5', family: 'neutral', description: 'Modern cool grey providing a sleek gallery-like backdrop' },
  { code: '8329', name: 'Urban Slate', hex: '#7E8B92', family: 'neutral', description: 'Sophisticated mid-tone grey that pairs effortlessly with marble' },
  { code: '8401', name: 'Charcoal Shadow', hex: '#374151', family: 'neutral', description: 'Contemporary deep graphite for modern doors, frames, and accents' },
];

export const curatedPalettes: CuratedPalette[] = [
  {
    id: 'palette-living-peacock',
    title: 'Modern Peacock Haven',
    roomType: 'living',
    description: 'An iconic modern Indian living room pairing a calming airy cream base with a dramatic deep peacock accent wall and pristine white ceiling.',
    mainWall: { code: '0387', name: 'Morning Frost', hex: '#F4EFEA', family: 'warm', description: 'Light creamy base wall' },
    accentWall: { code: '7394', name: 'Peacock Jewel', hex: '#1C5D79', family: 'cool', description: 'Bold statement feature wall' },
    trimCeiling: { code: '8310', name: 'Pure Chalk', hex: '#FAF9F6', family: 'neutral', description: 'Crisp ceiling & cornices' },
  },
  {
    id: 'palette-living-earthy',
    title: 'Warm Jaipur Terracotta',
    roomType: 'living',
    description: 'Inspired by traditional Rajasthani palaces with earthy terracotta warmth balanced by soft almond neutrals and brass accents.',
    mainWall: { code: '0952', name: 'Cream Velvet', hex: '#EFE7DA', family: 'warm', description: 'Gentle warm base' },
    accentWall: { code: '0514', name: 'Terracotta Earth', hex: '#C66E4E', family: 'earthy', description: 'Warm artisanal accent' },
    trimCeiling: { code: '0387', name: 'Morning Frost', hex: '#F4EFEA', family: 'warm', description: 'Warm ceiling wash' },
  },
  {
    id: 'palette-bedroom-sage',
    title: 'Serene Botanical Sanctuary',
    roomType: 'bedroom',
    description: 'Designed for deep relaxation and restful sleep with tranquil sage green walls, rich forest jade headboard wall, and clean trim.',
    mainWall: { code: '7612', name: 'Sage Whisper', hex: '#C2D1C1', family: 'cool', description: 'Tranquil bedroom base' },
    accentWall: { code: '7729', name: 'Forest Jade', hex: '#2A5C45', family: 'cool', description: 'Lush headboard focal wall' },
    trimCeiling: { code: '8310', name: 'Pure Chalk', hex: '#FAF9F6', family: 'neutral', description: 'Bright architectural trim' },
  },
  {
    id: 'palette-bedroom-cashmere',
    title: 'Minimalist Cashmere Serenity',
    roomType: 'bedroom',
    description: 'A cozy, Scandinavian-meets-contemporary Indian aesthetic with warm cashmere taupe, almond undertones, and warm spotlighting.',
    mainWall: { code: '8491', name: 'Cashmere Glow', hex: '#DBCBB6', family: 'warm', description: 'Cozy cashmere body' },
    accentWall: { code: '8610', name: 'Mocha Delight', hex: '#6D5143', family: 'earthy', description: 'Deep mocha bed backdrop' },
    trimCeiling: { code: '8310', name: 'Pure Chalk', hex: '#FAF9F6', family: 'neutral', description: 'Reflective light ceiling' },
  },
  {
    id: 'palette-exterior-monsoon',
    title: 'Contemporary Villa Facade',
    roomType: 'exterior',
    description: 'A striking modern exterior combination of desert sand body, deep slate architectural pillars, and crisp white balcony projections.',
    mainWall: { code: '8012', name: 'Almond Biscuit', hex: '#CDB195', family: 'earthy', description: 'Exterior elevation main walls' },
    accentWall: { code: '8401', name: 'Charcoal Shadow', hex: '#374151', family: 'neutral', description: 'Portico, pillars & accent box' },
    trimCeiling: { code: '8310', name: 'Pure Chalk', hex: '#FAF9F6', family: 'neutral', description: 'Cornice borders & parapets' },
  },
  {
    id: 'palette-traditional-royal',
    title: 'Heritage Rajputana Splendour',
    roomType: 'traditional',
    description: 'Rich, celebratory tones of Rajputana golden ochre paired with antique ivory and deep ruby accents, honoring classical Indian architecture.',
    mainWall: { code: '0412', name: 'Antique Ivory', hex: '#E7DEC8', family: 'warm', description: 'Heritage courtyard base' },
    accentWall: { code: '7982', name: 'Rajputana Ochre', hex: '#D89B37', family: 'earthy', description: 'Golden archway accent' },
    trimCeiling: { code: '8093', name: 'Royal Ruby', hex: '#991B33', family: 'accent', description: 'Festive border highlight' },
  },
];

import type { DealershipService } from '../types';

export const dealershipServices: DealershipService[] = [
  {
    id: 'product-recommendations',
    title: 'Paint Product Recommendations',
    tagline: 'Tailored emulsion & primer advice based on wall conditions & budget',
    description: 'Not sure whether to choose Royale Glitz, Apcolite, or Tractor? Our experienced staff assesses your wall plaster condition, sunlight exposure, humidity, and budget to prescribe the optimal primer, putty, and paint system.',
    features: [
      'Comparative durability & washability walkthrough',
      'System recommendations (Putty + Primer + Topcoat)',
      'Budget-aligned options for homeowners and landlords',
      'Guidance on high-traffic vs quiet zones',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'colour-selection-assistance',
    title: 'Colour Selection & Shade Assistance',
    tagline: 'Explore physical Asian Paints fandecks and visualizer combinations',
    description: 'Selecting from 2200+ shades can be daunting. We help you explore harmonious palettes, warm vs cool undertones, accent wall placement, and how natural vs warm LED lighting alters the perceived color on your walls.',
    features: [
      'Full access to official Asian Paints fandeck shade books',
      'Digital room visualizer previews in-store',
      'Complementary 200ml sample testers recommendation',
      'Coordinated ceiling, trim, and door shade pairing',
    ],
    icon: 'Palette',
  },
  {
    id: 'paint-quantity-estimates',
    title: 'Accurate Paint Quantity Estimation',
    tagline: 'Avoid over-buying or running out mid-coat with precise sq. ft. calculations',
    description: 'Bring your room measurements or architectural floor plans. We calculate exact square footage, deduct doors and windows, and provide an itemized list of putty, primer, and paint buckets needed.',
    features: [
      'Room-by-room sq. ft. calculation breakdown',
      'Deductions for doors, windows, and fitted wardrobes',
      'Optimized bucket size planning (20L, 10L, 4L, 1L)',
      'Prevents material wastage and extra expenses',
    ],
    icon: 'Calculator',
  },
  {
    id: 'waterproofing-guidance',
    title: 'Waterproofing Product Guidance',
    tagline: 'Stop dampness, efflorescence (shora), and roof seepage permanently',
    description: 'Diagnosing moisture issues before painting is critical. We provide specialized Asian Paints SmartCare waterproofing guidance for rising damp, bathroom seepage, exterior rain absorption, and terrace cracks.',
    features: [
      'Identification of negative vs positive hydrostatic pressure',
      'SmartCare Damp Block 2K & HydroLoc application steps',
      'Crack seal & fiber mesh terrace sealing techniques',
      'Anti-efflorescence (shora) barrier treatments',
    ],
    icon: 'ShieldAlert',
  },
  {
    id: 'contractor-enquiries',
    title: 'Painting Contractor Enquiries & Connect',
    tagline: 'Connect with verified local painters and professional applicators',
    description: 'Looking for dependable painters? As an established dealership, we maintain direct relationships with seasoned master painters, spray finish specialists, and waterproofing technicians across the city.',
    features: [
      'Connections with vetted, experienced local painting crews',
      'Applicators trained on Royale and Italian PU finishes',
      'Site visits for physical measurement and quotation',
      'Contractor lounge & direct material coordination',
    ],
    icon: 'Users',
  },
  {
    id: 'renovation-solutions',
    title: 'Home Renovation & Bulk Supply Solutions',
    tagline: 'Comprehensive paint packages for full home makeovers and builders',
    description: 'Undertaking a full apartment repaint, villa makeover, or commercial office renovation? We supply comprehensive bulk orders, coordinated delivery schedules, and dedicated project assistance.',
    features: [
      'Complete end-to-end material supply packages',
      'Staggered batch deliveries aligned with your timeline',
      'Special contractor and builder pricing structures',
      'Emergency top-up deliveries to prevent site delays',
    ],
    icon: 'Building2',
  },
];

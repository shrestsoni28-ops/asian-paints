/**
 * Central Dealership Configuration
 * Edit dealership details here. All components dynamically consume this configuration.
 */

export interface DealershipConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  authorisedStatus: string;
  ownerName: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // digits only with country code e.g. 919876543210
  email: string;
  address: {
    shopNo: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullAddress: string;
  };
  businessHours: {
    weekdays: string;
    sundays: string;
    lunchTime?: string;
  };
  googleMaps: {
    directionsUrl: string;
    embedQuery: string;
  };
  experienceYears: number;
  serviceAreas: string[];
  keyStrengths: {
    title: string;
    description: string;
  }[];
  disclaimer: string;
}

export const dealershipConfig: DealershipConfig = {
  businessName: "Shree Balaji Paints & Decor",
  shortName: "Shree Balaji Paints",
  tagline: "Authorised Asian Paints Dealer & Surface Solution Centre",
  authorisedStatus: "Official Authorised Asian Paints Dealership",
  ownerName: "Rajesh Soni & Sons",
  phone: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Change this to your business WhatsApp number
  email: "contact@balajipaints.example.com",
  address: {
    shopNo: "Shop No. 14 - 16, Ground Floor",
    street: "Commercial Paint Market, Main MG Road",
    area: "Sector 14",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122001",
    landmark: "Opposite Old Civil Hospital",
    fullAddress: "Shop No. 14-16, Commercial Paint Market, Sector 14, MG Road (Opp. Old Civil Hospital), Gurugram, Haryana - 122001",
  },
  businessHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:30 PM",
    sundays: "Sunday: 10:00 AM – 6:00 PM",
    lunchTime: "Open all day without break",
  },
  googleMaps: {
    directionsUrl: "https://maps.google.com/?q=Asian+Paints+Dealership+Sector+14+Gurugram",
    embedQuery: "Paint+Market+Sector+14+Gurugram",
  },
  experienceYears: 18,
  serviceAreas: [
    "Gurugram (All Sectors)",
    "Sohna Road & Golf Course Ext.",
    "DLF Phases 1 to 5",
    "Dwarka Expressway",
    "Delhi NCR (On bulk contractor order)",
  ],
  keyStrengths: [
    {
      title: "100% Factory-Sealed Genuine Stock",
      description: "Direct Asian Paints authorized supply with tamper-proof factory seals and batch codes.",
    },
    {
      title: "In-Store Computerized Tinting",
      description: "State-of-the-art Asian Paints automatic dispensing machine for 2200+ accurate shades.",
    },
    {
      title: "Personalized Shade Advisory",
      description: "Explore physical Asian Paints fandecks, curated designer room palettes, and digital room previews.",
    },
    {
      title: "Doorstep & Contractor Delivery",
      description: "Fast, reliable on-site material dispatch across the city for homeowners and contractors.",
    },
  ],
  disclaimer: "We are an independent authorised dealer of Asian Paints products. All product names, logos, and registered trademarks belong to Asian Paints Ltd.",
};

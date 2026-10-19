import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorisedBanner } from './components/AuthorisedBanner';
import { Products } from './components/Products';
import { ColourStudio } from './components/ColourStudio';
import { PaintCalculator } from './components/PaintCalculator';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppEnquiryModal } from './components/WhatsAppEnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-rose-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with dynamic color accents & Indian living room */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 2. Official Authorised Dealership Assurance & 4 Trust Pillars */}
        <AuthorisedBanner />

        {/* 3. Complete Asian Paints Products Range with 8 Categories & Search */}
        <Products />

        {/* 4. Interactive Colour Inspiration Studio & Dynamic SVG Room Visualizer */}
        <ColourStudio />

        {/* 5. Indian Paint Quantity Estimator / Calculator */}
        <PaintCalculator />

        {/* 6. Dealership Services */}
        <Services />

        {/* 7. About the Dealership with Showroom Photography */}
        <AboutUs />

        {/* 8. Contact, Business Hours, Google Maps & Quick Enquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Always-Visible WhatsApp Action Button */}
      <FloatingWhatsApp onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* WhatsApp Quote / Enquiry Modal Dialog */}
      <WhatsAppEnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};

export default App;

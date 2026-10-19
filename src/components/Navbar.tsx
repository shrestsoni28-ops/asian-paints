import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Paintbrush,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Clock,
  MapPin,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Colour Studio', href: '#colour-studio' },
    { name: 'Paint Calculator', href: '#calculator' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppLink = createWhatsAppUrl(
    `Hello ${dealershipConfig.shortName}, I am visiting your dealership website and would like to enquire about Asian Paints products.`
  );

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-600 text-white tracking-wide shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Authorised Dealer
            </span>
            <span className="hidden md:inline-block text-slate-300">
              Asian Paints Genuine Computerized Tinting Station &amp; Surface Solutions
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{dealershipConfig.businessHours.weekdays}</span>
            </div>
            <a
              href={`tel:${dealershipConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>{dealershipConfig.displayPhone}</span>
            </a>
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Dealership Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-rose-700 text-white shadow-md shadow-rose-900/10 group-hover:scale-105 transition-transform duration-300">
              <Paintbrush className="w-6 h-6 text-rose-400" />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-600 border-2 border-white"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                  {dealershipConfig.businessName}
                </span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 flex items-center gap-1">
                <span>Authorised Dealer</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-600">Asian Paints</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50/70 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:text-emerald-900 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>Quick WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              id="navbar-get-quote-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-md shadow-rose-600/25 hover:shadow-lg hover:shadow-rose-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-rose-200" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/25 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Paint Quote</span>
              </button>

              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${dealershipConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Store: {dealershipConfig.displayPhone}</span>
              </a>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dealershipConfig.address.area}, {dealershipConfig.address.city}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

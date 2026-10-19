import React from 'react';
import {
  Paintbrush,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUp,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppLink = createWhatsAppUrl(
    `Hello ${dealershipConfig.shortName}, I am reaching out from your website footer.`
  );

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Store Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-600 text-white shadow-md">
                <Paintbrush className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  {dealershipConfig.businessName}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                  {dealershipConfig.authorisedStatus}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted authorized source for genuine Asian Paints interior and exterior emulsions, SmartCare waterproofing systems, computerized shade tinting, and dedicated painting guidance in {dealershipConfig.address.city}.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 hover:bg-emerald-900/80 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Business</span>
              </a>

              <a
                href={`tel:${dealershipConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">Product Range</a>
              </li>
              <li>
                <a href="#colour-studio" className="hover:text-rose-400 transition-colors">Colour Studio</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-rose-400 transition-colors">Paint Estimator</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Dealership Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">About Showroom</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-400 transition-colors">Contact &amp; Map</a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Asian Paints Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">Royale Luxury Emulsions</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">Apex Ultima Exterior Paints</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">SmartCare Damp Proofing</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">WoodTech Italian PU &amp; Stains</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">Apcolite Gloss Enamels</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">TruCare Acrylic Wall Putty</a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">TruCare Professional Rollers</a>
              </li>
            </ul>
          </div>

          {/* Store Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom Hours &amp; Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>{dealershipConfig.address.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{dealershipConfig.businessHours.weekdays}</p>
                  <p>{dealershipConfig.businessHours.sundays}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-white">{dealershipConfig.displayPhone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Dealership Clarification */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-400">Authorised Dealership Clarification: </strong>
            {dealershipConfig.businessName} is an independently owned authorized retailer of Asian Paints products. All trademarks, registered logos, product family names (including Royale, Apex, Tractor, SmartCare, WoodTech, TruCare) belong exclusively to Asian Paints Ltd. This website serves as a local showroom information and enquiry platform for our store location in {dealershipConfig.address.city} and does not constitute the official corporate web portal of Asian Paints Ltd.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {dealershipConfig.businessName}. All rights reserved. Authorised Asian Paints Dealership.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

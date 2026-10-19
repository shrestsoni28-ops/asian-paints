import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Palette,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activeAccent, setActiveAccent] = useState({
    name: 'Peacock Jewel',
    hex: '#1C5D79',
    code: '7394',
    finish: 'Royale Luxury Sheen',
  });

  const heroAccents = [
    { name: 'Peacock Jewel', hex: '#1C5D79', code: '7394', finish: 'Royale Luxury Sheen' },
    { name: 'Terracotta Earth', hex: '#C66E4E', code: '0514', finish: 'Warm Matt Finish' },
    { name: 'Forest Jade', hex: '#2A5C45', code: '7729', finish: 'Velvet Emulsion' },
    { name: 'Royal Ruby', hex: '#991B33', code: '8093', finish: 'Festive Accent' },
    { name: 'Rajputana Ochre', hex: '#D89B37', code: '7982', finish: 'Sunlit Heritage' },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHeroUrl = createWhatsAppUrl(
    `Hello ${dealershipConfig.shortName}, I am interested in exploring Asian Paints for my home painting project. Please guide me with products and shades.`
  );

  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Authorised Dealership Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="font-semibold text-rose-400">Authorised Dealership</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-medium">Genuine Asian Paints Centre</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Bring Your Walls <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-400">
                  to Life.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                Discover quality paints, beautiful colours and reliable painting solutions for every space.
              </p>
            </div>

            {/* Trust Message without fabricated claims */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm space-y-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-normal">
                  <strong className="text-white font-semibold">Personalised Product Guidance: </strong>
                  Visit our authorised showroom or reach out directly for genuine factory-sealed paints, computerised shade tinting, and dedicated assistance for your specific walls.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('products')}
                id="hero-explore-products-btn"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Get Instant Quote</span>
              </button>
            </div>

            {/* Quick Service Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">100% Genuine Sealed Cans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">In-Store Shade Tinting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">Paint Quantity Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">Local Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Indian Living Room & Interactive Palette Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/50 to-slate-900/70 shadow-2xl border border-slate-700/80 backdrop-blur-xl">
                
                {/* Main Hero Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/hero-living-room.jpg"
                    alt="Modern Indian living room with Royale wall paint and peacock blue accent wall"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle dynamic tint overlay based on user accent choice */}
                  <div
                    className="absolute inset-0 mix-blend-color opacity-20 pointer-events-none transition-colors duration-500"
                    style={{ backgroundColor: activeAccent.hex }}
                  />

                  {/* Gradient bottom shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  {/* Floating Badge on Image */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-white">
                    <span
                      className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                      style={{ backgroundColor: activeAccent.hex }}
                    />
                    <span>Active Shade: {activeAccent.name} ({activeAccent.code})</span>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium text-white">{activeAccent.finish}</span>
                    <button
                      onClick={() => handleScrollTo('colour-studio')}
                      className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open Colour Studio</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Interactive Hero Swatch Switcher */}
                <div className="p-4 bg-slate-800/90 rounded-2xl mt-2 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-rose-400" />
                      Try Accent Shades for Living Room:
                    </span>
                    <span className="text-[11px] text-slate-400">Click to preview</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    {heroAccents.map((accent) => (
                      <button
                        key={accent.code}
                        onClick={() => setActiveAccent(accent)}
                        title={`${accent.name} (${accent.code})`}
                        className={`group relative flex-1 flex flex-col items-center p-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                          activeAccent.code === accent.code
                            ? 'bg-slate-700/90 ring-2 ring-rose-500'
                            : 'hover:bg-slate-700/50'
                        }`}
                      >
                        <span
                          className="w-7 h-7 rounded-full shadow-inner border border-white/20 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: accent.hex }}
                        />
                        <span className="text-[10px] text-slate-300 font-medium mt-1 truncate max-w-[56px] text-center">
                          {accent.name.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Testimonial/Status badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-slate-900 p-3.5 rounded-2xl shadow-2xl border border-slate-100 items-center gap-3 max-w-xs animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  AP
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-950">Authorised Dealership Counter</p>
                  <p className="text-[11px] text-slate-500">In-Store Computerized Tinting Ready</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

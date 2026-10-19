import React from 'react';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const AboutUs: React.FC = () => {
  const directWhatsAppLink = createWhatsAppUrl(
    `Hello ${dealershipConfig.shortName}, I would like to learn more about visiting your showroom in ${dealershipConfig.address.city}.`
  );

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Store Photography & Badges */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <img
                src="/images/store-interior.jpg"
                alt="Asian Paints authorised dealership showroom interior with tinting station and shade cards"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Floating Badge in Store Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div>
                  <p className="font-bold text-sm">{dealershipConfig.businessName}</p>
                  <p className="text-slate-300 text-[11px]">{dealershipConfig.address.fullAddress}</p>
                </div>
                <span className="px-3 py-1 bg-rose-600 font-bold rounded-lg text-[10px] tracking-wide uppercase">
                  In-Store Tinting
                </span>
              </div>
            </div>

            {/* Dealership Experience Callout Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-3xl font-extrabold text-slate-900 block">
                  {dealershipConfig.experienceYears}+
                </span>
                <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                  Years of Local Dealership Experience
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                <span className="text-3xl font-extrabold text-rose-600 block">
                  2,200+
                </span>
                <span className="text-xs font-semibold text-rose-950 mt-0.5 block">
                  Computerized Asian Paints Shades
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Dealership Introduction & Service Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Our Dealership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Your Trusted Authorised Asian Paints Destination in {dealershipConfig.address.city}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Welcome to <strong>{dealershipConfig.businessName}</strong>. As an established, authorised dealer of Asian Paints, we are dedicated to helping homeowners, architects, and professional painting contractors transform living and commercial spaces with genuine paints and honest advisory.
              </p>
            </div>

            {/* Customer Service Approach */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Our Customer Service Commitment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe painting your home is a major emotional and financial investment. Our philosophy is rooted in transparent product guidance without overselling. We walk you through genuine product specifications, explain the difference between washability grades, ensure accurate computerized shade matching, and support your painting team until the final coat dries.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="space-y-2.5">
              {dealershipConfig.keyStrengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-slate-900">{item.title}: </strong>
                    <span className="text-xs text-slate-600">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact & Hours Quick Strip */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-700/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat with Our Showroom Team</span>
              </a>

              <a
                href={`tel:${dealershipConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call: {dealershipConfig.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

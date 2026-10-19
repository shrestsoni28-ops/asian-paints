import React from 'react';
import {
  Sparkles,
  Palette,
  Calculator,
  ShieldAlert,
  Users,
  Building2,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { dealershipServices } from '../data/servicesData';
import { createServiceEnquiryUrl } from '../utils/whatsapp';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-rose-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-600" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-rose-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <span>Authorised Store Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Expert Painting &amp; Surface Services
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            More than just paint retail. We provide end-to-end guidance from computerized shade selection and waterproofing diagnosis to contractor recommendations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealershipServices.map((service) => {
            const whatsappUrl = createServiceEnquiryUrl(service.title);

            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md">
                      Free Advisory
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-rose-600 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Enquire About This Service</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

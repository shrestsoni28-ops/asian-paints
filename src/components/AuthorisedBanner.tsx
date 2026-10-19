import { ShieldCheck, Cpu, Truck, Layers, Info } from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';

export const AuthorisedBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white py-8 border-y border-slate-700/60 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer / Status Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {dealershipConfig.authorisedStatus}
              </h2>
              <p className="text-xs text-slate-400">
                {dealershipConfig.businessName} • Local surface partner for homeowners, architects &amp; contractors
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Independent authorised dealer in {dealershipConfig.address.city}. Not the official corporate headquarters.</span>
          </div>
        </div>

        {/* 4 Pillars of Dealership Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">100% Factory-Sealed</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct Asian Paints supply in tamper-proof factory packaging with genuine batch numbers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Computerised Tinting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated Asian Paints dispensing station for precision 2200+ shade accuracy on the spot.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Full Surface Spectrum</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interior, exterior, waterproofing, wood PU, enamels, primers &amp; TruCare tools under one roof.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Prompt Local Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Quick on-site dispatch across {dealershipConfig.address.city} for hassle-free painting work.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

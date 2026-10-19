import React, { useState } from 'react';
import {
  Calculator,
  MessageCircle,
  Layers,
  Package,
  Droplets,
} from 'lucide-react';
import { createEstimationEnquiryUrl } from '../utils/whatsapp';

interface PresetOption {
  id: string;
  label: string;
  carpetArea: number;
  doors: number;
  windows: number;
}

const presets: PresetOption[] = [
  { id: '1room', label: '1 Standard Room (12x10)', carpetArea: 120, doors: 1, windows: 1 },
  { id: '1bhk', label: '1 BHK Apartment', carpetArea: 450, doors: 3, windows: 3 },
  { id: '2bhk', label: '2 BHK Apartment', carpetArea: 800, doors: 5, windows: 4 },
  { id: '3bhk', label: '3 BHK Apartment', carpetArea: 1250, doors: 7, windows: 6 },
  { id: 'exterior', label: 'Independent Villa Exterior', carpetArea: 1600, doors: 2, windows: 8 },
];

export const PaintCalculator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<string>('2bhk');
  const [carpetArea, setCarpetArea] = useState<number>(800);
  const [ceilingHeight, setCeilingHeight] = useState<number>(10);
  const [doors, setDoors] = useState<number>(5);
  const [windowsCount, setWindowsCount] = useState<number>(4);
  const [numCoats, setNumCoats] = useState<number>(2);
  const [includePutty, setIncludePutty] = useState<boolean>(true);
  const [includePrimer, setIncludePrimer] = useState<boolean>(true);

  const applyPreset = (preset: PresetOption) => {
    setActivePreset(preset.id);
    setCarpetArea(preset.carpetArea);
    setDoors(preset.doors);
    setWindowsCount(preset.windows);
  };

  // Indian standard thumb rule for paintable wall area:
  // Gross wall area ≈ Carpet Area * (Ceiling Height / 10) * 3.2
  // Minus standard door opening (21 sq ft) and window opening (16 sq ft)
  const grossWallArea = Math.round(carpetArea * (ceilingHeight / 10) * 3.2);
  const openingsDeduction = (doors * 21) + (windowsCount * 16);
  const netPaintableArea = Math.max(100, grossWallArea - openingsDeduction);

  // Material calculations:
  // Emulsion (2 coats): ~ 140 sq ft / Litre
  const paintSpreadPerLitre = numCoats === 3 ? 100 : 140;
  const estimatedPaintLitres = Math.ceil(netPaintableArea / paintSpreadPerLitre);

  // Primer (1 coat): ~ 110 sq ft / Litre
  const estimatedPrimerLitres = includePrimer ? Math.ceil(netPaintableArea / 110) : 0;

  // Acrylic Putty (2 coats): ~ 28 sq ft / Kg
  const estimatedPuttyKg = includePutty ? Math.ceil(netPaintableArea / 28) : 0;

  const currentPresetName = presets.find((p) => p.id === activePreset)?.label || 'Custom Area';

  const whatsappUrl = createEstimationEnquiryUrl(
    netPaintableArea,
    estimatedPaintLitres,
    estimatedPrimerLitres,
    estimatedPuttyKg,
    currentPresetName
  );

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Estimation Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Paint Quantity Estimator
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Planning your painting budget? Enter your room or home dimensions to estimate exact litres of Asian Paints emulsion, primer, and wall putty required.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Presets Row */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  1. Choose a Quick Space Preset:
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activePreset === preset.id
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                  <button
                    onClick={() => setActivePreset('custom')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activePreset === 'custom'
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    Custom Area
                  </button>
                </div>
              </div>

              {/* Numerical Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Carpet Area */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700">Carpet Area</label>
                    <span className="text-xs font-bold text-rose-600">{carpetArea} sq. ft.</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="4000"
                    step="25"
                    value={carpetArea}
                    onChange={(e) => {
                      setCarpetArea(Number(e.target.value));
                      setActivePreset('custom');
                    }}
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>50 sq. ft.</span>
                    <span>4,000 sq. ft.</span>
                  </div>
                </div>

                {/* Ceiling Height */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700">Ceiling Height</label>
                    <span className="text-xs font-bold text-rose-600">{ceilingHeight} Feet</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="14"
                    step="1"
                    value={ceilingHeight}
                    onChange={(e) => setCeilingHeight(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>8 ft (Standard)</span>
                    <span>14 ft (High)</span>
                  </div>
                </div>

                {/* Doors Count */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block">Number of Doors</label>
                    <span className="text-[11px] text-slate-400">Deducts openings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDoors(Math.max(0, doors - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{doors}</span>
                    <button
                      onClick={() => setDoors(doors + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Windows Count */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block">Number of Windows</label>
                    <span className="text-[11px] text-slate-400">Deducts glass area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWindowsCount(Math.max(0, windowsCount - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{windowsCount}</span>
                    <button
                      onClick={() => setWindowsCount(windowsCount + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

              {/* Additional Options */}
              <div className="flex flex-wrap gap-4 pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={numCoats === 3}
                    onChange={(e) => setNumCoats(e.target.checked ? 3 : 2)}
                    className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
                  />
                  <span>Require 3 Coats (Recommended for high-sheen or drastic color change)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={includePutty}
                    onChange={(e) => setIncludePutty(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
                  />
                  <span>Include Acrylic Wall Putty</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={includePrimer}
                    onChange={(e) => setIncludePrimer(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
                  />
                  <span>Include Decoprime Primer</span>
                </label>
              </div>

            </div>

            {/* Right Results & Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Calculated Wall Coverage
                  </span>
                  <span className="text-xs text-slate-400">{currentPresetName}</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ~{netPaintableArea.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">sq. ft. Paintable Area</span>
                </div>
              </div>

              {/* Itemized Material Estimates */}
              <div className="space-y-3.5">
                
                {/* Paint Emulsion */}
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Asian Paints Emulsion ({numCoats} Coats)
                      </span>
                      <span className="text-[11px] text-slate-400">Royale / Apcolite / Tractor</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-rose-400">
                      {estimatedPaintLitres}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 ml-1">Litres</span>
                  </div>
                </div>

                {/* Primer */}
                {includePrimer && (
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Decoprime Wall Primer (1 Coat)
                        </span>
                        <span className="text-[11px] text-slate-400">Base adhesion sealer</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-sky-400">
                        {estimatedPrimerLitres}
                      </span>
                      <span className="text-xs font-semibold text-slate-300 ml-1">Litres</span>
                    </div>
                  </div>
                )}

                {/* Putty */}
                {includePutty && (
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          TruCare Acrylic Putty (2 Coats)
                        </span>
                        <span className="text-[11px] text-slate-400">Marble smooth finish</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-amber-400">
                        {estimatedPuttyKg}
                      </span>
                      <span className="text-xs font-semibold text-slate-300 ml-1">Kg</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Dealership Sizing Note */}
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-[11px] text-slate-300 leading-normal">
                💡 <strong>Dealer Recommendation:</strong> Our store configures optimal Asian Paints packaging combinations (e.g. 20L + 4L + 1L) to minimize leftover paint and get you best bucket rates.
              </div>

              {/* Action Button: Send to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Send Estimate to WhatsApp for Bucket Sizing</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

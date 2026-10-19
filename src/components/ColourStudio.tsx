import React, { useState } from 'react';
import {
  Palette,
  Sparkles,
  Info,
  Check,
  MessageCircle,
  Home,
  BedDouble,
  Building,
  Layers,
} from 'lucide-react';
import { curatedPalettes, individualSwatches } from '../data/coloursData';
import type { ColorSwatch, CuratedPalette } from '../types';
import { createPaletteEnquiryUrl } from '../utils/whatsapp';

type ActiveSurface = 'main' | 'accent' | 'trim';
type RoomType = 'living' | 'bedroom' | 'exterior';

export const ColourStudio: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<RoomType>('living');
  const [activeSurface, setActiveSurface] = useState<ActiveSurface>('accent');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');

  // Active color choices for the room preview
  const [mainWall, setMainWall] = useState<ColorSwatch>(curatedPalettes[0].mainWall);
  const [accentWall, setAccentWall] = useState<ColorSwatch>(curatedPalettes[0].accentWall);
  const [trimCeiling, setTrimCeiling] = useState<ColorSwatch>(curatedPalettes[0].trimCeiling);
  const [activePaletteName, setActivePaletteName] = useState<string>(curatedPalettes[0].title);

  // Apply curated palette
  const applyPalette = (palette: CuratedPalette) => {
    setMainWall(palette.mainWall);
    setAccentWall(palette.accentWall);
    setTrimCeiling(palette.trimCeiling);
    setActivePaletteName(palette.title);
    if (palette.roomType === 'bedroom') setActiveRoom('bedroom');
    else if (palette.roomType === 'exterior') setActiveRoom('exterior');
    else setActiveRoom('living');
  };

  // Select individual swatch for currently active surface
  const selectSwatchForActiveSurface = (swatch: ColorSwatch) => {
    if (activeSurface === 'main') setMainWall(swatch);
    else if (activeSurface === 'accent') setAccentWall(swatch);
    else if (activeSurface === 'trim') setTrimCeiling(swatch);
    setActivePaletteName('Custom Combination');
  };

  // Filter swatches
  const filteredSwatches = individualSwatches.filter(
    (s) => selectedFamily === 'all' || s.family === selectedFamily
  );

  const whatsappEnquiryUrl = createPaletteEnquiryUrl(
    activePaletteName,
    `${mainWall.name} (${mainWall.code})`,
    `${accentWall.name} (${accentWall.code})`,
    `${trimCeiling.name} (${trimCeiling.code})`
  );

  return (
    <section id="colour-studio" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Visualizer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Colour Inspiration Studio
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Preview beautiful wall-colour combinations in real time. Choose from curated Indian living room, bedroom, and exterior palettes, or mix your own shades.
          </p>
        </div>

        {/* Visualizer Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Room Illustration (SVG Visualizer) */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-4">
            
            {/* Room Selector Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Select Space to Preview:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveRoom('living')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeRoom === 'living'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Modern Living Room</span>
                </button>
                <button
                  onClick={() => setActiveRoom('bedroom')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeRoom === 'bedroom'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>Bedroom</span>
                </button>
                <button
                  onClick={() => setActiveRoom('exterior')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeRoom === 'exterior'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Exterior Facade</span>
                </button>
              </div>
            </div>

            {/* Room Illustration SVG Canvas */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
              
              {/* Dynamic SVG Room */}
              {activeRoom === 'living' && (
                <svg
                  viewBox="0 0 800 480"
                  className="w-full h-full object-cover transition-colors duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ceiling (Trim) */}
                  <polygon points="0,0 800,0 680,60 120,60" fill={trimCeiling.hex} className="transition-colors duration-500" />
                  {/* Floor */}
                  <polygon points="0,480 800,480 680,380 120,380" fill="#292524" />
                  {/* Floor reflection lines */}
                  <polygon points="180,480 620,480 560,390 240,390" fill="#3f3f46" opacity="0.3" />

                  {/* Left Main Wall */}
                  <polygon points="0,0 120,60 120,380 0,480" fill={mainWall.hex} className="transition-colors duration-500" />
                  {/* Left wall shadow gradient */}
                  <polygon points="0,0 120,60 120,380 0,480" fill="#000000" opacity="0.12" />

                  {/* Right Wall (Main Wall) */}
                  <polygon points="800,0 680,60 680,380 800,480" fill={mainWall.hex} className="transition-colors duration-500" />
                  {/* Right wall shadow gradient */}
                  <polygon points="800,0 680,60 680,380 800,480" fill="#000000" opacity="0.15" />

                  {/* Center Accent Feature Wall */}
                  <rect x="120" y="60" width="560" height="320" fill={accentWall.hex} className="transition-colors duration-500" />

                  {/* Wall Art on Accent Wall */}
                  <rect x="330" y="100" width="140" height="110" rx="4" fill="#FFFFFF" opacity="0.9" />
                  <rect x="338" y="108" width="124" height="94" rx="2" fill="#18181B" />
                  <circle cx="400" cy="155" r="30" fill="#D97706" opacity="0.8" />
                  <path d="M370 170 C390 130 420 180 440 140" stroke="#FFFFFF" strokeWidth="3" />

                  {/* Ceiling Lamp & Warm Light Cone */}
                  <path d="M390 60 L410 60 L405 85 L395 85 Z" fill="#D4AF37" />
                  <polygon points="400,85 240,380 560,380" fill="#FEF08A" opacity="0.12" />

                  {/* Modern Sofa */}
                  <rect x="250" y="270" width="300" height="90" rx="14" fill="#1e293b" />
                  {/* Sofa cushions */}
                  <rect x="270" y="280" width="125" height="50" rx="8" fill="#334155" />
                  <rect x="405" y="280" width="125" height="50" rx="8" fill="#334155" />
                  {/* Sofa throw pillows */}
                  <rect x="260" y="260" width="35" height="40" rx="6" fill={mainWall.hex} transform="rotate(-10 260 260)" />
                  <rect x="500" y="260" width="35" height="40" rx="6" fill="#F59E0B" transform="rotate(10 500 260)" />

                  {/* Coffee Table */}
                  <ellipse cx="400" cy="385" rx="90" ry="25" fill="#451a03" />
                  <ellipse cx="400" cy="382" rx="88" ry="23" fill="#78350f" />

                  {/* Indoor Plant on Right */}
                  <ellipse cx="640" cy="375" rx="22" ry="12" fill="#0f172a" />
                  <path d="M640 370 L640 320" stroke="#166534" strokeWidth="4" />
                  <ellipse cx="640" cy="300" rx="18" ry="30" fill="#15803d" />
                  <ellipse cx="625" cy="315" rx="16" ry="25" fill="#16a34a" />
                  <ellipse cx="655" cy="315" rx="16" ry="25" fill="#22c55e" />

                  {/* Floor Lamp on Left */}
                  <line x1="165" y1="380" x2="165" y2="180" stroke="#D4AF37" strokeWidth="4" />
                  <polygon points="145,210 185,210 175,170 155,170" fill="#FDE68A" />
                </svg>
              )}

              {activeRoom === 'bedroom' && (
                <svg
                  viewBox="0 0 800 480"
                  className="w-full h-full object-cover transition-colors duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ceiling */}
                  <polygon points="0,0 800,0 680,60 120,60" fill={trimCeiling.hex} className="transition-colors duration-500" />
                  {/* Floor */}
                  <polygon points="0,480 800,480 680,380 120,380" fill="#3f2e24" />

                  {/* Left Wall */}
                  <polygon points="0,0 120,60 120,380 0,480" fill={mainWall.hex} className="transition-colors duration-500" />
                  {/* Right Wall */}
                  <polygon points="800,0 680,60 680,380 800,480" fill={mainWall.hex} className="transition-colors duration-500" />

                  {/* Headboard Wall (Accent Wall) */}
                  <rect x="120" y="60" width="560" height="320" fill={accentWall.hex} className="transition-colors duration-500" />

                  {/* Bed Headboard */}
                  <rect x="240" y="190" width="320" height="160" rx="12" fill="#1f2937" />
                  <rect x="255" y="205" width="290" height="135" rx="8" fill="#374151" stroke="#4b5563" strokeWidth="2" />

                  {/* Bed Frame and Pillows */}
                  <rect x="260" y="270" width="280" height="120" rx="6" fill="#F4EFEA" />
                  {/* Pillows */}
                  <rect x="285" y="240" width="105" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
                  <rect x="410" y="240" width="105" height="40" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
                  {/* Bed runner in main wall color */}
                  <rect x="260" y="340" width="280" height="45" fill={mainWall.hex} opacity="0.9" />

                  {/* Left Side Table & Lamp */}
                  <rect x="180" y="290" width="50" height="70" rx="4" fill="#451a03" />
                  <line x1="205" y1="290" x2="205" y2="250" stroke="#D4AF37" strokeWidth="2.5" />
                  <polygon points="190,265 220,265 215,245 195,245" fill="#FEF08A" />

                  {/* Right Side Table & Lamp */}
                  <rect x="570" y="290" width="50" height="70" rx="4" fill="#451a03" />
                  <line x1="595" y1="290" x2="595" y2="250" stroke="#D4AF37" strokeWidth="2.5" />
                  <polygon points="580,265 610,265 605,245 585,245" fill="#FEF08A" />
                </svg>
              )}

              {activeRoom === 'exterior' && (
                <svg
                  viewBox="0 0 800 480"
                  className="w-full h-full object-cover transition-colors duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Sky */}
                  <rect x="0" y="0" width="800" height="480" fill="#0f172a" />
                  {/* Ground / Driveway */}
                  <rect x="0" y="380" width="800" height="100" fill="#334155" />
                  <rect x="0" y="375" width="800" height="15" fill="#15803d" />

                  {/* Main Building Body */}
                  <rect x="160" y="100" width="480" height="280" fill={mainWall.hex} className="transition-colors duration-500" />

                  {/* Architectural Accent Box / Portico */}
                  <rect x="360" y="60" width="220" height="240" fill={accentWall.hex} className="transition-colors duration-500" />
                  {/* Decorative Pillar */}
                  <rect x="540" y="180" width="30" height="200" fill={accentWall.hex} />

                  {/* Roof Parapet & White Trims */}
                  <rect x="150" y="90" width="500" height="16" fill={trimCeiling.hex} className="transition-colors duration-500" />
                  <rect x="350" y="50" width="240" height="16" fill={trimCeiling.hex} className="transition-colors duration-500" />
                  <rect x="200" y="365" width="400" height="15" fill={trimCeiling.hex} />

                  {/* Glass Windows */}
                  <rect x="200" y="140" width="120" height="140" rx="4" fill="#0284c7" opacity="0.4" stroke="#1e293b" strokeWidth="4" />
                  <line x1="260" y1="140" x2="260" y2="280" stroke="#1e293b" strokeWidth="3" />

                  <rect x="390" y="90" width="140" height="90" rx="4" fill="#0284c7" opacity="0.4" stroke="#1e293b" strokeWidth="4" />

                  {/* Front Door */}
                  <rect x="420" y="240" width="70" height="135" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                  <circle cx="480" cy="310" r="4" fill="#D4AF37" />
                </svg>
              )}

              {/* Live Palette Overlay Tag on Canvas */}
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs">
                <span className="text-slate-400 font-medium">Palette: </span>
                <span className="text-white font-bold">{activePaletteName}</span>
              </div>

            </div>

            {/* Surface Selector Bar: Main Wall, Accent Wall, Trim */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Assign Color to Wall Surface:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveSurface('main')}
                  className={`flex items-center gap-2.5 p-2.5 rounded-2xl border transition-all text-left cursor-pointer ${
                    activeSurface === 'main'
                      ? 'bg-slate-800 border-rose-500 ring-2 ring-rose-500/30'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span
                    className="w-6 h-6 rounded-lg shadow-inner border border-white/20 flex-shrink-0"
                    style={{ backgroundColor: mainWall.hex }}
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wide">
                      Main Wall
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {mainWall.name}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveSurface('accent')}
                  className={`flex items-center gap-2.5 p-2.5 rounded-2xl border transition-all text-left cursor-pointer ${
                    activeSurface === 'accent'
                      ? 'bg-slate-800 border-rose-500 ring-2 ring-rose-500/30'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span
                    className="w-6 h-6 rounded-lg shadow-inner border border-white/20 flex-shrink-0"
                    style={{ backgroundColor: accentWall.hex }}
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wide">
                      Accent Wall
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {accentWall.name}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveSurface('trim')}
                  className={`flex items-center gap-2.5 p-2.5 rounded-2xl border transition-all text-left cursor-pointer ${
                    activeSurface === 'trim'
                      ? 'bg-slate-800 border-rose-500 ring-2 ring-rose-500/30'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span
                    className="w-6 h-6 rounded-lg shadow-inner border border-white/20 flex-shrink-0"
                    style={{ backgroundColor: trimCeiling.hex }}
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wide">
                      Ceiling / Trim
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {trimCeiling.name}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Direct WhatsApp CTA for this combination */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">
                <span className="text-white font-semibold block">Love this colour combination?</span>
                In-store computerized tinting ready for these Asian Paints shade codes.
              </div>

              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-900/20"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Enquire This Palette</span>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-slate-400 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Colour Disclaimer:</strong> Screen colours are digital approximations and may vary from actual Asian Paints paint shades due to screen calibration, texture, and ambient room lighting. Visit our showroom to review physical shade books &amp; get 200ml test patches.
              </p>
            </div>

          </div>

          {/* Right Column: Curated Palettes & Color Swatch Library */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Curated Asian Paints Designer Combinations */}
            <div className="bg-slate-950/80 rounded-3xl p-5 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Curated Indian Home Palettes</span>
                </h3>
                <span className="text-[11px] text-slate-400">1-Click Apply</span>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {curatedPalettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => applyPalette(palette)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      activePaletteName === palette.title
                        ? 'bg-slate-800/90 border-rose-500 ring-1 ring-rose-500/40'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">{palette.title}</span>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                        {palette.roomType}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 mb-2 line-clamp-1">
                      {palette.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center -space-x-1.5">
                        <span
                          className="w-5 h-5 rounded-full border border-white/30 shadow"
                          style={{ backgroundColor: palette.mainWall.hex }}
                          title={`Main: ${palette.mainWall.name}`}
                        />
                        <span
                          className="w-5 h-5 rounded-full border border-white/30 shadow"
                          style={{ backgroundColor: palette.accentWall.hex }}
                          title={`Accent: ${palette.accentWall.name}`}
                        />
                        <span
                          className="w-5 h-5 rounded-full border border-white/30 shadow"
                          style={{ backgroundColor: palette.trimCeiling.hex }}
                          title={`Trim: ${palette.trimCeiling.name}`}
                        />
                      </div>
                      <span className="text-[10px] text-slate-300 font-medium">
                        {palette.mainWall.name} + {palette.accentWall.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Shade Swatches Library */}
            <div className="bg-slate-950/80 rounded-3xl p-5 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>Asian Paints Shades Library</span>
                </h3>
                <span className="text-[11px] text-slate-400">
                  Select for <strong className="text-rose-400 uppercase">{activeSurface}</strong> wall
                </span>
              </div>

              {/* Family Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                {['all', 'warm', 'cool', 'earthy', 'accent', 'neutral'].map((family) => (
                  <button
                    key={family}
                    onClick={() => setSelectedFamily(family)}
                    className={`px-2.5 py-1 rounded-lg font-semibold capitalize transition-colors cursor-pointer ${
                      selectedFamily === family
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {family}
                  </button>
                ))}
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {filteredSwatches.map((swatch) => {
                  const isCurrent =
                    (activeSurface === 'main' && mainWall.code === swatch.code) ||
                    (activeSurface === 'accent' && accentWall.code === swatch.code) ||
                    (activeSurface === 'trim' && trimCeiling.code === swatch.code);

                  return (
                    <button
                      key={swatch.code}
                      onClick={() => selectSwatchForActiveSurface(swatch)}
                      title={`${swatch.name} (${swatch.code}) - ${swatch.description}`}
                      className={`group flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-slate-800 ring-2 ring-rose-500'
                          : 'bg-slate-900/80 hover:bg-slate-800/80'
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full shadow-inner border border-white/20 transition-transform group-hover:scale-110 flex items-center justify-center"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {isCurrent && <Check className="w-3.5 h-3.5 text-slate-900 drop-shadow" />}
                      </span>
                      <span className="text-[10px] text-slate-300 font-semibold mt-1 truncate max-w-[60px] text-center">
                        {swatch.name}
                      </span>
                      <span className="text-[9px] text-slate-500">{swatch.code}</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuoteModal }) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const directWhatsAppLink = createWhatsAppUrl(
    `Hello ${dealershipConfig.shortName}, I am browsing your dealership website and would like assistance with Asian Paints shades and products.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Speech Bubble / Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700/80 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Need Paint Advice?</span>
          <button
            onClick={onOpenQuoteModal}
            className="text-amber-400 hover:text-amber-300 underline font-bold cursor-pointer"
          >
            Get Quote
          </button>
          <span className="text-slate-500">|</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={directWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat with Asian Paints Dealership on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>

        <MessageCircle className="w-7 h-7 fill-white/20" />

        {/* Small Online badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

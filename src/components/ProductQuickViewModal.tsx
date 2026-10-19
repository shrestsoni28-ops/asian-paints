import React from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Package } from 'lucide-react';
import type { ProductItem } from '../types';
import { createProductEnquiryUrl } from '../utils/whatsapp';
import { dealershipConfig } from '../config/dealershipConfig';

interface ProductQuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappUrl = createProductEnquiryUrl(product.name, product.categoryLabel);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Category & Close */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/70">
              {product.categoryLabel}
            </span>
            {product.badge && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {product.name}
            </h3>
            <p className="text-sm font-medium text-slate-600 mt-1">
              {product.tagline}
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="block text-slate-400 font-medium">Sheen / Finish</span>
              <span className="font-bold text-slate-800 mt-0.5 block">{product.sheen}</span>
            </div>
            {product.washability && (
              <div>
                <span className="block text-slate-400 font-medium">Washability</span>
                <span className="font-bold text-slate-800 mt-0.5 block">{product.washability}</span>
              </div>
            )}
            {product.coverage && (
              <div>
                <span className="block text-slate-400 font-medium">Standard Coverage</span>
                <span className="font-bold text-slate-800 mt-0.5 block">{product.coverage}</span>
              </div>
            )}
          </div>

          {/* Ideal Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Recommended Application Areas
            </h4>
            <p className="text-xs sm:text-sm font-medium text-slate-700 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
              {product.idealFor}
            </p>
          </div>

          {/* Key Product Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Features &amp; Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Packaging Sizes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-slate-400" />
              Available Genuine Packaging Sizes:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.availableSizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Authorised Dealer Note */}
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/60 flex items-center gap-2.5 text-xs text-blue-900">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>
              Available for immediate dispatch from our authorised {dealershipConfig.shortName} store with genuine factory seal.
            </span>
          </div>
        </div>

        {/* Modal Footer with Direct WhatsApp CTA */}
        <div className="p-6 pt-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Contact us for stock verification, computerized shade tinting &amp; dealer pricing.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-700/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

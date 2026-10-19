import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Phone,
  User,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createGeneralEnquiryUrl } from '../utils/whatsapp';
import type { EnquiryFormData } from '../types';

interface WhatsAppEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const WhatsAppEnquiryModal: React.FC<WhatsAppEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'Interior Wall Paints',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    productCategory: defaultCategory,
    projectType: 'Repainting Existing Home',
    approxArea: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState<boolean>(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name should be at least 2 characters.';
    }

    // Phone number validation: Indian mobile or standard digits
    const cleanedPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please provide your WhatsApp phone number.';
    } else if (cleanedPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const whatsappUrl = createGeneralEnquiryUrl(formData);
    window.open(whatsappUrl, '_blank');
    setHasOpenedWhatsApp(true);
  };

  const handleReset = () => {
    setHasOpenedWhatsApp(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-6 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Request Paint Quote on WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Direct to {dealershipConfig.businessName} (+{dealershipConfig.whatsappNumber})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Either Form or Post-Submit Guide */}
        {hasOpenedWhatsApp ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold text-slate-900">
                WhatsApp Chat Launched!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your prefilled paint enquiry has been opened in WhatsApp. <strong>Please tap "Send" in WhatsApp</strong> to deliver your message to our dealership team.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1.5">
              <p className="font-bold text-slate-900">Next Steps with Our Dealership:</p>
              <p>• Our store advisor will reply with genuine Asian Paints options.</p>
              <p>• We will check computerized tinting availability for your shades.</p>
              <p>• We calculate exact bucket requirements for your square footage.</p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  const whatsappUrl = createGeneralEnquiryUrl(formData);
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Re-open WhatsApp
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            
            {/* Trust disclaimer */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>
                Your enquiry connects directly to our authorised store. No spam, no bot calls.
              </span>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-rose-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all ${
                      errors.phoneNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-rose-500'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Product Category & Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Category
                </label>
                <select
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all cursor-pointer"
                >
                  <option value="Interior Wall Paints">Interior Wall Paints (Royale / Apcolite)</option>
                  <option value="Exterior Wall Paints">Exterior Wall Paints (Apex / Ultima)</option>
                  <option value="Waterproofing Solutions">SmartCare Waterproofing (Damp Block)</option>
                  <option value="Premium Emulsions">Premium Velvety Emulsions</option>
                  <option value="Wood Finishes">WoodTech Italian PU &amp; Stains</option>
                  <option value="Metal Paints & Primers">Metal Enamels &amp; Anti-Rust Primers</option>
                  <option value="Putty & Surface Prep">TruCare Wall Putty &amp; Primers</option>
                  <option value="Full Home Painting Package">Full Home Painting Package</option>
                  <option value="Contractor Bulk Supply">Contractor / Bulk Supply Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all cursor-pointer"
                >
                  <option value="Repainting Existing Home">Repainting Existing Home</option>
                  <option value="New Construction">New Construction (Fresh Plaster)</option>
                  <option value="Single Room / Accent Wall">Single Room / Accent Wall</option>
                  <option value="Exterior Elevation Only">Exterior Elevation Only</option>
                  <option value="Waterproofing Seepage Treatment">Waterproofing / Seepage Repair</option>
                  <option value="Rental Property Refresh">Rental Property Refresh</option>
                  <option value="Commercial Office / Store">Commercial Office / Store</option>
                </select>
              </div>
            </div>

            {/* Approximate Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Approximate Area to be Painted (Optional)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.approxArea}
                  onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                  placeholder="e.g. 1200 sq. ft. or 2 BHK"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Helps us recommend the best Asian Paints bucket combination.
              </p>
            </div>

            {/* Message Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Shade Codes or Questions (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention desired shades (e.g. Peacock Blue, Ivory), wall dampness issues, or delivery timing..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="submit-whatsapp-enquiry-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-700/25 active:translate-y-0 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Open Pre-filled WhatsApp Enquiry</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                * Tapping above opens WhatsApp with your configured details. You can review the message before pressing send.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

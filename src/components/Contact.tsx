import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { dealershipConfig } from '../config/dealershipConfig';
import { createGeneralEnquiryUrl } from '../utils/whatsapp';
import type { EnquiryFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    productCategory: 'Interior Wall Paints',
    projectType: 'Repainting Existing Home',
    approxArea: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) return;

    const whatsappUrl = createGeneralEnquiryUrl(formData);
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location &amp; Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Visit Our Authorised Showroom
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience Asian Paints physical shade books, touch finish panels, and consult with our paint advisors in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Store Details & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Store Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {dealershipConfig.authorisedStatus}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {dealershipConfig.businessName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Managed by {dealershipConfig.ownerName}
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-sm text-slate-700">
                
                {/* Full Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-xs uppercase tracking-wider mb-0.5">
                      Store Address
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      {dealershipConfig.address.fullAddress}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Landmark: {dealershipConfig.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-xs uppercase tracking-wider mb-0.5">
                      Business Timings
                    </strong>
                    <p className="text-slate-600">{dealershipConfig.businessHours.weekdays}</p>
                    <p className="text-slate-600">{dealershipConfig.businessHours.sundays}</p>
                    {dealershipConfig.businessHours.lunchTime && (
                      <p className="text-xs text-emerald-600 font-medium mt-0.5">
                        • {dealershipConfig.businessHours.lunchTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-xs uppercase tracking-wider mb-0.5">
                      Phone &amp; Order Desk
                    </strong>
                    <a
                      href={`tel:${dealershipConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-900 font-bold hover:text-rose-600 transition-colors"
                    >
                      {dealershipConfig.displayPhone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Available during store operating hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-xs uppercase tracking-wider mb-0.5">
                      Official WhatsApp Business
                    </strong>
                    <p className="text-emerald-700 font-bold">
                      +{dealershipConfig.whatsappNumber}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fast response for price estimates &amp; shade matching
                    </p>
                  </div>
                </div>

              </div>

              {/* Google Maps Directions Action */}
              <div className="pt-2">
                <a
                  href={dealershipConfig.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4 text-rose-400" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>

            </div>

            {/* Interactive Embedded Map View Visual */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-200 flex items-center justify-center">
                {/* Clean stylized map placeholder with Google pin */}
                <iframe
                  title="Dealership Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(dealershipConfig.address.fullAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: In-Page Quick Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Instant WhatsApp Connect
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Send an Enquiry Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your project requirements below to launch an instant WhatsApp conversation with our store team.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200/80 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">
                    WhatsApp Opened!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Please tap "Send" in WhatsApp to forward your enquiry to our store. We typically respond within minutes during business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ankit Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. 98123 45678"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Product Category
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all cursor-pointer"
                      >
                        <option value="Interior Wall Paints">Interior Wall Paints</option>
                        <option value="Exterior Wall Paints">Exterior Wall Paints</option>
                        <option value="Waterproofing Solutions">Waterproofing (SmartCare)</option>
                        <option value="Wood Finishes">Wood Finishes (WoodTech)</option>
                        <option value="Metal Paints & Primers">Metal Enamels & Primers</option>
                        <option value="Putty & Surface Prep">Wall Putty & Surface Prep</option>
                        <option value="Full Home Painting Package">Full Home Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Approx Area (sq. ft.)
                      </label>
                      <input
                        type="text"
                        value={formData.approxArea}
                        onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                        placeholder="e.g. 1000 sq ft"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes / Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your requirements, preferred shades, or ask about contractor recommendations..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-700/25 active:translate-y-0 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                    <span>Send Message via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    * Submitting will open WhatsApp with your prefilled details directed to {dealershipConfig.shortName}.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

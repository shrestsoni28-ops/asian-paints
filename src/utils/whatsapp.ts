import { dealershipConfig } from '../config/dealershipConfig';
import type { EnquiryFormData } from '../types';

/**
 * Encodes text and creates wa.me link with configured WhatsApp number
 */
export const createWhatsAppUrl = (message: string): string => {
  const cleanNumber = dealershipConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Generate product specific enquiry link
 */
export const createProductEnquiryUrl = (productName: string, categoryLabel: string): string => {
  const message = `Namaste ${dealershipConfig.shortName},

I am interested in Asian Paints *${productName}* (${categoryLabel}) from your dealership.

Could you please share:
1. Available pack sizes & genuine product availability
2. Recommended primer/putty combination
3. Best dealership pricing & delivery details

Thank you!`;

  return createWhatsAppUrl(message);
};

/**
 * Generate general enquiry / quotation form link
 */
export const createGeneralEnquiryUrl = (data: EnquiryFormData): string => {
  const message = `*NEW PAINT ENQUIRY - ${dealershipConfig.shortName}*

👤 *Customer Name:* ${data.fullName.trim()}
📱 *Phone Number:* ${data.phoneNumber.trim()}
🎨 *Product/Category:* ${data.productCategory || 'General Guidance'}
🏠 *Project Type:* ${data.projectType || 'Not specified'}
📐 *Approximate Area:* ${data.approxArea ? `${data.approxArea} sq. ft.` : 'To be determined'}

💬 *Requirement Details:*
"${data.message.trim() || 'Please guide me with product recommendation and quotation.'}"

_Sent via ${dealershipConfig.businessName} Website_`;

  return createWhatsAppUrl(message);
};

/**
 * Generate colour palette consultation enquiry link
 */
export const createPaletteEnquiryUrl = (
  paletteTitle: string,
  mainWallColor: string,
  accentWallColor: string,
  trimColor: string
): string => {
  const message = `Namaste ${dealershipConfig.shortName},

I was exploring your *Colour Inspiration Studio* and loved the *${paletteTitle}* combination!

🎨 *Main Wall Shade:* ${mainWallColor}
✨ *Accent Feature Wall:* ${accentWallColor}
🤍 *Ceiling / Trim:* ${trimColor}

Can you please confirm:
- Shade code availability on your computerized tinting machine
- Recommended emulsion finish (Royale Matt / Glitz / Apcolite)
- In-store shade card viewing

Looking forward to your guidance!`;

  return createWhatsAppUrl(message);
};

/**
 * Generate Paint Estimation enquiry link
 */
export const createEstimationEnquiryUrl = (
  areaSqFt: number,
  estimatedPaintLitres: number,
  estimatedPrimerLitres: number,
  estimatedPuttyKg: number,
  roomType: string
): string => {
  const message = `Namaste ${dealershipConfig.shortName},

I calculated my paint requirement using your online Paint Estimator:

🏡 *Space Type:* ${roomType}
📐 *Calculated Paintable Area:* ~${areaSqFt} sq. ft.
🪣 *Estimated Emulsion Paint:* ~${estimatedPaintLitres} Litres (2 coats)
🧴 *Estimated Primer:* ~${estimatedPrimerLitres} Litres (1 coat)
🧱 *Estimated Wall Putty:* ~${estimatedPuttyKg} Kg (2 coats)

Please share genuine Asian Paints recommendations (Royale / Apcolite / Tractor) and estimated budget for this requirement.`;

  return createWhatsAppUrl(message);
};

/**
 * Generate Service enquiry link
 */
export const createServiceEnquiryUrl = (serviceTitle: string): string => {
  const message = `Namaste ${dealershipConfig.shortName},

I would like to enquire about your *${serviceTitle}* service.

Please let me know how your dealership can assist me with this requirement.

Thank you!`;

  return createWhatsAppUrl(message);
};

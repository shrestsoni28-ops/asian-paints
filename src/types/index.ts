export type ProductCategory =
  | 'interior'
  | 'exterior'
  | 'emulsion'
  | 'waterproofing'
  | 'wood'
  | 'metal'
  | 'tools'
  | 'putty';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  sheen: string;
  washability?: string;
  coverage?: string;
  idealFor: string;
  availableSizes: string[];
  features: string[];
  accentColor: string;
  imageAlt: string;
  badge?: string;
}

export interface ColorSwatch {
  code: string;
  name: string;
  hex: string;
  family: 'warm' | 'cool' | 'neutral' | 'accent' | 'earthy';
  description: string;
}

export interface CuratedPalette {
  id: string;
  title: string;
  roomType: 'living' | 'bedroom' | 'exterior' | 'traditional';
  description: string;
  mainWall: ColorSwatch;
  accentWall: ColorSwatch;
  trimCeiling: ColorSwatch;
}

export interface DealershipService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  productCategory: string;
  projectType: string;
  approxArea: string;
  message: string;
}

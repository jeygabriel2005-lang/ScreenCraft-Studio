export type ScreenId = 'editorial' | 'real-estate' | 'infrastructure' | 'tourism';

export type AssetCategory =
  | 'Todas'
  | 'Residencial Náutico'
  | 'Frente de Playa'
  | 'Lotes Comerciales'
  | 'Desarrollo Mixto';

export type CurrencyCode = 'MXN' | 'USD';

export interface ArticleMarginNote {
  anchor: string;
  title: string;
  body: string;
}

export interface EditorialArticle {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  coordinates: string;
  image: string;
  imageAlt: string;
  figureCaption: string;
  leadQuote: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
  marginNotes: ArticleMarginNote[];
  relatedInterest: string;
}

export interface PropertyListing {
  id: string;
  code: string;
  title: string;
  zone: string;
  category: Exclude<AssetCategory, 'Todas'>;
  priceMxn: number;
  areaSqm: number;
  roiPercent: number;
  horizonYears: number;
  legalStatus: string;
  summary: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface PortFacilityMetric {
  id: string;
  terminal: string;
  sector: string;
  draftMeters: number;
  capacityLabel: string;
  transitCdmx: string;
  annualGrowth: string;
  status: string;
}

export interface TourismExperience {
  id: string;
  kicker: string;
  title: string;
  location: string;
  category: 'Náutico y Arrecifes' | 'Hospitalidad y Playa' | 'Gastronomía y Cultura';
  season: string;
  duration: string;
  coordinates: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export interface InquiryPreset {
  subject: string;
  assetCode?: string;
  category?: string;
}

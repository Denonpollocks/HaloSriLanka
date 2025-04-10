// import { IconType } from 'react-icons';
import { TravelMode } from '@/data/toursData';

export interface InfoItem {
  title: string;
  content: string;
}

export interface QuickFact {
  label: string;
  value: string;
  icon: string;
  text?: string;
}

export interface Section {
  id: string;
  label: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface Highlight {
  items: string[];
  points: string[];
  mapKey: {
    label: string;
    color: string;
  }[];
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  travelModes: TravelMode[];
}

export interface PriceDate {
  month: string;
  basePrice: string;
  availableDates: {
    dateRange: string;
    price: string;
    discount?: string;
  }[];
}

export interface PriceYear {
  year: string;
  dates: PriceDate[];
}

export interface Hotel {
  name: string;
  image: string;
  rating: number;
  nights: number;
  location: string;
  detailsLink: string;
}

export interface Testimonial {
  name: string;
  date: string;
  text: string;
}

export interface ImportantInformationItem {
  title: string;
  content: string;
}

export interface TourData {
  gallery: string[];
  price: number;
  title: string;
  subtitle: string;
  location: string;
  quickFacts: QuickFact[];
  description: string;
  galleryPhotos: GalleryPhoto[];
  sections: Section[];
  highlights: Highlight;
  itinerary: ItineraryItem[];
  includedItems: string[];
  pricesData: {
    years: PriceYear[];
  };
  accommodation: {
    hotels: Hotel[];
  };
  testimonials: Testimonial[];
  importantInformation: {
    title: string;
    items: ImportantInformationItem[];
  };
  heroImage: string;
  mapImage: string;
  duration: string;
  pdfLink: string;
  tourCode: string;
} 
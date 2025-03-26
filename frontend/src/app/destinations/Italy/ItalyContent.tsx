import { Metadata } from 'next';
import ItalyContent from './ItalyContent';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Luxury Italy Holidays 2024 | Art, Culture & Culinary Experiences',
  description: 'Experience luxury Italy holidays featuring historic cities, fine dining, and exclusive experiences. Book your 2024 Italian journey today.',
  keywords: 'Italy holidays, luxury hotels Italy, Rome, Venice, Tuscany, Italian cuisine, Italian culture'
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Italy",
  "description": "Where art and culture blend with culinary excellence",
  "url": "https://yourwebsite.com/destinations/italy",
  "touristType": ["Luxury", "Culture", "Gastronomy", "Art"]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Italy Luxury Holiday Packages 2024",
  "description": "Premium Italy packages including 5-star hotels and exclusive experiences"
};

export default function ItalyDestination() {
  return (
    <>
      <ItalyContent />
      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </>
  );
}
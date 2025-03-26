import { Metadata } from 'next';
import SpainContent from './SpainContent';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Luxury Spain Holidays 2024 | Cultural & Coastal Experiences',
  description: 'Experience luxury Spain holidays featuring historic cities, Mediterranean beaches, and exclusive experiences. Book your 2024 Spanish adventure today.',
  keywords: 'Spain holidays, luxury hotels Spain, Barcelona, Madrid, Costa del Sol, Spanish culture'
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Spain",
  "description": "Where passion meets Mediterranean charm",
  "url": "https://yourwebsite.com/destinations/spain",
  "touristType": ["Luxury", "Culture", "Beach", "Gastronomy"]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Spain Luxury Holiday Packages 2024",
  "description": "Premium Spain packages including 5-star hotels and exclusive experiences"
};

export default function SpainDestination() {
  return (
    <>
      <SpainContent />
      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </>
  );
}
import { Metadata } from 'next';
import LondonContent from './LondonContent';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Luxury London Holidays 2024 | Cultural & Urban Experiences',
  description: 'Experience luxury London holidays featuring iconic landmarks, fine dining, and exclusive experiences. Book your 2024 London adventure today.',
  keywords: 'London holidays, luxury hotels London, British culture, West End, London dining, Thames River'
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "London",
  "description": "Where royal heritage meets contemporary luxury",
  "url": "https://yourwebsite.com/destinations/london",
  "touristType": ["Luxury", "Urban", "Culture", "Shopping"]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "London Luxury Holiday Packages 2024",
  "description": "Premium London packages including 5-star hotels and exclusive experiences"
};

export default function LondonDestination() {
  return (
    <>
      <LondonContent />
      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </>
  );
}
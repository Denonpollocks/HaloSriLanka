import { notFound } from "next/navigation";
import { maldivesHotels } from "@/data/hotels/Maldives/maldivesHotels";
import { Suspense } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaWhatsapp, FaPhone } from "react-icons/fa";
import HotelAmenities from "@/components/HotelLandingPage/HotelAmenities";
import HotelDescription from "@/components/HotelLandingPage/HotelDescription";
import DynamicHotelGallery from "@/components/HotelLandingPage/DynamicHotelGallery";
import Highlights from "@/components/HotelLandingPage/Highlights";
import ThingsToDo from "@/components/HotelLandingPage/ThingsToDo";
import Restaurants from "@/components/HotelLandingPage/Restaurants";
import Attractions from "@/components/HotelLandingPage/Attractions";
import BookingSection from "@/components/HotelLandingPage/BookingSection";
import HotelFAQ from '@/components/HotelLandingPage/HotelFAQ';
import { Metadata } from 'next';
import SimilarHotels from "@/components/HotelLandingPage/SimilarHotels";
import Script from 'next/script';
import Breadcrumbs from "@/components/BreadCrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return maldivesHotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}

async function getHotel(slug: string) {
  return maldivesHotels.find((h) => h.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hotel = maldivesHotels.find((h) => h.slug === params.slug);

  if (!hotel) {
    return {
      title: 'Hotel Not Found',
      description: 'The requested hotel could not be found'
    };
  }

  return {
    title: `${hotel.name} | Luxury Stay in ${hotel.city} | Halo Holidays`,
    description: `Experience luxury at ${hotel.name} in ${hotel.city}. ${hotel.description.short.slice(0, 150)}...`,
    keywords: `${hotel.name}, luxury hotel, ${hotel.location}, ${hotel.city}, accommodation, ${hotel.country}`,
    openGraph: {
      title: `${hotel.name} | Luxury Stay in ${hotel.city}`,
      description: hotel.description.short,
      images: [hotel.images[0]],
      type: 'website',
    },
    alternates: {
      canonical: `https://haloholidays.com/hotels/${hotel.slug}`,
    }
  };
}

export default async function HotelPage({ params }: { params: Promise<Props['params']> | Props['params'] }) {
  const resolvedParams = await params;
  const hotel = await getHotel(resolvedParams.slug);

  if (!hotel) {
    notFound();
  }

  const primaryImage = hotel.images[0];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description.short,
    "image": hotel.images[0],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": hotel.city,
      "addressCountry": hotel.country
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": `$${hotel.price}`,
    "amenityFeature": hotel.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity.name
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": hotel.ratings.overall,
      "reviewCount": hotel.ratings.totalReviews
    }
  };

  return (
    <>
      <Script id="hotel-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <article itemScope itemType="https://schema.org/Hotel" className="w-full">
        <section className="bg-gray-50 py-4 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <time dateTime={new Date().toISOString()}>
              Last verified: {new Date().toLocaleDateString()}
            </time>
            <div className="flex items-center gap-2">
              <span>Verified by Halo Holidays</span>
              <img src="/verified-badge.png" alt="Verification Badge" width={16} height={16} />
            </div>
          </div>
        </section>

        <header className="relative">
          <div className="relative h-[60vh]">
            <Image
              src={primaryImage}
              alt={`${hotel.name} - Main View`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
              itemProp="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </header>
        <Breadcrumbs/>

        <main className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
          <div className="flex mt-10 flex-col w-full">
            <section aria-label="Hotel Overview">
              <div className="grid grid-cols-1 gap-2 items-center">
                <div className="flex" aria-label="Hotel Rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl" aria-hidden="true">★</span>
                  ))}
                </div>
                <h1 itemProp="name" className="text-2xl font-bold">{hotel.name}</h1>
              </div>
              <address className="flex items-center gap-2 mb-6 not-italic">
                <FaMapMarkerAlt className="text-gray-500" aria-hidden="true" />
                <Link href="#map" className="text-pink-600 hover:underline" itemProp="address">
                  {hotel.location}
                </Link>
              </address>
            </section>

            <Suspense fallback={<div className="h-40  bg-gray-50" />}>
              <DynamicHotelGallery
                name={hotel.name}
                location={hotel.location}
                images={hotel.images.map(image => ({
                  src: image,
                  alt: `${hotel.name} view`
                }))}
                ratings={hotel.ratings}
              />
            </Suspense>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <HotelDescription description={hotel.description} />
            </Suspense>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <HotelAmenities amenities={hotel.amenities} />
            </Suspense>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <ThingsToDo activities={hotel.thingsToDo} />
            </Suspense>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <Restaurants restaurants={hotel.restaurants} />
            </Suspense>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <Attractions attractions={hotel.attractions} airportDistance={hotel.airportDistance} />
            </Suspense>

            <section className="py-16 border-t border-gray-200 mt-8">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl text-gray-900 font-bold mb-6">Need Help Planning Your Stay?</h2>
                <p className="text-xl text-gray-700 mb-8">Connect with our travel specialists for personalized assistance</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                    Chat on WhatsApp
                  </Link>
                  <Link
                    href="/contact"
                    className="text-pink-600 hover:text-pink-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:border-pink-700 transition-colors inline-flex items-center gap-2"
                  >
                    <FaPhone className="w-5 h-5" />
                    Request a Call Back
                  </Link>
                </div>
              </div>
            </section>

            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <HotelFAQ faqs={hotel.faqs} />
            </Suspense>
          </div>

          <aside className="flex max-w-[600px] flex-col">
            <BookingSection price={hotel.price} hotelName={hotel.name} />
            <Suspense fallback={<div className="h-40 bg-gray-50" />}>
              <Highlights highlights={hotel.highlights} />
            </Suspense>
          </aside>
        </main>

        <footer>
          <Suspense fallback={<div className="h-40 bg-gray-50" />}>
            <SimilarHotels 
              currentHotelSlug={hotel.slug} 
              city={hotel.city}
              country={hotel.country}
            />
          </Suspense>
        </footer>
      </article>
    </>
  );
} 
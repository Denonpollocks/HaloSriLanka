"use client";

import LazySection from '@/components/LazySection';
import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   BuildingLibraryIcon,
//   GlobeAltIcon,
//   SparklesIcon,
//   UserGroupIcon,
//   SunIcon,
//   HeartIcon,
//   CakeIcon,
//   MapIcon
// } from '@heroicons/react/24/outline';

export default function GreeceContent() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/greece/santorini-sunset.jpg"
          alt="Santorini Sunset with Blue Domes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            Greece
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient history meets Mediterranean luxury
          </p>
        </div>
      </header>

      {/* Luxury Hotels Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024&apos;s Finest <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our curated collection of Greece&apos;s most prestigious hotels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Grace Santorini",
                location: "Santorini",
                image: "/images/destinations/greece/grace-santorini.jpg",
                price: "From €1,200 per night"
              },
              {
                title: "Amanzoe",
                location: "Porto Heli",
                image: "/images/destinations/greece/amanzoe.jpg",
                price: "From €1,500 per night"
              },
              {
                title: "Cavo Tagoo",
                location: "Mykonos",
                image: "/images/destinations/greece/cavo-tagoo.jpg",
                price: "From €900 per night"
              }
            ].map((hotel, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{hotel.title}</h3>
                    <p className="text-sm opacity-90">{hotel.location}</p>
                  </div>
                </div>
                <p className="text-pink-600 font-semibold">{hotel.price}</p>
              </div>
            ))}
          </div>
        </div>
      </LazySection>
    </main>
  );
}
"use client";

import LazySection from '@/components/LazySection';
import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   BuildingOfficeIcon,
//   GlobeAltIcon,
//   CalendarIcon,
//   MapIcon,
//   SparklesIcon,
//   UserGroupIcon,
//   AcademicCapIcon,
//   ShoppingBagIcon,
//   BuildingLibraryIcon
// } from '@heroicons/react/24/outline';

export default function ChinaContent() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/china/great-wall.jpg"
          alt="Great Wall of China at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            China
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient civilization meets modern luxury
          </p>
        </div>
      </header>

      {/* Luxury Hotels Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024s Finest <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our curated collection of Chinas most prestigious hotels and resorts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aman Summer Palace",
                location: "Beijing",
                image: "/images/destinations/china/aman-palace.jpg",
                price: "From CNY 8,800 per night"
              },
              {
                title: "Peninsula Shanghai",
                location: "Shanghai",
                image: "/images/destinations/china/peninsula.jpg",
                price: "From CNY 7,500 per night"
              },
              {
                title: "Mandarin Oriental Pudong",
                location: "Shanghai",
                image: "/images/destinations/china/mandarin-pudong.jpg",
                price: "From CNY 6,800 per night"
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
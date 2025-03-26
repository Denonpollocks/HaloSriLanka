"use client";

import LazySection from '@/components/LazySection';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BuildingLibraryIcon,
  GlobeAltIcon,
  CalendarIcon,
  SparklesIcon,
  UserGroupIcon,
  HeartIcon,
  CakeIcon,
  MapIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function JapanContent() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/japan/mount-fuji.jpg"
          alt="Mount Fuji with Cherry Blossoms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            Japan
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where tradition harmoniously blends with innovation
          </p>
        </div>
      </header>

      {/* Luxury Accommodations Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024's Finest <span className="text-pink-600">Luxury Stays</span>
            </h2>
            <p className="text-gray-600">
              From traditional ryokans to modern luxury hotels, discover Japan's most exclusive accommodations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aman Tokyo",
                location: "Tokyo",
                image: "/images/destinations/japan/aman-tokyo.jpg",
                price: "From ¥120,000 per night"
              },
              {
                title: "Hoshinoya Kyoto",
                location: "Kyoto",
                image: "/images/destinations/japan/hoshinoya-kyoto.jpg",
                price: "From ¥95,000 per night"
              },
              {
                title: "Park Hyatt Tokyo",
                location: "Tokyo",
                image: "/images/destinations/japan/park-hyatt-tokyo.jpg",
                price: "From ¥85,000 per night"
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
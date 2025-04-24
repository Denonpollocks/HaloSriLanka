"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const countries = [
  {
    name: 'Malaysia',
    image: '/images/visa-featured/Malaysia.png',
    processingTime: '4-7 business days',
    startingPrice: '£79'
  },
  {
    name: 'Dubai',
    image: '/images/visa-featured/Dubai.png',
    processingTime: '4-7 business days',
    startingPrice: '£89'
  },
  {
    name: 'Schengen',
    image: '/images/visa-featured/Schengen.png',
    processingTime: '15-20 business days',
    startingPrice: '£189'
  },
  // {
  //   name: 'Bali',
  //   image: '/images/visa-featured/Bali.png',
  //   processingTime: '3-5 business days',
  //   startingPrice: '£69'
  // },
  // {
  //   name: 'Vietnam',
  //   image: '/images/visa-featured/Vietnam.png',
  //   processingTime: '2-4 business days',
  //   startingPrice: '£49'
  // },
  // {
  //   name: 'UK',
  //   image: '/images/visa-featured/UK.png',
  //   processingTime: '15-30 business days',
  //   startingPrice: '£249'
  // },
  // {
  //   name: 'Australia',
  //   image: '/images/visa-featured/Australia.png',
  //   processingTime: '20-40 business days',
  //   startingPrice: '£199'
  // }
];

export default function VisaCountrySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {/* <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ArrowLeftIcon className="w-6 h-6 text-pink-600" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ArrowRightIcon className="w-6 h-6 text-pink-600" />
      </button> */}

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-6 px-12 pb-4 items-center justify-center"
      >
        {countries.map((country, index) => (
          <div 
            key={index}
            className="flex-none w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative h-40">
              <Image
                src={country.image}
                alt={`${country.name} Visa`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                Processing: {country.processingTime}
              </p>
              <p className="text-pink-600 font-semibold mb-4">
                From {country.startingPrice}
              </p>
              <Link
                href={`/visa-services/${country.name.toLowerCase()}`}
                className="block text-center bg-gray-50 text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
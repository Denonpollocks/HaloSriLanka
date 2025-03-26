"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

interface Rating {
  label: string;
  score: number;
}

interface HotelGalleryProps {
  name: string;
  location: string;
  images: {
    src: string;
    alt: string;
  }[];
  ratings: {
    overall: number;
    totalReviews: number;
    categories: Rating[];
  };
 
}

export default function HotelGallery({ name, location, images, ratings,  }: HotelGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Gallery */}
        <div className="w-full">
          
        

          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden ${
                  index === currentImageIndex ? 'ring-2 ring-pink-500' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Ratings */}
     
      </div>
    </div>
  );
} 
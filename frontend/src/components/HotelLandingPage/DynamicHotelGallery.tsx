"use client";

import dynamic from 'next/dynamic';

// Lightweight fallback component
function HotelGalleryFallback() {
  return (
    <div className="relative w-full h-[60vh] bg-gray-100">
      <div className="animate-pulse w-full h-full bg-gray-200" />
    </div>
  );
}

const HotelGallery = dynamic(() => import("@/components/LandingPage/HotelGallery"), {
  loading: () => <HotelGalleryFallback />,
  ssr: false
});

interface Rating {
  label: string;
  score: number;
}

interface HotelGalleryProps {
  name: string;
  location: string;
  images: { src: string; alt: string }[];
  ratings: {
    overall: number;
    totalReviews: number;
    categories: Rating[];
  };
}

export default function DynamicHotelGallery(props: HotelGalleryProps) {
  return <HotelGallery {...props} />;
}
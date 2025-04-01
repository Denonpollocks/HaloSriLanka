import React from "react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative grid grid-cols-2 items-center justify-center">
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src='/hero/Home/home-hero.png'
          alt="Explore"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative">
        <div className="border-b-1 ml-2 border-gray-300">
          <div className="flex flex-col">
            <h1 className="ml-2 text-4xl md:text-7xl lg:text-9xl 2xl:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-[#dc0069]">
              Holidays
            </h1>
            <span className="mr-2 text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-[#dc0069] text-right">
              2025
            </span>
          </div>
        </div>
        <div className="ml-4">
          <p className="mt-6 text-gray-500 max-w-xl text-sm hidden md:block">
            Why stay in one place when there’s a whole world to explore? From breathtaking landscapes to rich cultural experiences, we connect you to destinations across the globe. Start your next adventure today and let’s make memories that last a lifetime!
          </p>
          <p className="mt-6 text-gray-500 max-w-xl text-xs md:hidden">
            Why stay in one place when the world awaits? Explore breathtaking landscapes and rich cultures—your adventure starts now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
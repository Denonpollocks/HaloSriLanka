import React from "react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative flex bg-white px-6 lg:px-0 mb-12">
      {/* Image Slices */}
      <div className="flex gap-2">
        <div className="relative h-[180px] md:h-[320px] 2xl:h-[400px] w-[80px] md:w-[120px] overflow-hidden shadow-lg mt-16 md:mt-20 -ml-6 md:ml-0">
          <Image
            src='/hero/Home/1.png'
            alt="Explore"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[250px] md:h-[320px] 2xl:h-[400px] w-[120px] overflow-hidden shadow-lg ml-10 hidden md:hidden lg:block 2xl:block">
          <Image
            src='/hero/Home/2.png'
            alt="Explore"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[180px] md:h-[320px] 2xl:h-[400px] w-[80px] md:w-[120px] overflow-hidden shadow-lg mt-10 md:mt-0 lg:mt-20 md:ml-10 md:block">
          <Image
            src='/hero/Home/3.png'
            alt="Explore"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[250px] md:h-[320px] 2xl:h-[400px] w-[120px] overflow-hidden shadow-lg ml-10 hidden md:hidden lg:block 2xl:block">
          <Image
            src='/hero/Home/4.png'
            alt="Explore"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[250px] md:h-[320px] 2xl:h-[400px] w-[120px] overflow-hidden shadow-lg mt-20 ml-10 hidden md:hidden lg:hidden 2xl:block">
          <Image
            src='/hero/Home/5.png'
            alt="Explore"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute flex flex-col left-[46%] md:left-[50%] lg:left-[52%] 2xl:left-[60%] top-[20%] md:top-1/4 lg:top-1/6 2xl:top-1/4">
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
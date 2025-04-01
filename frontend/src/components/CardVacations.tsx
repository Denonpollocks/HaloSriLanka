'use client';

import { useState, useEffect } from 'react';

const promotions = [
    {
      name: "Honeymoon",
      description: "Love, Laughter & Lifetime Memories",
      image: "/images/types/honeymoon.png",
      background: "/images/watermark1.png",
    },
    {
      name: "Family",
      description: "Cherish Every Moment Together",
      image: "/images/types/family.png",
      background: "/images/watermark2.png",
    },
    {
      name: "Corporate",
      description: "Smooth & Stress-Free Business Travel",
      image: "/images/types/corporate.png",
      background: "/images/watermark3.png",
    },
  
    // Add more services
  ];

const Promotions = ({ }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Desktop View */}
      {!isMobile && (
        <div
          className="relative hidden md:block"
          style={{
            backgroundImage: "url('/images/types/c1.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        >
          <div className="md:grid md:grid-cols-3 gap-6 p-6">
            {promotions.map((promo, index) => (
              <div key={index} className="relative mt-12">
                <div
                  className="relative bg-white p-6 rounded-lg shadow-lg z-10"
                  style={{
                    backgroundImage: `url(${promo.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={promo.image}
                    alt={promo.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{promo.name}</h3>
                  <p className="text-sm text-gray-500">{promo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile View */}
      {isMobile && (
        <div
          className="block md:hidden overflow-x-auto whitespace-nowrap px-4"
          style={{
            backgroundImage: "url('/images/types/confetti.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="flex gap-4 mt-10 mb-12">
            {promotions.map((promo, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-80">
                <img
                  src={promo.image}
                  alt={promo.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold">{promo.name}</h3>
                <p className="text-sm text-gray-500">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotions;

import React from 'react';
import Image from 'next/image';
import LogoSlider from '@/components/ui/LogoSlider';

const logos = [
  { src: '/images/news/1.png', alt: 'Ade Derana', url: 'https://bizenglish.adaderana.lk/british-travel-awards-recognises-halo-holidays-as-best-travel-company-for-south-east-asia/' },
  { src: '/images/news/2.png', alt: 'Daily FT', url: 'https://www.ft.lk/travel-tourism/British-Travel-Awards-recognises-Halo-Holidays-as-Best-Travel-Company-for-Southeast-Asia/27-772618' },
  { src: '/images/news/3.png', alt: 'Daily Mirror', url: 'https://www.dailymirror.lk/print/business-news/British-Travel-Awards-recognises-Halo-Holidays-as-Best-Travel-Company-for-SEA/273-301179' },
  { src: '/images/news/4.png', alt: 'Sunday Times', url: 'https://www.sundaytimes.lk/250202/business-times/british-travel-awards-recognises-halo-holidays-586032.html' },
  { src: '/images/news/8.png', alt: 'Sunday Observer', url: 'https://www.sundayobserver.lk/2025/02/16/business/45168/halo-holidays-wins-award/' },
]

export default function BritishTravelAwards() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          British Travel Awards 2024
        </h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/BTA.png"
            alt="British Travel Awards"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}

          <div className="max-w-3xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                We are thrilled to announce that our parent company, Halo Holidays UK, has been honored with the British Travel Award for South East Asia! This prestigious recognition is a testament to our commitment to excellence and the trust you, our valued customers, have placed in us.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
                A heartfelt thank you to everyone who supported us on this incredible journey. Your loyalty and encouragement inspire us to continue delivering unforgettable travel experiences.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                Here's to many more adventures together! ✈️🌏
              </p>
            </div>

            {/* Infinite Scrolling News Logos */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Achievements in the News</h2>
              <div className="relative flex overflow-x-hidden">
                <LogoSlider logos={logos} speed={0.5} className="mt-8 mb-8" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the British Travel Awards</h2>
              <p className="text-gray-700 mb-4">
                The British Travel Awards is the largest consumer voted awards programme in the UK. It is the benchmark for excellence when it comes to finding out who really is the best in the travel industry.
              </p>
              <p className="text-gray-700">
                Winning this award is a significant achievement that reflects our dedication to providing exceptional travel experiences and outstanding customer service.
              </p>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className="max-w-3xl w-full">
            <div className="grid grid-cols-1 gap-5">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/BTA/1.png"
                  alt="Award Trophy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/BTA/2.png"
                  alt="Celebration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/BTA/3.png"
                  alt="Award Ceremony"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
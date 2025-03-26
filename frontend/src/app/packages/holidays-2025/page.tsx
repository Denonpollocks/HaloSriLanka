import Image from 'next/image';
import PackageList from '@/components/PackageList';
import Features from '@/components/Features';
import { homeFeatures } from '@/data/features';
import type { Metadata } from 'next';
import { holidays2025 } from '@/data/Holidays2025';
import Breadcrumbs from '@/components/BreadCrumbs';

export const metadata: Metadata = {
  title: '2025 Holiday Packages | Halo Holidays',
  description: 'Discover our carefully curated family holiday packages with kid-friendly activities, comfortable accommodations, and memorable experiences for the whole family.',
  keywords: '2025 holidays, kid-friendly vacations, family travel packages, family-friendly resorts',
};

export default function Holidays2025() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/holidays-2025/holidays-2025.jpg"
          alt="Family enjoying beach vacation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl text-white font-bold mb-4"> Holidays
         <span className="text-pink-600"> 2025</span>  
          </h1>
          <p className="text-white text-xl max-w-2xl">
          Explore our handpicked <span className="text-yellow-300">Holidays 2025</span> collection featuring unforgettable getaways for families, couples, and adventurers. 
          </p>
     
        </div>
        
     
     
      </section>
      <Breadcrumbs />

      
      

      {/* Packages List */}
      <PackageList packages={holidays2025} />
    {/* Features Section */}
      <Features features={homeFeatures} />

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Planning Your Family Vacation?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts are here to help you create the perfect family holiday experience.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>
    </main>
  );
}
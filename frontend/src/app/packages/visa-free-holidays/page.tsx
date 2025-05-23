import Image from 'next/image';
import PackageList from '@/components/PackageList';
import Features from '@/components/Features';
import { homeFeatures } from '@/data/features';
import type { Metadata } from 'next';
import { visaFreePackages } from '@/data/visa-free-package';
import Breadcrumbs from '@/components/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Visa Free Holidays | Halo Holidays',
  description: 'Discover our carefully curated family holiday packages with kid-friendly activities, comfortable accommodations, and memorable experiences for the whole family.',
  keywords: 'Visa Free Holidays, kid-friendly vacations, family travel packages, family-friendly resorts',
};

export default function VisaFreeHolidays() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/visa-free-holidays/Visa-free-holidays-3.jpg"
          alt="Family enjoying beach vacation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl text-white font-bold mb-4"> <span className="text-pink-400"> Visa Free</span> Holidays
        
          </h1>
          <p className="text-white text-xl max-w-2xl">
          Don’t want to stress about visa applications? Explore our exclusive <span className="text-pink-300">visa-free holiday packages</span> — no paperwork, just paradise.
          </p>
     
        </div>
        
     
     
      </section>
      <Breadcrumbs />

      {/* Features Section */}
      <Features features={homeFeatures} />

      {/* Packages List */}
      <PackageList packages={visaFreePackages} />

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
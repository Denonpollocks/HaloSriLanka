import Image from 'next/image';
import PackageList from '@/components/PackageList';
import Features from '@/components/Features';
import { homeFeatures } from '@/data/features';
import type { Metadata } from 'next';
import { familyPackages } from '@/data/familyPackages';
import Breadcrumbs from '@/components/BreadCrumbs';
import CouldntFindSection from '@/components/CouldntFindSection';

export const metadata: Metadata = {
  title: 'Family Holiday Packages | Halo Holidays',
  description: 'Discover our carefully curated family holiday packages with kid-friendly activities, comfortable accommodations, and memorable experiences for the whole family.',
  keywords: 'family holidays, kid-friendly vacations, family travel packages, family-friendly resorts',
};

export default function FamilyPackages() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/family-packages/Family-Packages-1.png"
          alt="Family enjoying beach vacation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl text-white font-bold mb-4">
         <span className="text-yellow-300"> FAMILY</span>   PACKAGES
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Create lasting memories with our specially curated <span className="text-yellow-300">family  holiday packages</span>
          </p>
          
          {/* Mobile Speech Bubble */}
          <div className="md:hidden mt-8">
            <div className="bg-pink-600 rounded-lg p-6 relative max-w-sm">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-pink-600 transform rotate-45"></div>
              <div className="absolute inset-0 border-10 border-yellow-300 rounded-lg transform translate-x-1 translate-y-1 -z-10">
                <div className="absolute -top-4 left-8 w-8 h-8 border-l-10 border-t-2 border-yellow-300 transform rotate-45"></div>
              </div>
              <div className="space-y-4">
                <p className="text-white text-xl font-semibold">
                  Kids stay <span className="text-yellow-300">free</span> offers!
                </p>
                <p className="text-white text-xl font-semibold">
                  Kids friendly <span className="text-yellow-300">activities!</span>
                </p>
                <p className="text-white text-xl font-semibold">
                  Spacious Family <span className="text-yellow-300">Suites!</span>
                </p>
                <p className="text-yellow-300 text-xl font-semibold">
                  Installment <span className="text-white">Payment Plans!</span>
                </p>
                <p className="text-yellow-300 text-xl font-semibold">All you need, here for you!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Speech Bubble */}
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="bg-pink-600 rounded-lg p-6 relative">
            <div className="absolute -right-4 top-0 w-8 h-8 bg-pink-600 transform rotate-45 translate-y-4"></div>
            <div className="absolute inset-0 border-10 border-yellow-300 rounded-lg transform translate-x-1 translate-y-1 -z-10">
              <div className="absolute -right-4 top-0 w-8 h-8 border-r-10 border-t-10 border-yellow-300 transform rotate-45 translate-y-4"></div>
            </div>
            <div className="space-y-4">
              <p className="text-white font-serif italic text-3xl font-semibold">
                Kids stay <span className="text-yellow-300">free</span> offers!
              </p>
              <p className="text-white font-serif italic  text-3xl font-semibold">
                Kids friendly <span className="text-yellow-300">activities!</span>
              </p>
              <p className="text-white font-serif italic  text-3xl font-semibold">
                Spacious Family <span className="text-yellow-300">Suites!</span>
              </p>
              <p className="text-yellow-300 font-serif italic text-3xl font-semibold">
                Installment <span className="text-white">Payment Plans!</span>
              </p>
             
            </div>
            
          </div>
        </div>
      </section>
      <Breadcrumbs /> 
      {/* Features Section */}
      <Features features={homeFeatures} />

      {/* Packages List */}
      <PackageList packages={familyPackages} />

      {/* Couldn't Find Section */}
      <CouldntFindSection />

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Planning Your Family Vacation?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts are here to help you create the perfect family holiday experience.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors cursor-pointer">
            Contact Us Now
          </button>
        </div>
      </section>
    </main>
  );
}
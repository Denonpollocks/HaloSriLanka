"use client";

import { useEffect, useState } from "react";
import { TourData } from "@/types/tours";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaMapMarkerAlt, FaUtensils, FaBinoculars, FaChartLine, FaChevronDown } from "react-icons/fa";
import PriceCard from "@/components/LandingPage/PriceCard";
import HighlightsSection from "@/components/LandingPage/Highlights";
import ItinerarySection from "@/components/LandingPage/Itinerary";
import WhatsIncluded from "@/components/LandingPage/WhatsIncluded";
import PricesTable from "@/components/LandingPage/DatesAndPrice";
import Accommodation from "@/components/LandingPage/Accomodation";
import TourTestimonials from "@/components/LandingPage/TourTestimonial";
import ImportantInformation from "@/components/LandingPage/ImportantInfo";
import PhotoGallery from "@/components/LandingPage/PhotoGallery";
import { IconType } from "react-icons";
import Breadcrumbs from "../BreadCrumbs";

const sections = [
  { id: "highlights", label: "Highlights" },
  { id: "itinerary", label: "Itinerary" },
  { id: "prices", label: "Dates & Prices" },
  { id: "accommodation", label: "Accommodation" },
  { id: "testimonials", label: "Reviews" },
  { id: "important-information", label: "Important Info" }
];

const iconMapping: Record<string, IconType> = {
  location: FaMapMarkerAlt,
  meals: FaUtensils,
  excursions: FaBinoculars,
  pace: FaChartLine
};

export default function TourPageComponent({ tourData }: { tourData: TourData }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const priceCard = document.getElementById("price-card");
      if (priceCard) {
        const rect = priceCard.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="relative h-[60vh]">
        <Image
          src={tourData.heroImage}
          alt={tourData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <button 
          onClick={() => setIsGalleryOpen(true)}
          className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white transition-colors shadow-lg"
        >
          <FaCamera className="w-5 h-5" />
          View {tourData.gallery?.length || 0} Photos
        </button>
      </div>
      <Breadcrumbs/>
      {/* Section Navigation Bar */}
      <div className="hidden lg:block bg-white border-b border-gray-200 sticky top-18 z-30">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="py-4 px-2 text-gray-600 hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
      
        <div className="flex-1">
        
          <div className="space-y-6">
            {/* Title and Quick Facts */}
            <div className="mt-10">
              <h1 className="text-4xl font-bold text-gray-900">{tourData.title}</h1>
              <p className="text-xl text-gray-600 mt-2">{tourData.duration} Day Escorted Tour</p>
            </div>
          

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-200">
              {tourData.quickFacts.map((fact, index) => {
                const IconComponent = iconMapping[fact.icon as string];
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <IconComponent className="w-5 h-5 text-pink-600" />
                    {/* <span className="text-gray-600">{fact.label}</span> */}
                    <span className="text-gray-600">{fact.value}</span>
                  </div>
                );
              })}
            </div>
            <div className="prose prose-lg max-w-none relative">
              <div className={`relative ${!isExpanded ? 'max-h-[100px] overflow-hidden' : ''}`}>
                <p className="text-gray-600">
                  {tourData.description}
                </p>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                )}
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-pink-600 font-medium hover:text-pink-700 flex items-center gap-1 ${
                  !isExpanded ? 'relative -mt-8' : 'mt-2'
                }`}
              >
                {isExpanded ? "Read less" : "Read more"}
                <FaChevronDown 
                  className={`w-4 h-4 transform transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Sections */}
            <section id="highlights">
              <HighlightsSection highlights={tourData.highlights.items} mapImage={tourData.mapImage} mapKey={tourData.highlights.mapKey} />
            </section>

            <section id="itinerary">
              <ItinerarySection itinerary={tourData.itinerary as any[]} />
            </section>

            <section id="whats-included">
              <WhatsIncluded items={tourData.includedItems} />
            </section>

            <section id="prices">
              <PricesTable data={tourData.pricesData.years} />
            </section>

            <section id="accommodation">
              <Accommodation hotels={tourData.accommodation.hotels} />
            </section>

            <section id="testimonials">
              <TourTestimonials testimonials={tourData.testimonials} />
            </section>

            <section id="important-information">
              <ImportantInformation
                title={tourData.importantInformation.title}
                items={tourData.importantInformation.items}
              />
            </section>
          </div>
        </div>

        {/* Sticky Price Card */}
        <div className="w-full lg:w-[380px]">
          <div className="sticky pt-20 top-24">
            <PriceCard price={tourData.price} pdfLink={tourData.pdfLink} nights={tourData.duration} />
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <PhotoGallery
        photos={tourData.gallery?.map(url => ({ 
          src: url,
          alt: tourData.title
        })) || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
} 
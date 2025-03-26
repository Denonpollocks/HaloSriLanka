"use client";

import { useEffect, useState } from "react";
import PriceCard from "@/components/LandingPage/PriceCard"; // Ensure you have the PriceCard component
import HighlightsSection from "@/components/LandingPage/Highlights";
import ItinerarySection from "@/components/LandingPage/Itinerary";
import WhatsIncluded from "@/components/LandingPage/WhatsIncluded";
import PricesTable from "@/components/LandingPage/DatesAndPrice";
import Accommodation from "@/components/LandingPage/Accomodation";
import TourTestimonials from "@/components/LandingPage/TourTestimonial";
import ImportantInformation from "@/components/LandingPage/ImportantInfo";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaMapMarkerAlt, FaUtensils, FaBinoculars, FaChartLine, FaChevronDown } from "react-icons/fa";
import PhotoGallery from "@/components/LandingPage/PhotoGallery";

const sections = [
  { id: "highlights", label: "Highlights" },
  { id: "itinerary", label: "Itinerary" },
  { id: "prices", label: "Dates & Prices" },
  { id: "accommodation", label: "Accommodation" },
  { id: "testimonials", label: "Reviews" },
  { id: "important-information", label: "Important Info" }
];

export default function TourPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Sample gallery data - replace with your actual images
  const galleryPhotos = [
    {
      src: "/tour-images/sri-lanka-1.jpg",
      alt: "Sigiriya Rock Fortress",
      caption: "The ancient palace and fortress complex of Sigiriya"
    },
    {
      src: "/tour-images/sri-lanka-2.jpg",
      alt: "Tea Plantations",
      caption: "Stunning tea plantations in Nuwara Eliya"
    },
    {
      src: "/tour-images/sri-lanka-3.jpg",
      alt: "Temple of the Tooth",
      caption: "The sacred Temple of the Tooth in Kandy"
    },
    // ... add more photos as needed
  ];

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
          src="/images/tours/srilanka/Sri-Lanka.png"
          alt="Tour Hero"
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
          View 17 Photos
        </button>
      </div>

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
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                  });
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <PhotoGallery
        photos={galleryPhotos}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-6 py-4 text-sm">
        <div className="flex items-center gap-2">
          <Link href="/tours" className="text-pink-600 hover:text-pink-700">
            Sri Lanka Escorted Tours
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Grand Tour of Sri Lanka</span>
        </div>
      </nav>

      {/* Tour Details Section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="space-y-6">
            {/* Title Section */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Grand Tour of Sri Lanka</h1>
              <p className="text-xl text-gray-600 mt-2">17 Day Escorted Tour</p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">Sri Lanka, Indian Ocean</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUtensils className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">44 Meals Included</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBinoculars className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">16 Excursions</span>
              </div>
              <div className="flex items-center gap-3">
                <FaChartLine className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">Intermediate Pace</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                Journey to the heart of this captivating island, boasting an
                incredible variety of highlights from undiscovered pristine beaches
                in the East, to ancient civilizations and sacred pilgrimage sites in
                the Cultural Triangle. Journey high up into the tea plantations of
                Sri Lanka's hill country...
              </p>
              <button className="text-pink-600 font-medium hover:text-pink-700 mt-2 flex items-center gap-1">
                Read more 
                <FaChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Rest of the components */}
            <section id="highlights"> 
            <HighlightsSection
              highlights={[
                "Visit temples and bazaars on a tour of Colombo",
                "Relax upon the beaches of Passikudah and Mirissa",
                "Explore the magnificent Sigiriya Rock Fortress and Dambulla Rock Temple",
                "Discover Kandy&apos;s sacred Temple of the Tooth",
                "Wander the ancient city ruins of Anuradhapura",
                "Enjoy a tour of the lush Nuwara Eliya tea plantation",
                "Wildlife safaris through Yala and Udawalawe National Parks",
                "Marvel at the beauty of Peradeniya botanical gardens",
                "Tour Galle&apos;s colonial buildings and UNESCO-listed centre",
              ]}
              mapImage="/your-map-image.jpg"
              mapKey={[
                { label: "Train", color: "green" },
                { label: "Coach", color: "black" },
                { label: "Boat", color: "blue" },
                { label: "Airplane", color: "red" },
                { label: "Walking", color: "orange" },
                { label: "Number of nights", color: "#005bbb" },
              ]}
              />
            </section>

            <section id="itinerary">
            <ItinerarySection
              itinerary={[
                {
                  day: 0,
                  title: "UK to Colombo",
                  description: "Depart London on your scheduled, overnight flight to Colombo.",
                    travelModes: ['flight', 'transfer', 'tour', 'walking', 'coach', 'boat', ]
                },
                {
                  day: 1,
                  title: "UK to Colombo",
                  description: "Depart London on your scheduled, overnight flight to Colombo.",
                  travelModes: ['flight', 'transfer', 'tour', 'walking', 'coach', 'boat', ]
                },

                
                {
                  day: 2,
                  title: "Colombo",
                  description: "On arrival, you will be transferred to your hotel in Colombo. Enjoy the afternoon at leisure before a welcome cocktail and dinner.",
                  travelModes: ['transfer']
                },
                {
                  day: 3,
                  title: "Colombo",
                  description: "On arrival, you will be transferred to your hotel in Colombo. Enjoy the afternoon at leisure before a welcome cocktail and dinner.",
                  travelModes: ['transfer']
                },
                {
                  day: 4,
                  title: "Colombo",
                  description: "On arrival, you will be transferred to your hotel in Colombo. Enjoy the afternoon at leisure before a welcome cocktail and dinner.",
                  travelModes: ['transfer']
                },
                {
                  day: 5,
                  title: "Colombo",
                  description: "On arrival, you will be transferred to your hotel in Colombo. Enjoy the afternoon at leisure before a welcome cocktail and dinner.",
                  travelModes: ['transfer']
                }
              ]}
            />

            </section>

            <section id="whats-included">
            <WhatsIncluded
              items={[
                "Hand-picked Accommodation",
                "Expert Local Guides",
                "Overseas Transfers and Transport (as per itinerary)",
                "44 Meals",
                "All entrance fees",
                "Hold Luggage for all flights",
                "16 Excursions",
                "International Return Flights",
                "ABTA & ATOL Protection"
              ]}
            />
            </section>

            
            <section id="prices">
            <PricesTable
              data={[
                {
                  year: "2025",
                  dates: [
                    {
                      month: "March 2025",
                      basePrice: "",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "April 2025",
                      basePrice: "",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "May 2025",
                      basePrice: "£2,599",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "June 2025",
                      basePrice: "£2,499",
                      availableDates: [
                        { dateRange: "4th Jun - 20th Jun", price: "£2,499" },
                        { dateRange: "18th Jun - 4th Jul", price: "£3,149", discount: "£3,049" }
                      ]
                    },
                    {
                      month: "August 2025",
                      basePrice: "£3,499",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "September 2025",
                      basePrice: "£2,899",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "October 2025",
                      basePrice: "£2,799",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "November 2025",
                      basePrice: "£2,999",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    }
                  ]
                },
                {
                  year: "2026",
                  dates: [
                    {
                      month: "March 2026",
                      basePrice: "£2,799",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    },
                    {
                      month: "April 2026",
                      basePrice: "£2,899",
                      availableDates: [{ dateRange: "", price: "", discount: "" }]
                    }
                  ]
                }
              ]}
            />
            </section>

            <section id="accommodation">
            <Accommodation
              hotels={[
                {
                  name: "Ramada Colombo",
                  image: "/path-to-ramada-image.jpg",
                  rating: 4,
                  nights: 2,
                  location: "Colombo, Sri Lanka",
                  detailsLink: "#",
                },
                {
                  name: "Amaya Lake",
                  image: "/path-to-amaya-image.jpg",
                  rating: 4,
                  nights: 3,
                  location: "Dambulla, Sri Lanka",
                  detailsLink: "#",
                },
                {
                  name: "Jetwing Blue",
                  image: "/path-to-jetwing-image.jpg",
                  rating: 5,
                  nights: 2,
                  location: "Negombo, Sri Lanka",
                  detailsLink: "#",
                },
              ]}
            />
            </section>

            <section id="testimonials">
            <TourTestimonials
              testimonials={[
                {
                  name: "Margaret Foley",
                  date: "24 Sep 24",
                  text: "Had a fantastic holiday. The guide, driver, and assistant were extremely helpful. The guide ensured we covered the full itinerary and gave us loads of information regarding Sri Lanka..."
                },
                {
                  name: "Jeffrey Hodge",
                  date: "01 Sep 24",
                  text: "We had a great time on our tour. The guide was very knowledgeable and the driver was very helpful. The tour was well organised and the accommodation was good. We would recommend this tour to anyone looking for a great holiday in Sri Lanka."
                }
              ]}
            />
            </section>

            <section id="important-information">

<ImportantInformation
  title="Important Information"
  items={[
    {
      title: "Itinerary Notes",
      content:
        "The order of events and sightseeing may vary according to local conditions or for operational purposes. The driving times listed are point to point and do not include the duration of excursions or stops en route...",
    },
    { title: "Payment", content: "Payment information details will be provided at the time of booking." },
    { title: "Passport and Visa information", content: "Ensure your passport is valid for at least 6 months beyond your travel date. Visa requirements vary by country." },
    { title: "Flight Information", content: "Flights may include layovers and are subject to airline policies and availability." },
    { title: "Insurance", content: "Travel insurance is recommended and can be arranged at the time of booking." },
    { title: "Health and Vaccinations", content: "Consult your doctor for recommended vaccinations before traveling." },
    { title: "Physical Accessibility", content: "Some excursions may not be suitable for travelers with limited mobility." },
    { title: "Currency Exchange", content: "Local currency and exchange rate details will be provided upon arrival." },
    { title: "Credit Card Information", content: "Most major credit cards are accepted, but we advise carrying some local cash." },
    { title: "Personal Expenses and Tipping", content: "Personal expenses are not included in the tour cost. Tipping guides and drivers is customary." },
    { title: "Group Size", content: "Group sizes may vary depending on demand, with an average of 15-20 travelers per tour." },
    { title: "Tour Guide", content: "Your tour will be led by an experienced, English-speaking guide." },
    { title: "Transport and Transfers", content: "Transfers between destinations are included as per the itinerary." },
    { title: "Accommodation", content: "Hotels are selected for their comfort and location, but final details will be confirmed 21 days before travel." },
    { title: "Meals and Drinks", content: "Meals included are specified in the itinerary. Drinks are generally not included unless otherwise stated." },
                { title: "Public and Religious Holidays", content: "Some attractions may be closed on public or religious holidays." },
              ]}
            />
            </section>

          </div>
        </div>

        {/* Sticky Price Card */}
        <div className="w-full lg:w-[380px]">
          <div className="sticky pt-20 top-24">
            <PriceCard price={2499} pdfLink="/tour-dossier.pdf" nights="17" />
          </div>
        </div>
      </div>
    </div>
  );
}

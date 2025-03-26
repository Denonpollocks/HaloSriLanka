import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { 
  PaperAirplaneIcon, 
  CalendarIcon, 
  GlobeAsiaAustraliaIcon,
  TicketIcon,
  IdentificationIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  TrophyIcon,
  UserGroupIcon,
  BeakerIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  SparklesIcon,
  CakeIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Luxury China Tours 2024 | Cultural & Modern Experiences',
  description: 'Experience luxury China tours featuring ancient wonders, modern cities, and exclusive cultural experiences. Book your 2024 Chinese adventure today.',
  keywords: 'China tours, luxury China travel, Great Wall, Shanghai, Beijing, Chinese culture, luxury hotels',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/china'
  },
  openGraph: {
    title: 'Luxury China Tours 2024 | Cultural Experiences',
    description: 'Discover China\'s finest hotels, ancient wonders, and modern experiences with exclusive tour packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/china/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Great Wall of China and Luxury Resort'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "China",
  "description": "Where ancient civilization meets modern luxury",
  "url": "https://haloholidays.com/destinations/china",
  "touristType": ["Luxury", "Culture", "History", "Urban"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1600"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "CNY",
    "lowPrice": "15000",
    "highPrice": "80000",
    "offerCount": "25"
  }
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "China Luxury Tour Packages 2024",
  "description": "Premium China packages including 5-star hotels and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CNY",
    "price": "15000",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function ChinaDestination() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/china/china.jpg"
          alt="Great Wall of China at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            China
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient civilization meets modern luxury
          </p>
        </div>
      </header>

      <Breadcrumbs />   

      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">China</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience the perfect blend of ancient heritage and modern innovation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">China Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "5,000+", label: "Years of History", icon: "🏛️" },
                      { number: "21,196", label: "KM Great Wall", icon: "🧱" },
                      { number: "23", label: "World Heritage Sites", icon: "🗺️" },
                      { number: "8", label: "Major Cuisines", icon: "🥢" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl mb-2 block">{stat.icon}</span>
                        <span className="block text-2xl font-bold text-gray-800">{stat.number}</span>
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2024 Updates Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">2024 Travel Updates</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "High-Speed Rail",
                        desc: "New routes connecting major cities",
                        icon: "🚄"
                      },
                      {
                        title: "Digital Payment",
                        desc: "Wider acceptance of foreign cards",
                        icon: "💳"
                      },
                      {
                        title: "Cultural Events",
                        desc: "Year of the Dragon celebrations",
                        icon: "🐉"
                      },
                      {
                        title: "Luxury Hotels",
                        desc: "New international properties",
                        icon: "🏨"
                      }
                    ].map((update, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors">
                        <span className="text-2xl">{update.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{update.title}</h4>
                          <p className="text-sm text-gray-600">{update.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024's Finest <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our curated collection of China's most prestigious hotels and resorts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aman Summer Palace",
                location: "Beijing",
                image: "/images/destinations/china/aman-palace.jpg",
                price: "From CNY 8,000 per night"
              },
              {
                title: "Peninsula Shanghai",
                location: "Shanghai",
                image: "/images/destinations/china/peninsula-shanghai.jpg",
                price: "From CNY 6,500 per night"
              },
              {
                title: "Mandarin Oriental Pudong",
                location: "Shanghai",
                image: "/images/destinations/china/mandarin-pudong.jpg",
                price: "From CNY 5,800 per night"
              }
            ].map((hotel, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{hotel.title}</h3>
                    <p className="text-sm opacity-90">{hotel.location}</p>
                  </div>
                </div>
                <p className="text-pink-600 font-semibold">{hotel.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
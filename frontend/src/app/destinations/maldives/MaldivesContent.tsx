"use client";

import LazySection from '@/components/LazySection';
import Image from 'next/image';
import Link from 'next/link';
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
  HomeModernIcon
} from '@heroicons/react/24/outline';

export default function MaldivesContent() {
  return (
    <main className="min-h-screen">
         <header className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/destinations/maldives/maldives-watervilla.png"
        alt="Luxury Maldives Water Villas at Sunset"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Title */}
        <h1
          className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                      bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}
        >
          Maldives
        </h1>

        <p className="text-white text-xl max-w-2xl mt-4">
          Where luxury meets paradise in the heart of the Indian Ocean
        </p>
      </div>

  
    </header>

      {/* Introduction Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose the <span className="text-pink-600">Maldives</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              The Maldives remains the world&apos;s premier tropical destination, offering an unparalleled combination of luxury and natural beauty.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Paradise in Numbers</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "26", label: "Atolls", icon: "🏝️" },
                      { number: "1000+", label: "Coral Islands", icon: "🐠" },
                      { number: "99%", label: "Ocean Coverage", icon: "🌊" },
                      { number: "31°C", label: "Avg. Temperature", icon: "☀️" }
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
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">2024 Updates</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "New Seaplane Terminal",
                        desc: "Opening Q3 2024 for enhanced travel comfort",
                        icon: "✈️"
                      },
                      {
                        title: "Coral Regeneration",
                        desc: "Enhanced programs across multiple atolls",
                        icon: "🌊"
                      },
                      {
                        title: "Luxury Expansion",
                        desc: "15 new premium water villas opening",
                        icon: "🏖️"
                      },
                      {
                        title: "Sustainable Tourism",
                        desc: "New eco-friendly initiatives launched",
                        icon: "🌿"
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

              {/* UNESCO Badge */}
              <div className="bg-gradient-to-r from-blue-200 to-blue-200 text-gray-700 p-6 rounded-2xl mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UNESCO Biosphere Reserve</h3>
                    <p className="text-gray-700">Baa Atoll recognized for its exceptional marine biodiversity</p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Luxury Resorts Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024&apos;s Premier <span className="text-pink-600">Luxury Resorts</span>
            </h2>
            <p className="text-gray-600">
              Discover our handpicked collection of the finest Maldivian resorts, each offering unique experiences and unparalleled luxury
            </p>
          </div>

          {/* Featured Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/hotels/maldives/hotel-1.jpg"
                  alt="Overwater Paradise Suite"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">North Malé Atoll</p>
                  <h3 className="text-2xl font-bold">Overwater Paradise Suite</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £4,299
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500 text-sm">(1,250 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Private infinity pool', 'Glass floor panels', 'Butler service', 'Free seaplane transfers'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                  View Package
                </button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/destinations/maldives/resort1.jpg"
                  alt="Overwater Paradise Suite"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">North Malé Atoll</p>
                  <h3 className="text-2xl font-bold">Overwater Paradise Suite</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £4,299
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500 text-sm">(1,250 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Private infinity pool', 'Glass floor panels', 'Butler service', 'Free seaplane transfers'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                  View Package
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/destinations/maldives/resort1.jpg"
                  alt="Overwater Paradise Suite"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">North Malé Atoll</p>
                  <h3 className="text-2xl font-bold">Overwater Paradise Suite</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £4,299
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500 text-sm">(1,250 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Private infinity pool', 'Glass floor panels', 'Butler service', 'Free seaplane transfers'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                  View Package
                </button>
              </div>
            </div>
            



            {/* Repeat similar structure for Family Beach Villa and Honeymoon Retreat */}
          </div>

          {/* Atoll Guide Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Your Guide to <span className="text-pink-600">Maldives Atolls</span>
            </h3>
            
            <p className="text-gray-700 mb-8 text-center">
              Each Maldivian atoll offers a unique experience. Let us help you find your perfect paradise.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Best for Families",
                  location: "Kaafu Atoll",
                  features: ["Shallow lagoons", "Kids' clubs", "Easy access"],
                  color: "bg-gray-50"
                },
                {
                  title: "Top Diving Spot",
                  location: "Raa Atoll",
                  features: ["Protected reefs", "Marine life", "Clear waters"],
                  color: "bg-gray-100"
                },
                {
                  title: "Luxury Seekers",
                  location: "Baa Atoll",
                  features: ["Private islands", "Premium resorts", "UNESCO reserve"],
                  color: "bg-gray-50"
                }
              ].map((atoll, index) => (
                <div key={index} className={`${atoll.color} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                  <h4 className="font-semibold text-lg mb-2">{atoll.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{atoll.location}</p>
                  <ul className="space-y-2">
                    {atoll.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>

      {/* Experiences Section */}
      <LazySection className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Unique Maldivian <span className="text-pink-600">Experiences</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Discover extraordinary adventures and moments of pure relaxation in paradise
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Marine Adventures Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src="/images/destinations/maldives/marine-adventures.png"
                  alt="Scuba diving in Maldives"
                  width={800}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                  Marine Adventures
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Home to 5% of the world&apos;s reef area, the Maldives offers exceptional diving opportunities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Manta Point",
                      location: "South Ari Atoll",
                      season: "Aug-Nov",
                      highlight: "Manta ray cleaning stations"
                    },
                    {
                      title: "Banana Reef",
                      location: "North Malé",
                      season: "Year-round",
                      highlight: "Vibrant coral gardens"
                    },
                    {
                      title: "Tiger Shark Zone",
                      location: "Fuvahmulah",
                      season: "Peak: Dec-Mar",
                      highlight: "Advanced diving spot"
                    }
                  ].map((site, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-pink-600 mb-2">{site.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📍 {site.location}</p>
                        <p>🗓 {site.season}</p>
                        <p className="text-xs mt-2 text-gray-500">{site.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wellness & Relaxation Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src="/images/destinations/maldives/maldives-luxury-spa.png"
                  alt="Luxury spa in Maldives"
                  width={800}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                  Wellness & Relaxation
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Maldivian spas combine traditional techniques with modern luxury in breathtaking settings.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Signature Treatments",
                      treatments: [
                        "Coconut Shell Massage",
                        "Coral Stone Therapy",
                        "Ayurvedic Rituals"
                      ]
                    },
                    {
                      title: "Unique Settings",
                      treatments: [
                        "Overwater treatment rooms",
                        "Sunset yoga pavilions",
                        "Private island meditation"
                      ]
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-pink-600 mb-4">{category.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {category.treatments.map((treatment, idx) => (
                          <div key={idx} className="p-3 bg-pink-50 rounded-lg text-center">
                            <p className="text-sm text-gray-700">{treatment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Travel Guide Section */}
      <LazySection className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-bold text-center mb-12">
      2024 Travel <span className="text-pink-600">Essentials</span>
    </h2>
    
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Getting There Card */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
        <div className="flex items-center gap-3 mb-6">
          <PaperAirplaneIcon className="w-8 h-8 text-pink-600" />
          <h3 className="text-xl font-semibold">Getting There</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: PaperAirplaneIcon, text: "Direct flights from London (10h 30m)" },
            { icon: GlobeAsiaAustraliaIcon, text: "Transfers: Seaplane vs Speedboat" },
            { icon: TicketIcon, text: "Luggage restrictions for seaplanes" },
            { icon: IdentificationIcon, text: "Visa-on-arrival process" }
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <item.icon className="w-5 h-5 text-pink-600" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* When to Visit Card */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
        <div className="flex items-center gap-3 mb-6">
          <CalendarIcon className="w-8 h-8 text-pink-600" />
          <h3 className="text-xl font-semibold">When to Visit</h3>
        </div>
        <div className="space-y-4">
          {[
            { season: "High Season (Dec-Mar)", desc: "Dry season, best for diving" },
            { season: "Value Season (Apr-Nov)", desc: "Lower rates, great for surfers" }
          ].map((period, index) => (
            <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <h4 className="font-semibold text-pink-900">{period.season}</h4>
              <p className="text-sm mt-2 text-gray-700">{period.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Tourism Card */}
      <div className="md:col-span-2 lg:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
        <div className="flex items-center gap-3 mb-6">
          {/* <LeafIcon className="w-8 h-8 text-pink-600" /> */}
          <h3 className="text-xl font-semibold">Sustainable Tourism</h3>
        </div>
        <p className="text-gray-700 mb-4">
          The Maldives leads in eco-tourism with initiatives including:
        </p>
        <div className="space-y-4">
          {[
            { title: "Coral Regeneration", desc: "Participate in reef planting programs" },
            { title: "Plastic-Free Resorts", desc: "60+ resorts now completely plastic-free" },
            { title: "Solar Energy", desc: "40% of resorts powered by solar" }
          ].map((initiative, index) => (
            <div key={index} className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">{initiative.title}</p>
              <p className="text-sm mt-2 text-gray-700">{initiative.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</LazySection>

{/* Family Holidays Section */}
<LazySection className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Family Holidays in the <span className="text-pink-600">Maldives</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Discover child-friendly resorts with dedicated kids&apos; clubs, family water villas, and safe swimming lagoons
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          title: "Kids Stay Free Offers",
          desc: "Special 2024 family packages with complimentary child stays",
          icon: UserGroupIcon
        },
        {
          title: "Teen Adventure Programs",
          desc: "Watersports, marine biology workshops & more",
          icon: BeakerIcon
        },
        {
          title: "Family Villas",
          desc: "Spacious accommodations with private pools",
          icon: HomeModernIcon
        }
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
          <item.icon className="w-8 h-8 text-pink-600 shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">Top Family Resorts 2024</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            name: "Sunset Family Resort",
            highlights: ["Water slides", "Family snorkeling", "Babysitting"],
            price: "£5,299"
          },
          {
            name: "Coral Paradise",
            highlights: ["Kids eat free", "Marine discovery center", "Family yoga"],
            price: "£6,999"
          }
        ].map((resort, index) => (
          <div key={index} className="border-l-4 border-pink-600 pl-4">
            <h4 className="text-lg font-semibold mb-2">{resort.name}</h4>
            <ul className="list-disc pl-5 mb-3 text-gray-700">
              {resort.highlights.map((h, i) => (
                <li key={i} className="mb-1">{h}</li>
              ))}
            </ul>
            <p className="text-pink-600 font-semibold">From {resort.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</LazySection>

{/* Romantic Experiences Section */}
<LazySection className="py-20 bg-gradient-to-b from-white to-pink-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-pink-600">Honeymoon</span> & Romance Packages
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        2024 honeymoon specials featuring private villas, couples&apos; spa treatments, and unforgettable romantic experiences
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/images/destinations/maldives/honeymoon.jpg"
          alt="Romantic Maldives honeymoon setup"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-3xl font-bold mb-2">Ultimate Romance Package</h3>
          <p className="text-lg">Includes sunset cruise, private dinner, and couple&apos;s massage</p>
        </div>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "Wedding Packages",
            content: "All-inclusive beach wedding ceremonies with legal certification"
          },
          {
            title: "Anniversary Specials",
            content: "Complimentary champagne & villa decoration for milestones"
          },
          {
            title: "VIP Transfers",
            content: "Private seaplane transfers with champagne service"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</LazySection>

{/* Culinary Experiences Section */}
<LazySection className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Maldivian <span className="text-pink-600">Culinary</span> Journey
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        {
          title: "Underwater Dining",
          desc: "5-star restaurants beneath the waves",
          image: "underwater-dining.jpg"
        },
        {
          title: "Private Beach Dinner",
          desc: "Personal chef experience under the stars",
          image: "beach-dinner.jpg"
        },
        {
          title: "Local Cuisine",
          desc: "Authentic Maldivian seafood specialties",
          image: "local-food.jpg"
        }
      ].map((experience, index) => (
        <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={`/images/destinations/maldives/${experience.image}`}
            alt={experience.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p>{experience.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-pink-50 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold mb-6">2024 Dining Trends</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Sustainable Practices</h4>
          <ul className="space-y-3">
            {['Zero-waste kitchens', 'Locally sourced seafood', 'Organic herb gardens'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-pink-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Award-Winning Venues</h4>
          <ul className="space-y-3">
          {['Ithaa Undersea Restaurant', 'Subsix Niyama', 'Sea.Fire.Salt.Sky.'].map((venue, i) => (
  <li key={i} className="flex items-center gap-2">
    <TrophyIcon className="w-5 h-5 text-pink-600" />
    {venue}
  </li>
))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</LazySection>

{/* FAQ Section */}
<LazySection className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-4xl font-bold text-center mb-12">
      Maldives Travel <span className="text-pink-600">FAQs</span>
    </h2>
    
    <div className="space-y-6">
      {[
        {
          question: "What&apos;s the best time to visit the Maldives?",
          answer: "The dry season from December to April offers ideal conditions..."
        },
        {
          question: "Are there budget-friendly options?",
          answer: "While known for luxury, guesthouses on local islands offer affordable stays..."
        },
        {
          question: "Is the Maldives safe for travelers?",
          answer: "Ranked as one of Asia's safest destinations with low crime rates..."
        }
      ].map((faq, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <PlusIcon className="w-6 h-6 group-open:hidden" />
              <MinusIcon className="w-6 h-6 hidden group-open:block" />
            </summary>
            <p className="mt-4 text-gray-700">{faq.answer}</p>
          </details>
        </div>
      ))}
    </div>
  </div>
</LazySection>
      {/* CTA Section */}
      <LazySection className="py-16">
        <div className="container border-b border-gray-200 py-10 mx-auto px-4 text-center">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Maldivian Journey</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our Maldives specialists to plan your perfect 2024 escape</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </LazySection>

     
      {/* Copy all your JSX content from the page.tsx here */}
      {/* Everything from <header> to the last <LazySection> */}
    </main>
  );
}
"use client";

// import LazySection from '@/components/LazySection';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PaperAirplaneIcon, 
  CalendarIcon,
  // GlobeAsiaAustraliaIcon,
  TicketIcon,
  IdentificationIcon,
  // PlusIcon,
  // MinusIcon,
  CheckIcon,
  // TrophyIcon,
  // UserGroupIcon,
  // BeakerIcon,
  // HomeModernIcon
} from '@heroicons/react/24/outline';

export default function MalaysiaContent() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/malaysia/kuala-lumpur-skyline.png"
          alt="Petronas Towers, Kuala Lumpur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-green-300 to-white animate-gradientMove">
            Malaysia
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            A vibrant fusion of cultures, nature, and modern marvels
          </p>
        </div>
      </header>

      {/* Why Malaysia Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">
            Why Visit <span className="text-green-600">Malaysia</span> in 2024?
          </h2>
          <p className="text-lg text-gray-700">
            From bustling cities to tropical islands and ancient rainforests, Malaysia offers rich experiences for every traveller.
          </p>
        </div>
      </section>

      {/* Stats + Updates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 max-w-6xl">
          {/* Stats */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-green-600 mb-6">Malaysia at a Glance</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🏙️", number: "13", label: "States & Territories" },
                { icon: "🌴", number: "878", label: "Islands" },
                { icon: "🌦️", number: "27°C", label: "Avg. Year-Round Temp" },
                { icon: "🕌", number: "3", label: "UNESCO Heritage Sites" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white rounded-xl p-4">
                  <div className="text-2xl">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2024 Updates */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-green-600 mb-6">2024 Highlights</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Ecotourism Boost",
                  desc: "New rainforest lodges and guided jungle treks in Sarawak",
                  icon: "🌳",
                },
                {
                  title: "Cultural Festivals",
                  desc: "Visit during Thaipusam or Hari Raya Aidilfitri for immersive cultural experiences",
                  icon: "🎉",
                },
                {
                  title: "Luxury Rail Revamp",
                  desc: "Eastern & Oriental Express resumes scenic luxury routes from KL to Penang",
                  icon: "🚂",
                },
                {
                  title: "Island Resort Openings",
                  desc: "Langkawi and Tioman see 10+ new luxury resorts",
                  icon: "🏖️",
                },
              ].map((update, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-xl hover:bg-green-50 transition">
                  <span className="text-2xl">{update.icon}</span>
                  <div>
                    <h4 className="font-semibold">{update.title}</h4>
                    <p className="text-sm text-gray-600">{update.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Experiences Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Must-Try <span className="text-green-600">Malaysian Experiences</span>
          </h2>
          <p className="text-gray-600">
            From street food safaris to wild orangutan encounters – your journey starts here
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Street Food Trails",
              desc: "Taste your way through Penang and KL’s vibrant hawker stalls",
              image: "/images/destinations/malaysia/penang-food.jpg",
            },
            {
              title: "Borneo Wildlife",
              desc: "Explore Sabah’s rainforests and meet endangered orangutans",
              image: "/images/destinations/malaysia/borneo-orangutan.jpg",
            },
            {
              title: "Sky High Views",
              desc: "Petronas Towers Skybridge and KL Tower panoramic decks",
              image: "/images/destinations/malaysia/kl-skyline.jpg",
            },
          ].map((item, i) => (
            <div key={i} className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Essentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            2024 Travel <span className="text-green-600">Essentials</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Getting There */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <PaperAirplaneIcon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold">Getting There</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <PaperAirplaneIcon className="w-5 h-5 text-green-600" />
                  Direct flights from London to Kuala Lumpur (13h)
                </li>
                <li className="flex items-center gap-2">
                  <TicketIcon className="w-5 h-5 text-green-600" />
                  Low-cost regional flights via AirAsia
                </li>
                <li className="flex items-center gap-2">
                  <IdentificationIcon className="w-5 h-5 text-green-600" />
                  Visa-free for UK passport holders (90 days)
                </li>
              </ul>
            </div>

            {/* When to Visit */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CalendarIcon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold">When to Visit</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>☀️ Dec–Feb: Dry season in Langkawi & Penang</li>
                <li>🌧️ May–Sept: Rainy season on East Coast (Tioman, Redang)</li>
                <li>🎉 Jan & July: Best months for festivals</li>
              </ul>
            </div>

            {/* Sustainability */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <ul className="space-y-3 text-gray-700">
                <li><CheckIcon className="inline w-5 h-5 text-green-600 mr-1" /> Rainforest preservation tours</li>
                <li><CheckIcon className="inline w-5 h-5 text-green-600 mr-1" /> Turtle conservation in Perhentian Islands</li>
                <li><CheckIcon className="inline w-5 h-5 text-green-600 mr-1" /> Solar-powered eco-resorts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 text-center border-b border-gray-200">
          <h2 className="text-3xl text-green-600 font-bold mb-6">Begin Your Malaysian Adventure</h2>
          <p className="text-xl text-gray-700 mb-8">Speak with our experts to craft your perfect 2024 getaway to Malaysia</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </main>
  );
}

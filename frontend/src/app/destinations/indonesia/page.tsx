import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
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
  HomeModernIcon
} from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/BreadCrumbs';
import { indonesiaHotels } from '@/data/hotels/Indonesia/indonesiaHotels';

export const metadata: Metadata = {
  title: 'Luxury Indonesia Holidays 2024 | Island & Cultural Experiences',
  description: 'Experience luxury Indonesia holidays featuring pristine beaches, ancient temples, and exclusive resorts. Book your 2024 Indonesian journey today.',
  keywords: 'Indonesia holidays, luxury resorts Bali, Ubud, Indonesian islands, Komodo, Raja Ampat',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/indonesia'
  },
  openGraph: {
    title: 'Luxury Indonesia Holidays 2024 | Tropical Paradise',
    description: 'Discover Indonesia\'s finest resorts, cultural experiences, and island adventures with exclusive holiday packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/indonesia/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Indonesian Resort and Temple Views'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Indonesia",
  "description": "Where ancient traditions meet tropical paradise",
  "url": "https://haloholidays.com/destinations/indonesia",
  "touristType": ["Luxury", "Beach", "Culture", "Adventure"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1800"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "1499",
    "highPrice": "7999",
    "offerCount": "40"
  }
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Indonesia Luxury Holiday Packages 2024",
  "description": "Premium Indonesia packages including 5-star resorts and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "1499",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function IndonesiaDestination() {

 
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/indonesia/indonesia.jpg"
          alt="Tanah Lot Temple at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            Indonesia
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient traditions meet tropical paradise
          </p>
        </div>
      </header>
      <Breadcrumbs /> 
      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">Indonesia</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience the perfect blend of tropical beauty and rich cultural heritage
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Indonesia Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "17,508", label: "Islands", icon: "🏝️" },
                      { number: "9", label: "UNESCO Sites", icon: "🏛️" },
                      { number: "28°C", label: "Avg. Temperature", icon: "☀️" },
                      { number: "300+", label: "Ethnic Groups", icon: "🎭" }
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
                        title: "New Luxury Resorts",
                        desc: "Opening of exclusive properties in Bali and Raja Ampat",
                        icon: "🏨"
                      },
                      {
                        title: "Improved Access",
                        desc: "New flights to remote islands",
                        icon: "✈️"
                      },
                      {
                        title: "Cultural Events",
                        desc: "Traditional festivals and ceremonies",
                        icon: "🎭"
                      },
                      {
                        title: "Sustainability",
                        desc: "New eco-tourism initiatives",
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
              <div className="border border-pink-500 text-gray-700 p-6 rounded-2xl mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UNESCO World Heritage Sites</h3>
                    <p className="text-gray-700">Including Borobudur Temple, Komodo National Park, and Cultural Landscape of Bali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024&apos;s Premier <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our handpicked collection of Dubai&apos;s finest hotels and resorts
            </p>
          </div>

          {/* Featured Packages Grid - Now using data from hotels.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {indonesiaHotels.slice(0, 3).map((hotel, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={hotel.cardImage}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{hotel.location.split(',')[0]}</p>
                    <h3 className="text-2xl font-bold">{hotel.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    From LKR {hotel.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{hotel.ratings.overall}</span>
                    <span className="text-gray-500 text-sm">({hotel.ratings.totalReviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-3">
                    {hotel.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckIcon className="w-5 h-5 text-pink-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                    <Link 
            href={`/destinations/indonesia/hotel/${hotel.slug.toLowerCase().replace(/\s+/g, '-')}`}
          
          >
            <button className="w-full cursor-pointer mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    View Package
                  </button>
          </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Unforgettable Experiences</h2>
            <p className="text-lg text-gray-700">
              Discover the best of Indonesia through carefully curated experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Heritage",
                icon: HomeModernIcon,
                description: "Explore ancient temples and traditions",
                highlights: ["Temple Tours", "Traditional Dance", "Art Workshops"]
              },
              {
                title: "Island Adventures",
                icon: GlobeAsiaAustraliaIcon,
                description: "Discover pristine islands and marine life",
                highlights: ["Komodo Dragons", "Raja Ampat Diving", "Beach Hopping"]
              },
              {
                title: "Wellness & Nature",
                icon: UserGroupIcon,
                description: "Rejuvenate in tropical paradise",
                highlights: ["Yoga Retreats", "Spa Treatments", "Rice Terrace Walks"]
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <experience.icon className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckIcon className="w-5 h-5 text-pink-600 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Indonesian Culinary Journey</h2>
            <p className="text-lg text-gray-700">
              Experience the diverse flavors of Indonesian cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Fine Dining",
                desc: "Modern Indonesian cuisine",
                image: "indonesia-fine-dining.jpg"
              },
              {
                title: "Street Food",
                desc: "Local warungs and markets",
                image: "indonesia-street-food.jpg"
              },
              {
                title: "Cooking Classes",
                desc: "Master local recipes",
                image: "indonesia-cooking-classes.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/hotels/indonesia/food/${experience.image}`}
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
            <h3 className="text-2xl font-semibold mb-6">2024 Culinary Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Must-Try Dishes</h4>
                <ul className="space-y-3">
                  {['Nasi Goreng', 'Rendang', 'Satay', 'Gado-gado'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-pink-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Top Dining Venues</h4>
                <ul className="space-y-3">
                  {['Locavore', 'Mejekawi by Ku De Ta', 'Room4Dessert'].map((venue, i) => (
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
      </section>

      {/* Travel Guide Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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
                  { icon: PaperAirplaneIcon, text: "Direct flights from major Asian hubs" },
                  { icon: GlobeAsiaAustraliaIcon, text: "International airports in Bali, Jakarta" },
                  { icon: TicketIcon, text: "Domestic flights between islands" },
                  { icon: IdentificationIcon, text: "Visa on arrival available" }
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
                  { season: "Dry Season (Apr-Oct)", desc: "Perfect for beach and outdoor activities" },
                  { season: "Shoulder Season (Mar/Nov)", desc: "Fewer tourists, good weather" }
                ].map((period, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <h4 className="font-semibold text-pink-900">{period.season}</h4>
                    <p className="text-sm mt-2 text-gray-700">{period.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tips Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <BeakerIcon className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-semibold">Local Tips</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Transport", desc: "Use trusted taxi apps in cities" },
                  { title: "Etiquette", desc: "Dress modestly at temples" },
                  { title: "Currency", desc: "Keep small bills for local markets" },
                  { title: "Language", desc: "Learn basic Indonesian phrases" }
                ].map((tip, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <p className="font-semibold text-pink-800">{tip.title}</p>
                    <p className="text-sm mt-2 text-gray-700">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Indonesia Travel <span className="text-pink-600">FAQs</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What's the best time to visit Indonesia?",
                answer: "The dry season (April to October) is generally considered the best time to visit, with lower humidity and less rainfall. However, this varies by region due to Indonesia's vast size."
              },
              {
                question: "Do I need a visa to visit Indonesia?",
                answer: "Many nationalities can get a visa on arrival for 30 days. Some countries are eligible for visa-free entry. Check the latest requirements before travel."
              },
              {
                question: "How do I get around Indonesia?",
                answer: "Domestic flights are the main mode of transport between islands. Within islands, use a mix of private drivers, taxis, and ride-hailing apps. In Bali, scooter rental is popular."
              },
              {
                question: "Is Indonesia suitable for luxury travel?",
                answer: "Absolutely. Indonesia offers world-class luxury resorts, particularly in Bali, Jakarta, and remote islands. Many properties feature private villas, personal butlers, and exclusive experiences."
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
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white">
        <div className="container border-b border-gray-200 py-10 mx-auto px-4 text-center">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Indonesian Journey</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our Indonesia specialists to plan your perfect 2024 escape</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>

      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </main>
  );
}

   // Add this export to your page
   export const dynamic = 'force-static';
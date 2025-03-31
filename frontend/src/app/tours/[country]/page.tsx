import { Metadata } from 'next';
import Image from 'next/image';
import { sriLankaToursData } from '@/data/tours/srilanka';
import { notFound } from 'next/navigation';
import { 
  StarIcon, PhoneIcon, ShieldCheckIcon, MapPinIcon, 
  CalendarIcon, UserGroupIcon, CameraIcon, GlobeAltIcon 
} from '@heroicons/react/24/outline';

interface PageProps {
  params: {
    country: string;
  }
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (params.country !== 'srilanka') return notFound();
  
  return {
    title: sriLankaToursData.metadata.title,
    description: sriLankaToursData.metadata.description,
  };
}

export default function TourCountryPage({ params }: PageProps) {
  if (params.country !== 'srilanka') return notFound();
  const data = sriLankaToursData;

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              {data.navigation.items.map((item, index) => (
                <button 
                  key={index}
                  className={`flex items-center space-x-2 ${
                    item.active ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  {/* Dynamic icon rendering based on item.icon */}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src={data.hero.image}
          alt={data.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">{data.tourDetails.title}</h1>
              <p className="text-xl mb-6">{data.tourDetails.subtitle}</p>
              <div className="flex gap-6">
                {Object.entries(data.tourDetails.quickFacts).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="text-pink-400">•</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tour Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">{highlight.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <div className="flex items-center mb-4">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1">{tour.rating}</span>
                    <span className="text-gray-500 ml-2">({tour.reviews} reviews)</span>
                  </div>
                  <ul className="mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 mb-1">
                        <span className="text-pink-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold text-pink-600">{tour.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tour Itinerary</h2>
          <div className="space-y-8">
            {data.itinerary.map((day, index) => (
              <div key={index} className="border-l-4 border-pink-600 pl-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">{day.day}</h3>
                <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                <p className="text-gray-600">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departure Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Departure Dates & Prices</h2>
          {data.departureDates.map((month, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{month.month}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {month.dates.map((date, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-lg font-bold">{date.day}</div>
                    <div className="text-pink-600">from £{date.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extensions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Optional Extensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.extensions.map((extension, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={extension.image}
                    alt={extension.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{extension.title}</h3>
                  <p className="text-gray-600 mb-4">{extension.duration}</p>
                  <p className="text-xl font-bold text-pink-600">from £{extension.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.included.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <ShieldCheckIcon className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8">Speak to our travel experts today</p>
          <a 
            href={`tel:${data.contactInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="h-5 w-5" />
            {data.contactInfo.phone}
          </a>
        </div>
      </section>
    </main>
  );
} 
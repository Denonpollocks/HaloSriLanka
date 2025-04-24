import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import {
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Halo Holidays | Our Story & Travel Experts',
  description: 'Learn about Halo Holidays, our passionate team of travel experts, our mission to create unforgettable travel experiences, and our commitment to responsible tourism.',
  keywords: 'travel agency, about us, travel experts, responsible tourism, luxury holidays, travel specialists',
};

// Company values data
const values = [
  {
    icon: UserGroupIcon,
    title: 'Customer-First Approach',
    description: 'We prioritize your needs and preferences to create truly personalized travel experiences.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Destination Expertise',
    description: 'Our specialists have in-depth knowledge of each destination we offer, with regular visits to stay current.'
  },
  {
    icon: HeartIcon,
    title: 'Passion for Travel',
    description: "We're travelers ourselves, driven by a genuine love for exploring and sharing the world's wonders."
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reliability & Trust',
    description: 'Were fully bonded and insured, providing financial protection and peace of mind for all bookings.'
  }
];

// Team members data
const teamMembers = [
  {
    name: 'Kasun Gatamanna',
    title: 'All-in-One Specialist',
    experience: '4+ years',
    expertise: ['Luxury Travel', 'Cultural Experiences', 'Group Tours', 'Squad Trips'],
    image: '/images/Kasun.png',
    bio: 'Kasun is a travel enthusiast with a knack for creating unique itineraries. He specializes in group trips and has a deep understanding of Southeast Asian cultures.'
  },
  {
    name: 'Mohamed Naveed',
    title: 'MiddleEast & Asia Specialist',
    experience: '1+ years',
    expertise: ['Desert Adventures', 'Luxury Resorts', 'Honeymoon Tours', 'Family Trips'],
    image: '/images/Naveed.png',
    bio: 'Mohamed is an expert in Middle Eastern travel, offering unique insights into desert adventures and luxury resorts. He is dedicated to creating unforgettable honeymoon experiences.'
  },
  {
    name: 'Shihaar Gazzaly',
    title: 'Europe & Asia Specialist',
    experience: '1+ years',
    expertise: ['Couple Tours', 'Squad Trips', 'Family Travel', 'Culinary Experiences'],
    image: '/images/Shihaar.png',
    bio: 'Shihaar is a passionate traveler who loves to explore new cultures. He specializes in creating unforgettable experiences for couples and families.'
  },
  {
    name: 'Mohamed Naflan',
    title: 'Europe Specialist',
    experience: '1+ years',
    expertise: ['City Breaks', 'Honeymoon Tours', 'Solo Experiences'],
    image: '/images/Naflan.png',
    bio: 'Mohamed is a travel expert with a focus on European destinations. He has a talent for crafting unique city breaks and solo travel experiences.'
  },
  {
    name: 'Izam Ismath',
    title: 'Travel Specialist',
    experience: '1+ years',
    expertise: ['Family Trips', 'Luxury Tours', 'Group Travel', 'Corporate Travel'],
    image: '/images/Izam.png',
    bio: 'Izam is a travel specialist with a focus on family and group travel. He has a knack for creating unforgettable experiences that cater to diverse interests. Corporate travel is also his forte.'
  },
  {
    name: 'Mathura Manogaren',
    title: 'Asia Specialist',
    experience: '1+ years',
    expertise: ['Solo Travel', 'Historical Adventures', 'Couple Getaways'],
    image: '/images/Mathura.png',
    bio: 'Mathura is an avid traveler with a passion for history. She specializes in creating unique itineraries that combine culture and adventure.'
  }
];

// Company milestones
const milestones = [
  {
    year: '2018',
    title: 'Halo Holidays Founded',
    description: 'Started with a focus on Southeast Asian destinations'
  },
  {
    year: '2019',
    title: 'Expanded to European Destinations',
    description: 'Added specialized team members with European expertise'
  },
  {
    year: '2022',
    title: 'Responsible Tourism Initiative',
    description: 'Launched our commitment to sustainable travel practices'
  },
  {
    year: '2023',
    title: 'Travel Excellence Award',
    description: 'Recognized for outstanding customer satisfaction'
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description: 'Enhanced online booking experience and virtual consultations'
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Now offering expertly curated experiences in over 50 countries'
  }
];

export default function AboutPage() {
  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Halo Holidays",
      "description": "A premium travel agency specializing in personalized luxury holidays and authentic travel experiences.",
      "foundingDate": "2010",
      "foundingLocation": "London, UK",
      "employee": teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.title
      }))
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-20">
                About <span className="text-pink-600">Halo Holidays</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                We&apos;re a team of passionate travel specialists dedicated to creating unforgettable journeys tailored to your unique preferences and dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/our-story.png"
                  alt="Halo Holidays team planning travel experiences"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Halo Holidays was born from a simple belief: that travel should be transformative, personal, and seamless. Founded in 2010 by a group of travel enthusiasts who were frustrated by the one-size-fits-all approach of mainstream tourism, we set out to create a different kind of travel company.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders had spent years exploring the hidden corners of Southeast Asia, discovering experiences that rarely made it into guidebooks. They began by sharing these authentic experiences with friends and family, carefully tailoring each journey to the individual&apos;s interests and preferences.
                </p>
                <p className="text-gray-700">
                  What started as a passion project quickly grew as word spread about our personalized approach and insider knowledge. Today, we&apos;ve expanded our expertise across the globe, but our core philosophy remains unchanged: we create journeys as unique as you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-700">
                These core principles guide everything we do, from how we design our journeys to how we interact with our clients and partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Travel Experts</h2>
              <p className="text-gray-700">
                Our specialists bring firsthand knowledge and passion to creating your perfect journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-32 w-32 ml-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.title} at Halo Holidays`}
                      fill
                      className="object-cover rounded-full"
                      sizes="128px"
                      quality={100}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-pink-600 mb-3">{member.title}</p>
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{member.experience} experience</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-700">
                From our humble beginnings to becoming a trusted name in luxury travel.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-600"></div>
                    <div className={`w-5/12 bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'text-right mr-8' : 'ml-8'}`}>
                      <span className="text-pink-600 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Tourism Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Commitment to Responsible Tourism</h2>
                <p className="text-gray-700 mb-4">
                  At Halo Holidays, we believe that travel should enrich both the traveler and the destinations we visit. We&apos;re committed to sustainable practices that minimize environmental impact and maximize positive contributions to local communities.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: GlobeAltIcon, text: "We partner with accommodations that follow sustainable practices" },
                    { icon: HandRaisedIcon, text: "We support local businesses and community-based tourism initiatives" },
                    { icon: TrophyIcon, text: "We promote cultural preservation and authentic experiences" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-pink-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/responsible-tourism"
                    className="text-pink-600 font-medium hover:text-pink-700 flex items-center gap-2"
                  >
                    Learn more about our responsible tourism initiatives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/here3.png"
                  alt="Sustainable tourism practices at Halo Holidays"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Plan Your <span className="text-pink-500">Dream Journey</span>?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our travel experts are ready to create a personalized itinerary just for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/destinations"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md transition-colors duration-300"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const dynamic = 'force-static'; 
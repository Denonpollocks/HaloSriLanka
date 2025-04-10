import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  DocumentCheckIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Visa Services & Consultation | Halo Holidays',
  description: 'Expert visa consultation, application assistance, and support services for multiple destinations. Get personalized guidance for your visa process.',
  keywords: 'visa services, visa consultation, visa application help, travel visa, immigration services',
};

const visaServices = [
  {
    title: 'Document Review',
    description: 'Expert verification of all required documentation',
    icon: DocumentCheckIcon
  },
  {
    title: 'Application Support',
    description: 'Step-by-step guidance through the application process',
    icon: DocumentTextIcon
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interviews and preparation sessions',
    icon: UserGroupIcon
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your queries',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Multi-Country Expertise',
    description: 'Specialized knowledge for various destinations',
    icon: GlobeAltIcon
  },
  {
    title: 'Secure Processing',
    description: 'Safe handling of your sensitive documents',
    icon: ShieldCheckIcon
  }
];

const visaTestimonials = [
  {
    name: 'James Wilson',
    location: 'UK to Australia',
    comment: 'Seamless visa process for my work permit. The team handled everything professionally and kept me informed throughout.',
    avatar: '/images/testimonials/visa1.jpg',
    visaType: 'Work Visa',
    processingTime: '3 weeks'
  },
  {
    name: 'Maria Rodriguez',
    location: 'Spain to Canada',
    comment: 'Got my student visa approved on first try! Their interview preparation service was incredibly helpful.',
    avatar: '/images/testimonials/visa2.jpg',
    visaType: 'Student Visa',
    processingTime: '4 weeks'
  },
  {
    name: 'Ahmed Hassan',
    location: 'UAE to UK',
    comment: 'Outstanding support for my family visa application. They made a complex process simple and straightforward.',
    avatar: '/images/testimonials/visa3.jpg',
    visaType: 'Family Visa',
    processingTime: '6 weeks'
  }
];

const specializedCountries = [
  {
    name: 'Dubai',
    icon: '🇦🇪',
    description: 'Tourist & Business visas for UAE',
    processingTime: '3-5 business days'
  },
  {
    name: 'Malaysia',
    icon: '🇲🇾',
    description: 'eVisa & long-term passes',
    processingTime: '4-7 business days'
  },
  {
    name: 'Schengen',
    icon: '🇪🇺',
    description: 'Access to 27 European countries',
    processingTime: '15-20 business days'
  },
  {
    name: 'Bali',
    icon: '🇮🇩',
    description: 'Indonesian tourist & social visas',
    processingTime: '3-5 business days'
  },
  {
    name: 'Vietnam',
    icon: '🇻🇳',
    description: 'eVisa & visa on arrival',
    processingTime: '2-4 business days'
  },
  {
    name: 'UK',
    icon: '🇬🇧',
    description: 'All visa categories & permits',
    processingTime: '15-30 business days'
  },
  {
    name: 'Australia',
    icon: '🇦🇺',
    description: 'Tourist, student & work visas',
    processingTime: '20-40 business days'
  },
  {
    name: 'Japan',
    icon: '🇯🇵',
    description: 'Tourist & business visas',
    processingTime: '5-7 business days'
  }
];

export default function VisaServices() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center">
        <Image
          src="/images/visa-services/hero.jpg"
          alt="Visa Services and Consultation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove">
            Visa Services
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Expert guidance and support for all your visa requirements
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Visa <span className="text-pink-600">Services</span>
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive visa consultation and support services to ensure a smooth application process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <service.icon className="w-12 h-12 text-pink-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-pink-600">Process</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  step: "1. Initial Consultation",
                  desc: "Free assessment of your visa requirements"
                },
                {
                  step: "2. Document Preparation",
                  desc: "Guidance on gathering and organizing required documents"
                },
                {
                  step: "3. Application Filing",
                  desc: "Professional assistance with form completion"
                },
                {
                  step: "4. Submission & Follow-up",
                  desc: "Tracking and status updates throughout the process"
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-pink-600 mb-2">{step.step}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/visa-services/process.jpg"
                alt="Visa application process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Types of <span className="text-pink-600">Visas</span> We Assist With
            </h2>
            <p className="text-lg text-gray-700">
              We provide professional visa consultation and application support for various visa types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tourist Visas",
                description: "For those traveling for leisure, vacations, or visiting family and friends.",
                icon: "🛂",
              },
              {
                title: "Business Visas",
                description: "For attending business meetings, conferences, and official engagements.",
                icon: "💼",
              },
              {
                title: "Student Visas",
                description: "For students pursuing higher education at universities abroad.",
                icon: "🎓",
              },
              {
                title: "Work & Residence Visas",
                description: "For professionals relocating for work or obtaining a long-term residence permit.",
                icon: "🏡",
              },
              {
                title: "Family & Spouse Visas",
                description: "For those joining family members or spouses residing in another country.",
                icon: "👨‍👩‍👧‍👦",
              },
            ].map((visa, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{visa.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{visa.title}</h3>
                <p className="text-gray-600">{visa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Success <span className="text-pink-600">Stories</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Real experiences from our clients who successfully obtained their visas through our services
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {visaTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 relative">
                {/* Success Badge */}
                <div className="absolute -top-4 right-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Approved ✓
                </div>

                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Visa Details */}
                <div className="flex gap-4 mb-4 text-sm">
                  <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
                    {testimonial.visaType}
                  </span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {testimonial.processingTime}
                  </span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 mb-4">
                  &quot;{testimonial.comment}&quot;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Preview */}
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/images/visa-services/video-testimonial.jpg"
                alt="Video testimonial preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <span className="text-pink-600 text-6xl">▶</span>
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Watch Our Client Stories</h3>
              <p className="text-white/90">See how we&apos;ve helped others achieve their immigration goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries We Specialize In Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Countries We <span className="text-pink-600">Specialize In</span>
            </h2>
            <p className="text-lg text-gray-700">
              Expert visa assistance for these popular destinations with high success rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedCountries.map((country, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{country.icon}</span>
                  <h3 className="text-xl font-semibold">{country.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ClockIcon className="w-4 h-4" />
                  <span>{country.processingTime}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/visa-services/${country.name.toLowerCase()}`}
                    className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Visa Application</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our visa specialists for a free consultation</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 
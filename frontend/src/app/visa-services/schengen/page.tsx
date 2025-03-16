import Image from 'next/image';
import Link from 'next/link';
import {
  ClockIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import VisaCountrySlider from '@/components/VisaCountrySlider';

export const metadata = {
  title: 'Schengen Visa Services | Expert EU Visa Consultation',
  description: 'Professional Schengen visa application services covering 27 European countries. Get your EU visa processed efficiently with our expert guidance.',
  keywords: 'Schengen visa, EU visa, European visa, tourist visa Europe, business visa Schengen',
};

const visaTypes = [
  {
    title: 'Short-Stay Tourist Visa',
    price: '£189',
    processingTime: '15-20 business days',
    features: [
      'Valid for up to 90 days',
      'Single/Multiple entry options',
      'Access to 27 Schengen countries',
      'Travel insurance included'
    ]
  },
  {
    title: 'Business Visa',
    price: '£249',
    processingTime: '15-20 business days',
    features: [
      'Multiple entry visa',
      'Valid for 1-5 years',
      'Business documentation support',
      'Priority processing available'
    ]
  },
  {
    title: 'Student Visa',
    price: '£199',
    processingTime: '20-25 business days',
    features: [
      'Long-stay visa option',
      'University acceptance support',
      'Accommodation assistance',
      'Health insurance guidance'
    ]
  }
];

export default function SchengenVisa() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center">
        <Image
          src="/images/visa-services/schengen/hero.jpg"
          alt="European Landmarks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-medium text-white mb-6">
            Schengen Visa Services
          </h1>
          <p className="text-white text-xl max-w-2xl mb-8">
            Your gateway to 27 European countries with expert visa processing services
          </p>
          <Link 
            href="#visa-types"
            className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center gap-2"
          >
            Explore Visa Types
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Schengen Visa Processing Services</h2>
            <p className="text-gray-700 mb-4">
              The Schengen visa opens doors to 27 European countries, offering unparalleled opportunities for tourism, business, and education. Whether you're planning a European vacation, business meetings, or academic pursuits, our expert visa services ensure a thorough and efficient application process.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schengen Visa <span className="text-pink-600">Requirements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Documents",
                items: [
                  "Valid passport (6 months beyond stay)",
                  "Schengen visa application form",
                  "Recent passport photos (35x45mm)",
                  "Travel itinerary",
                  "Flight reservations"
                ]
              },
              {
                title: "Financial Requirements",
                items: [
                  "Bank statements (last 6 months)",
                  "Proof of accommodation",
                  "Travel insurance (€30,000 coverage)",
                  "Employment contract/business proof",
                  "Income tax returns"
                ]
              },
              {
                title: "Supporting Documents",
                items: [
                  "Invitation letter (if applicable)",
                  "Sponsorship proof (if applicable)",
                  "Previous Schengen visas",
                  "Cover letter explaining purpose",
                  "Language course enrollment (if study)"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <DocumentCheckIcon className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Application <span className="text-pink-600">Process</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                time: "Week 1",
                step: "Initial Consultation & Planning",
                desc: "Assessment of visa category and document requirements"
              },
              {
                time: "Week 2",
                step: "Document Preparation",
                desc: "Gathering and verification of all required documents"
              },
              {
                time: "Week 3",
                step: "Application Submission",
                desc: "Submission to relevant embassy and biometrics appointment"
              },
              {
                time: "Week 4-5",
                step: "Processing & Follow-up",
                desc: "Regular status updates and additional document submission if required"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-24 text-pink-600 font-semibold">
                  {step.time}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-pink-600">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Which Schengen country should I apply through?",
                a: "You should apply through the country where you'll spend the most time, or your main entry point if visiting multiple countries equally."
              },
              {
                q: "How long does it take to get a Schengen visa?",
                a: "Standard processing time is 15-20 business days. We recommend applying at least 2 months before your planned travel date."
              },
              {
                q: "Can I travel to all EU countries with a Schengen visa?",
                a: "The Schengen visa allows travel within 27 Schengen countries. Some EU countries like Ireland are not part of the Schengen area."
              },
              {
                q: "What happens if my visa application is rejected?",
                a: "We provide a comprehensive appeal service and guidance on reapplication with necessary modifications to improve chances of approval."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-pink-600 p-4 rounded-full">
                <PhoneIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-pink-600">Dubai Journey?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Book a free consultation with our visa experts and get personalized guidance for your Dubai visa application
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: ClockIcon,
                  title: "15-Min Session",
                  desc: "Quick assessment of your visa needs"
                },
                {
                  icon: DocumentCheckIcon,
                  title: "Expert Advice",
                  desc: "Personalized guidance on requirements"
                },
                {
                  icon: GlobeAltIcon,
                  title: "Zero Cost",
                  desc: "100% free consultation service"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur p-6 rounded-xl">
                  <feature.icon className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center gap-2"
              >
                Book Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+441234567890"
                className="text-pink-600 hover:text-pink-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:border-pink-700 transition-colors inline-flex items-center gap-2"
              >
                Call Us Now
                <PhoneIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Visa Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore Other <span className="text-pink-600">Visa Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our visa services for other popular destinations around the world
            </p>
          </div>
          
          <VisaCountrySlider />
        </div>
      </section>
    </main>
  );
} 
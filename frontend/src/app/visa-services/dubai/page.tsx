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
  title: 'Dubai Visa Services | Expert Consultation & Processing',
  description: 'Professional Dubai visa application services with high success rates. Get your UAE visa processed efficiently with our expert guidance.',
  keywords: 'Dubai visa, UAE visa, visa application, tourist visa Dubai, business visa UAE',
};

const visaTypes = [
  {
    title: '14-Day Tourist Visa',
    price: '£89',
    processingTime: '24-48 hours',
    features: [
      'Single entry visa',
      'Valid for 14 days',
      'Express processing available',
      'No minimum bank balance required'
    ]
  },
  {
    title: '30-Day Tourist Visa',
    price: '£169',
    processingTime: '3-4 business days',
    features: [
      'Multiple entry option',
      'Valid for 30 days',
      'Extension possible',
      'Minimum bank balance required'
    ]
  },
  {
    title: '90-Day Tourist Visa',
    price: '£299',
    processingTime: '4-5 business days',
    features: [
      'Multiple entry visa',
      'Valid for 90 days',
      'Suitable for long stays',
      'Bank statement required'
    ]
  }
];

export default function DubaiVisa() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center">
        <Image
          src="/images/visa-services/dubai/hero.jpg"
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-medium text-white mb-6">
            Dubai Visa Services
          </h1>
          <p className="text-white text-xl max-w-2xl mb-8">
            Fast, reliable, and hassle-free visa processing for your journey to Dubai
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
            <h2 className="text-3xl font-bold mb-6">Dubai Visa Processing Services</h2>
            <p className="text-gray-700 mb-4">
              Dubai, the jewel of the United Arab Emirates, attracts millions of visitors annually for its stunning architecture, luxury shopping, vibrant nightlife, and business opportunities. Whether you&apos;re planning a short vacation, business trip, or extended stay, our expert visa services ensure a smooth application process.
            </p>
            
            {/* Additional content sections... */}
            
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section id="visa-types" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your <span className="text-pink-600">Dubai Visa</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{visa.title}</h3>
                <div className="text-3xl font-bold text-pink-600 mb-4">{visa.price}</div>
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <ClockIcon className="w-5 h-5" />
                  <span>{visa.processingTime}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {visa.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-50 text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dubai Visa <span className="text-pink-600">Requirements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Documents",
                items: [
                  "Valid passport (6 months validity)",
                  "Colored passport-size photos",
                  "Completed visa application form",
                  "Flight ticket copies",
                  "Hotel booking confirmation"
                ]
              },
              {
                title: "Financial Requirements",
                items: [
                  "Bank statements (last 3 months)",
                  "Minimum balance proof",
                  "Credit card copies (if applicable)",
                  "Sponsor documents (if applicable)",
                  "Employment proof"
                ]
              },
              {
                title: "Additional Documents",
                items: [
                  "Travel insurance coverage",
                  "No objection letter from employer",
                  "Marriage certificate (if applicable)",
                  "Birth certificates (for children)",
                  "Previous visa copies (if any)"
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

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "Document Submission",
                  desc: "Submit all required documents including passport copies, photos, and application forms. Our team will verify everything for completeness.",
                  time: "Day 1"
                },
                {
                  step: "Application Review",
                  desc: "Our visa experts review your application and documentation to ensure everything meets UAE immigration standards.",
                  time: "Day 1-2"
                },
                {
                  step: "Processing & Submission",
                  desc: "We submit your application to UAE immigration authorities and track its progress.",
                  time: "Day 2-3"
                },
                {
                  step: "Visa Issuance",
                  desc: "Once approved, we'll send your electronic visa copy. Physical visa stamping can be done upon arrival in Dubai.",
                  time: "Day 3-5"
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
                q: "How long does it take to process a Dubai visa?",
                a: "Standard processing time is 3-5 business days. Express service is available for urgent requirements with 24-48 hours processing."
              },
              {
                q: "Can I extend my Dubai tourist visa?",
                a: "Yes, tourist visas can be extended for an additional 30 days. The extension must be applied for before the current visa expires."
              },
              {
                q: "What happens if my visa application is rejected?",
                a: "In case of rejection, we provide a full analysis of the reason and assist with reapplication with necessary modifications. Some fees may be non-refundable."
              },
              {
                q: "Do I need travel insurance for a Dubai visa?",
                a: "While not mandatory, travel insurance is highly recommended and may be required for certain visa categories."
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
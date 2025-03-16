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
  title: 'Malaysia Visa Services | Expert eVisa Processing',
  description: 'Professional Malaysia visa and eVisa application services. Get your Malaysian visa processed efficiently with our expert guidance.',
  keywords: 'Malaysia visa, eVisa Malaysia, visa application, tourist visa Malaysia, business visa Malaysia',
};

const visaTypes = [
  {
    title: 'eVisa Tourist',
    price: '£79',
    processingTime: '4-7 business days',
    features: [
      'Single entry visa',
      'Valid for 30 days',
      'Online application',
      'No embassy visit required',
      'Express processing available'
    ]
  },
  {
    title: 'Multiple Entry Visa',
    price: '£149',
    processingTime: '7-10 business days',
    features: [
      'Multiple entries allowed',
      'Valid for up to 1 year',
      'Business & tourism',
      'Extended stay options',
      'Priority processing'
    ]
  },
  {
    title: 'Social Visit Pass',
    price: '£129',
    processingTime: '5-7 business days',
    features: [
      'Long-term stay option',
      'Family visit purposes',
      'Multiple entry included',
      'Extension possible',
      'Comprehensive support'
    ]
  }
]; 

export default function MalaysiaVisa() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative h-[70vh] flex items-center">
          <Image
            src="/images/visa-services/malaysia/hero.jpg"
            alt="Malaysian Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-7xl font-medium text-white mb-6">
              Malaysia Visa Services
            </h1>
            <p className="text-white text-xl max-w-2xl mb-8">
              Fast and reliable eVisa processing for your Malaysian adventure
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
              <h2 className="text-3xl font-bold mb-6">Malaysia eVisa Processing Services</h2>
              <p className="text-gray-700 mb-4">
                Malaysia's eVisa system offers a streamlined digital application process for tourists, business visitors, and long-term stays. Our expert visa services ensure a smooth and efficient application process, whether you're planning a tropical vacation, business meetings, or extended stay in Malaysia.
              </p>
            </div>
          </div>
        </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Malaysia Visa <span className="text-pink-600">Requirements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Documents",
                items: [
                  "Valid passport (6 months validity)",
                  "Digital passport photo",
                  "Completed eVisa form",
                  "Return flight tickets",
                  "Hotel reservations"
                ]
              },
              {
                title: "Financial Requirements",
                items: [
                  "Bank statements (3 months)",
                  "Minimum balance proof",
                  "Travel insurance",
                  "Employment letter",
                  "Income proof"
                ]
              },
              {
                title: "Additional Documents",
                items: [
                  "Invitation letter (if applicable)",
                  "Business documents (for business visa)",
                  "Education certificates (for students)",
                  "Marriage certificate (if relevant)",
                  "Vaccination records"
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
            <div className="space-y-6">
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
        </div>
      </section>
      <section className="py-20 bg-white">
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
            )
        }
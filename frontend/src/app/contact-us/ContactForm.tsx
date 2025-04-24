'use client';

import { useState } from 'react';
import { sendContactForm } from '@/services/contact.service';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/BreadCrumbs';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactForm({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      setStatus({
        message: 'Thank you for your message. We will get back to you soon!',
        type: 'success'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative h-[40vh] flex items-center mt-14">
        <Image
          src="/images/C1.png"
          alt="Contact Halo Holidays"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Lets Plan Your Next Adventure
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Were here to help create your perfect holiday experience
          </p>
        </div>
      </section>
      <Breadcrumbs /> 

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {status.message && (
                <div className={`p-4 rounded-md mb-6 ${
                  status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-200 h-24 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 disabled:bg-pink-300 transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Level 05, Astoria Tower,
                        418 R. A. De Mel Mawatha,<br />
                        Colombo 03
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">+94 70 454 5455</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">contact@haloholidays.lk</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="text-gray-600 flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="text-gray-600 flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex items-center gap-6">
                  <Link 
                    href="https://www.facebook.com/halo.holidays" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                  <Link 
                    href="https://www.instagram.com/halo.holidays" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                  <Link 
                    href="https://www.twitter.com/halo.holidays" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
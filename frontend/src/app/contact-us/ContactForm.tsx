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
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/images/contact/hero.jpg"
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
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-600 h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 disabled:bg-pink-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">
                        Level 05, Astoria Tower,<br />
                        418 R. A. De Mel Mawatha,<br />
                        Colombo 03
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">+94 11 234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@halo-holidays.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Social Media</h2>
                <div className="flex items-center gap-4">
                  <Link href="https://www.facebook.com/halo.holidays" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/contact/facebook.png"
                      alt="Facebook"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/halo.holidays" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/contact/instagram.png"
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link href="https://www.twitter.com/halo.holidays" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/contact/twitter.png"
                      alt="Twitter"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
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
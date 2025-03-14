'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { subscribe } from '@/services/newsletter.service';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribe(formData.name, formData.email);
      setStatus({
        message: 'Thank you for subscribing! Check your email for your discount code.',
        type: 'success'
      });
      setFormData({ name: '', email: '' });
    } catch (error) {
      setStatus({
        message: 'Subscription failed. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <form onSubmit={handleSubscribe} className="mb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <Image src="/round-logo-new.webp" alt="Logo" width={60} height={60} />
            <h3 className="text-xl font-medium mt-4">
              Are You <span className="text-pink-600">New</span> Here?
            </h3>
            <h4 className="text-lg">
              Get a Special <span className="text-pink-600">Discount</span> on Your First Booking
            </h4>
            <p className="text-gray-600 mt-2">
              Subscribe Now for Instant Access to Exclusive Offers!
            </p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border p-2 rounded-md flex-1 md:w-48"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border p-2 rounded-md flex-1 md:w-48"
              required
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 disabled:opacity-50"
            >
              {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE & SAVE'}
            </button>
          </div>
        </form>
        
        {status.message && (
          <div className={`text-center mb-4 ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status.message}
          </div>
        )}

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="mb-2">Customer Care</p>
            <p className="text-pink-600 mb-2">+94 70 454 5455</p>
            <p>Need live support?</p>
            <a href="mailto:contact@haloholidays.lk" className="text-pink-600">
              contact@haloholidays.lk
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/corporate">Corporate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Address</h4>
            <p className="text-pink-600 mb-2">Halo Holidays LK</p>
            <p className="mb-2">Level 05, Astoria Tower, 418 R. A. De Mel Mawatha, Colombo 03</p>
            <p>Registration No.</p>
            <p>PV 00250114</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Book with Confidence</h4>
            <div className="flex gap-4">
              <Image src="/images/footer/CA.png" alt="Certification 1" width={80} height={80} />
              <Image src="/images/footer/SLTDA.png" alt="Certification 2" width={80} height={80} />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2025 by Halo Travels and Tours LK All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://wa.me/yourwhatsapp" aria-label="WhatsApp">
              <Image src="/images/socials/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Image src="/images/socials/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="https://tiktok.com" aria-label="TikTok">
              <Image src="/images/socials/tiktok.svg" alt="TikTok" width={24} height={24} />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <Image src="/images/socials/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Image src="/images/socials/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Image src="/images/socials/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
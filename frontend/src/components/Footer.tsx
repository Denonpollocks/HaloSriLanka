'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SLTDA from '../../public/SLTDA.png';
import CA from '../../public/CA.png';
import WhatsApp from '../../public/social/whatsapp.svg';
import Youtube from '../../public/social/youtube.svg';
import Linkedin from '../../public/social/linkedin.svg';
import Tiktok from '../../public/social/tiktok.svg';
import Facebook from '../../public/social/facebook.svg';
import Instagram from '../../public/social/instagram.svg';
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
      console.error(error);
      setStatus({
        message: 'Subscription failed. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 1, link: "https://wa.me/94765321455", imgSrc: WhatsApp, alt: "whatsapp", label: "WhatsApp" },
    { id: 2, link: "https://www.youtube.com/channel/UCiBdAVBM4KGVqpJ9hjOdNEQ", imgSrc: Youtube, alt: "youtube", label: "YouTube" },
    { id: 3, link: "https://www.tiktok.com/@haloholidays.lk", imgSrc: Tiktok, alt: "tiktok", label: "TikTok" },
    { id: 4, link: "https://www.facebook.com/haloholidays.sl", imgSrc: Facebook, alt: "facebook", label: "Facebook" },
    { id: 5, link: "https://www.instagram.com/haloholidays.lk", imgSrc: Instagram, alt: "instagram", label: "Instagram" },
    { id: 6, link: "https://www.linkedin.com/company/halo-flights-lk/?viewAsMember=true", imgSrc: Linkedin, alt: "linkedin", label: "Linkedin" },
  ];

  return (
    <footer className="container bg-white pt-16 mx-auto px-9">
      {/* Newsletter Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center">
        <hr className='border-gray-100 md:mb-6 mb-0' />
        <div className="container mx-auto px-0 flex flex-col items-start space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 md:items-center">
          <Image src='/round-logo-new.webp' alt='footer logo' width={80} height={80} loading='lazy' className='' />
          <div className='md:w-5/12 2xl:w-7/12'>
            <h2 className="text-xl font-semibold text-gray-900 xs:text-2xl">
              Are You <span className='text-pink-600'>New</span> Here? <br />Get a Special <span className='text-pink-600'>Discount</span> on Your First Booking
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Subscribe Now for Instant Access to Exclusive Offers!
            </p>
          </div>

          <form className="w-full" onSubmit={handleSubscribe}>
            <label htmlFor="UserEmail" className="sr-only">
              email
            </label>
            <div className="border-gray-200 md:flex md:items-center md:gap-4">
              <div className="w-full flex flex-col md:flex-row items-center">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-[40px] focus:ring-transparent text-sm p-4 focus:outline-none border border-gray-300 mb-3 md:mb-0 md:mr-3"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-[40px] focus:ring-transparent text-sm p-4 focus:outline-none border border-gray-300 mb-3 md:mb-0 md:mr-3"
                  required
                />
                <button
                  type="submit"
                  className={`w-full h-[40px] md:ml-4 bg-pink-600 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-pink-800 md:mt-0 md:w-auto md:shrink-0 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Subscribe"
                  disabled={loading}
                >
                  {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE & SAVE'}
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* Status Message */}
      {status.message && (
        <div className={`text-right ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status.message}
        </div>
      )}

      {/* Main Footer Links */}
      <div className="md:mt-12 mt-2 border-t border-gray-100 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Customer Care</li>
              <li><a href="tel:+94 70 454 5455" className="text-pink-600 hover:text-blue-500 text-[16px] font-medium">+94 70 454 5455</a></li>
              <li>Need live support?</li>
              <li><a href="mailto:contact@haloholidays.lk" className="text-pink-600 hover:text-blue-500 text-[16px] font-medium">contact@haloholidays.lk</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about-us" className="text-gray-700 hover:text-pink-600">About Us</Link></li>
              <li><Link href="/news" className="text-gray-700 hover:text-pink-600">News</Link></li>
              <li><Link href="/corporate" className="text-gray-700 hover:text-pink-600">Corporate</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/contact-us" className="text-gray-700 hover:text-pink-600">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-pink-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-pink-600">Cookie Policy</Link></li>
              <li><Link href="/sitemap" className="text-gray-700 hover:text-pink-600">Sitemap</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-medium">Address</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-pink-600 hover:text-blue-500 text-[16px] font-medium">
                  Halo Holidays LK
                </Link>
              </li>
              <li className="text-gray-700">
                Level 05, Astoria Tower, 418 R. A. De Mel Mawatha, Colombo 03
              </li>
              <li className="font-medium text-gray-900">Registration No.</li>
              <li className="text-gray-700">PV 00250114</li>
            </ul>
          </div>

          {/* Book with Confidence */}
          <div>
            <h3 className="text-lg font-medium">Book with Confidence</h3>
            <div className="flex mt-4 items-center">
              <div style={{ width: '80px' }}>
                <Image src={SLTDA} alt='SLTDA' width="70" height="70" loading='lazy' />
              </div>
              <div className='-mt-4'>
                <Image src={CA} alt='Civil Aviation' width="110" height="80" loading='lazy' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-100 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 text-[14.5px] mb-4 md:mb-0">
            &copy; {currentYear} by <Link href='/' className='hover:text-blue-500'>Halo Travels and Tours LK</Link> All rights reserved.
          </p>
          <div className="flex gap-x-5 items-center">
            {socialLinks.map(link => (
              <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <Image src={link.imgSrc} alt={link.alt} width={14} height={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
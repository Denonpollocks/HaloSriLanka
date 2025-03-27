'use client';

import { useEffect, Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
// import { signout } from '@/services/auth.service';
// import { Popover, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import UserMenu from './UserMenu';
import MobileNavbar from './header/MobileNavbar';
import MenuIcon from '../../public/menu.svg';

const packageLinks = [
  { title: 'Family Packages', href: '/family-packages' },
  { title: '2025 Holidays', href: '/packages/all-exclusive' },
  { title: 'Corporate Packages', href: '/corporate' },
  { title: 'Visa Free Holidays', href: '/visa-free-holidayys' },

];

const moreLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'Blog', href: '/blog' },
  { title: 'FAQs', href: '/faqs' },
];

const destinationLinks = [
  { title: 'Maldives', href: '/maldives' },
  { title: 'Thailand', href: '/thailand' },
  { title: 'Turkey', href: '/turkey' },
  { title: 'Japan', href: '/japan' },
  { title: 'Indonesia', href: '/indonesia' },
  { title: 'Italy', href: '/Italy' },
  { title: 'Greece', href: '/greece' },
  { title: 'France', href: '/france' },
  { title: 'China', href: '/china' },
  { title: 'Dubai', href: '/dubai' },
  { title: 'Egypt', href: '/egypt' },

];

const visaCountries = [
  {
    name: 'Dubai',
    href: '/visa-services/dubai',
    icon: '🇦🇪'
  },
  {
    name: 'Malaysia',
    href: '/visa-services/malaysia',
    icon: '🇲🇾'
  },
  {
    name: 'Schengen',
    href: '/visa-services/schengen',
    icon: '🇪🇺'
  }
];

const Navbar = () => {
  // const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 768 : false);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // const handleSignOut = async () => {
  //   await signout();
  //   setIsLoggedIn(false);
  //   router.push('/');
  // };

  return (
    <nav style={{
      backgroundColor: 'white',
      width: '100%',
      height: '4rem',
      top: 0,
      zIndex: 40,
      position: 'fixed',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem',
    }}>
      <Link href="/" className="flex items-center">
        <Image
          src="/images/new-halo-logo-2.svg"
          alt="Halo Holidays"
          width={170}
          height={70}
          priority
        />
      </Link>

      <div className="hidden md:flex items-center">
        <Link href="/" className="text-sm  font-medium px-4 py-2 hover:text-pink-600">
          Home
        </Link>
        <div className="relative group">
          <button className="text-sm font-medium px-4 py-2 hover:text-pink-600 cursor-pointer flex items-center relative group">
            Packages
            <svg
              className="inline ml-2 mt-0.5 w-3 h-3 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="8,6 16,12 8,18" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {packageLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="text-sm font-medium px-4 py-2 hover:text-pink-600 cursor-pointer flex items-center relative group">
            Destinations
            <svg
              className="inline ml-2 mt-0.5 w-3 h-3 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="8,6 16,12 8,18" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {destinationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/corporate" className="text-sm font-medium px-4 py-2 hover:text-pink-600">
          Corporate
        </Link>
        <div className="relative group">
          <button className="text-sm font-medium px-4 py-2 hover:text-pink-600 cursor-pointer flex items-center relative group">
            Visas
            <svg
              className="inline ml-2 mt-0.5 w-3 h-3 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="8,6 16,12 8,18" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-46 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {visaCountries.map((country) => (
                <Link
                  key={country.name}
                  href={country.href}
                  className={`text-sm block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                >
                  <span className="flex items-center gap-2 text-sm">
                    <span>{country.icon}</span>
                    {country.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/news" className="text-sm font-medium px-4 py-2 hover:text-pink-600">
          News
        </Link>
        <Link href="/reviews" className="text-sm font-medium px-4 py-2 hover:text-pink-600">
          Reviews
        </Link>
        <div className="relative group">
          <button className="text-sm font-medium px-4 py-2 hover:text-pink-600 cursor-pointer flex items-center relative group">
            More
            <svg
              className="inline ml-2 mt-0.5 w-3 h-3 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="8,6 16,12 8,18" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-46 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {moreLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Link
            href="/sign-in"
            className="text-pink-600 font-semibold font-mono hover:text-pink-700 ml-8"
          >
            Sign In
          </Link>
        )}
      </div>
      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} className='cursor-pointer' />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />
      )}
      <div className={`fixed top-0 left-0 w-80 h-full bg-white shadow-md transition-transform duration-300 ease-in-out z-40 overflow-y-scroll ${isMenuOpen ? 'transform-none' : '-translate-x-full'}`}>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
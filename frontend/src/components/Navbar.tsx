'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { signout } from '@/services/auth.service';

const packageLinks = [
  { title: 'Family Packages', href: '/packages/all-inclusive' },
  { title: 'All Exclusive Holidays', href: '/packages/all-exclusive' },
  { title: 'Family Holidays', href: '/packages/family' },
  
];

const moreLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'Blog', href: '/blog' },
  { title: 'FAQs', href: '/faqs' },
];

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleSignOut = () => {
    signout();
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="w-full sticky border-b border-gray-200 top-0 bg-white py-4 px-6 flex items-center  justify-between z-50">
      <div className='flex justify-between w-full items-center'> 
        <div className='flex items-center'>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/new-halo-logo-2.svg"
              alt="Halo Holidays"
              width={210}
              height={70}
              priority
            />
          </Link>
        </div>
    
        <div className="hidden md:flex items-center gap-8 ">
          <Link href="/" className="text-black font-semibold font-mono hover:text-pink-600">
            Home
          </Link>
          <div className="relative group">
            <button className="text-black font-semibold font-mono hover:text-pink-600 flex items-center">
              Packages
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {packageLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-md block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link href="/corporate" className="text-black font-semibold font-mono hover:text-pink-600">
            Corporate
          </Link>
          <Link href="/news" className="text-black font-semibold font-mono hover:text-pink-600">
            News
          </Link>
          <Link href="/reviews" className="text-black font-semibold font-mono hover:text-pink-600">
            Reviews
          </Link>
          <div className="relative group">
            <button className="text-black font-semibold font-mono hover:text-pink-600 flex items-center">
              More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-50 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {moreLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-md block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <button 
              onClick={handleSignOut}
              className="text-pink-600 font-semibold font-mono hover:text-pink-700"
            >
              Sign Out
            </button>
          ) : (
            <Link 
              href="/sign-in" 
              className="text-pink-600 font-semibold font-mono hover:text-pink-700"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
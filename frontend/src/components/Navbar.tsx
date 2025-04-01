'use client';

import {  Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import UserMenu from './UserMenu';

const packageLinks = [
  { title: 'Family Packages', href: '/family-packages' },
  { title: '2025 Holidays', href: '/holidays-2025' },
  { title: 'Corporate Packages', href: '/corporate' },
  { title: 'Visa Free Holidays', href: '/visa-free-holidays' },
  
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

const moreLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'Blog', href: '/blog' },
  { title: 'FAQs', href: '/faqs' },
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
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // const handleSignOut = () => {
  //   signout();
  //   setIsLoggedIn(false);
  //   router.push('/');
  // };

  return (
    <nav className="w-full fixed border-b border-gray-200 top-0 bg-white py-4 px-6 flex items-center justify-between z-50 h-16">
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
                    href={`/packages/${link.href}`}
                    className={`text-md block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="text-black font-semibold font-mono hover:text-pink-600 flex items-center">
              Destinations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {destinationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={`/destinations/${link.href}`}
                    className={`text-md block px-4 py-2 mx-2 hover:bg-pink-50 hover:text-pink-600`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
          <Popover className="relative">
            {() => (
              <>
                <Popover.Button className="inline-flex hover:text-pink-600 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                  Visas
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 shadow-lg ring-1 ring-gray-900/5">
                      {visaCountries.map((country) => (
                        <Link
                          key={country.name}
                          href={country.href}
                          className="block p-2 hover:bg-gray-50 rounded-lg"
                        >
                          <span className="flex items-center gap-2">
                            <span>{country.icon}</span>
                            {country.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {isLoggedIn ? (
            <UserMenu />
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
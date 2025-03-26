import React, { useState, useRef } from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  routePath: string;
  subItems?: MenuItem[];
};

const vacationItems: MenuItem[] = [
  { name: 'Family Packages', routePath: '/family-packages' },
  { name: 'Honeymoon Packages', routePath: '/honeymoon-packages' },
];

const moreItems: MenuItem[] = [
  { name: 'Contact us', routePath: '/contact-us' },
  { name: 'About us', routePath: '/about-us' },
];

const Navbar: React.FC = () => {
  const [isVacationsOpen, setIsVacationsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const vacationCloseTimeoutRef = useRef<number | null>(null);
  const moreCloseTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (setter: React.Dispatch<React.SetStateAction<boolean>>, ref: React.MutableRefObject<number | null>) => {
    if (ref.current !== null) {
      clearTimeout(ref.current);
      ref.current = null;
    }
    setter(true);
  };

  const handleMouseLeave = (setter: React.Dispatch<React.SetStateAction<boolean>>, ref: React.MutableRefObject<number | null>) => {
    ref.current = window.setTimeout(() => {
      setter(false);
      ref.current = null;
    }, 300);
  };

  return (
    <nav className="bg-white text-black ">
      <div className="justify-between items-center hidden lg:flex ">
        <Link href="/" className="text-sm font-medium px-4 py-2 hover:text-halo-pink">
          Home
        </Link>
        <div className="relative z-10" onMouseLeave={() => handleMouseLeave(setIsVacationsOpen, vacationCloseTimeoutRef)}
          onMouseEnter={() => handleMouseEnter(setIsVacationsOpen, vacationCloseTimeoutRef)}>
          <div className="text-sm font-medium px-4 py-2 hover:text-halo-pink cursor-pointer flex items-center">
            Packages
            <svg
              className="ml-1 mt-0.5 w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,16 6,8 18,8" />
            </svg>
          </div>
          {isVacationsOpen && (
            <ul className="absolute left-0 w-56 mt-1 bg-white text-black px-3 py-1.5 shadow-lg rounded">
              {vacationItems.map((item, index) => (
                <li key={index} className="text-sm text-black px-4 py-2 hover:text-halo-pink hover:bg-halo-pink-bg rounded relative group">
                  <Link href={item.routePath} onClick={() => setIsVacationsOpen(false)}>
                      {item.name}
                      {item.subItems && (
                        <svg
                          className="inline ml-3 w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="8,6 16,12 8,18" />
                        </svg>
                      )}
                  </Link>
                  {item.subItems && (
                    <ul className="absolute left-full top-0 w-56 bg-white shadow-lg rounded hidden group-hover:block">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-sm text-black px-4 py-2 hover:text-halo-pink hover:bg-halo-pink-bg">
                          <Link href={subItem.routePath} onClick={() => setIsVacationsOpen(false)}>
                              {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href="/corporate" className="text-sm font-medium px-4 py-2 hover:text-halo-pink flex items-center">
          Corporate
        </Link>
        <Link href="/news" className="text-sm font-medium px-4 py-2 hover:text-halo-pink">
          News
        </Link>
        <Link href="/reviews" className="text-sm font-medium px-4 py-2 hover:text-halo-pink">
          Reviews
        </Link>
        <div className="relative z-10" onMouseLeave={() => handleMouseLeave(setIsMoreOpen, moreCloseTimeoutRef)}
          onMouseEnter={() => handleMouseEnter(setIsMoreOpen, moreCloseTimeoutRef)}>
          <div className="text-sm font-medium px-4 py-2 hover:text-halo-pink cursor-pointer flex items-center">
            More
            <svg
              className="ml-1 mt-0.5 w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,16 6,8 18,8" />
            </svg>
          </div>
          {isMoreOpen && (
            <ul className="absolute left-0 w-56 mt-1 bg-white text-black px-3 py-1.5 shadow-lg rounded">
              {moreItems.map((item, index) => (
                <li key={index} className="text-sm text-black px-4 py-2 hover:text-halo-pink hover:bg-halo-pink-bg rounded">
                  <Link href={item.routePath} onClick={() => setIsMoreOpen(false)}>
                      {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

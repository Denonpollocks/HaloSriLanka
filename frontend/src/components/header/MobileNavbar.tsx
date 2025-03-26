import React, { useState } from 'react';
import Link from 'next/link';
// import Address from '../ContactUs/AddressComponent';
import Image from 'next/image';

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

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill="#4A5568" />
    </svg>
);

const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenu, setSubMenu] = useState<string>('');

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setSubMenu('');
    };

    const handleSubMenuToggle = (menuName: string) => {
        setSubMenu(subMenu === menuName ? '' : menuName);
    };

    const renderMenuItems = (items: MenuItem[]) => (
        <ul className={`pl-8 transition-opacity duration-500 ease-in-out ${subMenu ? 'opacity-100' : 'opacity-0'}`}>
            {items.map((item) => (
                <li key={item.name} className="py-2">
                    <Link href={item.routePath} onClick={handleMenuToggle} className="text-gray-700 hover:text-halo-pink">
                            {item.name}
                    </Link>
                    {item.subItems && (
                        <ul className="pl-4 mt-2">
                            {item.subItems.map((subItem) => (
                                <li key={subItem.name} className="py-2">
                                    <Link href={subItem.routePath} onClick={handleMenuToggle} className="text-gray-600 hover:text-halo-pink text-sm">
                                            {subItem.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow">
                <div>
                    <div className="p-2 mt-4">
                        <Image
                            src="/images/new-halo-logo-2.svg"
                            alt="Halo Holidays logo"
                            width={180}
                            height={32}
                            layout="fixed"
                        />
                    </div>
                    <div className="p-4 bg-white flex justify-between items-center">
                        <Link href="/" className="font-normal text-black">
                            Home
                        </Link>
                    </div>
                    <div className="bg-white">
                        <ul className="flex flex-col">
                            <li
                                className="flex justify-between items-center p-4 cursor-pointer bg-white"
                                onClick={() => handleSubMenuToggle('vacations')}
                            >
                                Packages
                                <ChevronIcon isOpen={subMenu === 'vacations'} />
                            </li>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${subMenu === 'vacations' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                {renderMenuItems(vacationItems)}
                            </div>
                        </ul>
                    </div>
                    <div className="p-4 bg-white flex justify-between items-center">
                        <Link href="/corporate" className="font-normal text-black">
                            Corporate
                        </Link>
                    </div>
                    <div className="p-4 bg-white flex justify-between items-center">
                        <Link href="/news" className="font-normal text-black">
                            News
                        </Link>
                    </div>
                    <div className="p-4 bg-white flex justify-between items-center">
                        <Link href="/reviews" className="font-normal text-black">
                            Reviews
                        </Link>
                    </div>
                    <div className="bg-white">
                        <ul className="flex flex-col">
                            <li
                                className="flex justify-between items-center p-4 cursor-pointer bg-white"
                                onClick={() => handleSubMenuToggle('more')}
                            >
                                More
                                <ChevronIcon isOpen={subMenu === 'more'} />
                            </li>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${subMenu === 'more' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                {renderMenuItems(moreItems)}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="p-4 bg-white flex justify-between items-center">
        <Address />
      </div> */}
        </div>
    );
};

export default MobileNavbar;

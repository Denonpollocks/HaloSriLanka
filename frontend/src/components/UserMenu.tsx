import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { signout } from '@/services/auth.service';
import { UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function UserMenu() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleSignOut = () => {
    signout();
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-2 rounded-full w-10 h-10 bg-gray-100 justify-center hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#dc0069" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
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
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-200 ring-opacity-5">
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <UserIcon className="w-5 h-5 mr-3" />
            Profile
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Cog6ToothIcon className="w-5 h-5 mr-3" />
            Settings
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 border-t border-gray-200   py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
} 
"use client";

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoGallery({ photos, isOpen, onClose }: PhotoGalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        {/* Gallery */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-lg bg-black text-left align-middle shadow-xl transition-all">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300"
                >
                  <FaTimes className="w-6 h-6" />
                </button>

                {/* Main image */}
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={photos[currentPhotoIndex].src}
                    alt={photos[currentPhotoIndex].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={previousPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300"
                  >
                    <FaChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300"
                  >
                    <FaChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Caption */}
                {photos[currentPhotoIndex].caption && (
                  <div className="p-4 text-white">
                    <p>{photos[currentPhotoIndex].caption}</p>
                  </div>
                )}

                {/* Thumbnails */}
                <div className="flex overflow-x-auto p-4 gap-2 bg-black/50">
                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 ${
                        index === currentPhotoIndex ? 'ring-2 ring-pink-500' : ''
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
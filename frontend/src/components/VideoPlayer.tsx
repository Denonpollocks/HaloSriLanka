'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  thumbnail: string;
  videoUrl: string;
  title: string;
  name: string;
  location: string;
  currentVideo: string | null;
  setCurrentVideo: (videoUrl: string | null) => void;
}

export default function VideoPlayer({ thumbnail, videoUrl, title, name, location, currentVideo, setCurrentVideo }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (currentVideo !== videoUrl && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentVideo, videoUrl, isPlaying]);

  const handlePlayPause = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentVideo(null);
    } else {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setCurrentVideo(videoUrl);
        })
        .catch((error) => {
          console.error('Error playing video:', error);
          setIsPlaying(false);
        });
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-lg aspect-[9/16] bg-black group cursor-pointer"
      onClick={handlePlayPause}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          loop={false}
          onEnded={handleVideoEnded}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button 
              className={`w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all ${
                isPlaying 
                  ? (isHovered ? 'opacity-100' : 'opacity-0') 
                  : 'opacity-100'
              }`}
              onClick={handlePlayPause}
            >
              <span className="text-white text-3xl cursor-pointer">{isPlaying ? '⏸' : '▶'}</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
            <p className="text-sm text-gray-200">
              {name} • {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
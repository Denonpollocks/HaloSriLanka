'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface LogoSliderProps {
  logos: {
    src: string
    alt: string
    url?: string;
  }[]
  speed?: number
  className?: string
  variant?: 'default' | 'large'
}

export default function LogoSlider({ logos, speed = 1, className = '', variant = 'default' }: LogoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    const sliderContent = sliderContentRef.current
    if (!slider || !sliderContent) return

    const scrollWidth = sliderContent.scrollWidth
    const clientWidth = slider.clientWidth
    const scrollAmount = scrollWidth - clientWidth

    let animationFrame: number
    let currentPosition = 0

    const animate = () => {
      currentPosition -= speed
      if (currentPosition <= -scrollAmount) {
        currentPosition = 0
      }
      sliderContent.style.transform = `translateX(${currentPosition}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [speed])

  const logoSizeClass =
  variant === 'large' ? 'w-64 h-32' : 'w-32 h-16'

  return (
    <div ref={sliderRef} className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={sliderContentRef}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className={`flex-shrink-0 relative ${logoSizeClass} grayscale-0 hover:grayscale transition-all duration-300`}
          >
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </a>
          </div>
        ))}
        {/* Duplicate set for seamless infinite scroll */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className={`flex-shrink-0 relative ${logoSizeClass} grayscale-0 hover:grayscale transition-all duration-300`}
          >
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
} 
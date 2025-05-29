'use client';

import React from 'react';
import Carousel from './Carousel';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const carouselImages = [
    { src: '/images/hero-image-1.jpg', alt: 'Marionix hero image 1' },
    { src: '/images/hero-image-2.jpg', alt: 'Marionix hero image 2' },
    { src: '/images/hero-image-3.jpg', alt: 'Marionix hero image 3' },
    { src: '/images/hero-image-4.jpg', alt: 'Marionix hero image 4' },
    { src: '/images/hero-image-5.jpg', alt: 'Marionix hero image 5' },
  ];

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="mb-8">
          <div className="mt-2 text-left">
              
                <img 
                 src="https://see.fontimg.com/api/rf5/llqq/NDBiMGQwYTUyOTBkNDkwMjg3NjU5NTVmYjZkOTExZTMudHRm/SW50ZXJhY3RpdmUgQUkg/pwflymetothemoon.png?r=fs&h=148&w=2000&fg=09FDD9&bg=353D4B&tb=1&s=74"
                 alt="String fonts" 
                  className="inline-block max-h-14"
                />
              
            </div>
            <div className="mt-2 text-left">
              
              <img 
               src="https://see.fontimg.com/api/rf5/llqq/NDBiMGQwYTUyOTBkNDkwMjg3NjU5NTVmYjZkOTExZTMudHRm/Q2hhcmFjdGVy/pwflymetothemoon.png?r=fs&h=148&w=2000&fg=09FDD9&bg=353D4B&tb=1&s=74"
               alt="String fonts" 
                className="inline-block max-h-14"
              />
            
          </div>
            <div className="mt-2 text-left">
              
                <img 
                  src="https://see.fontimg.com/api/rf5/llqq/NDBiMGQwYTUyOTBkNDkwMjg3NjU5NTVmYjZkOTExZTMudHRm/Zm9yIENoaWxkcmVu/pwflymetothemoon.png?r=fs&h=182&w=2000&fg=09FDD9&bg=353D4B&tb=1&s=56" 
                  alt="String fonts" 
                  className="inline-block max-h-16"
                />
             
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white">
            Bringing beloved characters to life through AI-powered conversations and dynamic interactions
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-8 py-3 text-lg">
              Learn More
            </Button>
            <Link href="/contact">
              <Button className="rounded-full px-8 py-3 text-lg bg-black text-white border-black hover:bg-gray-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
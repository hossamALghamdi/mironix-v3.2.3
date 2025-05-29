'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#040819]/70 shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/your_new_image.png" alt="MARIONX" width={75} height={30} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
              Home
            </Link>
            <Link href="/about" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
              About
            </Link>
            {/* <Link href="/features" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
              Features
            </Link> */}
            <Link href="/partnership" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
              Partnership
            </Link>
            <Link href="/contact" className="inline-block">
              <Button className="rounded-full px-6 py-2 text-black bg-[#f5b314] hover:bg-[#e6a900]">
                Contact Us
              </Button>
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white transition-all duration-300 opacity-75 hover:opacity-100 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
                Home
              </Link>
              <Link href="/about" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
                About
              </Link>
              {/* <Link href="/features" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
                Features
              </Link> */}
              <Link href="/partnership" className="text-white transition-all duration-300 opacity-30 hover:opacity-100 active:scale-95">
                Partnership
              </Link>
              <Link href="/contact" className="inline-block w-fit">
                <Button className="rounded-full px-6 py-2 text-black bg-[#f5b314] hover:bg-[#e6a900]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

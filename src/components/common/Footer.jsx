'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#040819] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block"> {/* Hide on mobile */}
            <Image src="/images/your_new_image.png" alt="MARIONX" width={150} height={60} />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact us</h3>
            <p className="mb-2">JEDDAH , SAUDI ARABIA </p>
            <p className="mb-2">
              <a href="https://lucamiro.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f5b314]">
                https://lucamiro.me
              </a>
            </p>
            <p>+966 56789103</p>
          </div>
          
          <div className="flex justify-start md:justify-end items-start space-x-4">
            <Link href="https://facebook.com" className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
              <Image src="/images/img_facebook_1.svg" alt="Facebook" width={14} height={14} />
            </Link>
            <Link href="https://www.instagram.com/studio13_lmi" className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
              <Image src="/images/img_group_11.svg" alt="Instagram" width={100} height={100} />
            </Link>
            <Link href="https://twitter.com" className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
              <Image src="/images/img_twitter_1.svg" alt="Twitter" width={15} height={15} />
            </Link>
            <Link href="https://linkedin.com/company/luca-miro-imagineering" className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
              <Image src="/images/img_linkedin_1.svg" alt="LinkedIn" width={13} height={13} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center">© {new Date().getFullYear()} Marionix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
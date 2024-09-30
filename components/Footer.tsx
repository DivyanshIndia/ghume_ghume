"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-500 py-8 border-t border-yellow-300 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Footer Navigation Links */}
          <nav className="w-full md:w-auto mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
              {['Home', 'Destinations', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-yellow-700 transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-6 md:mb-0">
            {[
              { Icon: FaFacebook, url: 'https://www.facebook.com' },
              { Icon: FaTwitter, url: 'https://www.twitter.com' },
              { Icon: FaInstagram, url: 'https://www.instagram.com' },
            ].map(({ Icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-700 transition-colors duration-300 ease-in-out"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-8 text-center text-sm  text-white">
          <p>© {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
          <p className="mt-2">Designed by Travel Agency Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

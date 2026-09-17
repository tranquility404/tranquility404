
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ['pfp-1.jpg', 'pfp-2.jpg', 'pfp-3.jpg'];

  // Image switching effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Switch every 7 seconds

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900/50">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={images[currentImageIndex]}
              alt="Aman Verma"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl hover:scale-110 transition-all duration-1000 ease-in-out"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Aman Verma
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            AI Product Engineer
          </p>

          <blockquote className="text-lg md:text-xl text-gray-400 italic mb-8 max-w-2xl mx-auto">
            "There is nothing so useless as doing efficiently that which should not be done at all."
          </blockquote>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://drive.google.com/file/d/1DeD_oUOzgLoiSe8ac3KgB_qBVW-itozC/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center px-8 py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              View Resume
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/tranquility404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/aman-verma403"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:work.with.aman.verma@gmail.com"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M24 5.457v13.086c0 .75-.615 1.457-1.361 1.457h-3.238V9.324l-7.4 5.257-7.4-5.257V20H1.361C.615 20 0 19.293 0 18.543V5.457c0-.986 1.092-1.573 1.912-.99l10.088 7.157 10.088-7.157c.82-.583 1.912.004 1.912.99z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/_tranquility404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com/_tranquility200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;

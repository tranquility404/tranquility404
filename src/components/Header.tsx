
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const images = ['pfp-1.jpg', 'pfp-2.jpg'];
  const roles = ['Backend Developer', 'GenAI Developer', 'Android Developer', 'Frontend Developer'];

  // Image switching effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Switch every 7 seconds

    return () => clearInterval(imageInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentRoleIndex, roles]);

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

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light h-10 flex items-center justify-center">
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <blockquote className="text-lg md:text-xl text-gray-400 italic mb-8 max-w-2xl mx-auto">
            "If you think good architecture is expensive, try bad architecture."
          </blockquote>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://drive.google.com/file/d/1upe3i49tvmwCaJIuQwHTw5EupwIiXAnW/view?usp=sharing"
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
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/aman-verma403"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:amanverma404403@gmail.com"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/_tranquility404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
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

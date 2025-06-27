import React, { useState, useEffect } from 'react';
import { Home, User, Code, GraduationCap, Award, Briefcase, Languages, Mail } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('header');

    const navItems = [
        { id: 'header', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'awards', label: 'Awards', icon: Award },
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'languages', label: 'Languages', icon: Languages },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    // Essential nav items for mobile (reduced set)
    const mobileNavItems = [
        { id: 'header', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    // Scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: [0.5], rootMargin: '-10% 0px -10% 0px' }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 px-3 sm:px-0">
            <div className="bg-gray-900/80 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-gray-700/50 shadow-2xl max-w-[90vw] sm:max-w-none overflow-hidden">
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Mobile: Show only essential nav items */}
                    <div className="flex sm:hidden items-center gap-1 overflow-x-auto scrollbar-hide">
                        {mobileNavItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 flex-shrink-0 ${isActive
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                        }`}
                                    title={item.label}
                                >
                                    <Icon className="w-4 h-4" />
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop: Show all nav items */}
                    <div className="hidden sm:flex items-center gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative group flex items-center gap-2 px-2 lg:px-3 py-2 rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                        }`}
                                    title={item.label}
                                >
                                    <Icon className="w-4 h-4" />

                                    {/* Show label on hover for inactive items */}
                                    {!isActive && (
                                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                                            {item.label}
                                        </span>
                                    )}

                                    {/* Show label for active item on larger screens */}
                                    {isActive && (
                                        <span className="hidden lg:block text-sm font-medium whitespace-nowrap">{item.label}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

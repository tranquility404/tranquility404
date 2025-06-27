
import React, { useState, useRef } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import RippleButton from './RippleButton';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const tabsRef = useRef<HTMLDivElement>(null);

  // Scroll tabs left/right
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 150;
      const newScrollLeft = direction === 'left'
        ? tabsRef.current.scrollLeft - scrollAmount
        : tabsRef.current.scrollLeft + scrollAmount;

      tabsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const projects = {
    featured: [
      {
        title: "SpeakSmart",
        description: "Multilingual speech training platform using LLaMA 3, Librosa, and Murph AI with live feedback, gamified sessions, and smart analysis tools.",
        tech: ["Python", "Librosa", "React.js", "FastAPI", "LLaMA 3", "WebSocket"],
        image: "speak-smart.png"
      },
      {
        title: "AI Ebook Reader",
        description: "Microservice-based ebook learning platform with smart quizzes, summaries, a custom reader, and progress tracking for .epub files.",
        tech: ["React.js", "Spring Boot", "FastAPI", "MongoDB", "LLaMA 3", "Microservices"],
        image: "ai-ebook-reader.png"
      }
    ],
    fullstack: [
      {
        title: "Online Library",
        description: "An all-in-one reading platform with quizzes, AI chatbot guidance, and secure access to community-shared books. Built for students and bookworms seeking a smarter way to read and retain.",
        tech: ["React", "TailwindCSS", "Express.js", "MongoDB", "Google Cloud", "JWT", "Bcrypt"],
        image: "online-library.png"
      },
      {
        title: "PG Management System",
        description: "Role-based accommodation booking platform with dedicated views for Admins, PG Owners, and Users.",
        tech: ["React.js", "Spring Boot", "MongoDB", "Spring Security"],
        image: "pg-management.png"
      },
      {
        title: "College ERP Clone",
        description: "A reverse-engineered ERP system that bypasses college CAPTCHA, logs in the user, scrapes academic data, and presents it in a modern, user-friendly UI. Built using a microservices architecture.",
        tech: ["React", "Spring Boot", "Flask", "Tesseract OCR", "Microservices", "Web Scraping"],
        image: "erp-clone.png"
      }
    ],
    frontend: [
      {
        title: "Team LaniakeaBorn",
        description: "Hackathon team introduction website showcasing our projects, vision, and tech stack. Designed in Canva, built with React.",
        tech: ["React.js", "Canva"],
        image: "team-laniakeaborn.png"
      },
      {
        title: "StudyPlanner",
        description: "A smart timetable generator built for the AKTU AI Hackathon. Helps students manage time effectively with GenAI assistance.",
        tech: ["React.js", "GenAI"],
        image: "study-planner.png"
      },
      {
        title: "Sorting Visualizer",
        description: "Interactive visualizer that demonstrates sorting algorithms in real-time. Users can modify arrays and observe the step-by-step logic.",
        tech: ["React.js", "DSA"],
        image: "sorting-visual.png"
      },
      {
        title: "Old Portfolio",
        description: "My initial developer portfolio site built to showcase Android projects. Built with React and styled using SCSS.",
        tech: ["React.js", "SCSS"],
        image: "android-dev-portfolio.png"
      },
      {
        title: "Ebook Reader",
        description: "A simple React UI prototype for reading eBooks, enhanced with AI tools for future integration like summarization and quiz generation.",
        tech: ["React.js", "AI Tools"],
        image: "ebook-frontend.png"
      },
      {
        title: "FoodCart",
        description: "Frontend Mentor challenge implementation of a food cart UI. Responsive and clean layout built with React.js.",
        tech: ["React.js"],
        image: "food-cart.png"
      }
    ],
    "androidApps": [
      {
        title: "MCQ Quiz",
        description: "An Android quiz app with Google login, user profiles, leaderboards, bookmarking, and test history. Uses Firebase for auth and Firestore for real-time data handling.",
        tech: ["Java", "XML", "Android SDK", "Firebase Auth", "Firestore", "Google Sign-In"],
        image: "mcq-quiz.png"
      },
      {
        title: "Android Icons",
        description: "A utility app that replicates Android Studio's icon generator. Allows users to generate and edit adaptive icons directly on their Android device.",
        tech: ["Java", "XML", "Android SDK"],
        image: "android-icons.jpg"
      },
      {
        title: "PopcornTime",
        description: "A movie suggestion app powered by the TMDB API. Users can discover popular, trending, and top-rated films with a smooth native UI.",
        tech: ["Java", "XML", "Android SDK", "TMDB API"],
        image: "popcorn-time.jpg"
      }
    ]
  };


  const tabs = [
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'androidApps', label: 'Android' }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-full">
            {/* Left scroll arrow */}
            <button
              onClick={() => scrollTabs('left')}
              className="absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 border border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-200 sm:hidden"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right scroll arrow */}
            <button
              onClick={() => scrollTabs('right')}
              className="absolute -right-6 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 border border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-200 sm:hidden"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Tabs container */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700 overflow-hidden">
              <div
                ref={tabsRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide sm:overflow-visible"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                {activeTab === 'androidApps' ? (
                  // Mobile/Android specific layout
                  <div className="flex justify-center items-center p-8 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-80 w-auto max-w-full object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        style={{
                          aspectRatio: '9/16', // Mobile aspect ratio
                          maxHeight: '320px'
                        }}
                      />
                      {/* Mobile frame effect */}
                      <div className="absolute inset-0 rounded-2xl border-4 border-gray-700 pointer-events-none"></div>
                    </div>
                  </div>
                ) : (
                  // Regular web project layout
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <RippleButton variant="secondary" className="flex items-center gap-2 px-4 py-2 rounded-lg">
                  <Github className="w-4 h-4" />
                  View Code
                </RippleButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

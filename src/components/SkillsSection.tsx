
import React, { useState } from 'react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
 const skills = [
  // Languages
  { name: 'Java', level: 'Advanced', certificate: 'https://www.hackerrank.com/certificates/1f2813d049c1' },
  { name: 'Python', level: 'Intermediate', certificate: null },
  { name: 'HTML', level: 'Intermediate', certificate: null },
  { name: 'SCSS', level: 'Basic', certificate: null },
  { name: 'TypeScript', level: 'Intermediate', certificate: null },

  // Frontend
  { name: 'React.js', level: 'Intermediate', certificate: null },
  { name: 'Zustand', level: 'Basic', certificate: null },
  { name: 'Tailwind CSS', level: 'Intermediate', certificate: null },

  // Backend
  { name: 'Spring Boot', level: 'Intermediate', certificate: null },
  { name: 'Spring Security', level: 'Intermediate', certificate: null },
  { name: 'Spring Data JPA', level: 'Intermediate', certificate: null },
  { name: 'Resilience4j', level: 'Basic', certificate: null },
  { name: 'Kafka', level: 'Basic', certificate: null },
  { name: 'RabbitMQ', level: 'Basic', certificate: null },
  { name: 'Redis', level: 'Basic', certificate: null },
  { name: 'Prometheus', level: 'Basic', certificate: null },
  { name: 'Spring Cloud - Eureka', level: 'Basic', certificate: null },
  { name: 'Spring Cloud - Config', level: 'Basic', certificate: null },
  { name: 'Spring Cloud - Gateway', level: 'Basic', certificate: null },

  // AI Integration
  { name: 'LangChain4J', level: 'Basic', certificate: null },

  // Database
  { name: 'MongoDB', level: 'Intermediate', certificate: null },
  { name: 'MySQL', level: 'Intermediate', certificate: null },

  // Tools & Services
  { name: 'VS Code', level: 'Intermediate', certificate: null },
  { name: 'IntelliJ', level: 'Intermediate', certificate: null },
  { name: 'Vercel', level: 'Basic', certificate: null },
  { name: 'Railway', level: 'Basic', certificate: null },
  { name: 'Groq', level: 'Basic', certificate: null },
  { name: 'Firebase', level: 'Basic', certificate: null }
];



  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Basic':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleViewCertificate = (certificate: string) => {
    window.open(certificate, '_blank', 'noopener,noreferrer');
  };

  const concepts = [
     'OOPs', 'DSA', 'System Design', 'Microservices', 'Responsive Design'
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills as Chips */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Certifications
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                  className="relative bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {selectedSkill === index && (
                    <div className="absolute z-10 bottom-full left-0 mb-2 bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 border border-gray-600 shadow-xl min-w-64">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">{skill.name}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        
                        {skill.certificate ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewCertificate(skill.certificate!);
                            }}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 group"
                          >
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2H4v8h12V6zM8 8a1 1 0 000 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                            </svg>
                            View Certificate
                          </button>
                        ) : (
                          <span className="text-gray-500 text-sm">No certificate available</span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  
                  {/* Expanded details */}
                </div>
              ))}
            </div>
          </div>

          {/* Concepts */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Concepts Known
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {concepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 text-sm font-medium">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

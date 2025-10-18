
import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    {
      name: 'Hindi',
      level: 'Native',
      description: 'Mother tongue with complete fluency in speaking, reading, and writing.',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'English',
      level: 'Professional',
      description: 'Fluent in business communication, technical documentation, and presentations.',
      icon: Globe,
      color: 'from-blue-500 to-purple-500'
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Languages Known
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((language, index) => {
            const Icon = language.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${language.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{language.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${language.color} text-white mt-2 sm:mt-0`}>
                        {language.level}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {language.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Language Skills */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Communication Skills</h3>
            </div>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Experienced in cross-cultural communication, technical presentations, and international collaboration.
              Comfortable working with diverse teams and adapting communication style for different audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;


import React from 'react';
import { Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "Best Innovation Team Award - GIH 2.0",
      organization: "Galgotias College of Engineering & Technology",
      prize: "₹10,000 Cash Prize",
      participants: "2,000+",
      year: "May 2025",
      image: "gih.jpg",
      description: "Developed Aushadhi AI, a drug discovery toolkit using ML-based IC50 prediction and GenAI-powered summarization. Won among 2,000+ participants in a 36-hour national hackathon."
    },
    {
      title: "1st Place – HackBlitz 2025",
      organization: "Google Developer Groups – MMMUT Gorakhpur",
      prize: "₹6,000 Cash Prize",
      participants: "200+",
      year: "March 2025",
      image: "hackblitz.jpg",
      description: "Built SpeakSmart, a multilingual speech training platform using Librosa, LLaMA 3, and Murph AI. Integrated FastAPI, MongoDB, and WebSocket-enabled React frontend. Secured 1st place among 200+ teams."
    }
  ];


  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Awards & Recognition
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">{award.title}</h3>
                    <p className="text-blue-400 font-medium text-xs sm:text-sm">{award.organization}</p>
                  </div>
                </div>
                <span className="ml-auto text-gray-400 text-xs sm:text-sm self-start">{award.year}</span>
              </div>

              <div className="mb-4">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-48 sm:h-60 object-cover rounded-lg border border-gray-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="bg-gray-700/50 rounded-lg p-2 sm:p-3">
                  <p className="text-gray-400 text-xs mb-1">Prize</p>
                  <p className="text-green-400 font-semibold text-xs sm:text-sm break-words">{award.prize}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 sm:p-3">
                  <p className="text-gray-400 text-xs mb-1">Participants</p>
                  <p className="text-blue-400 font-semibold text-xs sm:text-sm">{award.participants}</p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

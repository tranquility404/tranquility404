
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Axis Institute Of Technology & Management",
      year: "2023-2027",
      grade: "CGPA: 8.0",
      description: "Specialized in Software Engineering and Database Systems. Completed advanced coursework in algorithms, data structures, and system design."
    },
    {
      degree: "Senior Secondary Education",
      institution: "St. Aloysius High School",
      year: "2020-2022",
      grade: "94% (Science Stream)",
      description: "Mathematics, Physics, Chemistry, and Computer Science. Secured top 5% position in the state board examinations."
    }
  ];

  const achievements = [
    "2x Hackathon Winner",
    "Ranked top 5% out of 5500+ participants in CodeClash 2025.",
    "Open Source Contributor",
    "Worked on 10+ Freelance projects"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                  <p className="text-green-400 font-semibold text-sm mb-3">{edu.grade}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

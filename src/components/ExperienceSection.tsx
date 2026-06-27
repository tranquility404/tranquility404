import React from 'react';

const ExperienceSection = () => {
  const companies = [
    {
      name: "Micro1",
      duration: "6 mos",
      location: "Remote",
      roles: [
        {
          position: "Human Data Manager",
          type: "Full-time",
          period: "Feb 2026 - June 2026 · 5 months",
          responsibilities: [
            "Built & deployed a full-stack workflow platform (React + Spring Boot) for a pilot AI pipeline, integrating and customizing an open-source annotation tool into a centralized system used by annotation teams, SPLs, and ASPLs",
            "Designed a job-based async processing system with Redis caching, improving throughput for high-volume annotation workloads.",
            "Automated operations using cron jobs for spreadsheet & shared drive sync, maintaining backward compatibility with legacy Google Sheets/Drive workflows for seamless adoption",
            "Implemented observability & alerting (Grafana + Grafana Loki + email alerts) for real-time pipeline monitoring, debugging, and SLA tracking",
            "Worked across multiple AI pipelines including 2D annotation, 3D LiDAR (sparse sensor data), and validation of model-generated annotations",
            "Led 75+ contributors within a pipeline; conducted QC analysis across multiple pipelines, resolving trainer queries and payment-related escalations, and enforcing quality standards across annotations, model outputs, and trainer-recorded data"
          ]
        },
        {
          position: "Reviewer",
          type: "Part-time",
          period: "Jan 2026 - Feb 2026 · 2 months",
          responsibilities: [
            "Performed QC for an AI data pipeline, validating human-recorded data, flagging fraud cases, and enforcing project guidelines"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="relative">
              {/* Company Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-t-lg p-6 border border-gray-700 border-b-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white">{company.name}</h3>
                  </div>
                  <div className="flex gap-6 text-sm md:text-base">
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p className="text-blue-400 font-semibold">{company.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-purple-400 font-semibold">{company.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles with Timeline */}
              <div className="border border-t-0 border-gray-700 rounded-b-lg overflow-hidden relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-24 w-1 bg-gradient-to-b from-purple-500 to-blue-500 opacity-40"></div>

                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className={`p-6 pl-20 ${roleIndex !== company.roles.length - 1 ? 'border-b border-gray-700' : ''} hover:bg-gray-800/30 transition-colors duration-300 relative`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 top-8 w-5 h-5 rounded-full border-2 ${
                      roleIndex === company.roles.length - 1 
                        ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50' 
                        : 'bg-purple-500 border-purple-400 shadow-lg shadow-purple-500/50'
                    }`}></div>

                    {/* Role Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold text-white mb-1">{role.position}</h4>
                        <div className="flex items-center gap-3">
                          <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400 rounded-full text-blue-400 text-xs font-medium">
                            {role.type}
                          </span>
                          <span className="text-gray-400 text-sm">{role.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3 ml-2">
                      {role.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-300">
                          <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">-</span>
                          <span className="text-sm md:text-base leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

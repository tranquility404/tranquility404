
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm an AI Product Engineer who enjoys sitting at the intersection of operations, product, and engineering. 
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I work closely with teams to understand workflows, identify bottlenecks, and build AI-powered solutions that automate manual tasks, improve productivity, reduce costs, and drive business growth.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I specialize in building production-grade AI systems, intelligent automations, and scalable backend infrastructure that solve real business problems, not just technical ones.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            You bring the workflow. I'll engineer the AI system that transforms it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

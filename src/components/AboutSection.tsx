
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
            I'm a Backend Developer who thrives on turning fragile, duct-taped MVPs into clean, scalable, and production-grade systems. I specialize in building reliable APIs, streamlining data flows, and architecting backend infrastructures that can handle real-world scale, performance demands, and future growth.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My work doesn’t stop at the backend. With hands-on experience in frontend development and generative AI, I understand the full product lifecycle — enabling me to integrate intelligent features that enhance usability and user experience across the stack.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I value clean code, thoughtful abstractions, and systems that don’t just function — they endure. Whether you're struggling with scaling pains, performance bottlenecks, or simply need someone to bring technical stability to your product, I focus on building solutions that are as elegant as they are effective.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            You bring the idea — I’ll engineer the system that brings it to life, and keeps it running long after launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

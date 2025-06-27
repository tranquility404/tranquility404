
import React from 'react';
import VantaBackground from '@/components/VantaBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import AwardsSection from '@/components/AwardsSection';
import ProjectsSection from '@/components/ProjectsSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactSection from '@/components/ContactSection';
import RippleWrapper from '@/components/RippleWrapper';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <VantaBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <RippleWrapper>
          <div id="header">
            <Header />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="about">
            <AboutSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="skills">
            <SkillsSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="education">
            <EducationSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="awards">
            <AwardsSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="projects">
            <ProjectsSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="languages">
            <LanguagesSection />
          </div>
        </RippleWrapper>
        <RippleWrapper>
          <div id="contact">
            <ContactSection />
          </div>
        </RippleWrapper>
      </main>

      <footer className="text-center py-8 text-gray-400 border-t border-gray-800">
        <p>&copy; 2025 Aman Verma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

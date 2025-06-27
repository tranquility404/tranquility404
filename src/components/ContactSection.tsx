
import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import RippleButton from './RippleButton';

const ContactSection = () => {
  const contacts = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://linkedin.com/in/aman-verma403',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      link: 'mailto:amanverma404403@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/tranquility404',
      color: 'hover:text-purple-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://instagram.com/_tranquility404',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 group">
                <contact.icon className={`w-8 h-8 mx-auto mb-4 text-gray-400 transition-colors duration-300 ${contact.color}`} />
                <p className="text-gray-300 font-medium">{contact.name}</p>
              </div>
            </a>
          ))}
        </div>
        
        <RippleButton className="px-8 py-4 rounded-full text-lg font-semibold">
          Get In Touch
        </RippleButton>
      </div>
    </section>
  );
};

export default ContactSection;

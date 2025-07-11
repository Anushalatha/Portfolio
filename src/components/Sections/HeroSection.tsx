import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;
    
    titleElement.classList.add('animate-in');
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 flex flex-col items-center text-center z-10">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide animate-fadeIn">
          Hello, I'm
        </p>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 transition-opacity duration-1000"
          style={{ animationDelay: '0.2s' }}
        >
          {resumeData.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">{resumeData.title}</span> passionate about creating innovative solutions with AI and cutting-edge technologies
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform duration-200 hover:scale-105 hover:shadow-lg font-medium text-lg"
          >
            Contact Me
          </button>

          <a 
            href="/Anusha B DMICE Resume.pdf"
            download="Anusha B DMICE Resume.pdf"
            className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-lg font-medium text-lg border border-gray-300 dark:border-gray-600"
            onClick={(e) => {
              // Fallback: open in new tab if download fails
              setTimeout(() => {
                window.open('/Anusha B DMICE Resume.pdf', '_blank');
              }, 100);
            }}
          >
            Download Resume
          </a>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
          onClick={handleScrollDown}
        >
          <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-5 left-0 w-full h-20 bg-white dark:bg-gray-900 skew-y-3 transform origin-bottom-right"></div>
    </section>
  );
};

export default HeroSection;
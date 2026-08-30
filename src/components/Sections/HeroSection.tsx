import React from 'react';
import { resumeData } from '../../data/resumeData';

const HeroSection: React.FC = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getGithubLink = () => {
    const githubLink = resumeData.socialLinks.find(link => link.label.toLowerCase() === 'github');
    return githubLink ? githubLink.url : 'https://github.com/Anushalatha';
  };

  return (
    <section 
      id="hero" 
      className="min-h-[90vh] flex items-center justify-center relative bg-[#030014] pt-20 overflow-hidden"
    >
      {/* Space glow flares */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7042f8]/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#030014]/10 bg-gradient-to-l from-cyan-500/5 to-purple-500/5 blur-[120px] pointer-events-none"></div>

      {/* Editorial grid lines background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Decorative vertical border lines to feel architectural / technical */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[#2A0E61]/40 hidden lg:block opacity-60"></div>
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[#2A0E61]/40 hidden lg:block opacity-60"></div>

      <div className="container mx-auto px-6 md:px-16 py-20 flex flex-col items-center text-center z-10 max-w-4xl relative">
        {/* Soft engineering label */}
        <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-6 animate-fadeIn">
          PORTFOLIO ARCHIVE / 2026
        </p>
        
        {/* Editorial Heading */}
        <h1 
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8 animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          AI/ML ENGINEER <br />
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">&amp;</span> FULL-STACK DEV
        </h1>
        
        {/* Supporting Copy */}
        <p 
          className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-12 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          I build intelligent systems and full-stack applications that combine machine learning, software engineering, and practical product thinking.
        </p>
        
        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto font-display text-xs font-semibold tracking-widest text-white bg-[#7042f88b]/20 hover:bg-[#7042f88b]/40 transition-all duration-300 py-4 px-8 border border-[#7042f861] rounded-full shadow-[0_0_15px_rgba(112,66,248,0.2)] backdrop-blur-sm"
          >
            VIEW SELECTED WORK
          </button>

          <a 
            href={getGithubLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center font-display text-xs font-semibold tracking-widest text-[#B4B6C3] hover:text-white border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 py-4 px-8 bg-[#0300145e]/50 rounded-full"
          >
            GITHUB
          </a>

          <a 
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center font-display text-xs font-semibold tracking-widest text-[#B4B6C3] hover:text-white border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 py-4 px-8 bg-[#0300145e]/50 rounded-full"
          >
            RESUME
          </a>
        </div>
      </div>
      
      {/* Thin line separating hero from content */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2A0E61]/40"></div>
    </section>
  );
};

export default HeroSection;
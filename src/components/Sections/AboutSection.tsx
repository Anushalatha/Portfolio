import React from 'react';
import { resumeData } from '../../data/resumeData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
            BACKGROUND DETAILS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
            ABOUT ME
          </h2>
          <div className="w-12 h-[1px] bg-[#2A0E61] mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Profile Card Left: 4 Cols */}
          <div className="lg:col-span-4 bg-[#09002a]/15 border border-[#2A0E61]/70 p-6 flex flex-col items-center text-center rounded-lg shadow-[0_0_15px_rgba(112,66,248,0.05)] backdrop-blur-sm">
            <div className="w-40 h-40 border border-[#2A0E61] p-2 mb-6 relative overflow-hidden group rounded-lg">
              <img
                src="/Profile.png"
                alt="Anusha B"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-md"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-1">
              ANUSHA B<span className="text-purple-400">.</span>
            </h3>
            <p className="font-display text-[10px] tracking-widest text-[#B4B6C3] uppercase font-semibold mb-6">
              AI/ML ENGINEER &amp; FULL-STACK DEVELOPER
            </p>
            <div className="w-full border-t border-[#2A0E61]/50 pt-4 flex flex-col gap-2 text-left font-display text-[10px] tracking-wider text-slate-400">
              <div>
                <span className="text-purple-400 font-bold">LOCATION:</span> CHENNAI, INDIA
              </div>
              <div>
                <span className="text-purple-400 font-bold">EMAIL:</span> {resumeData.email}
              </div>
            </div>
          </div>

          {/* Biography and Details Right: 8 Cols */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <h3 className="font-display text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
                BIOGRAPHY
              </h3>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-6">
                {resumeData.about}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#2A0E61]/40">
              
              {/* Focus Areas */}
              <div>
                <h4 className="font-display text-[10px] tracking-widest font-bold text-white uppercase mb-4">
                  FOCUS AREAS
                </h4>
                <ul className="space-y-2 font-display text-xs text-slate-450">
                  <li>• Computer Vision</li>
                  <li>• Deep Learning</li>
                  <li>• Full-Stack Architecture</li>
                  <li>• Swarm Intelligence</li>
                </ul>
              </div>

              {/* Core Strengths */}
              <div>
                <h4 className="font-display text-[10px] tracking-widest font-bold text-white uppercase mb-4">
                  STRENGTHS
                </h4>
                <ul className="space-y-2 font-display text-xs text-slate-450">
                  <li>• System Design</li>
                  <li>• Critical Analysis</li>
                  <li>• Autonomous Agents</li>
                  <li>• Hackathon Leadership</li>
                </ul>
              </div>

              {/* Communication */}
              <div>
                <h4 className="font-display text-[10px] tracking-widest font-bold text-white uppercase mb-4">
                  LANGUAGES
                </h4>
                <ul className="space-y-2 font-display text-xs text-slate-450">
                  <li>• Tamil (Conversational)</li>
                  <li>• Telugu (Native)</li>
                  <li>• English (Professional)</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
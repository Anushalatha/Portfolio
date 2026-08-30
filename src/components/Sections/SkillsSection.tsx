import React from 'react';
import { resumeData } from '../../data/resumeData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/45 overflow-hidden">
      {/* Radial indigo glow behind the skills */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-[#7042f8]/10 blur-[130px] pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
            TECHNICAL REPERTOIRE
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
            EXPERTISE
          </h2>
          <div className="w-12 h-[1px] bg-[#2A0E61] mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {resumeData.skills.map((skillGroup, index) => (
            <div key={index} className="flex flex-col">
              {/* Category title */}
              <h3 className="font-display text-[10px] tracking-[0.2em] font-bold text-white uppercase mb-4 border-b border-[#2A0E61]/45 pb-3">
                {skillGroup.category}
              </h3>
              
              {/* Flex tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="font-mono text-[9px] text-[#B4B6C3] bg-[#0300145e]/50 border border-[#2A0E61] hover:border-[#7042f88b] hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.2)] transition-all duration-200 px-3 py-1.5 rounded-sm uppercase tracking-wide cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
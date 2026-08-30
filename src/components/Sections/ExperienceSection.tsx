import React from 'react';
import { resumeData } from '../../data/resumeData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/45">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* ROW 1: PROFESSIONAL EXPERIENCE */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Left Column: Heading and info */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
                HISTORY / 2023 - PRESENT
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white uppercase mb-6">
                EXPERIENCE
              </h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                A chronology of roles in full-stack engineering and machine learning deployment, focusing on automation, architectural scalability, and integration.
              </p>
            </div>
          </div>

          {/* Right Column: Roles stack */}
          <div className="lg:w-2/3 flex flex-col">
            {resumeData.experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`py-8 ${index !== 0 ? 'border-t border-[#2A0E61]/40' : 'pt-0'} flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4`}
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs mb-4">
                    <span className="text-purple-400 font-semibold">{exp.company.toUpperCase()}</span>
                  </div>
                  
                  {/* Bullet description points */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-start text-xs text-slate-400 font-light leading-relaxed">
                        <span className="text-purple-500 text-[10px] mr-2.5 mt-1 font-bold">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="sm:text-right flex-shrink-0">
                  <span className="font-mono text-[10px] text-[#B4B6C3] bg-[#0300145e]/50 border border-[#2A0E61] px-2.5 py-1 uppercase tracking-wider block sm:inline-block rounded-full shadow-sm">
                    {exp.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: ACADEMIC BACKGROUND */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-16 border-t border-[#2A0E61]/40">
          {/* Left Column: Heading and info */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
                ACADEMICS &amp; FOUNDATIONS
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white uppercase mb-6">
                EDUCATION
              </h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                Academic milestones, coursework, and core specializations in computer science and technology.
              </p>
            </div>
          </div>

          {/* Right Column: Education stack */}
          <div className="lg:w-2/3 flex flex-col">
            {resumeData.education.map((edu, index) => (
              <div 
                key={index} 
                className={`py-8 ${index !== 0 ? 'border-t border-[#2A0E61]/40' : 'pt-0'} flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4`}
              >
                <div className="flex-1">
                  <h3 className="font-display text-md font-bold text-white uppercase tracking-tight mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    <span className="text-purple-400 font-semibold">{edu.institution.toUpperCase()}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                
                <div className="sm:text-right flex-shrink-0">
                  <span className="font-mono text-[10px] text-[#B4B6C3] bg-[#0300145e]/50 border border-[#2A0E61] px-2.5 py-1 uppercase tracking-wider block sm:inline-block rounded-full shadow-sm">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
import React from 'react';
import { resumeData } from '../../data/resumeData';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/45">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
            ACADEMIC WRITING &amp; IMPACT
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
            RESEARCH &amp; RECOGNITION
          </h2>
          <div className="w-12 h-[1px] bg-[#2A0E61] mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Publications: Left 7 Cols */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-display text-xs font-semibold tracking-widest text-white uppercase border-b border-[#2A0E61]/45 pb-4 mb-6">
              PUBLICATIONS &amp; PATENTS
            </h3>

            <div className="space-y-10">
              {resumeData.publications?.map((pub, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[9px] text-purple-300 bg-[#7042f88b]/15 border border-[#7042f861]/50 px-2 py-0.5 rounded-full font-bold">
                      {pub.year}
                    </span>
                    {pub.journal && (
                      <span className="font-display text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
                        {pub.journal}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-display text-base font-bold text-white mb-3 group-hover:text-purple-400 leading-snug uppercase transition-colors duration-300">
                    {pub.title}
                  </h4>
                  
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-display text-[9px] tracking-widest font-bold text-purple-400 hover:text-white transition-colors"
                    >
                      READ PUBLICATION ↗
                    </a>
                  ) : (
                    <span className="font-display text-[9px] tracking-widest text-[#B4B6C3]">
                      INDEXED / SYSTEM VERIFIED
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certs: Right 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Awards Group */}
            <div>
              <h3 className="font-display text-xs font-semibold tracking-widest text-white uppercase border-b border-[#2A0E61]/45 pb-4 mb-6">
                AWARDS &amp; HONORS
              </h3>

              <div className="space-y-6">
                {resumeData.achievements.map((ach, idx) => (
                  <div key={idx} className="border-l-2 border-[#2A0E61] pl-4 py-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wide">
                        {ach.title}
                      </h4>
                      {ach.date && (
                        <span className="font-mono text-[9px] text-[#B4B6C3]">
                          {ach.date}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-450 font-light leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Group */}
            <div>
              <h3 className="font-display text-xs font-semibold tracking-widest text-white uppercase border-b border-[#2A0E61]/45 pb-4 mb-6">
                VERIFIED CREDENTIALS
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-[#09002a]/15 border border-[#2A0E61]/80 hover:border-[#7042f88b] hover:bg-[#09002a]/30 transition-colors flex items-center justify-between gap-4 rounded-lg shadow-md"
                  >
                    <div>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wide mb-1 leading-tight">
                        {cert.title}
                      </h4>
                      <p className="font-display text-[9px] tracking-wider text-purple-400 font-bold uppercase">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[10px] text-[#B4B6C3] hover:text-white p-1"
                        aria-label={`View ${cert.title} credential`}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchSection;

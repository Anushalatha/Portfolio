import React from 'react';
import { resumeData } from '../../data/resumeData';

// Technical abstract artwork for placeholders to give a premium engineering feel
const ProjectPreview: React.FC<{ index: number; title: string }> = ({ index, title }) => {
  const images = [
    '/projects/dressfit.png',
    '/projects/finecho.png',
    '/projects/tastylens.png',
    '/projects/employeedashboard.png'
  ];
  const imageUrl = images[index];

  return (
    <div className="w-full h-full min-h-[220px] bg-[#09002a]/20 border border-[#2A0E61]/80 overflow-hidden relative group-hover:border-[#7042f88b] transition-colors duration-500 flex items-center justify-center rounded-lg">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={`${title} Preview`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="text-slate-400 font-mono text-[9px]">Preview Unavailable</div>
      )}
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Graphic border element */}
      <div className="absolute top-3 right-3 flex space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2A0E61] border border-[#7042f861]/40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#2A0E61] border border-[#7042f861]/40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 animate-pulse"></span>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  // We want EXACTLY the first four projects in order:
  // 01 DressFit, 02 FinEcho, 03 TastyLens AR, 04 Employee Dashboard
  const selectedProjects = resumeData.projects.slice(0, 4);

  return (
    <section id="projects" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/45">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-2">
            PORTFOLIO HIGHLIGHTS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
            SELECTED WORK
          </h2>
          <div className="w-12 h-[1px] bg-[#2A0E61] mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Selected Work Layout */}
        <div className="flex flex-col gap-16">
          {selectedProjects.map((project, index) => {
            const isFlagship = project.isFlagship;
            const projectNumber = `0${index + 1}`;
            
            if (isFlagship) {
              // Full-width flagged layout for DressFit
              return (
                <div 
                  key={project.title}
                  className="editorial-card p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-stretch bg-[#09002a]/15 border border-[#2A0E61]/70 shadow-[0_0_15px_rgba(112,66,248,0.05)] rounded-lg backdrop-blur-sm"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Technical Header details */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-4xl font-bold text-[#2A0E61] tracking-tighter">
                          {projectNumber}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 text-[8px] tracking-widest font-mono text-purple-300 bg-[#7042f88b]/15 border border-[#7042f861]/50 rounded-full font-bold">
                            FINAL YEAR PROJECT
                          </span>
                          <span className="px-2 py-0.5 text-[8px] tracking-widest font-mono text-slate-400 bg-[#2A0E61]/30 border border-[#2A0E61]/65 rounded-full uppercase">
                            {project.category.replace('FINAL YEAR PROJECT · ', '')}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-[#B4B6C3] font-light leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="font-mono text-[9px] tracking-wider text-[#B4B6C3] bg-[#0300145e]/50 border border-[#2A0E61] px-2.5 py-1"
                          >
                            {tech.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-4 border-t border-[#2A0E61]/40 pt-6">
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-[10px] tracking-widest font-bold text-white hover:text-purple-400 transition-colors"
                          >
                            VIEW PROJECT ↗
                          </a>
                        )}
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-[10px] tracking-widest text-[#7042f8] hover:text-white transition-colors"
                        >
                          GITHUB ↗
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[45%] flex-shrink-0">
                    <ProjectPreview index={index} title={project.title} />
                  </div>
                </div>
              );
            }

            // Normal grid rows for FinEcho, TastyLens AR, Employee Dashboard
            return (
              <div 
                key={project.title}
                className="group border border-[#2A0E61] bg-[#09002a]/15 hover:border-[#7042f88b] hover:bg-[#09002a]/30 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch transition-all duration-500 ease-out rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(112,66,248,0.15)] animate-fadeIn"
              >
                <div className="md:w-[35%] flex-shrink-0">
                  <ProjectPreview index={index} title={project.title} />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl font-extrabold text-[#2A0E61] tracking-tighter">
                        {projectNumber}
                      </span>
                      <span className="px-2.5 py-0.5 text-[8px] tracking-widest font-mono text-slate-400 bg-[#2A0E61]/30 border border-[#2A0E61]/65 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white uppercase mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-[#B4B6C3] font-light leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="font-mono text-[8px] tracking-wider text-[#B4B6C3] bg-[#0300145e]/50 border border-[#2A0E61] px-2 py-0.5"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-4 border-t border-[#2A0E61]/40 pt-4">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-[9px] tracking-widest font-bold text-white hover:text-purple-400 transition-colors"
                        >
                          LIVE DEMO ↗
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[9px] tracking-widest text-[#7042f8] hover:text-white transition-colors"
                      >
                        GITHUB ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
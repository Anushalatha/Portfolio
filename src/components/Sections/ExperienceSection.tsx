import React from 'react';
import { resumeData } from '../../data/resumeData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Work Experience
            </h3>
            {/* Vertical timeline line at the left edge, starting below the heading, with fade-out gradient */}
            <div className="absolute left-3" style={{ top: '4.5rem', height: 'calc(100% - 4.5rem)' }}>
              <div className="w-1 h-full bg-gradient-to-b from-blue-400/60 via-blue-200/40 to-transparent dark:from-indigo-400/60 dark:via-indigo-900/40 dark:to-transparent z-0"></div>
            </div>
            <div className="space-y-12 relative z-10">
              {resumeData.experiences.map((exp, idx) => (
                <div key={idx} className="relative flex items-center">
                  {/* Timeline dot at the left edge, now purple */}
                  <div className="absolute left-0 z-20" style={{ top: '50%' }}>
                    <div className="w-6 h-6 rounded-full border-4 border-purple-600 bg-white dark:bg-gray-800"></div>
                  </div>
                  <div className="flex-1 ml-12">
                    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{exp.position}</h4>
                      <p className="text-gray-900 dark:text-white font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Education Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" />
                </svg>
              </div>
              Education
            </h3>
            {/* Vertical timeline line at the left edge, starting below the heading, with fade-out gradient */}
            <div className="absolute left-3" style={{ top: '4.5rem', height: 'calc(100% - 4.5rem)' }}>
              <div className="w-1 h-full bg-gradient-to-b from-indigo-400/60 via-indigo-200/40 to-transparent dark:from-purple-400/60 dark:via-purple-900/40 dark:to-transparent z-0"></div>
            </div>
            <div className="space-y-12 relative z-10">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative flex items-center">
                  {/* Timeline dot at the left edge, now purple */}
                  <div className="absolute left-0 z-20" style={{ top: '50%' }}>
                    <div className="w-6 h-6 rounded-full border-4 border-purple-600 bg-white dark:bg-gray-800"></div>
                  </div>
                  <div className="flex-1 ml-12">
                    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                      <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1">{edu.degree}</h4>
                      <p className="text-gray-900 dark:text-white font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Animated scroll indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
};

export default ExperienceSection;
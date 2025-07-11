import React from 'react';
import { Trophy, Award, BookOpen, ExternalLink } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition, awards, and professional certifications
          </p>
        </div>
        {/* Animated scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                <Trophy size={20} className="text-white" />
              </div>
              Awards & Recognition
            </h3>

            <div className="space-y-6">
              {resumeData.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    {achievement.date && (
                      <span className="text-sm font-medium px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full">
                        {achievement.date}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                <Award size={20} className="text-white" />
              </div>
              Certifications
            </h3>

            <div className="space-y-6">
              {resumeData.certifications.map((certification, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <BookOpen size={18} className="text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {certification.title}
                      </h4>
                      {certification.url && (
                        <a
                          href={certification.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 p-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full transition-colors duration-300 group"
                          aria-label="View Certificate"
                        >
                          <ExternalLink size={16} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                      {certification.issuer}
                    </p>
                    
                    {certification.date && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Issued: {certification.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
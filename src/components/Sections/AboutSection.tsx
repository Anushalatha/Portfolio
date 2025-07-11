import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Brain, Globe2, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Glassmorphism Profile Card */}
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20 mb-8 flex flex-col items-center">
            <img
              src="/my-profile.jpg.jpeg"
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 dark:border-blue-800 shadow-xl mb-4"
            />
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{resumeData.name}</h3>
            <p className="text-blue-600 dark:text-blue-400">{resumeData.title}</p>
          </div>
          <div className="w-full max-w-4xl">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {resumeData.about}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Soft Skills */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                    <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Soft Skills</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">• Self-Learner</li>
                  <li className="text-gray-700 dark:text-gray-300">• Problem Solving</li>
                  <li className="text-gray-700 dark:text-gray-300">• Leadership</li>
                  <li className="text-gray-700 dark:text-gray-300">• Critical Thinking</li>
                </ul>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                    <Globe2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">• Tamil</li>
                  <li className="text-gray-700 dark:text-gray-300">• Telugu (Native)</li>
                  <li className="text-gray-700 dark:text-gray-300">• English (Professional)</li>
                </ul>
              </div>

              {/* Interests */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Interests</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">• Artificial Intelligence</li>
                  <li className="text-gray-700 dark:text-gray-300">• Web Development</li>
                  <li className="text-gray-700 dark:text-gray-300">• Data Science</li>
                  <li className="text-gray-700 dark:text-gray-300">• Hackathons</li>
                  <li className="text-gray-700 dark:text-gray-300">• Research</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 border border-gray-300 dark:border-gray-700 rounded-md transition-transform duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
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

export default AboutSection;
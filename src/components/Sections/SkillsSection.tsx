import React, { useState } from 'react';
import { Code2, Server, Database, Brain, BarChart3, PenTool as Tool, Globe, Blocks, Palette } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  filter: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, category, filter }) => {
  if (filter !== 'All' && !category.includes(filter)) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filters = [
    'All',
    'Frontend',
    'Backend',
    'ML/AI',
    'Database',
    'DevOps',
    'Visualization',
    'Languages',
    'Design',
    'Other'
  ];

  const skillsData = [
    // Frontend
    { name: 'React.js', icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />, category: 'Frontend' },
    { name: 'TypeScript', icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: <Server className="w-4 h-4 text-green-600 dark:text-green-400" />, category: 'Backend' },
    { name: 'Flask', icon: <Server className="w-4 h-4 text-green-600 dark:text-green-400" />, category: 'Backend' },
    { name: 'Streamlit', icon: <Server className="w-4 h-4 text-green-600 dark:text-green-400" />, category: 'Backend' },
    
    // ML/AI
    { name: 'TensorFlow', icon: <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />, category: 'ML/AI' },
    { name: 'Machine Learning', icon: <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />, category: 'ML/AI' },
    { name: 'CNN', icon: <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />, category: 'ML/AI' },
    
    // Visualization
    { name: 'PowerBI', icon: <BarChart3 className="w-4 h-4 text-orange-600 dark:text-orange-400" />, category: 'Visualization' },
    { name: 'Plotly', icon: <BarChart3 className="w-4 h-4 text-orange-600 dark:text-orange-400" />, category: 'Visualization' },
    
    // DevOps
    { name: 'Docker', icon: <Tool className="w-4 h-4 text-red-600 dark:text-red-400" />, category: 'DevOps' },
    { name: 'Azure', icon: <Tool className="w-4 h-4 text-red-600 dark:text-red-400" />, category: 'DevOps' },
    { name: 'Vercel', icon: <Tool className="w-4 h-4 text-red-600 dark:text-red-400" />, category: 'DevOps' },
    
    // Database
    { name: 'MongoDB', icon: <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />, category: 'Database' },
    
    // Languages
    { name: 'Python', icon: <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, category: 'Languages' },
    { name: 'C++', icon: <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, category: 'Languages' },
    { name: 'C', icon: <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, category: 'Languages' },
    
    // Design
    { name: 'Figma', icon: <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />, category: 'Design' },
    
    // Other
    { name: 'Blockchain', icon: <Blocks className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />, category: 'Other' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-4 py-2 rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-lg ${
                filter === filterItem
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filterItem}
            </button>
          ))}
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              category={skill.category}
              filter={filter}
            />
          ))}
        </div>
      </div>
      {/* Animated scroll indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
};

export default SkillsSection;
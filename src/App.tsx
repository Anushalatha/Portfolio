import { useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ResearchSection from './components/Sections/ResearchSection';
import ContactSection from './components/Sections/ContactSection';
import './index.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Anusha B | AI/ML Engineer & Full-Stack Developer";
    
    // Remove dark mode lock
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] transition-colors duration-300">
      <Header isDarkMode={true} toggleDarkMode={() => {}} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
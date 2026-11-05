import { useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ArchitectureSection from './components/Sections/ArchitectureSection';
import WritingSection from './components/Sections/WritingSection';
import GitHubSection from './components/Sections/GitHubSection';
import TerminalSection from './components/Sections/TerminalSection';
import ResearchSection from './components/Sections/ResearchSection';
import ContactSection from './components/Sections/ContactSection';
import './index.css';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error);
    return 'dark';
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.title = 'Anusha B | AI Systems Engineer';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      console.warn('Unable to save the theme preference.', error);
    }
  }, [theme]);

  return (
    <div className="site-shell">
      <Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <WritingSection />
        <ExperienceSection />
        <GitHubSection />
        <TerminalSection />
        <ResearchSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
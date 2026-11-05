import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Work' },
  { id: 'systems', label: 'Systems' },
  { id: 'writing', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const activePoint = window.scrollY + Math.min(window.innerHeight * 0.35, 180);
      let nextSection = 'hero';

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= activePoint) {
          nextSection = item.id;
        }
      }

      setActiveSection((currentSection) =>
        currentSection === nextSection ? currentSection : nextSection,
      );
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#hero" aria-label="Anusha B — home">
          AB<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : undefined}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="resume-link" href={resumeData.resumeUrl} download>
            Resume <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : undefined}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a href={resumeData.resumeUrl} download onClick={() => setIsMenuOpen(false)}>
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

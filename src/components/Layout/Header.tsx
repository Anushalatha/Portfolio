import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'EXPERTISE' },
    { id: 'projects', label: 'WORK' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'research', label: 'RESEARCH' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#030014]/40 backdrop-blur-md border-b border-[#2A0E61]/30'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          className="font-display font-bold text-base tracking-widest text-white transition-colors duration-200 hover:text-purple-400"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('hero');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ANUSHA B<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center space-x-6 border border-[#7042f861] bg-[#0300145e]/80 backdrop-blur-md rounded-full px-6 py-2 shadow-[0_0_15px_rgba(112,66,248,0.1)]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-display text-xs font-semibold tracking-widest text-[#B4B6C3] hover:text-white transition-colors duration-205"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a 
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs font-semibold tracking-widest text-purple-400 hover:text-white hover:bg-[#7042f88b]/20 transition-all duration-205 ml-8 py-2 px-4 border border-[#7042f861] rounded-full shadow-[0_0_10px_rgba(112,66,248,0.15)]"
          >
            RESUME ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[60px] bg-[#030014]/95 border-b border-[#2A0E61] shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 py-6 visible' : 'max-h-0 opacity-0 overflow-hidden invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="w-full text-center font-display text-xs font-semibold tracking-widest text-slate-400 hover:text-white py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center font-display text-xs font-semibold tracking-widest text-purple-400 py-2 border border-[#7042f861] hover:bg-[#7042f88b]/10 rounded-full"
          >
            RESUME ↗
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
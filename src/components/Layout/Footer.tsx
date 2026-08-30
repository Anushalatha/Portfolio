import React from 'react';
import { resumeData } from '../../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030014] border-t border-[#2A0E61]/45 py-12 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold tracking-widest text-white text-sm mb-1 uppercase">
              ANUSHA B<span className="text-purple-550 font-bold">.</span>
            </h3>
            <p className="font-display text-[9px] tracking-widest text-[#B4B6C3] uppercase">
              AI/ML ENGINEER · FULL-STACK DEVELOPER
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-display text-xs tracking-widest text-slate-400">
            {resumeData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2A0E61]/45 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-slate-450 font-display text-[10px] tracking-wider">
          <p>© {currentYear} ANUSHA B. ALL RIGHTS RESERVED.</p>
          <p className="text-slate-400">DESIGNED &amp; BUILT WITH REACT, TS &amp; TAILWIND</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
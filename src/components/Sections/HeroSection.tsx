import { useEffect, useState } from 'react';
import { ArrowDown, ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const titles = [
  'AI Systems Engineer',
  'Generative AI Developer',
  'AI Infrastructure Engineer',
  'Full-Stack Developer',
];

function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [orbTilt, setOrbTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setTitleIndex((index) => (index + 1) % titles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  const handleOrbMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setOrbTilt({ x: -y * 14, y: x * 14 });
  };

  const handleOrbLeave = () => setOrbTilt({ x: 0, y: 0 });
  const github = resumeData.socialLinks.find((link) => link.label === 'GitHub');
  const linkedin = resumeData.socialLinks.find((link) => link.label === 'LinkedIn');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AI systems · Product engineering</p>
          <h1>Building intelligent systems <em>for the real world.</em></h1>
          <div className="hero-role" aria-live="polite">
            <span className="role-index">{String(titleIndex + 1).padStart(2, '0')} / 04</span>
            <span key={titleIndex} className="role-text">{titles[titleIndex]}</span>
            <span className="role-rule" />
          </div>
          <p className="hero-intro">
            I build intelligent applications and production-oriented AI systems,
            combining LLMs, retrieval infrastructure, agentic workflows, backend
            engineering, and modern interfaces.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="button button-secondary" href="/Anusha B 2026 Resume.pdf" download>
              Download resume
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            {github && (
              <a href={github.url} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            )}
            {linkedin && (
              <a href={linkedin.url} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            )}
            <span className="social-divider" />
            <span className="hero-location">Chennai, India</span>
          </div>
        </div>

        <div
          className="hero-art"
          onPointerMove={handleOrbMove}
          onPointerLeave={handleOrbLeave}
          aria-label="Iridescent abstract glass orb"
        >
          <div className="orb-stage">
            <div
              className="glass-orb"
              style={{ transform: `rotateX(${orbTilt.x}deg) rotateY(${orbTilt.y}deg)` }}
            >
              <span className="orb-core" />
              <span className="orb-ring orb-ring-one" />
              <span className="orb-ring orb-ring-two" />
              <span className="orb-shine" />
            </div>
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="art-coordinate">AI / 01</span>
            <span className="art-caption">Human intent<br />→ useful systems</span>
            <span className="floating-label label-llm">LLM orchestration</span>
            <span className="floating-label label-rag">RAG infrastructure</span>
            <span className="floating-label label-systems">Systems thinking</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll to explore</span><ArrowDown size={16} />
      </a>
      <span className="hero-index">PORTFOLIO / 2026</span>
    </section>
  );
}

export default HeroSection;

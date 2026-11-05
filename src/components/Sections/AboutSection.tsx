import { ArrowUpRight, Braces, Database, Workflow } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

const focusAreas = [
  { icon: Braces, title: 'AI application engineering', detail: 'LLM-powered products and structured outputs' },
  { icon: Database, title: 'Retrieval infrastructure', detail: 'Ingestion, search, grounding, and evaluation' },
  { icon: Workflow, title: 'Agentic systems', detail: 'Tool use, orchestration, and observable workflows' },
];

function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <div className="page-width">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">01 — The approach</p>
            <h2>I don't just build models.<br /><span>I build the systems around them.</span></h2>
          </div>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-note">
            <div className="about-note-top">
              <span className="mini-label">ENGINEERING NOTE / 001</span>
              <ArrowUpRight size={18} />
            </div>
            <p>{resumeData.about}</p>
            <div className="about-note-footer">
              <img src="/Profile.png" alt="Anusha B" loading="lazy" />
              <div><strong>Anusha B</strong><span>AI Systems Engineer</span></div>
              <span className="note-mark">AB.</span>
            </div>
          </Reveal>

          <div className="focus-list">
            {focusAreas.map(({ icon: Icon, title, detail }, index) => (
              <Reveal key={title} className="focus-item">
                <span className="focus-number">0{index + 1}</span>
                <span className="focus-icon"><Icon size={20} /></span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <ArrowUpRight className="focus-arrow" size={18} />
              </Reveal>
            ))}
            <p className="focus-footnote">
              From API boundaries to deployment and reliability, I care about how every part works together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

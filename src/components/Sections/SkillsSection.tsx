import { ArrowUpRight, Cpu, Database, Layers3, Server, Workflow } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

const icons = [Cpu, Layers3, Server, Workflow, Database];

function SkillsSection() {
  return (
    <section id="skills" className="section section-skills">
      <div className="page-width">
        <Reveal>
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">02 — Technical range</p>
              <h2>Tools for the <span>whole system.</span></h2>
            </div>
            <p className="section-intro">
              A practical toolkit spanning model interfaces, application layers, and the infrastructure between them.
            </p>
          </div>
        </Reveal>

        <div className="expertise-grid">
          {resumeData.skills.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={group.category} className={`expertise-card expertise-card-${index + 1}`}>
                <div className="expertise-top">
                  <span className="expertise-icon"><Icon size={20} /></span>
                  <span className="mini-label">CAPABILITY / 0{index + 1}</span>
                  <ArrowUpRight size={17} className="expertise-arrow" />
                </div>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

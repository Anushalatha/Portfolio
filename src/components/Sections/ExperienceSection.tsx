import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

function ExperienceSection() {
  return (
    <section id="experience" className="section section-experience" aria-labelledby="experience-title">
      <div className="page-width experience-layout">
        <Reveal className="experience-intro">
          <p className="eyebrow">03 — Professional timeline</p>
          <h2 id="experience-title">Professional Experience</h2>
          <p>Professional roles and practical experience across AI engineering, machine learning, data analytics, and full-stack development.</p>
          <a className="text-link" href={resumeData.resumeUrl} download>
            Full resume <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="experience-timeline" role="list">
          {resumeData.experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.position}`}
              className={`timeline-entry${experience.isCurrent ? ' timeline-entry-current' : ''}`}
              role="listitem"
            >
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <span className="timeline-date">{experience.duration}</span>
                {experience.isCurrent
                  ? <span className="timeline-current-label">Current role</span>
                  : <span className="timeline-number">0{index + 1}</span>}
              </div>
              <h3>{experience.position}</h3>
              <p className="timeline-company">{experience.company}</p>
              <ul className="experience-responsibilities">
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="timeline-technologies" role="list" aria-label={`${experience.position} technologies`}>
                {experience.technologies.map((technology) => (
                  <span className="skill-tag" key={technology} role="listitem">{technology}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

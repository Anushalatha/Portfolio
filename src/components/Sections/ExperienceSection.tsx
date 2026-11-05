import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

function ExperienceSection() {
  return (
    <section id="experience" className="section section-experience">
      <div className="page-width experience-layout">
        <Reveal className="experience-intro">
          <p className="eyebrow">03 — Professional timeline</p>
          <h2>Experience built<br />one system at a time.</h2>
          <p>Roles across full-stack engineering, machine learning, and data analysis.</p>
          <a className="text-link" href={resumeData.resumeUrl} download>
            Full resume <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="experience-timeline">
          {resumeData.experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.position}`} className="timeline-entry">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <span className="timeline-date">{experience.duration}</span>
                <span className="timeline-number">0{index + 1}</span>
              </div>
              <h3>{experience.position}</h3>
              <p className="timeline-company">{experience.company}</p>
              <ul>
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </Reveal>
          ))}
          {resumeData.education.map((education) => (
            <Reveal key={education.institution} className="timeline-entry education-entry">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <span className="timeline-date">{education.duration}</span>
                <span className="timeline-number">EDU</span>
              </div>
              <h3>{education.degree}</h3>
              <p className="timeline-company">{education.institution}</p>
              <p className="education-description">{education.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

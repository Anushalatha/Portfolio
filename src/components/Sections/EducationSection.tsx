import { BookOpen, GraduationCap, School } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

const educationIcons = [GraduationCap, School, BookOpen];

function EducationSection() {
  return (
    <section id="education" className="section section-education" aria-labelledby="education-title">
      <div className="page-width">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">04 — Academic background</p>
            <h2 id="education-title">Education</h2>
            <p className="section-intro">
              Academic foundation in artificial intelligence, data science and software engineering.
            </p>
          </div>
        </Reveal>

        <div className="education-grid">
          {resumeData.education.map((education, index) => {
            const Icon = educationIcons[index] ?? BookOpen;
            const isPrimary = index === 0;

            return (
              <Reveal
                key={`${education.institution}-${education.degree}`}
                className={`education-card${isPrimary ? ' education-card-primary' : ''}`}
              >
                <div className="education-card-heading">
                  <span className="education-icon" aria-hidden="true"><Icon size={20} /></span>
                  {education.score && <span className="education-score">{education.score}</span>}
                </div>
                <h3>{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
                {education.duration && <p className="education-duration">{education.duration}</p>}
                {education.description && <p className="education-description">{education.description}</p>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

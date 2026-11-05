import { ArrowUpRight, Award, BookOpen, Trophy } from 'lucide-react';
import Reveal from '../Reveal';
import { resumeData } from '../../data/resumeData';

function ResearchSection() {
  return (
    <section id="research" className="section section-research">
      <div className="page-width">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">08 — Research & recognition</p>
            <h2>Ideas, explored <span>and shared.</span></h2>
          </div>
        </Reveal>

        <div className="research-layout">
          <div className="publication-list">
            <div className="subsection-title"><BookOpen size={18} /><h3>Publications</h3></div>
            {resumeData.publications.map((publication, index) => (
              <Reveal className="publication-card" key={publication.title}>
                <span className="publication-number">0{index + 1}</span>
                <div>
                  <div className="publication-meta">
                    {publication.year && <span>{publication.year}</span>}
                    {publication.journal && <span>{publication.journal}</span>}
                  </div>
                  <h4>{publication.title}</h4>
                  {publication.url ? (
                    <a href={publication.url} target="_blank" rel="noreferrer" className="text-link">
                      Read publication <ArrowUpRight size={14} />
                    </a>
                  ) : <span className="publication-note">Link not listed in the current portfolio data</span>}
                </div>
              </Reveal>
            ))}
            <a className="medium-card" href="https://medium.com/@anushalathaaa7" target="_blank" rel="noreferrer">
              <span className="medium-mark">M</span>
              <span><strong>Writing on Medium</strong><small>Visit the profile for published articles.</small></span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="recognition-column">
            <div className="subsection-title"><Trophy size={18} /><h3>Awards</h3></div>
            {resumeData.achievements.map((achievement) => (
              <Reveal className="recognition-card" key={achievement.title}>
                <div><h4>{achievement.title}</h4>{achievement.date && <span>{achievement.date}</span>}</div>
                <p>{achievement.description}</p>
              </Reveal>
            ))}
            <div className="subsection-title certifications-title"><Award size={18} /><h3>Certifications</h3></div>
            <div className="certification-list">
              {resumeData.certifications.map((certification) => (
                <div className="certification-item" key={certification.title}>
                  <span><strong>{certification.title}</strong><small>{certification.issuer} · {certification.date}</small></span>
                  {certification.url && (
                    <a href={certification.url} target="_blank" rel="noreferrer" aria-label={`View ${certification.title}`}>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;

import { ArrowDownRight, ArrowUpRight, Github } from 'lucide-react';
import Reveal from '../Reveal';
import { featuredProjects } from '../../data/featuredProjects';
import { resumeData } from '../../data/resumeData';

function ProjectsSection() {
  return (
    <section id="projects" className="section section-projects">
      <div className="page-width">
        <Reveal>
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">04 — Selected systems</p>
              <h2>Built to work <span>beyond the demo.</span></h2>
            </div>
            <p className="section-intro">
              Four case studies in intelligent systems, with implementation notes and results shown only where available.
            </p>
          </div>
        </Reveal>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.name} className={`project-card project-card-${index + 1}`}>
              <details className="project-details">
                <summary>
                  <span className="project-card-top">
                    <span className="project-number">0{index + 1}</span>
                    <span className="project-category">{project.category}</span>
                  </span>
                  <span className="project-title">{project.name}</span>
                  <span className="project-summary">{project.summary}</span>
                  <span className="project-evidence">{project.evidence}</span>
                  <span className="project-card-bottom">
                    <span className="tag-list">
                      {project.stack.slice(0, 4).map((technology) => (
                        <span className="skill-tag" key={technology}>{technology}</span>
                      ))}
                    </span>
                    <span className="project-open" aria-label="Open case study">
                      <ArrowDownRight size={18} />
                    </span>
                  </span>
                </summary>
                <div className="case-study">
                  <div className="case-study-copy">
                    <div><span className="mini-label">THE PROBLEM</span><p>{project.problem}</p></div>
                    <div><span className="mini-label">THE APPROACH</span><p>{project.solution}</p></div>
                  </div>
                  <div className="case-study-architecture">
                    <span className="mini-label">SYSTEM FLOW</span>
                    <div className="case-flow">
                    {project.architecture.map((node, stepIndex) => (
                      <span className="case-flow-step" key={node.label}>
                          {stepIndex > 0 && <span className="case-flow-arrow" aria-hidden="true">→</span>}
                        <span>{node.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="case-study-columns">
                    <div>
                      <span className="mini-label">KEY CAPABILITIES</span>
                      <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    </div>
                    <div>
                      <span className="mini-label">ENGINEERING DECISIONS</span>
                      <ul>{project.engineeringNotes.map((note) => <li key={note}>{note}</li>)}</ul>
                    </div>
                  </div>
                  {project.metrics && (
                    <div className="metric-grid">
                      {project.metrics.map((metric) => (
                        <div className="metric-card" key={metric.label}>
                          <span>{metric.label}</span>
                          <strong>{metric.value}</strong>
                          <small>{metric.context}</small>
                        </div>
                      ))}
                      {project.name === 'KnowledgeOps' && (
                        <p className="metric-note">
                          These results apply to the published benchmark dataset and are not a general performance guarantee.
                        </p>
                      )}
                    </div>
                  )}
                  <div className="case-study-footer">
                    <div className="tag-list">
                      {project.stack.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}
                    </div>
                    {project.repositoryUrl ? (
                      <div className="project-resource-links">
                        <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                          <Github size={16} /> View repository <ArrowUpRight size={15} />
                        </a>
                        {project.liveDemoUrl && (
                          <a className="text-link" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                            Live demo <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="other-work">
          <div className="other-work-heading">
            <div><p className="eyebrow">More work</p><h3>Earlier projects</h3></div>
            <span>Selected from the existing portfolio</span>
          </div>
          <div className="other-work-grid">
            {resumeData.projects.map((project) => (
              <article className="other-project" key={project.title}>
                <div className="other-project-header">
                  <span>{project.category}</span>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">
                  Repository <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectsSection;

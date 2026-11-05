import { KeyboardEvent, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus, RotateCcw } from 'lucide-react';
import Reveal from '../Reveal';
import { ArchitectureKind, featuredProjects } from '../../data/featuredProjects';

const architectureLegend: { kind: ArchitectureKind; label: string }[] = [
  { kind: 'frontend', label: 'Frontend' },
  { kind: 'backend', label: 'Backend' },
  { kind: 'ai', label: 'AI services' },
  { kind: 'database', label: 'Databases' },
  { kind: 'communication', label: 'Communication' },
];

function ArchitectureSection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [selectedNode, setSelectedNode] = useState(0);
  const [zoom, setZoom] = useState(1);
  const projectTabs = useRef<(HTMLButtonElement | null)[]>([]);
  const diagramNodes = useRef<(HTMLButtonElement | null)[]>([]);
  const viewport = useRef<HTMLDivElement>(null);
  const project = featuredProjects[projectIndex];

  const selectProject = (index: number) => {
    setProjectIndex(index);
    setSelectedNode(0);
    setZoom(1);
    viewport.current?.scrollTo({ left: 0 });
  };

  const handleProjectTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % featuredProjects.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + featuredProjects.length) % featuredProjects.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = featuredProjects.length - 1;
    else return;

    event.preventDefault();
    selectProject(nextIndex);
    projectTabs.current[nextIndex]?.focus();
  };

  const handleNodeKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = Math.min(index + 1, project.architecture.length - 1);
    else if (event.key === 'ArrowLeft') nextIndex = Math.max(index - 1, 0);
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = project.architecture.length - 1;
    else return;

    event.preventDefault();
    setSelectedNode(nextIndex);
    diagramNodes.current[nextIndex]?.focus();
  };

  return (
    <section id="systems" className="section section-architecture">
      <div className="page-width">
        <Reveal>
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">05 — Architecture lab</p>
              <h2>Inside the systems <span>I build.</span></h2>
            </div>
            <p className="section-intro">
              Explore each data path. Select a node for context; scroll or zoom the diagram to inspect the full flow.
            </p>
          </div>
        </Reveal>

        <div className="architecture-panel">
          <div className="architecture-toolbar">
            <div className="architecture-tabs" role="tablist" aria-label="Choose a system architecture">
              {featuredProjects.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={projectIndex === index}
                  className={projectIndex === index ? 'architecture-tab is-active' : 'architecture-tab'}
                  key={item.name}
                  id={`architecture-tab-${index}`}
                  aria-controls="architecture-diagram-panel"
                  tabIndex={projectIndex === index ? 0 : -1}
                  ref={(element) => { projectTabs.current[index] = element; }}
                  onClick={() => selectProject(index)}
                  onKeyDown={(event) => handleProjectTabKeyDown(event, index)}
                >
                  <span>0{index + 1}</span>{item.name}
                </button>
              ))}
            </div>
            <div className="diagram-controls" aria-label="Diagram zoom controls">
              <button
                type="button"
                aria-label="Pan diagram left"
                onClick={() => viewport.current?.scrollBy({ left: -220, behavior: 'smooth' })}
              ><ChevronLeft size={16} /></button>
              <button
                type="button"
                aria-label="Zoom out"
                onClick={() => setZoom((current) => Math.max(0.7, Number((current - 0.1).toFixed(1))))}
              ><Minus size={16} /></button>
              <span>{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                aria-label="Zoom in"
                onClick={() => setZoom((current) => Math.min(1.5, Number((current + 0.1).toFixed(1))))}
              ><Plus size={16} /></button>
              <button type="button" aria-label="Reset zoom" onClick={() => setZoom(1)}>
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                aria-label="Pan diagram right"
                onClick={() => viewport.current?.scrollBy({ left: 220, behavior: 'smooth' })}
              ><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="architecture-title">
            <div><span className="mini-label">SYSTEM MAP / {project.name.toUpperCase()}</span><h3>{project.category}</h3></div>
            <span className="diagram-hint">Drag the scrollbar to pan</span>
          </div>

          <div
            id="architecture-diagram-panel"
            className="diagram-viewport"
            role="tabpanel"
            aria-labelledby={`architecture-tab-${projectIndex}`}
            aria-label={`${project.name} system diagram; horizontally scrollable`}
            ref={viewport}
            tabIndex={0}
          >
            <div className="diagram-track-wrap" style={{ width: `${zoom * 100}%` }}>
              <div className="diagram-track" style={{ transform: `scale(${zoom})` }}>
                {project.architecture.map((node, index) => (
                  <div className="diagram-step-wrap" key={`${project.name}-${node.label}`}>
                    <button
                      type="button"
                      className={`diagram-node diagram-node-${node.kind} ${selectedNode === index ? 'is-selected' : ''}`}
                      aria-pressed={selectedNode === index}
                      aria-label={`${node.label}, ${architectureLegend.find((item) => item.kind === node.kind)?.label}`}
                      ref={(element) => { diagramNodes.current[index] = element; }}
                      onClick={() => setSelectedNode(index)}
                      onKeyDown={(event) => handleNodeKeyDown(event, index)}
                    >
                      <span className="diagram-node-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{node.label}</span>
                    </button>
                    {index < project.architecture.length - 1 && (
                      <span className="diagram-connector" aria-hidden="true"><i /></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="architecture-legend" aria-label="Architecture node legend">
            <span className="mini-label">LEGEND</span>
            {architectureLegend.map((item) => (
              <span className="legend-item" key={item.kind}>
                <i className={`legend-swatch legend-${item.kind}`} />
                {item.label}
              </span>
            ))}
          </div>

          <div className="diagram-inspector" aria-live="polite">
            <span className="inspector-index">{String(selectedNode + 1).padStart(2, '0')}</span>
            <div>
              <span className={`architecture-kind architecture-kind-${project.architecture[selectedNode].kind}`}>
                {architectureLegend.find((item) => item.kind === project.architecture[selectedNode].kind)?.label}
              </span>
              <span className="mini-label">SELECTED COMPONENT</span>
              <h4>{project.architecture[selectedNode].label}</h4>
              <p>{project.architecture[selectedNode].responsibility}</p>
            </div>
            <span className="inspector-project">{project.name}</span>
            <div className="inspector-io">
              <p><span>INPUT</span>{project.architecture[selectedNode].input}</p>
              <p><span>OUTPUT</span>{project.architecture[selectedNode].output}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;

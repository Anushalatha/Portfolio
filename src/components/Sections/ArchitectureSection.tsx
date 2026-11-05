import { useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import Reveal from '../Reveal';
import { featuredProjects } from '../../data/featuredProjects';

function ArchitectureSection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [selectedNode, setSelectedNode] = useState(0);
  const [zoom, setZoom] = useState(1);
  const project = featuredProjects[projectIndex];

  const selectProject = (index: number) => {
    setProjectIndex(index);
    setSelectedNode(0);
    setZoom(1);
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
                  onClick={() => selectProject(index)}
                >
                  <span>0{index + 1}</span>{item.name}
                </button>
              ))}
            </div>
            <div className="diagram-controls" aria-label="Diagram zoom controls">
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
            </div>
          </div>

          <div className="architecture-title">
            <div><span className="mini-label">SYSTEM MAP / {project.name.toUpperCase()}</span><h3>{project.category}</h3></div>
            <span className="diagram-hint">Drag the scrollbar to pan</span>
          </div>

          <div className="diagram-viewport" aria-label={`${project.name} system diagram; horizontally scrollable`}>
            <div className="diagram-track-wrap" style={{ width: `${zoom * 100}%` }}>
              <div className="diagram-track" style={{ transform: `scale(${zoom})` }}>
                {project.architecture.map((node, index) => (
                  <div className="diagram-step-wrap" key={`${project.name}-${node}`}>
                    <button
                      type="button"
                      className={`diagram-node ${selectedNode === index ? 'is-selected' : ''}`}
                      aria-pressed={selectedNode === index}
                      onClick={() => setSelectedNode(index)}
                    >
                      <span className="diagram-node-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{node}</span>
                    </button>
                    {index < project.architecture.length - 1 && (
                      <span className="diagram-connector" aria-hidden="true"><i /></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="diagram-inspector" aria-live="polite">
            <span className="inspector-index">{String(selectedNode + 1).padStart(2, '0')}</span>
            <div>
              <span className="mini-label">SELECTED COMPONENT</span>
              <h4>{project.architecture[selectedNode]}</h4>
              <p>{project.architectureDetails[selectedNode]}</p>
            </div>
            <span className="inspector-project">{project.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;

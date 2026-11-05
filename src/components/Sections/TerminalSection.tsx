import { FormEvent, useEffect, useRef, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import Reveal from '../Reveal';
import { featuredProjects } from '../../data/featuredProjects';
import { resumeData } from '../../data/resumeData';

type TerminalEntry = {
  command: string;
  output: string[];
};

const availableCommands = ['help', 'about', 'skills', 'projects', 'experience', 'github', 'publications', 'contact'];

function getCommandOutput(command: string): string[] {
  switch (command.toLowerCase()) {
    case 'help':
      return ['Available commands:', ...availableCommands.map((item) => `  ${item}`)];
    case 'about':
      return [resumeData.about];
    case 'skills':
      return resumeData.skills.map((group) => `${group.category}: ${group.items.join(', ')}`);
    case 'projects':
      return featuredProjects.map((project) => `${project.name} — ${project.category}`);
    case 'experience':
      return resumeData.experiences.map((item) => `${item.position} · ${item.company} · ${item.duration}`);
    case 'github':
      return ['Public repositories and current activity:', 'https://github.com/Anushalatha'];
    case 'publications':
      return resumeData.publications.map((publication) => `${publication.title} — ${publication.journal || 'Publication'}, ${publication.year}`);
    case 'contact':
      return [`Email: ${resumeData.email}`, 'LinkedIn: linkedin.com/in/anusha-b-ai'];
    case '':
      return [];
    default:
      return [`Command not found: ${command}`, 'Type "help" to see available commands.'];
  }
}

function TerminalSection() {
  const [command, setCommand] = useState('');
  const [entries, setEntries] = useState<TerminalEntry[]>([
    { command: 'help', output: getCommandOutput('help') },
  ]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [entries]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = command.trim();
    setEntries((current) => [...current, { command: value, output: getCommandOutput(value) }]);
    setCommand('');
  };

  return (
    <section id="terminal" className="section section-terminal">
      <div className="page-width terminal-layout">
        <Reveal className="terminal-copy">
          <p className="eyebrow">07 — A small interface</p>
          <h2>Ask the<br /><span>portfolio.</span></h2>
          <p>Try a command to explore real project, experience, and contact information. No model or external service is involved.</p>
          <div className="terminal-command-list">
            {availableCommands.map((item) => <code key={item}>{item}</code>)}
          </div>
        </Reveal>

        <Reveal className="terminal-window">
          <div className="terminal-window-bar">
            <span className="terminal-lights"><i /><i /><i /></span>
            <span><TerminalIcon size={14} /> anusha@portfolio — bash</span>
            <span className="terminal-live">LOCAL</span>
          </div>
          <div className="terminal-output" ref={outputRef} aria-live="polite" aria-label="Terminal output">
            <p className="terminal-welcome">Portfolio terminal · type <code>help</code> to begin</p>
            {entries.map((entry, index) => (
              <div className="terminal-entry" key={`${entry.command}-${index}`}>
                <p className="terminal-prompt"><span>visitor@portfolio</span>:<b>~</b>$ {entry.command}</p>
                {entry.output.map((line, lineIndex) => (
                  <p className="terminal-line" key={`${line}-${lineIndex}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>
          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <label htmlFor="terminal-command"><span>visitor@portfolio</span>:<b>~</b>$</label>
            <input
              id="terminal-command"
              type="text"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Enter a portfolio terminal command"
            />
            <button type="submit">Run</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default TerminalSection;

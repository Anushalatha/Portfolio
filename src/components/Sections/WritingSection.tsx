import { ArrowUpRight, ExternalLink, Feather } from 'lucide-react';
import Reveal from '../Reveal';
import { writingArticles } from '../../data/writingArticles';

const mediumProfileUrl = 'https://medium.com/@anushalathaaa7';

function WritingSection() {
  return (
    <section id="writing" className="section section-writing">
      <div className="page-width">
        <Reveal>
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Writing & insights</p>
              <h2>Ideas, experiments<br /><span>&amp; engineering notes.</span></h2>
            </div>
            <p className="section-intro">
              Technical perspectives on building, evaluating and deploying intelligent systems.
            </p>
          </div>
        </Reveal>

        <div className="writing-grid">
          {writingArticles.map((article, index) => (
            <Reveal className={`writing-card writing-card-${index + 1}`} key={article.title}>
              <div className="writing-card-top">
                <span className="writing-index">0{index + 1}</span>
                <Feather size={17} aria-hidden="true" />
              </div>
              <p className="writing-series">{article.series}</p>
              <h3>{article.title}</h3>
              <p className="writing-description">{article.description}</p>
              <div className="writing-card-footer">
                {article.url ? (
                  <a
                    className="text-link writing-link"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read article: ${article.title} (opens in a new tab)`}
                  >
                    Read Article <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="writing-link-unavailable">
                    Direct article link needed
                  </span>
                )}
                <span className="writing-card-mark" aria-hidden="true">M.</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="writing-profile-link">
          <span>More notes on building intelligent systems</span>
          <a className="button button-secondary" href={mediumProfileUrl} target="_blank" rel="noopener noreferrer">
            Read all articles on Medium <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default WritingSection;

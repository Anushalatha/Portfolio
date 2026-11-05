import { useEffect, useState } from 'react';
import { ArrowUpRight, GitFork, Github, Star } from 'lucide-react';
import Reveal from '../Reveal';

interface GitHubRepository {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface RepositoryCache {
  savedAt: number;
  repositories: GitHubRepository[];
}

const cacheKey = 'portfolio-github-repositories';
const cacheDuration = 15 * 60 * 1000;

function isRepository(value: unknown): value is GitHubRepository {
  if (!value || typeof value !== 'object') return false;
  const repository = value as Record<string, unknown>;
  return (
    typeof repository.name === 'string' &&
    typeof repository.html_url === 'string' &&
    (typeof repository.description === 'string' || repository.description === null) &&
    (typeof repository.language === 'string' || repository.language === null) &&
    typeof repository.stargazers_count === 'number' &&
    typeof repository.forks_count === 'number' &&
    typeof repository.updated_at === 'string'
  );
}

function readCache(): RepositoryCache | null {
  try {
    const saved = window.localStorage.getItem(cacheKey);
    if (!saved) return null;
    const parsed: unknown = JSON.parse(saved);
    if (!parsed || typeof parsed !== 'object') return null;
    const cache = parsed as Record<string, unknown>;
    if (
      typeof cache.savedAt !== 'number' ||
      !Array.isArray(cache.repositories) ||
      !cache.repositories.every(isRepository)
    ) return null;
    return { savedAt: cache.savedAt, repositories: cache.repositories };
  } catch (error) {
    console.warn('Unable to read cached GitHub repositories.', error);
    return null;
  }
}

function GitHubSection() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const loadRepositories = async () => {
      const cached = readCache();
      if (cached && Date.now() - cached.savedAt < cacheDuration) {
        setRepositories(cached.repositories.slice(0, 6));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          'https://api.github.com/users/Anushalatha/repos?sort=updated&per_page=6',
          { headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`GitHub returned ${response.status}. Please visit the profile for current repositories.`);
        }
        const payload: unknown = await response.json();
        if (!Array.isArray(payload) || !payload.every(isRepository)) {
          throw new Error('GitHub returned repository data in an unexpected format.');
        }
        const nextRepositories = payload as GitHubRepository[];
        setRepositories(nextRepositories);
        try {
          window.localStorage.setItem(
            cacheKey,
            JSON.stringify({ savedAt: Date.now(), repositories: nextRepositories } satisfies RepositoryCache),
          );
        } catch (error) {
          console.warn('Unable to cache GitHub repositories.', error);
        }
      } catch (error) {
        if (controller.signal.aborted) return;
        const message = error instanceof Error ? error.message : 'Unable to load public repositories.';
        if (cached) {
          setRepositories(cached.repositories.slice(0, 6));
          setErrorMessage(`Live refresh failed. Showing cached repository data instead. ${message}`);
        } else {
          setErrorMessage(message);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void loadRepositories();
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="section section-github">
      <div className="page-width">
        <Reveal>
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">06 — Open source</p>
              <h2>Work in the <span>open.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/Anushalatha" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub profile <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        {loading && <p className="feed-state" role="status">Loading public repositories…</p>}
        {errorMessage && (
          <p className="feed-state feed-error" role="status">
            {errorMessage} <a href="https://github.com/Anushalatha" target="_blank" rel="noreferrer">Open GitHub</a>
          </p>
        )}
        {!loading && repositories.length > 0 && (
          <div className="repository-grid">
            {repositories.map((repository, index) => (
              <Reveal key={repository.html_url} className="repository-card">
                <div className="repository-card-top">
                  <span className="repository-index">0{index + 1}</span>
                  {repository.language && <span className="repository-language">{repository.language}</span>}
                </div>
                <h3><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}<ArrowUpRight size={16} /></a></h3>
                <p>{repository.description || 'Public repository on GitHub.'}</p>
                <div className="repository-meta">
                  <span><Star size={14} /> {repository.stargazers_count}</span>
                  <span><GitFork size={14} /> {repository.forks_count}</span>
                  <span>Updated {new Date(repository.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
        {!loading && !errorMessage && repositories.length === 0 && (
          <p className="feed-state" role="status">
            No public repositories were returned. <a href="https://github.com/Anushalatha" target="_blank" rel="noreferrer">Visit GitHub</a>
          </p>
        )}
        <p className="feed-footnote">Repository details are fetched from GitHub and cached in this browser for 15 minutes.</p>
      </div>
    </section>
  );
}

export default GitHubSection;

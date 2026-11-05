export interface FeaturedProject {
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  architectureDetails: string[];
  stack: string[];
  features: string[];
  engineeringNotes: string[];
  metrics?: {
    label: string;
    value: string;
    context: string;
  }[];
  repositoryUrl?: string;
  repositoryNote?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'KnowledgeOps',
    category: 'AI knowledge infrastructure',
    summary:
      'A document-grounded knowledge platform combining ingestion, vector retrieval, reranking, answer generation, citation validation, and RAG evaluation.',
    problem:
      'A useful RAG system needs more than retrieval and generation: its sources, ranking behavior, answer grounding, and citations must be inspectable.',
    solution:
      'KnowledgeOps brings document processing, semantic search, grounded Q&A, and a quality-engineering suite into one platform.',
    architecture: [
      'PDF upload',
      'PyMuPDF extraction',
      'Chunking & metadata',
      'Embeddings',
      'Qdrant',
      'Search & MMR',
      'Gemini generation',
      'Citation validation',
    ],
    architectureDetails: [
      'Documents enter through a browser-based upload flow.',
      'PyMuPDF extracts text from uploaded PDFs.',
      'Extracted content is chunked and tagged with metadata.',
      'Document chunks are embedded for semantic retrieval.',
      'Qdrant stores and searches the document vectors.',
      'Candidate results can be reranked with configurable MMR.',
      'Gemini generates an answer from the retrieved context.',
      'Citations and answer quality are checked after generation.',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Qdrant', 'Gemini', 'PyMuPDF', 'Docker'],
    features: [
      'Multi-document ingestion and indexing',
      'Vector retrieval with configurable MMR reranking',
      'Grounded answers with citation validation',
      'Evaluation and retrieval inspection',
    ],
    engineeringNotes: [
      'Treats retrieval quality and answer quality as separate engineering concerns.',
      'Keeps citation validation and evaluation visible in the workflow.',
      'MMR is configurable; the published benchmark did not show a measurable difference between tested MMR settings.',
    ],
    metrics: [
      { label: 'Benchmark set', value: '30 cases', context: 'Across 6 technical domains' },
      { label: 'Answer relevance', value: '41.4% → 71.1%', context: 'Before vs. after optimization' },
      { label: 'Citation correctness', value: '90% → 100%', context: 'On the published benchmark' },
      { label: 'MRR', value: '0.925 → 0.950', context: 'Top-K = 5 benchmark' },
    ],
    repositoryUrl: 'https://github.com/Anushalatha/KnowledgeOps',
  },
  {
    name: 'FlowMind',
    category: 'AI workflow orchestration',
    summary:
      'An orchestration platform that plans multi-step tasks, schedules dependent work, executes tools, and exposes workflow progress.',
    problem:
      'Multi-step AI tasks need dependency-aware execution, state tracking, and recovery rather than a single unobservable model response.',
    solution:
      'FlowMind separates planning, scheduling, execution, and synthesis, with persistent workflow records and event-driven progress updates.',
    architecture: [
      'Natural-language request',
      'LLM planner',
      'Dependency scheduler',
      'Tool execution',
      'SQLite persistence',
      'FastAPI + SSE',
      'React dashboard',
      'React Flow graph',
    ],
    architectureDetails: [
      'A natural-language goal starts a workflow run.',
      'An LLM planner decomposes the goal into structured steps.',
      'The scheduler tracks dependencies and parallelizable work.',
      'Tools execute steps and pass results between them.',
      'SQLite persists workflow execution records.',
      'FastAPI streams lifecycle events with server-sent events.',
      'The React client renders workflow status and controls.',
      'React Flow visualizes steps, dependencies, and execution state.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'React Flow',
      'SQLite',
      'SQLAlchemy',
      'Docker',
    ],
    features: [
      'Dependency-aware sequential and parallel steps',
      'Intermediate result passing and response synthesis',
      'Retries, blocked-step handling, and workflow state consistency',
      'SSE lifecycle events and interactive workflow visualization',
    ],
    engineeringNotes: [
      'Separates planning from execution and final response synthesis.',
      'Persists workflow state so execution status can be inspected.',
      'Uses event streams to connect backend lifecycle events to the frontend graph.',
    ],
    repositoryUrl: 'https://github.com/Anushalatha/Flowmind',
  },
  {
    name: 'ReliAI',
    category: 'AI evaluation & reliability',
    summary:
      'A backend-driven platform for evaluating AI application quality, inspecting traces, comparing runs, and detecting regressions.',
    problem:
      'AI application changes need repeatable quality checks and trace-level context to make failures and regressions easier to diagnose.',
    solution:
      'The supplied project brief describes persistent evaluation runs, deterministic metrics, trace inspection, configurable thresholds, and bulk dataset ingestion.',
    architecture: [
      'Evaluation dataset',
      'Application / HTTP run',
      'Metric evaluators',
      'Trace persistence',
      'Run comparison',
      'Regression checks',
      'React dashboard',
    ],
    architectureDetails: [
      'Evaluation cases are imported as a managed dataset.',
      'A project or HTTP endpoint is evaluated against that dataset.',
      'Deterministic evaluators score exact match, JSON validity, and keywords.',
      'Trace information is stored with evaluation results.',
      'Runs can be compared to inspect changes in quality.',
      'Configured thresholds flag potential regressions.',
      'The client presents datasets, runs, traces, and failures.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Pydantic',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'React',
      'TypeScript',
      'Pytest',
      'Docker',
    ],
    features: [
      'Exact-match, JSON-validity, and keyword-based evaluation',
      'Execution traces with latency, token, provider, and model details',
      'Run comparison and configurable regression detection',
      'CSV, JSON, JSONL, and NDJSON dataset imports',
    ],
    engineeringNotes: [
      'The project details and feature list come from the supplied portfolio brief.',
      'No public repository or independently verifiable test results were found during this update.',
    ],
    repositoryNote: 'Repository link and benchmark results were not verified.',
  },
  {
    name: 'ArchMind',
    category: 'AI system architecture',
    summary:
      'An LLM-powered system architecture assistant that turns natural-language product ideas into structured technical proposals.',
    problem:
      'Moving from an early product idea to a reviewable system design requires explicit components, interfaces, data choices, and trade-offs.',
    solution:
      'ArchMind generates structured proposals and validates the response before presenting architecture recommendations.',
    architecture: [
      'Product idea',
      'Streamlit interface',
      'Prompt builder',
      'LLM API',
      'Structured JSON',
      'Pydantic validation',
      'Architecture service',
      'Visualization',
    ],
    architectureDetails: [
      'A user describes a product idea in natural language.',
      'Streamlit collects requirements and project context.',
      'The prompt builder prepares an architecture request.',
      'An LLM provider generates a structured proposal.',
      'The response is represented as structured JSON.',
      'Pydantic validates generated data before it is used.',
      'Architecture services shape recommendations for the UI.',
      'Streamlit presents the resulting proposal and critique.',
    ],
    stack: ['Python', 'Streamlit', 'Pydantic', 'OpenAI-compatible API'],
    features: [
      'Natural-language requirements input',
      'Structured architecture and technology recommendations',
      'API and database design suggestions',
      'Security, scalability, risks, and trade-offs',
    ],
    engineeringNotes: [
      'Uses schema validation to keep generated architecture output structured.',
      'Separates prompt construction, model integration, and architecture services.',
    ],
    repositoryUrl: 'https://github.com/Anushalatha/ArchMind',
  },
];

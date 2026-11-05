export type ArchitectureKind =
  | 'frontend'
  | 'backend'
  | 'ai'
  | 'database'
  | 'communication';

export interface ArchitectureNode {
  label: string;
  kind: ArchitectureKind;
  responsibility: string;
  input: string;
  output: string;
}

export interface FeaturedProject {
  name: string;
  category: string;
  summary: string;
  evidence: string;
  problem: string;
  solution: string;
  architecture: ArchitectureNode[];
  stack: string[];
  features: string[];
  engineeringNotes: string[];
  metrics?: {
    label: string;
    value: string;
    context: string;
  }[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'KnowledgeOps',
    category: 'AI knowledge infrastructure',
    summary:
      'A document-grounded knowledge platform combining ingestion, vector retrieval, reranking, answer generation, citation validation, and RAG evaluation.',
    evidence:
      '30-case benchmark: answer relevance improved from 41.4% to 71.1%; 51 backend tests passed on the current repository snapshot.',
    problem:
      'A useful RAG system needs more than retrieval and generation: its sources, ranking behavior, answer grounding, and citations must be inspectable.',
    solution:
      'KnowledgeOps brings document processing, semantic search, grounded Q&A, and a quality-engineering suite into one platform.',
    architecture: [
      {
        label: 'PDF upload',
        kind: 'frontend',
        responsibility: 'Accepts documents and starts ingestion.',
        input: 'PDF file selected by a user.',
        output: 'Validated document upload.',
      },
      {
        label: 'PyMuPDF extraction',
        kind: 'backend',
        responsibility: 'Extracts document text for indexing.',
        input: 'Uploaded PDF.',
        output: 'Extracted page text.',
      },
      {
        label: 'Chunking & metadata',
        kind: 'backend',
        responsibility: 'Creates searchable chunks and retains source metadata.',
        input: 'Extracted text and document metadata.',
        output: 'Text chunks with source context.',
      },
      {
        label: 'Embedding generation',
        kind: 'ai',
        responsibility: 'Encodes document chunks for semantic retrieval.',
        input: 'Prepared text chunks.',
        output: 'Chunk embeddings.',
      },
      {
        label: 'Qdrant vector index',
        kind: 'database',
        responsibility: 'Stores vectors and their associated document metadata.',
        input: 'Embeddings and chunk metadata.',
        output: 'Indexed document vectors.',
      },
      {
        label: 'Vector search & MMR',
        kind: 'backend',
        responsibility: 'Retrieves candidates and applies configurable MMR reranking.',
        input: 'Question embedding and indexed chunks.',
        output: 'Ranked context for generation.',
      },
      {
        label: 'Gemini generation',
        kind: 'ai',
        responsibility: 'Creates an answer grounded in the retrieved context.',
        input: 'Question and ranked context.',
        output: 'Generated answer and source references.',
      },
      {
        label: 'Citation validation',
        kind: 'backend',
        responsibility: 'Checks answer citations against retrieved sources.',
        input: 'Generated answer and source references.',
        output: 'Validated answer and citation results.',
      },
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
      'The tested MMR settings did not demonstrate a measurable difference on the published benchmark.',
    ],
    metrics: [
      { label: 'Benchmark dataset', value: '30 cases', context: 'Across 6 technical domains' },
      { label: 'Answer relevance', value: '41.4% → 71.1%', context: 'Before vs. after optimization' },
      { label: 'Citation correctness', value: '90% → 100%', context: 'Before vs. after optimization' },
      { label: 'MRR@5', value: '0.925 → 0.950', context: 'Before vs. after optimization' },
      { label: 'Retrieval hit rate', value: '100%', context: 'Published benchmark dataset' },
      { label: 'Recall@5', value: '100%', context: 'Published benchmark dataset' },
      { label: 'Groundedness', value: '100%', context: 'Published benchmark dataset' },
      { label: 'Backend tests', value: '51 / 51 passed', context: 'Verified at commit 795568f' },
    ],
    repositoryUrl: 'https://github.com/Anushalatha/KnowledgeOps',
  },
  {
    name: 'ReliAI',
    category: 'AI evaluation & reliability',
    summary:
      'A backend-driven platform for evaluating AI application quality, inspecting traces, comparing runs, and detecting regressions.',
    evidence:
      '89 backend tests passed against the current repository snapshot at commit 91e64fb.',
    problem:
      'AI application changes need repeatable quality checks and trace-level context to diagnose failures and regressions.',
    solution:
      'A backend-driven evaluation and observability workflow manages datasets, executes evaluations, records traces, compares historical runs, and identifies metric degradation through configurable thresholds.',
    architecture: [
      {
        label: 'Evaluation dataset',
        kind: 'backend',
        responsibility: 'Manages evaluation examples and their expected outcomes.',
        input: 'CSV, JSON, JSONL, or NDJSON dataset.',
        output: 'Stored evaluation cases.',
      },
      {
        label: 'Dataset validation',
        kind: 'backend',
        responsibility: 'Validates imported examples and their evaluation configuration.',
        input: 'Imported rows and dataset schema.',
        output: 'Validated evaluation cases or categorized errors.',
      },
      {
        label: 'Evaluation execution',
        kind: 'backend',
        responsibility: 'Runs an evaluation against a configured project or HTTP endpoint.',
        input: 'Dataset, project configuration, and target application.',
        output: 'Per-case execution results.',
      },
      {
        label: 'Metric calculation',
        kind: 'backend',
        responsibility: 'Calculates the configured deterministic evaluation metrics.',
        input: 'Expected and actual outputs.',
        output: 'Exact-match, JSON-validity, and keyword scores.',
      },
      {
        label: 'Trace persistence',
        kind: 'database',
        responsibility: 'Stores evaluation runs and execution traces for later inspection.',
        input: 'Results, latency, token usage, provider, and model details.',
        output: 'Persistent runs and trace records.',
      },
      {
        label: 'Run comparison',
        kind: 'backend',
        responsibility: 'Compares historical runs for the same evaluation scope.',
        input: 'Two or more persisted runs.',
        output: 'Metric and case-level differences.',
      },
      {
        label: 'Regression detection',
        kind: 'backend',
        responsibility: 'Flags metric degradation against configured thresholds.',
        input: 'Run comparison and configured thresholds.',
        output: 'Regression signals and failure analysis.',
      },
      {
        label: 'React dashboard',
        kind: 'frontend',
        responsibility: 'Presents datasets, runs, traces, comparisons, and failures.',
        input: 'Evaluation and observability API data.',
        output: 'Reviewable evaluation results.',
      },
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
      'Dataset management and CSV, JSON, JSONL, and NDJSON imports',
      'Exact-match, JSON-validity, and keyword-based evaluation',
      'Execution traces with latency, token usage, provider, and model details',
      'Historical run comparison and configurable regression detection',
      'HTTP-based external application evaluation',
    ],
    engineeringNotes: [
      'Separates evaluation logic from API and persistence layers.',
      'Persists evaluation runs and traces for historical inspection.',
      'Uses configurable thresholds to identify metric degradation.',
      'Captures sanitized error categories for failure analysis.',
    ],
    metrics: [
      { label: 'Backend tests', value: '89 passed', context: 'Verified at commit 91e64fb' },
    ],
    repositoryUrl: 'https://github.com/Anushalatha/ReliAI',
  },
  {
    name: 'FlowMind',
    category: 'AI workflow orchestration',
    summary:
      'An orchestration platform that plans multi-step tasks, schedules dependent work, executes tools, and exposes workflow progress.',
    evidence:
      'Latest run: 82 tests passed; one provider-backed test failed because GROQ_API_KEY is unset.',
    problem:
      'Multi-step AI tasks need dependency-aware execution, state tracking, and recovery rather than a single unobservable model response.',
    solution:
      'FlowMind separates planning, scheduling, execution, and synthesis, with persistent workflow records and event-driven progress updates.',
    architecture: [
      {
        label: 'LLM planner',
        kind: 'ai',
        responsibility: 'Turns a natural-language request into a structured workflow plan.',
        input: 'User goal and available tool descriptions.',
        output: 'Workflow steps and dependencies.',
      },
      {
        label: 'Dependency scheduler',
        kind: 'backend',
        responsibility: 'Resolves step dependencies and schedules eligible work, including independent tasks in parallel.',
        input: 'Structured workflow plan and current step states.',
        output: 'Ready-to-run steps and dependency status.',
      },
      {
        label: 'Tool execution',
        kind: 'backend',
        responsibility: 'Runs the selected tools and handles retries or blocked steps.',
        input: 'Ready step, tool arguments, and available prior results.',
        output: 'Step results, errors, and execution state.',
      },
      {
        label: 'Result synthesis',
        kind: 'ai',
        responsibility: 'Combines completed step results into the workflow response.',
        input: 'Workflow goal and completed step outputs.',
        output: 'Synthesized result for the user.',
      },
      {
        label: 'SQLite persistence',
        kind: 'database',
        responsibility: 'Stores workflow runs, steps, dependencies, and execution state.',
        input: 'Workflow lifecycle and step updates.',
        output: 'Persistent records for status and history.',
      },
      {
        label: 'FastAPI + SSE',
        kind: 'communication',
        responsibility: 'Exposes workflow APIs and streams lifecycle events to clients.',
        input: 'Client requests and orchestration events.',
        output: 'API responses and server-sent events.',
      },
      {
        label: 'React dashboard + React Flow',
        kind: 'frontend',
        responsibility: 'Displays workflow state, dependencies, and execution progress in the dashboard graph.',
        input: 'API results and streamed lifecycle events.',
        output: 'Interactive workflow view and user actions.',
      },
    ],
    stack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'React Flow',
      'SQLite',
      'SQLAlchemy',
      'Groq',
      'Google Gemini',
      'Docker',
    ],
    features: [
      'Dependency-aware sequential and parallel steps',
      'Retries, blocked-step handling, and workflow state consistency',
      'Intermediate result passing and response synthesis',
      'SSE lifecycle events and interactive workflow visualization',
    ],
    engineeringNotes: [
      'Separates planning from execution and final response synthesis.',
      'Persists workflow state so execution status can be inspected.',
      'Uses event streams to connect backend lifecycle events to the dashboard.',
    ],
    metrics: [
      { label: 'Automated tests', value: '82 passed', context: 'One provider-backed test failed: GROQ_API_KEY unset' },
    ],
    repositoryUrl: 'https://github.com/Anushalatha/Flowmind',
  },
  {
    name: 'ArchMind',
    category: 'AI system architecture',
    summary:
      'An LLM-powered system architecture assistant that turns natural-language product ideas into structured technical proposals.',
    evidence:
      'Groq and OpenAI providers generate structured JSON proposals, which are validated with Pydantic.',
    problem:
      'Moving from an early product idea to a reviewable system design requires explicit components, interfaces, data choices, and trade-offs.',
    solution:
      'ArchMind generates structured proposals and validates the response before presenting architecture recommendations.',
    architecture: [
      {
        label: 'Streamlit input',
        kind: 'frontend',
        responsibility: 'Collects product requirements and architecture context.',
        input: 'Natural-language idea and selected project options.',
        output: 'User requirements for architecture generation.',
      },
      {
        label: 'Prompt construction',
        kind: 'backend',
        responsibility: 'Builds the model instructions and request from user requirements.',
        input: 'Product idea and architecture prompt templates.',
        output: 'Provider-ready prompt.',
      },
      {
        label: 'LLM integration',
        kind: 'ai',
        responsibility: 'Sends the prompt through the configured Groq or OpenAI provider.',
        input: 'Provider-ready prompt and configured model credentials.',
        output: 'Model response text.',
      },
      {
        label: 'Structured JSON generation',
        kind: 'ai',
        responsibility: 'Requests a machine-readable architecture proposal from the model.',
        input: 'Prompt and architecture output schema.',
        output: 'JSON-formatted proposal content.',
      },
      {
        label: 'Pydantic validation',
        kind: 'backend',
        responsibility: 'Validates and parses the generated response against the project schema.',
        input: 'Generated JSON content.',
        output: 'Validated architecture data or a handled validation error.',
      },
      {
        label: 'Architecture service',
        kind: 'backend',
        responsibility: 'Coordinates proposal generation and architecture critique.',
        input: 'Validated requirements and architecture data.',
        output: 'Architecture proposal and critique data.',
      },
      {
        label: 'Streamlit proposal view',
        kind: 'frontend',
        responsibility: 'Presents the generated architecture and critique.',
        input: 'Architecture service output.',
        output: 'Reviewable system design for the user.',
      },
    ],
    stack: ['Python', 'Streamlit', 'Pydantic', 'OpenAI Python SDK', 'Groq', 'OpenAI'],
    features: [
      'Natural-language requirements input',
      'Structured architecture and technology recommendations',
      'API and database design suggestions',
      'Security, scalability, risks, and trade-offs',
    ],
    engineeringNotes: [
      'Separates prompt construction, provider integration, structured JSON generation, and Pydantic validation.',
      'Supports Groq and OpenAI through the OpenAI Python SDK.',
    ],
    repositoryUrl: 'https://github.com/Anushalatha/ArchMind',
  },
];

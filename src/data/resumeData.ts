import { Github, Linkedin, Mail } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl: string;
  category: string;
  isFlagship?: boolean;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Publication {
  title: string;
  journal?: string;
  year?: string;
  url?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  resumeUrl: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Mail;
    url: string;
    label: string;
  }[];
  about: string;
  experiences: Experience[];
  education: Education[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  publications: Publication[];
  achievements: {
    title: string;
    description: string;
    date?: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    date?: string;
    url?: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Anusha B",
  title: "AI/ML Engineer & Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "anushalathaaa7@gmail.com",
  resumeUrl: "/Anusha B Resume.pdf",
  socialLinks: [
    {
      icon: Github,
      url: "https://github.com/Anushalatha",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anusha-b-ai",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:anushalathaaa7@gmail.com",
      label: "Email"
    }
  ],
  about: "I build intelligent systems and full-stack applications that combine machine learning, software engineering, and practical product thinking. Specializing in computer vision, deep learning pipelines, and robust backend engineering, I focus on solving complex computational problems and designing scalable products that deliver real user impact.",
  experiences: [
    {
      company: "Point Pikkers",
      position: "Full-Stack Developer",
      duration: "Jan 2026 – May 2026",
      bullets: [
        "Engineered scalable web applications by leveraging React, TypeScript, and Node.js REST services.",
        "Designed, integrated, and optimized backend databases, boosting data retrieval performance.",
        "Created secure API endpoints and authentication protocols, safeguarding application services."
      ]
    },
    {
      company: "Shooting Stars Foundation",
      position: "IBM Datathon Analyst",
      duration: "Aug 2025 – Oct 2025",
      bullets: [
        "Coordinated cross-college operations and registrations, structuring structured spreadsheets to log analytical data.",
        "Processed and engineered cleaning pipelines for large datasets to ensure data integrity and validation accuracy.",
        "Developed custom technical challenges and evaluations for STEM talent engagement."
      ]
    },
    {
      company: "OneYes Infotech Solutions",
      position: "AI / ML Developer Intern",
      duration: "May 2025 – Aug 2025",
      bullets: [
        "Built predictive machine learning models and deployed them as API services utilizing FastAPI.",
        "Completed rigorous exploratory data analysis, feature engineering, and validation routines.",
        "Integrated computer vision and LLM endpoints into active client-facing frontend infrastructures."
      ]
    },
    {
      company: "Vulture Lines Pvt Ltd",
      position: "Data Analyst Intern",
      duration: "Feb – Mar 2025",
      bullets: [
        "Analyzed operational datasets to detect behavior anomalies and built interactive PowerBI dashboards for insights.",
        "Aggregated heterogenous telemetry records and synthesized visual reports for core business stakeholders."
      ]
    },
    {
      company: "Prodigy Infotech",
      position: "Machine Learning Intern",
      duration: "Feb – Mar 2024",
      bullets: [
        "Programmed classification and regression ML models, designing custom normalization pipelines.",
        "Conducted hyperparameter tuning on deep networks (CNNs, LSTMs) to optimize inference metrics."
      ]
    }
  ],
  education: [
    {
      institution: "DMI College of Engineering",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      duration: "2022 – 2026",
      description: "Focus on machine learning, deep learning, big data analysis, and software engineering. Current CGPA: 8.77/10."
    }
  ],
  skills: [
    {
      category: "AI / MACHINE LEARNING",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "CNN", "RNN", "LSTM", "LLMs", "FastAPI"]
    },
    {
      category: "FULL-STACK DEVELOPMENT",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Flask", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "DATA & ANALYTICS",
      items: ["PowerBI", "Plotly", "Dash", "Matplotlib", "Seaborn", "Streamlit", "SQL", "MongoDB", "Supabase"]
    },
    {
      category: "TOOLS & PLATFORMS",
      items: ["Git", "Docker", "GCP", "Azure", "Blockchain", "Vercel", "Vite", "Linux"]
    }
  ],
  projects: [
    {
      title: "DressFit",
      description: "My final year project. An AI-powered fashion intelligence platform for virtual outfits and size tailoring. Built under-the-hood machine learning models to analyze styling dimensions and visual fittings.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "PyTorch", "FastAPI", "Three.js"],
      githubUrl: "https://github.com/Anushalatha/DressFit",
      demoUrl: "https://dress-fit-kappa.vercel.app/",
      category: "FINAL YEAR PROJECT · AI/ML",
      isFlagship: true
    },
    {
      title: "FinEcho",
      description: "An AI-powered investment platform offering ESG scoring, portfolio analysis, and voice-based insights to help users manage asset risks.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "PyTorch", "FastAPI"],
      demoUrl: "https://fin-echo.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/FinEcho.git",
      category: "FINTECH · AI / ANALYTICS"
    },
    {
      title: "TastyLens AR",
      description: "An AR-based food recognition and charity donation platform using AI and blockchain for tracking public social impact.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "TensorFlow", "Ethereum", "Docker"],
      demoUrl: "https://tastylensar.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/TastyLens-AR.git",
      category: "AR · COMPUTER VISION"
    },
    {
      title: "Employee Dashboard",
      description: "Enterprise analytics dashboard to track employee performance KPIs with interactive database query pipelines and PowerBI chart reports.",
      tags: ["All Projects", "Website", "Data Science"],
      techStack: ["React.js", "TypeScript", "Node.js", "PowerBI"],
      demoUrl: "https://employee-dashboard-one-psi.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/Employee_dashboard.git",
      category: "FULL-STACK · ANALYTICS"
    }
  ],
  publications: [
    {
      title: "A Hybrid Reality-Aware and Swarm Intelligent Architecture for Advanced Conversational Systems",
      year: "2026"
    },
    {
      title: "TastyLens-AI: An AI-Powered Smart Food Ordering System with Adaptive Learning",
      journal: "ICEET 2025",
      year: "2025"
    },
    {
      title: "AI-Driven Personalized Fashion: Virtual Try-On, Smart Resale Authentication, and Sustainability Ranking",
      journal: "ICEET 2025",
      year: "2025"
    },
    {
      title: "Heal-Fit: AI-powered Personalized Healthcare Assistant Using Blockchain and Generative Intelligence",
      journal: "ICIRES 2025",
      year: "2025"
    }
  ],
  achievements: [
    {
      title: "Winners – All India Women's Only Hackathon",
      description: "Secured top position for developing an AI-powered financial empowerment platform for underserved women. Cash prize of ₹12,500.",
      date: "2025"
    },
    {
      title: "1st Prize at Codeathon 3.0",
      description: "Won first place with ₹10,000 prize for innovative AI solution.",
      date: "2025"
    }
  ],
  certifications: [
    {
      title: "Introduction to Responsible AI",
      issuer: "Google Cloud",
      date: "2024",
      url: "https://www.linkedin.com/posts/anusha-b-ai_introduction-to-responsible-ai-activity-7276151927732613120-H0B2"
    },
    {
      title: "Fundamentals of Generative AI",
      issuer: "Microsoft Learn",
      date: "2024",
      url: "https://www.linkedin.com/posts/anusha-b-ai_fundamentals-of-generative-ai-activity-7294158063190581249-oACu"
    },
    {
      title: "BCG - GenAI Job Simulation",
      issuer: "BCG",
      date: "2024",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_YAyYcqBgWw6Yv2f9f_1738403345152_completion_certificate.pdf"
    },
    {
      title: "Goldman Sachs - Software Engineering Job Simulation",
      issuer: "Goldman Sachs",
      date: "2024",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_YAyYcqBgWw6Yv2f9f_1739003758344_completion_certificate.pdf"
    },
    {
      title: "IBM Cloud Essentials V3",
      issuer: "IBM",
      date: "2024",
      url: "https://courses.cognitiveclass.ai/certificates/ae3e673fdec149ca9202bbb2477683a0"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      url: "https://www.linkedin.com/posts/anusha-b-ai_microsoft-azure-fundamentals-describe-cloud-activity-7294018749865570304--gQr"
    }
  ]
};
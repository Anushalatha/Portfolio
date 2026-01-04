import { Github, Linkedin, Mail } from 'lucide-react';

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Mail;
    url: string;
    label: string;
  }[];
  about: string;
  experiences: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    tags: string[];
    techStack: string[];
    demoUrl?: string;
    githubUrl: string;
    category: string;
  }[];
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
  title: "AI & Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "anushalathaaa7@gmail.com",
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
  about: "I'm Anusha B, a passionate AI & Data Science undergraduate dedicated to building impactful tech products. With hands-on experience in ML, full-stack web development, and data-driven research, I enjoy transforming real-world problems into smart AI-powered solutions. From AR-based donation platforms to health assistants, my work blends innovation with purpose.",
  experiences: [
    {
      company: "Shooting Stars Foundation",
      position: "IBM Datathon Student Leader",
      duration: "Aug 2025 – Oct 2025",
      description: "Managed team assignments and participant registration across colleges. Cleaned and standardized spreadsheet data. Developed quizzes and content for STEM engagement."
    },
    {
      company: "Vulture Lines Pvt Ltd",
      position: "Data Analyst Intern",
      duration: "Feb–Mar 2025",
      description: "Analyzed data patterns and created visualization dashboards to support business decisions."
    },
    {
      company: "Prodigy Infotech",
      position: "Machine Learning Intern",
      duration: "Feb–Mar 2024",
      description: "Developed ML models and conducted data analysis for predictive systems."
    },
    {
      company: "DLK Technologies",
      position: "AI Intern",
      duration: "Sep 2023",
      description: "Assisted in implementing AI algorithms and solutions for client projects."
    }
  ],
  education: [
    {
      institution: "DMI College of Engineering",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      duration: "2022–2026",
      description: "Currently pursuing with focus on machine learning and data engineering."
    },
    {
      institution: "Sunshine Academy",
      degree: "Higher Secondary School",
      duration: "2021–2022",
      description: "Completed with 78% aggregate score."
    }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Python", "C", "C++", "React.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
    },
    {
      category: "Machine Learning & Deep Learning",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "CNN", "RNN", "LSTM"]
    },
    {
      category: "Data Visualization & Analytics",
      items: ["PowerBI", "Plotly", "Dash", "Matplotlib", "Seaborn", "Streamlit"]
    },
    {
      category: "Cloud & Security",
      items: ["GCP", "Azure", "Blockchain", "Ethereum"]
    },
    {
      category: "Model Deployment",
      items: ["TensorFlow Serving", "Docker", "Vercel"]
    }
  ],
  projects: [
    {
      title: "SHEconomy",
      description: "An AI‑powered women‑centric platform with multi‑agent architecture for budgeting, investment, health, jobs, and scheme scanning, delivering transparent recommendations and actionable dashboards.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "OpenAI", "Supabase"],
      githubUrl: "https://github.com/Anushalatha/SHEconomy.git",
      category: "AI & ML"
    },
    {
      title: "SeaSync",
      description: "An AI‑powered marine conservation platform with species recognition, rescue coordination, and real‑time distress tracking, featuring interactive dashboards and integrations for weather, mapping, and image data.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Docker"],
      githubUrl: "https://github.com/Anushalatha/SeaSync.git",
      category: "AI & ML"
    },
    {
      title: "AgroMind",
      description: "An AI‑powered agriculture platform for plant disease detection, crop recommendation, irrigation planning, and fertilizer guidance, enhanced with real‑time weather data. Features a responsive dashboard with analytics and an AI chatbot to deliver actionable farming insights.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "Scikit-learn", "OpenCV", "FastAPI", "Supabase"],
      githubUrl: "https://github.com/Anushalatha/AgroMind-AI.git",
      category: "AI & ML"
    },
    {
      title: "EduConnect",
      description: "A collaborative learning and tutoring platform connecting students and educators, featuring AI-powered study tools, real-time sessions, and gamified progress tracking.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "Supabase", "OpenAI API", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Anushalatha/EduConnect.git",
      category: "AI & ML"
    },
    {
      title: "TastyLens-AR",
      description: "An AR-based food recognition and donation platform using AI and blockchain for social impact.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "TensorFlow", "Ethereum", "Docker"],
      demoUrl: "https://tastylensar.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/TastyLens-AR.git",
      category: "AI & ML"
    },
    {
      title: "FinEcho",
      description: "An AI-powered investment platform offering ESG scoring, portfolio analysis, and voice-based insights.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "PyTorch", "FastAPI"],
      demoUrl: "https://fin-echo.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/FinEcho.git",
      category: "AI & ML"
    },
    {
      title: "Heal-Fit",
      description: "An AI health assistant for wellness tracking and scan-based diagnosis using Gemini AI.",
      tags: ["All Projects", "AI & ML", "Website"],
      techStack: ["React.js", "TypeScript", "Flask", "TensorFlow", "GCP"],
      demoUrl: "https://heal-fit.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/Heal-Fit.git",
      category: "AI & ML"
    },
    {
      title: "Approval Management System",
      description: "Web-based approval system with a responsive UI and secure user management.",
      tags: ["All Projects", "Website"],
      techStack: ["React.js", "TypeScript", "Node.js", "Express.js"],
      demoUrl: "https://approval-management-system.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/Approval-Management-System.git",
      category: "Website"
    },
    {
      title: "Employee Performance Dashboard",
      description: "Dashboard to track employee KPIs with interactive charts and analytics.",
      tags: ["All Projects", "Data Science"],
      techStack: ["React.js", "TypeScript", "Node.js", "PowerBI"],
      demoUrl: "https://employee-dashboard-one-psi.vercel.app/",
      githubUrl: "https://github.com/Anushalatha/Employee_dashboard.git",
      category: "Data Science"
    },
    {
      title: "AI-Powered Stock Analyzer",
      description: "Real-time AI dashboard for analyzing stock prices, alerts, and financial trends.",
      tags: ["All Projects", "AI & ML", "Data Science"],
      techStack: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Plotly"],
      githubUrl: "https://github.com/Anushalatha/Stock-Analyser-Using-AI.git",
      category: "AI & ML"
    },
    {
      title: "Face Emotion Recognition",
      description: "Model that detects emotions from facial expressions using CNN and RNN.",
      tags: ["All Projects", "AI & ML"],
      techStack: ["Python", "TensorFlow", "OpenCV", "Keras"],
      githubUrl: "https://github.com/Anushalatha/Face_recognition.git",
      category: "AI & ML"
    },
    {
      title: "Gesture Recognition",
      description: "LSTM-based model to recognize real-time hand gestures from videos.",
      tags: ["All Projects", "AI & ML"],
      techStack: ["Python", "TensorFlow", "OpenCV", "Keras"],
      githubUrl: "https://github.com/Anushalatha/Gesture-Recognition-.git",
      category: "AI & ML"
    },
    {
      title: "HR Analysis Dashboard",
      description: "A visual dashboard for HR teams to analyze employee data and trends.",
      tags: ["All Projects", "Website", "Data Science"],
      techStack: ["Streamlit", "Python", "PowerBI"],
      githubUrl: "https://github.com/Anushalatha/Employee-Performance-Dashboard.git",
      category: "Website"
    },
    {
      title: "Power Outage Prediction",
      description: "Web app that forecasts power outages using historical data and trends.",
      tags: ["All Projects", "Data Science"],
      techStack: ["Python", "Scikit-learn", "LightGBM", "Plotly"],
      githubUrl: "https://github.com/Anushalatha/PowerPrediction.git",
      category: "Data Science"
    }
  ],
  achievements: [
    {
      title: "Winners – All India Women's Only Hackathon",
      description: "Secured top 5 position among 700+ teams for developing an AI-powered financial empowerment platform for underserved women. Cash prize of ₹12,500.",
      date: "2025"
    },
    {
      title: "1st Prize at Codeathon 3.0",
      description: "Won first place with ₹10,000 prize for innovative AI solution.",
      date: "2025"
    },
    {
      title: "TastyLens-AR: An AI-Powered Smart Food Ordering System with Adaptive Learning",
      description: "Published research paper on AR food recognition technology at ICEET 2025.",
      date: "2025"
    },
    {
      title: "AI-Driven Personalized Fashion: Virtual Try-On, Smart Resale Authentication, and Sustainability Ranking",
      description: "Published research on AI applications in fashion industry at ICEET 2025.",
      date: "2025"
    },
    {
      title: "Heal-Fit: AI-powered Personalized Healthcare Assistant Using Blockchain and Generative Intelligence",
      description: "Published research on AI-powered healthcare solutions at ICIRES 2025.",
      date: "2025"
    }
  ],
  certifications: [
    {
      title: "Introduction to Responsible AI",
      issuer: "Google Cloud",
      date: "2024",
      url: "https://www.linkedin.com/posts/anusha-b-ai_introduction-to-responsible-ai-activity-7276151927732613120-H0B2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-YLJcByxf6iOiI4xMq51fwnsRc0cCrYog"
    },
    {
      title: "Fundamentals of Generative AI",
      issuer: "Microsoft Learn",
      date: "2024",
      url: "https://www.linkedin.com/posts/anusha-b-ai_fundamentals-of-generative-ai-activity-7294158063190581249-oACu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-YLJcByxf6iOiI4xMq51fwnsRc0cCrYog"
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
      url: "https://www.linkedin.com/posts/anusha-b-ai_microsoft-azure-fundamentals-describe-cloud-activity-7294018749865570304--gQr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-YLJcByxf6iOiI4xMq51fwnsRc0cCrYog"
    }
  ]
};
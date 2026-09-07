export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  duration: string;
  github?: string;
  live?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
] as const;

export const PERSONAL_INFO = {
  name: "Srishan Mandawala",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer & GenAI Enthusiast",
  email: "srishanmandawala@gmail.com",
  phone: "+94 764398193",
  location: "Galle, Sri Lanka",
  bio: "A passionate Software Engineer with hands-on experience in full-stack development and Generative AI. I specialize in building AI-powered applications and intelligent software solutions that push the boundaries of what's possible.",
  linkedin: "https://www.linkedin.com/in/srishan-mandawala",
  github: "https://github.com/mSrishan",
  resumeUrl: "#",
};

export const projects: Project[] = [
  {
    title: "HealthDoc AI",
    description:
      "A document intelligence platform that analyzes medical reports, laboratory results, prescriptions, and medical guidelines. Leverages Retrieval-Augmented Generation to retrieve trusted information and generate structured summaries, identify abnormal values, and provide grounded medication information.",
    tech: [
      "FastAPI",
      "Google Gemini",
      "Qdrant",
      "Docker",
      "RAG",
      "LangChain",
      "Next.js",
    ],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    duration: "09/2026 \u2013 Present",
    github: "https://github.com/mSrishan/HealthDoc-AI.git",
  },
  {
    title: "Sri Lankan Legal AI Assistant",
    description:
      "An interactive Retrieval-Augmented Generation application designed to ground legal information from Sri Lankan legal documents. Retrieves relevant legal context and generates document-grounded responses using Large Language Models, providing users with a reliable AI-powered legal assistant.",
    tech: [
      "FastAPI",
      "LangChain",
      "RAG",
      "Next.js",
      "PostgreSQL",
      "Google Gemini",
      "FAISS",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    duration: "08/2026 \u2013 09/2026",
    github: "https://github.com/mSrishan/Sri-Lanka-Legal-AI-Assistant.git",
  },
  {
    title: "Cross-Language Ad Matching & Recommendation",
    description:
      "An undergraduate research system for semantic retrieval and cross-language product recommendations. Developed multilingual matching using transformer models, embeddings, contrastive learning, and vector similarity search across Sinhala, English, and code-mixed marketplace listings.",
    tech: [
      "Python",
      "NLP",
      "FAISS",
      "Sentence-BERT",
      "E5",
      "Embeddings",
      "Contrastive Learning",
    ],
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    duration: "08/2025 \u2013 08/2026",
    github: "https://github.com/mSrishan/ad-matching-web.git",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Global Cloud Media (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    duration: "Feb 2025 \u2013 Aug 2025",
    description: [
      "Developed ERP systems and commercial websites for enterprise clients",
      "Implemented full-stack features including UI components, REST APIs, and database integrations",
      "Debugged and optimized application performance across the stack",
      "Collaborated using Git-based workflows in agile development environment",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "BSc (Hons) in Computing & Information Systems",
    institution: "Sabaragamuwa University Of Sri Lanka",
    duration: "2022 \u2013 2026",
  },
  {
    degree: "G.C.E. Advanced Level \u2014 Physical Science",
    institution: "St. Aloysius' College",
    duration: "2017 \u2013 2019",
    details: "Results: A1, B1, C1",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    icon: "layout",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    color: "indigo",
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: ["FastAPI", "Spring Boot", "Node.js", "Express.js", "Python"],
    color: "cyan",
  },
  {
    title: "AI, GenAI & Data",
    icon: "brain",
    skills: ["RAG", "LangChain", "LLMs", "NLP", "Prompt Engineering"],
    color: "purple",
  },
  {
    title: "Databases & Vector",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Qdrant", "FAISS"],
    color: "emerald",
  },
  {
    title: "DevOps & Tools",
    icon: "wrench",
    skills: ["Docker", "Git", "n8n", "Google Colab"],
    color: "amber",
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: ["Teamwork", "Creativity", "Problem Solving", "Adaptability"],
    color: "rose",
  },
];

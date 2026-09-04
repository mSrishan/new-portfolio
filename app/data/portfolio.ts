export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
] as const;

export const projects: Project[] = [
  {
    title: "HealthDoc AI",
    description:
      "An AI-powered medical document intelligence platform that analyzes medical reports, laboratory results, prescriptions, and medical guidelines. Uses Retrieval-Augmented Generation to retrieve trusted information and generate structured summaries, identify abnormal values, and provide grounded medication information.",
    tech: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "RAG",
      "Google Gemini",
      "Qdrant",
      "Docker",
    ],
    gradient: "from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-900",
  },

  {
    title: "Sri Lankan Legal AI Assistant",
    description:
      "A Retrieval-Augmented Generation application designed for Sri Lankan legal documents. Retrieves relevant legal information and generates context-aware, document-grounded responses using LLMs, providing users with a reliable interactive AI assistant.",
    tech: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "RAG",
      "Google Gemini",
      "FAISS",
      "PostgreSQL",
      "Docker",
    ],
    gradient:
      "from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-900",
  },

  {
    title: "Cross-Language Ad Matching & Recommendation",
    description:
      "An undergraduate research project focused on multilingual semantic retrieval and recommendation for Sinhala, English, and Sinhala-English code-mixed marketplace listings. Developed cross-language matching using multilingual transformer models, embeddings, contrastive learning, and vector similarity search.",
    tech: [
      "Python",
      "NLP",
      "E5",
      "Sentence-BERT",
      "FAISS",
      "Embeddings",
      "Contrastive Learning",
      "Google Colab",
    ],
    gradient:
      "from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-900",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Global Cloud Media (Pvt) Ltd.",
    duration: "02/2025 – 08/2025",
    description:
      "Worked on ERP systems and commercial websites, contributing to feature implementation, debugging, and performance optimization. Gained hands-on experience in full-stack development, database integration, and Git-based software development.",
  },
];

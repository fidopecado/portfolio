import { cyMonitor } from "@/data/links";

export interface Project {
  number: string;
  year: string;
  title: string;
  type: string;
  description: string;
  details: string[];
  stack: string[];
  featured: boolean;
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    year: "2026",
    title: "CYMonitor — ESP32 Desk Telemetry Display",
    type: "Embedded Firmware + Web Application",
    description:
      "A touch-first ESP32 desk display that polls LibreHardwareMonitor over the local network and renders CPU, GPU and RAM telemetry on a 480 × 320 TFT, with a dependency-free browser recreation of the same interface.",
    details: [
      "Wrote 3,100 lines of C++ against a hard heap budget: a pre-parse JSON filter and a 12-level nesting cap keep a ~120 KB sensor tree off the ESP32 heap",
      "Pinned polling to a 12 KB task on core 0 so network stalls degrade to a labelled stale-data state instead of blocking the UI",
      "Implemented six saved Wi-Fi profiles, an 18-palette RGB565 theme engine persisted in NVS, an NTP clock, a Pomodoro timer and three animation modes",
      "Rebuilt the entire interface as a build-step-free web app that can read the same endpoint live, sharing the firmware's palettes",
      "Packaged it as an Nginx container with a same-origin proxy for the sensor endpoint, removing CORS and mixed-content failures",
    ],
    stack: ["C++", "ESP32", "Arduino", "PlatformIO", "TFT_eSPI", "JavaScript", "Docker", "Nginx"],
    featured: true,
    liveUrl: "/showcase/cymonitor",
    caseStudyUrl: "/projects/cymonitor",
    githubUrl: cyMonitor.repo,
  },
  {
    number: "02",
    year: "2025",
    title: "Full-Stack MERN E-Commerce Platform",
    type: "Full-Stack Web Application",
    description:
      "Engineered a robust full-stack e-commerce platform utilizing the MERN stack (MongoDB, Express, React, Node.js), featuring complete product management, transaction flows, and delivery tracking.",
    details: [
      "Implemented comprehensive Product CRUD operations for administrative efficiency",
      "Built secure user authentication and role-based authorization systems",
      "Integrated payment gateway processing and stock management workflows",
      "Developed delivery status tracking with a responsive, accessible interface",
    ],
    stack: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
    featured: true,
    liveUrl: "/showcase/ecommerce",
  },
  {
    number: "03",
    year: "2025",
    title: "Promotional Gambling Comment Classification",
    type: "LLM-Based NLP System",
    description:
      "Built a text classification system to detect promotional gambling comments in YouTube datasets by evaluating LLMs (IBM Granite, GPT, Kimi, Ollama) and prompt engineering techniques.",
    details: [
      "Executed data cleaning, text normalization, and custom prompt engineering",
      "Benchmarked open-source and proprietary LLM model performance using identical prompts",
      "Evaluated classification quality using F1-score, accuracy, recall, and confusion matrix analytics",
    ],
    stack: ["Python", "IBM Granite", "Ollama", "GPT", "NLP", "Prompt Engineering"],
    featured: false,
    caseStudyUrl: "/projects/gambling-classification",
  },
  {
    number: "04",
    year: "2026",
    title: "Indonesian Social Media Comment Sentiment Analysis",
    type: "Applied NLP & Streamlit Dashboard",
    description:
      "Developed an NLP sentiment analysis system for Indonesian TikTok comments across multiple videos, surfacing audience trends via interactive visualization dashboards.",
    details: [
      "Cleaned and normalized colloquial Indonesian social media text for NLP model input",
      "Implemented and benchmarked multiple HuggingFace transformer classification models",
      "Built dynamic filtering features and interactive sentiment analytics in Streamlit",
    ],
    stack: ["Python", "HuggingFace", "Transformers", "Streamlit", "NLP"],
    featured: false,
    liveUrl: "/showcase/sentiment-analysis",
    githubUrl: "https://github.com/fidopecado/Indonesian-Tiktok-Comments-Sentiment-Analysis",
  },
  {
    number: "05",
    year: "2025 — 2026",
    title: "Batik Motif Classification using CNN Xception Architecture",
    type: "Computer Vision Research",
    description:
      "Developed a Deep Learning image classification model for Semarang and Banyumasan batik motifs using CNN Xception architecture and systematic dataset balancing.",
    details: [
      "Balanced class distributions across multiple heterogeneous image datasets",
      "Conducted extensive hyperparameter tuning and model configuration comparisons",
      "Achieved high classification precision through systematic CNN experimentation",
    ],
    stack: ["Python", "PyTorch / TensorFlow", "CNN", "Xception Architecture", "Computer Vision"],
    featured: false,
  },
  {
    number: "06",
    year: "2024",
    title: "GITLEGIT Mochi Business Company Profile",
    type: "Commercial Web Application",
    description:
      "Created a company profile and direct product ordering website for GITLEGIT, a small mochi business, with a responsive frontend and backend order processing database.",
    details: [
      "Designed clean Bootstrap frontend layout for consumable product showcases",
      "Architected database system enabling direct user ordering flows via PHP backend",
    ],
    stack: ["Bootstrap", "PHP", "SQL", "HTML/CSS"],
    featured: false,
    liveUrl: "/showcase/legit/",
  },
  {
    number: "07",
    year: "2023",
    title: "Academic Information & Student Progress System",
    type: "Academic Platform",
    description:
      "Designed an academic management system for students, lecturers, and departments to govern academic data flow and student progress reporting.",
    details: [
      "Engineered role-based access control for students, faculty, and administrative departments",
      "Streamlined data reporting pipelines and academic progress tracking",
    ],
    stack: ["React.js", "Node.js", "PHP", "SQL"],
    featured: false,
  },
];

export const profile = {
  name: "Revanth Boddupalli",
  fullName: "Radhakrishna Revanth Boddupalli",
  role: "AI Engineer",
  tagline:
    "I build production-grade LLM systems, RAG pipelines, and multimodal AI applications that ship to real users.",
  location: "Hyderabad, India",
  phone: "+91 9030694969",
  email: "brevanthrk@gmail.com",
  linkedin: "https://www.linkedin.com/in/revanth-boddupalli/",
  github: "https://github.com/revanth122/",
  resumeUrl: "/Revanth_Boddupalli_Resume.pdf",
  web3formsAccessKey: "27b97bdc-6e9a-495d-9973-ae3cfed870d2",
  summary:
    "AI Engineer with 1 year and 6 months of experience building and deploying production-grade LLM systems and multimodal AI pipelines using Python, Kubernetes, and cloud services (AWS S3, GCP, Azure). Skilled at guiding adoption and onboarding of AI-driven microservices, architecting scalable data processing workflows with robust MLOps and CI/CD practices for enterprise customers.",
};

export const stats = [
  { label: "Years building production AI", value: "1.5+" },
  { label: "Faster response latency", value: "3.1×" },
  { label: "Concurrent user capacity", value: "10×" },
  { label: "Uptime maintained", value: "99.95%" },
];

export const skillGroups = [
  {
    title: "AI & Generative AI",
    skills: [
      "OpenAI",
      "RAG",
      "FAISS",
      "Pinecone",
      "LangChain",
      "LangGraph",
      "LangFuse",
      "Prompt Engineering",
      "OpenAI Whisper",
      "Multimodal AI",
      "GitHub Copilot",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "Node.js", "FastAPI", "Django", "Flask", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "GCP", "Docker", "CI/CD", "MLOps", "Kubernetes", "S3", "Kubeflow"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["Scikit-learn", "NLP", "Embeddings", "Model Evaluation", "TF-IDF", "Word2Vec"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux"],
  },
];

export const experience = [
  {
    company: "Harvan Technologies",
    role: "Founding Engineer",
    location: "India",
    start: "June 2026",
    end: "Present",
    points: [
      "Joined as a founding engineer at Harvan Technologies, a software studio that designs and builds web applications, websites, and custom software for clients.",
      "Built the company's marketing site from the ground up using React, Vite, Tailwind CSS, and Framer Motion.",
      "Contributing to Harvan's in-house product line, including E-Roots and HarvanConnect, alongside client engineering work.",
    ],
  },
  {
    company: "Stelmith",
    role: "AI Engineer",
    location: "USA",
    start: "Jan 2025",
    end: "June 2026",
    points: [
      "Built production-grade RAG pipelines using Python, OpenAI APIs, and FAISS/Pinecone vector search, increasing user engagement by 35% and reducing content discovery time by 50%.",
      "Developed an Intelligent Document Processing (OCR + LLM) system using Azure Computer Vision to extract structured data from handwritten images and PDFs, reducing manual form entry by 80%.",
      "Engineered a voice-to-structured-data automation pipeline using OpenAI Whisper, integrating speech-to-text and LLM-based semantic parsing deployed via FastAPI to auto-populate enterprise workflows.",
      "Designed an LLM-assisted clinical decision support prototype using prompt tuning and retrieval grounding with structured output guardrails.",
      "Integrated Langfuse for production LLM observability and tracing, monitoring tokens, API latency, and model responses across GenAI applications.",
      "Structured scalable microservices-based AI architecture on AWS and GCP using Docker, Kubernetes, REST APIs, and S3, enabling 10× higher concurrent user support while maintaining 99.95% uptime.",
      "Optimized AI model deployment and inference using Kubeflow pipelines, CI/CD automation, and vector databases, cutting response latency from 2.5s to 0.8s for real-time interactions.",
      "Implemented emerging GenAI technologies including LangGraph-based orchestration, agent workflows, and tool chaining, accelerating AI feature rollout by 50% and reducing development cycles from months to weeks.",
    ],
  },
];

export const projects = [
  {
    title: "Multi-Source Retrieval Augmented Generation",
    description:
      "An end-to-end Multi-Source RAG system that intelligently retrieves and ranks heterogeneous context sources to improve LLM answer accuracy, with semantic chunking and embedding workflows on AWS S3 feeding a Pinecone vector store.",
    tags: ["LangChain", "FAISS", "Pinecone", "AWS S3", "Embeddings"],
    link: "https://github.com/revanth122/multi-source-rag",
    linkLabel: "View on GitHub",
  },
  {
    title: "RoleMatch AI",
    description:
      "A resume-to-job-description matcher that parses resumes with structured LLM outputs, computes semantic similarity via embeddings, and generates a match score with reduced hallucinations.",
    tags: ["LLM", "Embeddings", "Structured Output", "Next.js"],
    link: "https://cover-letter-generator-amber.vercel.app/",
    linkLabel: "View Live",
  },
  {
    title: "Movie Review Rating System",
    description:
      "A machine learning-based rating predictor using NLP and sentiment analysis on IMDb data, achieving 85% accuracy with Logistic Regression, Naive Bayes, and SVM optimized on TF-IDF/Word2Vec features.",
    tags: ["Scikit-learn", "NLTK", "TF-IDF", "Word2Vec"],
    link: "https://github.com/revanth122/Movie-Review-Rating",
    linkLabel: "View on GitHub",
  },
];

export const education = [
  {
    school: "University of North Texas",
    location: "Denton, Texas, USA",
    degree: "Master of Science, Computer Science",
    detail: "GPA: 3.63 / 4.0",
    start: "Aug 2023",
    end: "May 2025",
  },
  {
    school: "Geethanjali College of Engineering",
    location: "India",
    degree: "Bachelor of Technology, Computer Science Engineering",
    detail: "",
    start: "June 2018",
    end: "May 2022",
  },
];

export const certifications = [
  "Microsoft Python Development Course — Coursera",
  "Machine Learning with Python",
  "Machine Learning with Apache Spark",
];

// Single source of truth for all portfolio content.
// Update this file to change copy across the entire site.

export const profile = {
  name: "Debarshi Maity",
  role: "Backend-Focused Full-Stack Engineer",
  tagline:
    "I build reliable, real-time backend systems and ship them end-to-end.",
  location: "Bengaluru, India",
  bio: [
    "I'm a final-year Information Science Engineering student at REVA University, Bengaluru, graduating in 2027 with an 8.99 CGPA.",
    "I'm a full-stack engineer who cares most about the backend: distributed, real-time systems that stay correct under concurrent load. That's increasingly extended into applied machine learning and AI-powered developer tooling — building the model-serving and inference layers behind projects like TrustVision-AI and the local-LLM integration in Vibecode Editor.",
    "Outside of coursework, I compete in DSA and problem solving — rated 1693 on LeetCode, 945 on Codeforces, and 2★ on CodeChef — and I'm currently prepping for SDE-1 roles at product-based companies.",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xVjqTavHfQQbfQafnV8uEnTSD0UZHDN3/view?usp=drive_link",
  email: "debarshimaity14@gmail.com",
  github: "https://github.com/debarshimaity2004",
  linkedin: "https://www.linkedin.com/in/debarshi-maity-08130b325/",
  leetcode: "https://leetcode.com/u/XXnP3Oicx8/",
  codeforces: "https://codeforces.com/profile/debarshimaity14",
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C++", "Java", "C", "Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Redis",
      "JWT Auth",
      "CRDTs (Yjs)",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Monaco Editor"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "OpenCV", "Computer Vision", "Deep Learning", "Grad-CAM"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"],
  },
];

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  tech: string[];
  highlights: string[];
  metrics?: string[];
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "collabcanvas",
    name: "CollabCanvas",
    oneLiner:
      "Real-time collaborative whiteboard using Yjs CRDTs and Redis Pub/Sub for conflict-free multi-user sync.",
    description:
      "A real-time collaborative whiteboard application. Multiple users can draw and edit simultaneously with conflict-free merging powered by CRDTs, synced across server instances via Redis Pub/Sub, and backed by PostgreSQL for persistence.",
    tech: ["Yjs", "CRDTs", "Redis Pub/Sub", "PostgreSQL", "Prometheus", "Docker"],
    highlights: [
      "Conflict-free real-time collaboration using CRDTs",
      "Redis Pub/Sub for cross-instance sync",
      "Prometheus metrics for observability",
      "Deployed and live",
    ],
    liveUrl: "https://collabcanvas-web.onrender.com",
    githubUrl: "https://github.com/debarshimaity2004/collab-canvas",
  },
  {
    slug: "vibecode-editor",
    name: "Vibecode Editor",
    oneLiner:
      "AI-powered in-browser code editor with live execution using WebContainers, Monaco Editor, and local LLM assistance via Ollama.",
    description:
      "A full in-browser development environment. Code runs live in the browser via WebContainers, editing is powered by Monaco Editor, and an integrated local LLM (via Ollama) provides AI-assisted coding — all behind authenticated sessions with NextAuth.",
    tech: ["WebContainers", "Monaco Editor", "Ollama", "NextAuth", "Next.js"],
    highlights: [
      "Full in-browser dev environment with live execution",
      "AI-assisted coding via a local LLM (Ollama)",
      "Authenticated sessions via NextAuth",
    ],
    githubUrl: "https://github.com/debarshimaity2004/vibecode-editor",
  },
  {
    slug: "trustvision-ai",
    name: "TrustVision-AI",
    oneLiner:
      "Deepfake detection system using CNNs in PyTorch with Grad-CAM interpretability, achieving 92% validation accuracy.",
    description:
      "A deepfake detection system built with convolutional neural networks in PyTorch. Grad-CAM is used to generate visual explanations of model predictions for interpretability, with the trained model served through a FastAPI backend.",
    tech: ["PyTorch", "CNNs", "Grad-CAM", "FastAPI"],
    highlights: [
      "92% validation accuracy",
      "Grad-CAM visual explanations for model interpretability",
      "Served via a FastAPI backend",
    ],
    metrics: ["92% validation accuracy"],
    githubUrl: "https://github.com/debarshimaity2004/TrustVision-AI",
  },
];

export type Achievement = {
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: "Top 10 / 240+ teams",
    detail: "National-level hackathon",
  },
  {
    title: "8.99 CGPA",
    detail: "B.Tech, Information Science Engineering, REVA University (2023–2027)",
  },
  {
    title: "~1693 rating",
    detail: "LeetCode",
  },
  {
    title: "~945 rating",
    detail: "Codeforces",
  },
  {
    title: "400+ problems solved",
    detail: "Across DSA platforms",
  },
];

export const siteConfig = {
  // [ADD_DEPLOYED_URL] — replace with your real domain once deployed (e.g. Vercel URL or custom domain)
  url: "https://debarshimaity.vercel.app",
  title: "Debarshi Maity — Backend-Focused Software Engineer",
  description:
    "Portfolio of Debarshi Maity, a backend-focused full-stack engineer building real-time systems, distributed backends, and AI-assisted developer tools.",
};

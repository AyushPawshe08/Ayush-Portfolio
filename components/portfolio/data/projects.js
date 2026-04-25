import {
  SiPython,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiDocker,
  SiTailwindcss,
  SiJsonwebtokens,
  SiSqlalchemy,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGithubactions,
} from "react-icons/si";

// ─── All project definitions ──────────────────────────────────────────────────
const projects = [
  {
    slug: "careerlens",
    title: "CareerLens",
    tone: "rose",
    summary: "Intelligent career assistant for resume analysis and interview preparation.",
    description:
      "CareerLens is an AI-powered career development platform that helps job seekers analyse their resumes against job descriptions, generate ATS-optimised resumes, receive tailored interview questions, and surface curated learning resources — all through an async Celery + FastAPI backend with a polished Next.js frontend.",
    tech: [
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "PostgreSQL", accent: "#336791", icon: SiPostgresql },
      { label: "SQLAlchemy", accent: "#D71F00", icon: SiSqlalchemy },
      { label: "Redis", accent: "#DC382D", icon: SiRedis },
      { label: "Celery", accent: "#37814A", icon: SiCelery },
      { label: "Docker", accent: "#2496ED", icon: SiDocker },
      { label: "Next.js", accent: "#ffffff", icon: SiNextdotjs },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
      { label: "JWT Auth", accent: "#F7B500", icon: SiJsonwebtokens },
    ],
    github: "https://github.com/AyushPawshe08",
    live: null,
    video: null,
    initials: "",
    icon: "none",
  },
  {
    slug: "sangrahak",
    title: "Sangrahak",
    tone: "sky",
    summary: "AI-Powered Inventory Control System for depot management.",
    description:
      "Sangrahak is an intelligent inventory and depot management system that leverages AI to predict demand, flag anomalies, and automate stock replenishment workflows. It features a role-based dashboard, real-time inventory tracking, and detailed analytics — built with a FastAPI backend, MySQL database, and a React frontend.",
    tech: [
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "MySQL", accent: "#4479A1", icon: SiMysql },
      { label: "SQLAlchemy", accent: "#D71F00", icon: SiSqlalchemy },
      { label: "React.js", accent: "#61DAFB", icon: SiReact },
      { label: "JavaScript", accent: "#F7DF1E", icon: SiJavascript },
    ],
    github: "https://github.com/AyushPawshe08",
    live: null,
    video: null,
    initials: "",
    icon: "none",
  },
  {
    slug: "codesageai",
    title: "CodeSageAI",
    tone: "violet",
    summary: "Automated AI system for reviewing and improving code quality.",
    description:
      "CodeSageAI is a developer tool that performs automated code reviews using large language models. It analyses pull requests and code snippets for bugs, code smells, security issues, and style violations, then generates actionable improvement suggestions — integrated via a GitHub Actions workflow and a FastAPI microservice.",
    tech: [
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "React.js", accent: "#61DAFB", icon: SiReact },
      { label: "GitHub Actions", accent: "#2088FF", icon: SiGithubactions },
      { label: "Docker", accent: "#2496ED", icon: SiDocker },
      { label: "PostgreSQL", accent: "#336791", icon: SiPostgresql },
    ],
    github: "https://github.com/AyushPawshe08",
    live: null,
    video: null,
    initials: "",
    icon: "none",
  },
  {
    slug: "chatify",
    title: "Chatify",
    tone: "mint",
    summary: "AI-powered real-time messaging application.",
    description:
      "Chatify is a full-stack real-time chat application with AI-assisted features such as smart reply suggestions, conversation summarisation, and sentiment-aware UI cues. It uses WebSockets for instant messaging, MongoDB for flexible message storage, and a Node.js + Express backend.",
    tech: [
      { label: "Node.js", accent: "#339933", icon: SiNodedotjs },
      { label: "JavaScript", accent: "#F7DF1E", icon: SiJavascript },
      { label: "MongoDB", accent: "#47A248", icon: SiMongodb },
      { label: "React.js", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
    ],
    github: "https://github.com/AyushPawshe08",
    live: null,
    video: null,
    initials: "",
    icon: "none",
  },
  {
    slug: "ai-summarizer-chrome-extension",
    title: "AI Summarizer Extension",
    tone: "blush",
    summary: "AI-powered Chrome extension for summarizing web pages and articles.",
    description:
      "A Chrome browser extension that uses AI to generate concise, structured summaries of any web page or article with a single click. Users can choose summary length, copy to clipboard, and save summaries locally. Built with vanilla JavaScript for the extension layer and a lightweight FastAPI microservice for inference.",
    tech: [
      { label: "JavaScript", accent: "#F7DF1E", icon: SiJavascript },
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "SQLite", accent: "#003B57", icon: SiSqlite },
    ],
    github: "https://github.com/AyushPawshe08",
    live: null,
    video: null,
    initials: "",
    icon: "none",
  },
];

// ─── Exports ──────────────────────────────────────────────────────────────────
export const allProjects = projects;

export const featuredProjects = projects.slice(0, 2);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

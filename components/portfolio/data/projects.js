import {
  SiCelery,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiJsonwebtokens,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws, FaChartLine, FaRobot, FaSearch, FaTree } from "react-icons/fa";

const projects = [
  {
    title: "AI-Research Assistant",
    slug: "3",
    folderName: "AI-Research Assistant",
    summary:
      "A multi-agent research assistant for discovering, extracting, and summarizing technical material.",
    description: [
      "AI-Research Assistant is built around a multi-agent workflow that separates discovery, content extraction, and synthesis into focused responsibilities. This structure makes the research pipeline easier to reason about and extend.",
      "The research agent uses Tavily Search API to identify relevant sources, while the extraction layer processes web content before it is passed into the summarization workflow. LangChain coordinates the orchestration between agents and model calls.",
      "A Llama 3.1 model generates structured summaries from the collected material, helping users move from scattered search results to concise technical insight.",
    ],
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/AIResearch/aiResearchthumbnail.png",
    video: "",
    github: "https://github.com/AyushPawshe08/AI-Research-Assistant",
    live: null,
    tech: [
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
      { label: "LangChain", accent: "#1C3C3C", icon: SiLangchain },
      { label: "Tavily Search API", accent: "#22C55E", icon: FaSearch },
      { label: "Llama 3.1", accent: "#0467DF", icon: FaRobot },
      { label: "GitHub Actions", accent: "#2088FF", icon: SiGithubactions },
      { label: "Docker", accent: "#2496ED", icon: SiDocker },
    ],
  },
  {
    title: "CareerLens",
    slug: "1",
    folderName: "CareerLens",
    summary:
      "A resume intelligence platform that evaluates candidate fit against job descriptions and skill expectations.",
    description: [
      "CareerLens analyzes a resume against a target job description to produce a structured view of role alignment, ATS readiness, and missing competencies. The platform converts raw resume content into actionable career signals.",
      "It generates an ATS score, skill-gap analysis, role recommendations, improvement suggestions, and a concise resume summary. The system also provides technical, behavioral, and HR interview questions tailored to the candidate profile.",
      "The backend uses FastAPI with Celery and Redis for asynchronous analysis workflows, while PostgreSQL on Neon stores application data. The experience is delivered through a Next.js and React interface with JWT-based authentication.",
    ],
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/CareerLens/Careerlensthumbnail.png",
    github: "https://github.com/AyushPawshe08/CareerLens",
    live: "https://career-lens-bice.vercel.app/",
    tech: [
      { label: "Next.js", accent: "#FFFFFF", icon: SiNextdotjs },
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "Celery", accent: "#37814A", icon: SiCelery },
      { label: "Redis", accent: "#DC382D", icon: SiRedis },
      { label: "GitHub Actions", accent: "#2088FF", icon: SiGithubactions },
      { label: "Docker", accent: "#2496ED", icon: SiDocker },
      { label: "AWS", accent: "#FF9900", icon: FaAws },
      { label: "PostgreSQL (Neon)", accent: "#4169E1", icon: SiPostgresql },
      { label: "JWT Auth", accent: "#000000", icon: SiJsonwebtokens },
      { label: "OpenAI LLM", accent: "#412991", icon: SiOpenai },
    ],
  },
  {
    title: "Sangrahak",
    slug: "2",
    folderName: "Sangrahak",
    summary:
      "An AI-assisted inventory and depot management system with demand forecasting and stock intelligence.",
    description: [
      "Sangrahak centralizes SKU tracking, depot operations, stock movement, and inventory visibility in one operational dashboard. It is designed to help teams monitor inventory health and make faster supply decisions.",
      "The forecasting layer uses ARIMA for demand prediction, while classification models such as XGBoost and Random Forest categorize stock levels into low, medium, and high-risk bands. These signals support proactive replenishment and better depot planning.",
      "The platform includes RBAC, real-time WebSocket notifications, AI-generated reports, and Recharts-based analytics for inventory, orders, depots, and stock alerts. MongoDB stores operational data, with FastAPI powering the backend services.",
    ],
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/Sangrahak/sangrahakthumbnail.png",
    github: "https://github.com/AyushPawshe08/Sangrahak",
    live: null,
    tech: [
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "MongoDB", accent: "#47A248", icon: SiMongodb },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "ARIMA", accent: "#F59E0B", icon: FaChartLine },
      { label: "XGBoost", accent: "#FF6600", icon: SiScikitlearn },
      { label: "Random Forest", accent: "#22C55E", icon: FaTree },
      { label: "Llama", accent: "#0467DF", icon: FaRobot },
      { label: "WebSockets", accent: "#010101", icon: SiSocketdotio },
      { label: "Recharts", accent: "#8884D8", icon: FaChartLine },
      { label: "JWT Auth", accent: "#000000", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "CodeSageAI",
    slug: "4",
    folderName: "CodeSageAI",
    summary:
      "An AI-powered code review platform for improving readability, maintainability, and implementation quality.",
    description: [
      "CodeSageAI reviews source code and returns structured feedback focused on readability, refactoring opportunities, and implementation quality. It is designed to help developers identify improvement areas faster during the development workflow.",
      "The platform uses the GPT-OSS-120B model to generate concise, technically grounded review output. Suggestions are organized to make the feedback easier to scan, prioritize, and apply.",
      "FastAPI powers the backend API, while React and Tailwind CSS provide the frontend experience. Docker, GitHub Actions, JWT authentication, and PostgreSQL on Neon support deployment, security, and persistence.",
    ],
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/CodeSage/codeSagethumbnail.png",
    github: "https://github.com/AyushPawshe08/CodeSageAI",
    live: "https://code-sage-ai-two.vercel.app/",
    tech: [
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind CSS", accent: "#06B6D4", icon: SiTailwindcss },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "OpenAI GPT-OSS-120B", accent: "#412991", icon: SiOpenai },
      { label: "GitHub Actions", accent: "#2088FF", icon: SiGithubactions },
      { label: "Docker", accent: "#2496ED", icon: SiDocker },
      { label: "PostgreSQL (Neon)", accent: "#4169E1", icon: SiPostgresql },
      { label: "JWT Auth", accent: "#000000", icon: SiJsonwebtokens },
    ],
  },
];

export const allProjects = [...projects].sort(
  (a, b) => Number(a.slug) - Number(b.slug)
);

export const featuredProjects = allProjects;

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}

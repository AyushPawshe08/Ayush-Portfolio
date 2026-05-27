import {
  SiFastapi,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const allProjects = [
  {
    title: "AIResearch",
    slug: "1",
    folderName: "AIResearch",
    summary: "AI-powered research assistant for faster paper discovery and synthesis.",
    description:
      "AIResearch helps collect, compare, and summarize research material so technical exploration feels less scattered.",
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/AIResearch/aiResearchthumbnail.png",
    video: "/images/AIResearch/aiResearch.mp4",
    github: "https://github.com/AyushPawshe08",
    live: null,
    tech: [
      { label: "Python", accent: "#3776AB", icon: SiPython },
      { label: "FastAPI", accent: "#009688", icon: SiFastapi },
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind", accent: "#06B6D4", icon: SiTailwindcss },
    ],
  },
  {
    title: "CareerLens",
    slug: "2",
    folderName: "CareerLens",
    summary: "Career intelligence dashboard for clearer role and skill decisions.",
    description:
      "CareerLens turns career signals into a focused interface for understanding opportunities, gaps, and next steps.",
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/CareerLens/Careerlensthumbnail.png",
    github: "https://github.com/AyushPawshe08",
    live: null,
    tech: [
      { label: "Next.js", accent: "#ffffff", icon: SiNextdotjs },
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "Tailwind", accent: "#06B6D4", icon: SiTailwindcss },
    ],
  },
  {
    title: "Sangrahak",
    slug: "3",
    folderName: "Sangrahak",
    summary: "Organized collection experience for preserving useful digital material.",
    description:
      "Sangrahak is built around collecting, arranging, and returning to important resources without losing context.",
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/Sangrahak/sangrahakthumbnail.png",
    github: "https://github.com/AyushPawshe08",
    live: null,
    tech: [
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "MongoDB", accent: "#47A248", icon: SiMongodb },
      { label: "Tailwind", accent: "#06B6D4", icon: SiTailwindcss },
    ],
  },
  {
    title: "CodeSageAI",
    slug: "4",
    folderName: "CodeSageAI",
    summary: "AI-powered code assistant for faster code generation and debugging.",
    description:
      "CodeSageAI is a platform that uses AI to generate code and debug code.",
    status: "Live",
    tone: "emerald",
    thumbnail: "/images/CodeSage/codeSagethumbnail.png",
    github: "https://github.com/AyushPawshe08/CodeSageAI",
    live: "https://code-sage-ai-two.vercel.app/",
    tech: [
      { label: "React", accent: "#61DAFB", icon: SiReact },
      { label: "MongoDB", accent: "#47A248", icon: SiMongodb },
      { label: "Tailwind", accent: "#06B6D4", icon: SiTailwindcss },
    ],
  },
];

export const featuredProjects = allProjects;

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}

import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsPreviewSection,
  StackSection,
} from "../components/portfolio/home";
import { introSections } from "../components/portfolio/data/profile";

// 1. Root level metadata ensures standard HTML tags (<title>, <meta name="description">) are rendered.
// 2. Explicitly setting openGraph forces LinkedIn to view this as a website, not an article.
export const metadata = {
  title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
  description:
    "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
  metadataBase: new URL("https://ayushpawshe.pages.dev"),
  openGraph: {
    type: "website",
    url: "https://ayushpawshe.pages.dev",
    title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
    description:
      "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
    siteName: "Ayush Pawshe Portfolio",
    images: [
      {
        url: "/og-image.png", // Next.js resolves this automatically using metadataBase
        width: 1200,
        height: 630,
        alt: "Ayush Pawshe – API Infrastructure & Backend Engineer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
    description:
      "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="bg-black text-slate-100">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-24 pt-8 sm:px-8 md:px-12 lg:px-16">
        <HeroSection />
        <ProjectsPreviewSection />
        <AboutSection sections={introSections} />
        <StackSection />
        <ContactSection />
      </div>
    </main>
  );
}
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsPreviewSection,
  StackSection,
} from "../components/portfolio/home";
import { introSections } from "../components/portfolio/data/profile";

// Explicit page-level OG metadata — crawlers (LinkedIn, Twitter) read this
// directly from the rendered HTML. Repeating it here ensures og:type = "website"
// is never overridden or missing in a static export.
export const metadata = {
  openGraph: {
    type: "website",
    url: "https://ayushpawshe.pages.dev",
    title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
    description:
      "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
    images: [
      {
        url: "https://ayushpawshe.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Pawshe – API Infrastructure & Backend Engineer portfolio preview",
        type: "image/png",
      },
    ],
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

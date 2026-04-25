import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsPreviewSection,
  StackSection,
} from "../components/portfolio/home";
import { introSections } from "../components/portfolio/data/profile";

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

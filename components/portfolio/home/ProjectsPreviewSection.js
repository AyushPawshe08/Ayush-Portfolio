import Link from "next/link";
import { featuredProjects } from "../data/projects";
import { ArrowUpRightIcon } from "../shared/Icons";
import { FolderGrid } from "../projects/ProjectGrid";

export function ProjectsPreviewSection() {
  return (
    <section className="w-full py-10 sm:py-14" id="projects">
      {/* Section heading */}
      <h2 className="text-2xl text-balance font-medium leading-[0.99] tracking-[-0.055em] sm:text-3xl md:text-4xl">
        you might want to check out some of the{" "}
        <Link
          href="/projects"
          className="inline-flex items-end gap-1 underline decoration-[2px] underline-offset-[3px]"
        >
          <u>projects</u>
          <span aria-hidden="true" className="no-underline">
            <ArrowUpRightIcon className="mb-[0.08em] h-[0.7em] w-[0.7em]" />
          </span>
        </Link>{" "}
        I&apos;ve worked on...
      </h2>

      {/* Project grid */}
      <div className="mt-12 w-full md:mt-14">
        <FolderGrid projects={featuredProjects} columns={2} withSummary={false} />
      </div>

      {/* View all projects CTA */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-6 py-3 text-sm font-medium text-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/25 hover:bg-white/6 hover:text-white"
        >
          <span>View all</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

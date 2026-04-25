import Link from "next/link";
import { featuredProjects } from "../data/projects";
import { ArrowUpRightIcon } from "../shared/Icons";
import { FolderGrid } from "../projects/FolderGrid";

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
    </section>
  );
}

import { allProjects } from "../../components/portfolio/data/projects";
import ProjectSearch from "../../components/portfolio/projects/ProjectSearch";
import Link from "next/link";

export const metadata = {
  title: "Projects | Ayush Pawshe",
  description: "All projects built and shipped by Ayush Pawshe.",
};

export default function ProjectsPage() {
  const searchableProjects = allProjects.map((project) => ({
    title: project.title,
    slug: project.slug,
    folderName: project.folderName,
    summary: project.summary,
    description: project.description,
    status: project.status,
    tone: project.tone,
    thumbnail: project.thumbnail,
  }));

  return (
    <main className="bg-black text-slate-100">
      {/* Single centered wrapper — all content inside is symmetrically padded */}
      <div className="mx-auto w-full px-6 pb-24 pt-6 sm:px-8 md:px-12 lg:px-16">

        {/* Back nav */}
        <nav className="mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/8"
          >
            ← Back to home
          </Link>
        </nav>

        {/* Page heading */}
        <section className="w-full py-8 sm:py-12">
          <h1 className=" text-2xl text-balance font-medium leading-[0.99] tracking-[-0.055em] sm:text-3xl md:text-4xl">
            A collection of things I&apos;ve built, shipped, and learned from.
          </h1>
        </section>

        {/* Project search and grid */}
        <section className="w-full py-6 sm:py-10">
          <ProjectSearch projects={searchableProjects} />
        </section>

      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, allProjects } from "../../../components/portfolio/data/projects";

// ─── Static params for build ──────────────────────────────────────────────────
export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

// ─── SEO metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Ayush Pawshe`,
    description: project.summary,
  };
}

// ─── Tone colour map (mirrors FolderCard) ─────────────────────────────────────


// ─── GitHub icon ──────────────────────────────────────────────────────────────
function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

// ─── External link icon ───────────────────────────────────────────────────────
function ExternalLinkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const descriptionParagraphs = Array.isArray(project.description)
    ? project.description
    : [project.description];

  // const accent = toneAccent[project.tone] ?? toneAccent.slate;

  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-32 pt-6 sm:px-8 md:px-12 lg:px-16">

        {/* ── Top bar: back + action links ──────────────────────────── */}
        <nav className="flex items-center gap-4 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/8"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to projects
          </Link>
        </nav>

        {/* ── Hero: title + summary ─────────────────────────────────── */}
        <section className="mt-6 sm:mt-10">
          

          <h1 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-[60ch] text-base leading-relaxed tracking-[-0.02em] text-slate-400 sm:text-lg md:text-xl">
            {project.summary}
          </p>
        </section>

        {/* ── Project media ─────────────────────────────────────────── */}
        <section className="mt-14 sm:mt-20">
          <div className="overflow-hidden rounded-[8px] border border-white/10 bg-black">
            {project.video ? (
              <video
                src={project.video}
                poster={project.thumbnail}
                controls
                playsInline
                className="aspect-video w-full bg-black object-contain"
                aria-label={`${project.title} demo video`}
              />
            ) : (
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview image`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────────────────── */}
        {(project.live || project.github) && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                <ExternalLinkIcon className="h-4 w-4 text-slate-950" />
                <span className="text-slate-950">Live Demo</span>
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} source code`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]"
              >
                <GithubIcon className="h-4 w-4" />
                Source Code
              </Link>
            )}
          </div>
        )}

        {/* ── Detailed description ──────────────────────────────────── */}
        <section className="mt-14 grid gap-6 border-t border-white/10 pt-14 lg:grid-cols-[minmax(180px,260px)_1fr] lg:gap-16 sm:mt-16 sm:pt-16">
          <h2 className="text-xl font-medium leading-none tracking-[-0.05em] text-slate-100 sm:text-2xl">
            About
          </h2>
          <div className="space-y-5 text-base leading-[1.75] tracking-[-0.02em] text-slate-300 sm:text-lg">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ── Tech stack ───────────────────────────────────────────── */}
        <section className="mt-14 grid gap-6 lg:grid-cols-[minmax(180px,260px)_1fr] lg:gap-16 sm:mt-16">
          <h2 className="text-xl font-medium leading-none tracking-[-0.05em] text-slate-100 sm:text-2xl">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {project.tech.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-[0.72rem] font-medium backdrop-blur-sm sm:h-10 sm:gap-2 sm:px-3 sm:text-[0.85rem] `}
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center"
                    style={{ color: item.accent }}
                    aria-hidden="true"
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <span className="tracking-[-0.03em]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

const toneStyles = {
  amber: {
    dot: "bg-amber-400",
    title: "decoration-amber-300/70 group-hover:text-amber-300",
    card: "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]",
  },
  sky: {
    dot: "bg-sky-400",
    title: "decoration-sky-300/70 group-hover:text-sky-300",
    card: "hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]",
  },
  emerald: {
    dot: "bg-emerald-400",
    title: "decoration-emerald-300/70 group-hover:text-emerald-300",
    card: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]",
  },
};

export default function ProjectCard({ project }) {
  const tone = toneStyles[project.tone] ?? toneStyles.sky;
  const cardDescription = project.description || project.summary;

  return (
    <article className={`project-card group overflow-hidden rounded-[8px] border border-white/10 bg-[#050505] text-left transition-all duration-300 hover:scale-[1.01] hover:bg-[#070707] ${tone.card}`}>
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[8px] border-b border-white/10 bg-white/5">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15" />
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 text-[0.68rem] font-medium text-white/80">
            <span className="truncate">{project.folderName}</span>
            <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 backdrop-blur">
              View
            </span>
          </div>
        </div>

        <div className="space-y-2 px-4 pb-5 pt-4 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <h3
              className={`text-xl font-semibold tracking-[-0.045em] text-slate-100 transition-colors duration-300 underline underline-offset-4 ${tone.title}`}
            >
              {project.title}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm text-slate-300">
              <span className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
              {project.status}
            </span>
          </div>
          {cardDescription && (
            <p className="text-sm leading-6 tracking-[-0.02em] text-slate-400 sm:text-base">
              {cardDescription}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}

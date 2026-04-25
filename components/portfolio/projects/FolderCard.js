import Link from "next/link";

const tones = {
  rose: {
    top: "bg-[#ff746e]",
    body: "bg-[#f9a8af]",
    tab: "bg-[#e06d65]",
    shadow: "shadow-[0_32px_80px_rgba(255,116,110,0.22)]",
    text: "text-white/95",
  },
  sky: {
    top: "bg-[#6b7d90]",
    body: "bg-[#80ade4]",
    tab: "bg-[#5f7082]",
    shadow: "shadow-[0_32px_80px_rgba(128,173,228,0.24)]",
    text: "text-white/85",
  },
  violet: {
    top: "bg-[#9b8fb8]",
    body: "bg-[#8f6bbc]",
    tab: "bg-[#8464b0]",
    shadow: "shadow-[0_32px_80px_rgba(143,107,188,0.24)]",
    text: "text-white/85",
  },
  mint: {
    top: "bg-[#a7d0c0]",
    body: "bg-[#9dd5c4]",
    tab: "bg-[#8fc5b5]",
    shadow: "shadow-[0_32px_80px_rgba(157,213,196,0.24)]",
    text: "text-white/75",
  },
  blush: {
    top: "bg-[#98a0c0]",
    body: "bg-[#efa3aa]",
    tab: "bg-[#9f9db7]",
    shadow: "shadow-[0_32px_80px_rgba(239,163,170,0.24)]",
    text: "text-white/85",
  },
  slate: {
    top: "bg-[#98a0c0]",
    body: "bg-[#efa3aa]",
    tab: "bg-[#9f9db7]",
    shadow: "shadow-[0_32px_80px_rgba(159,157,183,0.24)]",
    text: "text-white/85",
  },
};

export function FolderCard({ project, withSummary = false }) {
  const tone = tones[project.tone];

  return (
    <Link
      href={project.slug ? `/projects/${project.slug}` : project.href}
      className={`group block rounded-[2rem] ${tone.shadow} transition duration-300 hover:-translate-y-1`}
    >
      <div
        className={`relative overflow-hidden rounded-[2rem] ${tone.body} ${
          withSummary ? "h-[300px] sm:h-[320px]" : "h-[300px]"
        }`}
      >
        <div className={`absolute inset-x-0 top-0 h-[108px] ${tone.top}`} />
        <div className={`absolute left-0 top-0 h-[108px] w-[46%] rounded-br-[2.5rem] ${tone.top}`} />
        <div className={`absolute left-[44%] top-[54px] h-[54px] w-[56%] rounded-tl-[2rem] ${tone.tab}`} />

        <span className="absolute right-8 top-6 text-[0.9rem] font-medium tracking-[-0.03em] text-slate-950 sm:text-[1rem]">
          {project.title}
        </span>

        {project.icon === "tray" ? (
          <div className="absolute left-16 top-24 flex h-14 w-16 items-center justify-center rounded-xl bg-white/25 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.25)] backdrop-blur-sm">
            <svg viewBox="0 0 64 48" className="h-11 w-12" aria-hidden="true">
              <defs>
                <linearGradient id="trayTop" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#7ab0ff" />
                  <stop offset="50%" stopColor="#ffd166" />
                  <stop offset="100%" stopColor="#ff6b6b" />
                </linearGradient>
                <linearGradient id="trayBody" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffe7e7" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <path
                d="M8 16h46l-2 23a6 6 0 0 1-6 5H18a6 6 0 0 1-6-5L8 16Z"
                fill="url(#trayBody)"
                stroke="#f6f2f2"
                strokeWidth="2"
              />
              <path
                d="M14 12a4 4 0 0 1 4-4h10l3 3h17a4 4 0 0 1 4 4v3H14v-6Z"
                fill="url(#trayTop)"
              />
            </svg>
          </div>
        ) : null}

        {project.initials ? (
          <span className={`absolute right-12 top-[2.55rem] text-[7rem] leading-none tracking-[-0.08em] ${tone.text}`}>
            {project.initials}
          </span>
        ) : null}

        {withSummary ? (
          <p className="absolute bottom-5 left-5 right-5 text-[1.05rem] leading-[1.18] tracking-[-0.03em] text-slate-950 sm:bottom-6 sm:left-6 sm:right-6 sm:text-[1.12rem]">
            {project.summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function StackPill({ item }) {
  const Icon = item.icon;

  return (
    <div className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/15 bg-black px-2.5 text-[0.72rem] font-medium text-slate-100 shadow-[0_10px_30px_rgba(27,39,60,0.04)] backdrop-blur-sm sm:h-12 sm:gap-2.5 sm:px-4 sm:text-[0.95rem] md:h-14 md:gap-3 md:px-5 md:text-[1.05rem]">
      <span
        className="flex h-4 w-4 items-center justify-center sm:h-6 sm:w-6"
        style={{ color: item.accent }}
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </span>
      <span className="tracking-[-0.03em]">{item.label}</span>
    </div>
  );
}

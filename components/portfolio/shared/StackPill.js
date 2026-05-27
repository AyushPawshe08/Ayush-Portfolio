"use client";

export function StackPill({ item }) {
  const Icon = item.icon;

  return (
    <div 
      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/2 px-3 text-[0.75rem] font-medium text-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:text-white sm:h-[2.2rem] sm:gap-2 sm:px-3.5 sm:text-[0.82rem] md:h-[2.4rem] md:gap-2 md:px-4 md:text-[0.85rem]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${item.accent}40`;
        e.currentTarget.style.boxShadow = `0 0 15px ${item.accent}15`;
        e.currentTarget.style.backgroundColor = `${item.accent}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
      }}
    >
      <span
        className="flex h-3.5 w-3.5 items-center justify-center sm:h-4 sm:w-4 md:h-4.5 md:w-4.5"
        style={{ color: item.accent }}
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5" />
      </span>
      <span className="tracking-[-0.02em]">{item.label}</span>
    </div>
  );
}

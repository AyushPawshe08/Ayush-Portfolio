export function HeroIcon({ kind }) {
  const icons = {
    globe: (
      <path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5Zm0 0c2.62 2.57 4.1 5.83 4.1 9.5s-1.48 6.93-4.1 9.5m0-19c-2.62 2.57-4.1 5.83-4.1 9.5s1.48 6.93 4.1 9.5m-8.9-9.5h17.8M4.7 7.6h14.6M4.7 16.4h14.6" />
    ),
    balance: (
      <path d="M12 3.2v15.6M7.2 6.1h9.6M9.4 18.8h5.2M7.1 6.1 4.3 13a2.8 2.8 0 0 0 5.6 0L7.1 6.1Zm9.8 0L14.1 13a2.8 2.8 0 0 0 5.6 0l-2.8-6.9Z" />
    ),
    brush: (
      <path d="M14.7 4.2c.8-1.5 3-2.2 4.5-.8 1.5 1.4 1.1 3.4.1 4.7l-2.8 3.8-6.4-2 4.6-5.7ZM9.8 9.8l6.3 2 1.7 7.5a1.8 1.8 0 0 1-2.2 2.1l-7.1-1.7-4-4.3a3.7 3.7 0 0 1 4.7-5.6l.6.4Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-[0.02em] inline-block h-[0.82em] w-[0.82em] translate-y-[-0.08em]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[kind]}
    </svg>
  );
}

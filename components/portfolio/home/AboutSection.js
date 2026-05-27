const aboutPoints = [
  <>
    Backend engineer focused on <strong>async systems</strong> and{" "}
    <strong>API infrastructure</strong>, building things that prioritize
    reliability, clean architecture, and real-world correctness.
  </>,
  <>
    Built production-grade async task pipelines using{" "}
    <strong>Celery and Redis</strong>: parallel LLM workflows, idempotent result
    persistence, automatic retries, and fire-and-poll APIs backed by
    PostgreSQL.
  </>,
  <>
    Designed and shipped REST APIs across auth, data processing, and ML
    integration: <strong>21-endpoint FastAPI backend</strong> with JWT auth,
    RBAC, refresh token rotation, and bcrypt hashing.
  </>,
  <>
    Experienced in integrating ML models and LLM pipelines into backend systems:
    Random Forest ensembles for risk scoring and{" "}
    <strong>LangGraph state machines</strong> for agentic research workflows.
  </>,
  <>
    Comfortable shipping across the stack when needed, but most interested in{" "}
    <strong>backend architecture</strong>, async systems, and AI-backend
    integration problems.
  </>,
  <>
    Participated in <strong>Mumbai Hacks 2025</strong> with 3500+ participants,
    building an end-to-end misinformation detection system with LLM-based
    classification under time pressure.
  </>,
];

export function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-white/10" id="about">
      <div className="grid w-full gap-8 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] md:gap-12 lg:gap-16">
        {/* Left Column: Heading */}
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:text-[2.5rem] leading-[1.1] pt-1">
            About
          </h2>
        </div>

        {/* Right Column: Content List */}
        <div>
          <ul className="list-disc space-y-6 pl-5 text-[1rem] leading-[1.7] tracking-[-0.02em] marker:text-white/30 sm:text-[1.1rem] md:text-[1.2rem] sm:leading-[1.75]">
            {aboutPoints.map((item, index) => (
              <li 
                key={index} 
                className="about-point transition-all duration-300 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ sections }) {
  return (
    <section className="w-full py-14 sm:py-20">
      <div className="grid w-full gap-16 lg:gap-24">
        {sections.map((section) => (
          <div
            key={section.title}
            className="grid gap-6 lg:grid-cols-[minmax(200px,300px)_1fr] lg:gap-16"
          >
            {/* Section label */}
            <h3 className="text-xl font-medium leading-none tracking-[-0.05em] text-slate-100 sm:text-2xl md:text-3xl">
              {section.title}
            </h3>

            {/* Section body */}
            <div className="space-y-5 text-balance leading-[1.28] tracking-[-0.035em] text-slate-100">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {section.body}
              </p>
              {section.faded ? (
                <p className="text-lg text-slate-500 sm:text-xl md:text-2xl lg:text-3xl">
                  {section.faded}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

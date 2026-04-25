import { stackGroups } from "../data/stack";
import { StackPill } from "../shared/StackPill";
import { SectionEyebrow } from "../shared/Typography";

export function StackSection() {
  return (
    <section className="w-full py-14 sm:py-20">
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(200px,300px)_1fr] lg:gap-16">
        <SectionEyebrow>Technology Stack I Use</SectionEyebrow>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {stackGroups.flat().map((item) => (
            <StackPill key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

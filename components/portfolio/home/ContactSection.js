import { contacts } from "../data/contacts";
import { ContactRow } from "../shared/ContactRow";

export function ContactSection() {
  return (
    <section className="w-full py-14 sm:py-20" id="connect">
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(200px,300px)_1fr] lg:gap-16">
        {/* Section heading */}
        <h2 className="text-3xl font-medium leading-none tracking-[-0.05em] text-slate-100 sm:text-4xl md:text-5xl">
          Let&apos;s connect
        </h2>

        {/* Contact links */}
        <div className="divide-y divide-white/15">
          {contacts.map((contact) => (
            <ContactRow key={contact.label} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}

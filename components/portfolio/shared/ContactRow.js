import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";

export function ContactRow({ contact }) {
  return (
    <Link
      href={contact.href}
      className="group flex items-center justify-between gap-6 py-6 text-2xl tracking-[-0.04em] text-slate-100 transition first:pt-0 sm:py-7 sm:text-3xl md:text-[clamp(1.7rem,2.8vw,2.5rem)]"
    >
      <span>{contact.label}</span>
      <ArrowUpRightIcon className="h-[0.95em] w-[0.95em] shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

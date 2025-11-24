import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { publications } from "@/data/content";

export function PublicationsSection() {
  return (
    <section id="publications" className="rounded-[2.5rem] border border-[#e3e7f3] bg-[#fdfdff] p-10 shadow-[0_45px_120px_-90px_rgba(15,23,42,0.9)] sm:p-14">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Publications</p>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold text-[#0b1330] sm:text-4xl">Rigorous, deployable research</h2>
          <p className="text-sm text-[#4c5673]">Selected submissions and works-in-progress.</p>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        {publications.map((entry) => (
          <article
            key={entry.title}
            className="group rounded-[1.8rem] border border-[#e1e6f6] bg-white/95 p-6 text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#9db6ff]"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#7f8ea8]">
              <span className="rounded-full border border-[#d8e0f5] px-4 py-1">{entry.status}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b1330]">{entry.title}</h3>
            <p className="mt-2 text-sm text-[#5d6786]">{entry.authors}</p>
            <p className="mt-4 text-base leading-relaxed">{entry.description}</p>
            {entry.link ? (
              <Link
                href={entry.link}
                target={entry.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0f348c]"
              >
                View document <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

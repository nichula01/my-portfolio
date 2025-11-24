import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { publications } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

export function PublicationsSection() {
  return (
    <section id="publications" className="scroll-m-24 space-y-8">
      <SectionHeading
        eyebrow="Publications"
        title="Rigorous, deployable research"
        description="Selected submissions and works in progress."
      />
      <div className="space-y-12">
        {publications.map((entry) => (
          <article key={entry.title} className="space-y-5 border-l border-border/40 pl-8">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {entry.status}
            </p>
            <h3 className="text-2xl font-normal text-foreground leading-tight lg:text-3xl">{entry.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{entry.authors}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{entry.description}</p>
            {entry.link ? (
              <Link
                href={entry.link}
                target={entry.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
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

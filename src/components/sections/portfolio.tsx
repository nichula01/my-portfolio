import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { portfolioHighlights } from "@/data/content";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="rounded-3xl border border-[#e1e7f2] bg-white p-10 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Full portfolio</p>
          <h2 className="mt-4 text-3xl font-medium text-foreground">Deep dives & documents</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse the long-form case studies, galleries, and leadership notes that pair with the highlights above.
          </p>
        </div>
        <Link href="/resources/Nichula_Wasalathilaka_CV.pdf" target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:text-primary/80">
          Download CV →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {portfolioHighlights.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            className="group rounded-[1.25rem] border border-[#e0e8ef] bg-white/80 p-6 text-left shadow-[0_20px_60px_-40px_rgba(9,26,38,0.45)] transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_25px_70px_-45px_rgba(9,26,38,0.5)] sm:p-7"
          >
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
              <span>{item.meta}</span>
              <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

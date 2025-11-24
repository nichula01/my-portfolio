import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { aboutContent, education, publications, resumeResources } from "@/data/content";

const focusList = aboutContent.focusAreas;

const summaryCards = [
  {
    title: "Education",
    body: education[0].title,
    meta: education[0].period
  },
  {
    title: "Research",
    body: `${publications.length} active works in remote sensing & change detection`,
    meta: publications[0].status,
    href: publications[0].link
  },
  {
    title: "Documents",
    body: "Curriculum vitae & ICIET abstract",
    meta: "Updated alongside this site",
    href: resumeResources[0].href
  }
];

export function AboutSection() {
  return (
    <section id="about" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white p-10 shadow-[0_40px_90px_-70px_rgba(15,23,42,0.8)] sm:p-14">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Building calm, precise research systems</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4b5774]">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[#0b1330]">
            {focusList.map((topic) => (
              <Badge key={topic} className="border border-[#d6def4] bg-transparent px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f348c]">
                {topic}
              </Badge>
            ))}
          </div>
          <p className="rounded-2xl border border-[#e4e8f7] bg-[#f7f8ff] p-5 text-sm text-[#0b1330]">{aboutContent.quote}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {summaryCards.map((card) => (
            <SummaryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SummaryCard({
  title,
  body,
  meta,
  href
}: {
  title: string;
  body: string;
  meta: string;
  href?: string;
}) {
  const card = (
    <div className="group h-full rounded-[1.5rem] border border-[#e3e8f5] bg-white/80 p-6 text-sm text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#aac2ff]">
      <p className="text-[0.65rem] uppercase tracking-[0.45em] text-[#5c6b99]">{title}</p>
      <p className="mt-2 text-lg font-semibold text-[#0b1330]">{body}</p>
      <p className="mt-1 text-xs font-medium text-[#6b7798]">{meta}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {card}
      </Link>
    );
  }

  return card;
}

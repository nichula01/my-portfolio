import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aboutContent, education, publications, resumeResources } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

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
    <section id="about" className="scroll-m-24 py-16 md:py-24">
      <div className="space-y-16 md:space-y-20">
        <SectionHeading eyebrow="About" title="Building calm, precise research systems" />
        
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            {aboutContent.paragraphs.slice(0, 2).map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-4">
              {focusList.map((topic) => (
                <Badge key={topic} variant="outline" className="text-sm px-4 py-1.5 font-normal rounded-full border-border/60">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="pt-4">
              <Button asChild variant="ghost" className="px-0 hover:bg-transparent">
                <Link href="/resources/Nichula_Wasalathilaka_CV.pdf" target="_blank" className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all">
                  View full profile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {summaryCards.map((card) => (
              <SummaryRow key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
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
  const content = (
    <div className="p-6 border border-border/50 rounded-lg space-y-3 hover:border-border hover:shadow-sm transition-all bg-white">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">{title}</p>
      <p className="text-base font-medium text-foreground leading-snug">{body}</p>
      <p className="text-sm text-muted-foreground">{meta}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block hover:opacity-75 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}

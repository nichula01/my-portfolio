import Link from "next/link";
import { Beaker, CircuitBoard, Globe2, ArrowRight } from "lucide-react";

import { researchAreas } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

const icons = [Beaker, CircuitBoard, Globe2];

export function ResearchAreasSection() {
  return (
    <section id="research-areas" className="scroll-m-24 py-16 md:py-24">
      <div className="space-y-12 md:space-y-16">
        <SectionHeading
          eyebrow="Research"
          title="Signals, models, field work"
          description="Three tracks I pursue before translating into papers."
        />
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {researchAreas.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={area.title} className="space-y-6 rounded-xl border border-border/50 p-8 hover:border-border hover:shadow-md transition-all bg-white">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-medium">Focus</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground leading-tight">{area.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {area.metrics.slice(0, 2).map((metric) => (
                    <li key={metric} className="px-3 py-1.5 border border-border/50 rounded-full text-xs font-medium text-foreground/80">
                      {metric}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="pt-8 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full font-medium">
            <Link href="/research">
              Explore research work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

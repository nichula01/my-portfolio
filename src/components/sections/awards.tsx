import { awards } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

export function AwardsSection() {
  return (
    <section id="awards" className="scroll-m-24 space-y-8">
      <SectionHeading
        eyebrow="Awards"
        title="Recognition & achievements"
        description="Moments that validate research rigor and engineering craft."
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {awards.map((award) => (
          <article key={award.title} className="space-y-5 rounded-sm border border-border/40 p-8">
            <div className="flex items-center justify-between text-sm uppercase tracking-wide text-muted-foreground font-medium">
              <span>{award.year}</span>
              <span>{award.issuer}</span>
            </div>
            <h3 className="text-xl font-normal text-foreground leading-tight lg:text-2xl">{award.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{award.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

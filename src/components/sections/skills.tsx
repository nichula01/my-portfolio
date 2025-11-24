import { skillCategories } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-m-24 py-32">
      <div className="space-y-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tooling for research-grade delivery"
          description="Balanced between AI research, embedded systems, and product orchestration."
        />
        
        <div className="grid gap-20 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article key={category.title} className="group space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-muted flex items-center justify-center text-base font-medium text-foreground rounded-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-normal text-foreground group-hover:text-muted-foreground transition-colors leading-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-8 pl-15">
                {category.items.map((item) => (
                  <div key={item.name} className="group/item">
                    <div className="flex items-center justify-between py-4">
                      <span className="text-lg text-foreground group-hover/item:text-muted-foreground transition-colors leading-relaxed">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-base text-muted-foreground font-medium">{item.level}</span>
                        <div className="w-16 h-px bg-muted-foreground/30 group-hover/item:bg-foreground transition-colors"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

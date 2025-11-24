import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectsSection() {
  // Show only top 2 featured projects on main page
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="scroll-m-24 py-16 md:py-24">
      <div className="space-y-16 md:space-y-20">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Precision builds & experiments"
          description="A sample of recent work in remote sensing, embedded systems, and AI applications."
        />
        
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className={`grid gap-12 md:gap-16 lg:gap-20 items-start ${
              index % 2 === 0 ? 'lg:grid-cols-[1.3fr_1fr]' : 'lg:grid-cols-[1fr_1.3fr]'
            }`}>
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-foreground/70 bg-muted px-3 py-1.5 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight tracking-tight">{project.title}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                <Button asChild variant="ghost" className="px-0 hover:bg-transparent">
                  <Link href="/projects" className="inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Full case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                
                {project.links?.length ? (
                  <div className="flex flex-wrap gap-6 pt-2">
                    {project.links.slice(0, 2).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors underline-offset-2 hover:underline"
                      >
                        {link.label} <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center pt-12">
          <Button asChild size="lg" variant="outline" className="rounded-full font-medium">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

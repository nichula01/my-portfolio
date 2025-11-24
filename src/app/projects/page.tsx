import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { projects } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="bg-white text-foreground">
      <Navigation />
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 md:px-12">
        <div className="space-y-16 pt-32">
          {/* Header */}
          <div className="space-y-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-normal leading-tight lg:text-6xl">
                Projects
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A collection of engineering projects spanning IoT systems, AI applications, 
                and embedded systems development. Each project demonstrates practical 
                application of theoretical knowledge to solve real-world challenges.
              </p>
            </div>
          </div>

          {/* All Projects */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden border-border/40">
                <div className={`grid gap-12 lg:grid-cols-[${index % 2 === 0 ? '1.2fr_1fr' : '1fr_1.2fr'}]`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/3] w-full overflow-hidden bg-muted ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-12 space-y-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="text-sm">
                          {project.year}
                        </Badge>
                        {project.year.includes("Ongoing") && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-sm">
                            In Progress
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="text-3xl font-normal leading-tight lg:text-4xl">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    {project.details && (
                      <div className="space-y-4">
                        <h3 className="text-base font-medium">Key Features</h3>
                        <ul className="space-y-3">
                          {project.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                              <span className="mt-1.5 h-2 w-2 bg-foreground rounded-full flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        {project.links.map((link) => (
                          <Button key={link.label} asChild variant="outline">
                            <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}>
                              {link.label === 'GitHub' && <Github className="mr-2 h-4 w-4" />}
                              {link.label === 'Demo Video' && <Play className="mr-2 h-4 w-4" />}
                              {!link.label.includes('GitHub') && !link.label.includes('Demo') && (
                                <ExternalLink className="mr-2 h-4 w-4" />
                              )}
                              {link.label}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-6 pt-16">
            <h2 className="text-3xl font-normal">Interested in collaboration?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, research opportunities, 
              or just having a chat about technology and engineering.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
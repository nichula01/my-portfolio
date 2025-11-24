import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 rounded-[2.5rem] border border-[#e3e7f3] bg-white/95 p-10 shadow-[0_40px_90px_-60px_rgba(15,23,42,0.9)] sm:p-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Precision builds & experiments</h2>
        </div>
        <Link href="#contact" className="text-sm font-semibold text-[#0f348c] hover:text-[#0a2870]">
          Request full portfolio →
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <Card key={project.title} className="group flex flex-col border border-[#e3e9f7] bg-white/90 p-4 shadow-none transition duration-500 hover:-translate-y-1 hover:border-[#a6bfff]">
            <div className="relative h-60 w-full overflow-hidden rounded-[1.8rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1330]/50 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0b1330]">
                {project.year}
              </div>
            </div>
            <CardHeader className="space-y-4 px-2 pt-6">
              <CardTitle className="text-2xl font-semibold text-[#0b1330]">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#0f348c]">
                {project.stack.slice(0, 5).map((item) => (
                  <span key={item} className="rounded-full border border-[#d8dff5] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-2 text-base leading-relaxed text-[#4c5673]">
              <CardDescription className="text-base text-[#4c5673]">{project.description}</CardDescription>
              {project.details?.length ? (
                <ul className="list-disc space-y-1 pl-5 text-sm text-[#5d6786]">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </CardContent>
            {project.links?.length ? (
              <div className="flex flex-wrap gap-4 border-t border-[#edf0fb] px-2 py-4 text-sm font-semibold text-[#0f348c]">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}

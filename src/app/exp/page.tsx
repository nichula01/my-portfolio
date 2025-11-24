import Image from "next/image";
import Link from "next/link";

import { aiesecExperience, experienceTimeline } from "@/data/content";

const learningIcons = ["Leadership & Team Management", "Cross-Cultural Communication", "Project Management", "Public Relations & Communication", "Personal Development", "Partnership Development"];

export default function AIESECExperiencePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to portfolio
        </Link>
        <article className="mt-6 space-y-12">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Leadership</p>
            <h1 className="text-4xl font-semibold">AIESEC Experience</h1>
            <p className="text-lg text-muted-foreground">{aiesecExperience.about[0]}</p>
          </header>

          <section className="grid gap-4 sm:grid-cols-4">
            {aiesecExperience.globalStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/70 bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Journey</h2>
            <div className="space-y-6 border-l border-border/80 pl-6">
              {experienceTimeline.map((item) => (
                <div key={item.role} className="relative">
                  <span className="absolute -left-8 top-2 h-3 w-3 rounded-full border-2 border-white bg-primary" />
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-3">
            {aiesecExperience.impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/70 bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {aiesecExperience.memories.map((memory) => (
              <div key={memory.title} className="overflow-hidden rounded-2xl border border-border/70 bg-white/80 shadow-sm">
                <div className="relative h-48 w-full">
                  <Image src={memory.image} alt={memory.title} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover" />
                </div>
                <div className="p-4 text-sm text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">{memory.title}</h3>
                  <p className="mt-2">{memory.description}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Key learnings</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {learningIcons.map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
            <p className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm text-muted-foreground">
              “AIESEC challenged me to lead with empathy, work across cultures, and stay grounded in purpose. It taught me that leadership is service—and that real impact happens when diverse teams rally around a shared vision.”
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

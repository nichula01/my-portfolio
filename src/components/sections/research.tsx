import { Beaker, CircuitBoard, Globe2 } from "lucide-react";

import { researchAreas } from "@/data/content";

const icons = [Beaker, CircuitBoard, Globe2];

export function ResearchAreasSection() {
  return (
    <section id="research-areas" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white/95 p-10 shadow-[0_45px_120px_-80px_rgba(10,30,90,0.8)] sm:p-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Research Areas</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Where I push scientific UX</h2>
        </div>
        <p className="text-sm text-[#4c5673]">Precise, high-signal spaces blending hardware, AI, and design.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {researchAreas.map((area, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article
              key={area.title}
              className="group flex flex-col justify-between rounded-[2rem] border border-[#e1e7f6] bg-gradient-to-br from-white to-[#f7f8ff] p-8 text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#9db6ff]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-[#d9e1f4] p-3 text-[#0f348c]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#7f8ea8]">Focus</span>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-semibold text-[#0b1330]">{area.title}</h3>
                <p className="text-sm leading-relaxed">{area.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f348c]">
                {area.metrics.map((metric) => (
                  <span key={metric} className="rounded-full border border-[#d8e0f6] px-4 py-1">
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

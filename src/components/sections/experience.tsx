import { Building2, Cpu, Satellite } from "lucide-react";

import { experienceHighlights } from "@/data/content";

const icons = [Satellite, Cpu, Building2];

export function ExperienceSection() {
  return (
    <section id="experience" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white p-10 shadow-[0_45px_120px_-80px_rgba(15,23,42,0.85)] sm:p-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Engineering experience & impact</h2>
        </div>
      </div>
      <div className="mt-10 space-y-8">
        {experienceHighlights.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article key={item.role} className="rounded-[2rem] border border-[#e1e6f6] bg-[#f9faff] p-8 text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#9db6ff]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="rounded-full border border-[#d9e0f4] p-3 text-[#0f348c]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7f8ea8]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#0b1330]">{item.role}</h3>
                    <p className="text-sm text-[#5d6786]">{item.organization}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f348c]">Impact</p>
              </div>
              <p className="mt-6 text-base leading-relaxed">{item.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f348c]">
                {item.contributions.map((contribution) => (
                  <span key={contribution} className="rounded-full border border-[#d8e0f6] px-4 py-1">
                    {contribution}
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

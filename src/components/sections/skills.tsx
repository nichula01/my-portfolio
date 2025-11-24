import { skillCategories } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white/95 p-10 shadow-[0_40px_100px_-70px_rgba(15,23,42,0.85)] sm:p-14">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Skills</p>
      <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Tooling for research-grade delivery</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-[1.8rem] border border-[#e1e6f6] bg-[#f9faff] p-6 text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#9db6ff]"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#7f8ea8]">{category.title}</h3>
            <div className="mt-5 space-y-5">
              {category.items.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-[#0b1330]">
                    <span>{item.name}</span>
                    <span className="text-[#7f8ea8]">{item.level}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white">
                    <div className="h-full rounded-full bg-[#0f348c]" style={{ width: item.level }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

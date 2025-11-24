import { education } from "@/data/content";

export function EducationSection() {
  return (
    <section id="education" className="rounded-3xl border border-[#e1e7f2] bg-white p-10 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Education</p>
      <h2 className="mt-4 text-3xl font-medium text-foreground">Academic foundation</h2>
      <div className="mt-8 space-y-6">
        {education.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[#edf0f8] bg-[#fafbff] p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.school}</p>
              </div>
              <span className="rounded-full border border-[#d9e1f2] px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/60 bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

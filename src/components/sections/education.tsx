import { education } from "@/data/content";

export function EducationSection() {
  return (
    <section id="education" className="rounded-sm border border-border/40 bg-white p-12 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Education</p>
      <h2 className="mt-6 text-4xl font-normal text-foreground leading-tight">Academic foundation</h2>
      <div className="mt-12 space-y-10">
        {education.map((item) => (
          <article key={item.title} className="rounded-sm border border-border/30 bg-muted/20 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-normal text-foreground leading-tight">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.school}</p>
              </div>
              <span className="rounded-sm border border-border/30 px-4 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {item.period}
              </span>
            </div>
            <ul className="mt-6 space-y-3 pl-0 text-base text-muted-foreground leading-relaxed">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 bg-muted-foreground rounded-full flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="rounded-sm border border-border/30 bg-white px-4 py-2 text-sm font-medium text-muted-foreground">
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

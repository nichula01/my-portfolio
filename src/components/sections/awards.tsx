import { awards } from "@/data/content";

export function AwardsSection() {
  return (
    <section id="awards" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white p-10 shadow-[0_45px_120px_-80px_rgba(15,23,42,0.85)] sm:p-14">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Awards</p>
        <h2 className="text-3xl font-semibold text-[#0b1330] sm:text-4xl">Recognition & achievements</h2>
        <p className="text-sm text-[#4c5673]">
          Celebrating the milestones that validate rigorous research and engineering craft.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {awards.map((award) => (
          <article
            key={award.title}
            className="rounded-[1.8rem] border border-[#e1e6f5] bg-[#fbfbff] p-6 text-[#4c5673] transition duration-500 hover:-translate-y-1 hover:border-[#9db6ff]"
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-[#7f8ea8]">
              <span>{award.year}</span>
              <span className="text-[#0f348c]">{award.issuer}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#0b1330]">{award.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">{award.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

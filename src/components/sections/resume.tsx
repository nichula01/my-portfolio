import Link from "next/link";

import { aboutContent, resumeResources } from "@/data/content";

export function ResumeSection() {
  return (
    <section id="resume" className="rounded-3xl border border-[#e1e7f2] bg-white p-10 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Resume</p>
      <h2 className="mt-4 text-3xl font-medium text-foreground">Documents & references</h2>
      <p className="mt-4 text-base text-muted-foreground">
        Download the full curriculum vitae or browse supporting documents referenced across this portfolio.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {resumeResources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            target={resource.href.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className="rounded-2xl border border-[#edf0f8] bg-[#fafbff] p-5 text-sm font-medium text-foreground transition hover:bg-white"
          >
            {resource.label}
          </Link>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-[#edf0f8] bg-[#fafbff] p-6 text-sm text-muted-foreground">
        <p>Primary CV last updated alongside this site.</p>
        <Link href={aboutContent.cv} target="_blank" rel="noreferrer" className="text-primary hover:underline">
          Download CV
        </Link>
      </div>
    </section>
  );
}

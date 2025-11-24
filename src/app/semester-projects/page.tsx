import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Analog Line-Following Robot",
    description: "Logic-gate controller with SR latches and comparators keeps a two-wheel chassis on course without a microcontroller.",
    image: "/images/linefollow1.jpg"
  },
  {
    title: "Pulse Rate Monitor",
    description: "Piezoelectric sensor wristband with op-amp filtering and peak detection to measure BPM in real time.",
    image: "/images/piezo1.jpg"
  },
  {
    title: "Piezo Sensor Experiments",
    description: "Characterizing analog front-ends for wearable sensing; captured for course lab submissions.",
    image: "/images/piezo2.jpg"
  },
  {
    title: "Lab snapshots",
    description: "A few of the builds completed during sophomore hardware lab sessions.",
    image: "/images/piezo3.jpg"
  }
];

export default function SemesterProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to portfolio
        </Link>
        <article className="mt-6 space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Gallery</p>
            <h1 className="text-4xl font-semibold">Semester Hardware Projects</h1>
            <p className="text-lg text-muted-foreground">
              Selected analog and embedded builds from coursework between 2022 and 2023.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </section>
        </article>
      </div>
    </main>
  );
}

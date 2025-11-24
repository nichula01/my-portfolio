import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    label: "AI",
    value: "Leaf disease detection",
    description: "CNN classifier triggers early warnings and treatment suggestions."
  },
  {
    label: "Control",
    value: "Closed-loop irrigation",
    description: "ESP32 + solenoid valves maintain custom moisture targets."
  },
  {
    label: "Monitoring",
    value: "Live dashboard",
    description: "Raspberry Pi server exposes charts, alerts, and override controls."
  }
];

const stack = ["Raspberry Pi", "ESP32", "Arduino", "Python", "FastAPI", "Tailwind"];

export default function GreenhousePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to portfolio
        </Link>
        <article className="mt-6 space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Case study</p>
            <h1 className="text-4xl font-semibold">Fully Automated Greenhouse Monitoring System</h1>
            <p className="text-lg text-muted-foreground">
              End-to-end IoT platform that keeps crops healthy through real-time sensing, AI-based disease detection, and automatic irrigation.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Architecture</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-white/80 p-5 text-sm text-muted-foreground">
                <p>
                  Each greenhouse node uses ESP32 microcontrollers wired to soil moisture, DHT22 climate, and light sensors. Readings stream to a Raspberry Pi gateway that hosts a FastAPI service and MQTT broker.
                </p>
                <p className="mt-4">
                  The Pi aggregates data, runs the CNN disease classifier on captured leaf imagery, and pushes events to a responsive dashboard. Irrigation and misting relays close the loop when thresholds drift.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white/80 p-5">
                <Image src="/images/implementedgreenhouse.jpg" alt="Greenhouse deployment" width={640} height={480} className="rounded-xl object-cover" />
                <p className="mt-3 text-sm text-muted-foreground">Prototype installation with climate node, irrigation lines, and dashboard overview.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Results</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li>Reduced manual irrigation time by 72% while keeping moisture within 3% of the target window.</li>
              <li>AI module catches common fungal infections with over 90% accuracy, sending Telegram alerts with recommended actions.</li>
              <li>Dashboard exposes live charts, historical comparisons, and manual override controls for farm operators.</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}

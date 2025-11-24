import Image from "next/image";
import Link from "next/link";

const metrics = [
  { label: "IoU", value: "0.848" },
  { label: "F1 score", value: "0.884" },
  { label: "Dataset", value: "Mumbai HR imagery" }
];

const pipeline = [
  "Tiles are normalized and augmented (random crops, hue shifts, CLAHE).",
  "ResNet-34 encoder pretrained on ImageNet feeds a U-Net decoder with attention skip connections.",
  "Dice + BCE loss encourages crisp boundaries; inference runs on 1024×1024 tiles with overlap.",
  "Predictions post-processed via morphological opening to clean rooftop noise."
];

export default function SlumPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to portfolio
        </Link>
        <article className="mt-6 space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Research</p>
            <h1 className="text-4xl font-semibold">Automated Slum Detection from High-Resolution Satellite Imagery</h1>
            <p className="text-lg text-muted-foreground">
              Semantic segmentation pipeline that flags informal settlements across Mumbai using a U-Net with a ResNet-34 encoder.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border/70 bg-white/80 p-5 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-border/70 bg-white/80 p-6 text-sm text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground">Pipeline</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {pipeline.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/70 bg-white/80 p-6">
              <Image src="/images/slum.png" alt="Segmentation output" width={540} height={360} className="rounded-xl object-cover" />
              <p className="mt-3 text-sm text-muted-foreground">Example overlay showing predictions (pink) vs. ground truth building masks.</p>
            </div>
          </section>

          <section className="space-y-3 text-sm text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">Publications & resources</h2>
            <p>
              Abstract submitted to ICIET 2025 and included in the wider remote sensing research at University of Peradeniya. Code and training scripts are available on GitHub with reproducible notebooks.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-primary">
              <Link href="https://github.com/nichula01/Slum-Detection-Using-Unet-Architecture" target="_blank" rel="noreferrer">
                GitHub repository →
              </Link>
              <Link href="/resources/iciet2025_abstract.pdf" target="_blank" rel="noreferrer">
                Read abstract →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, MapPin, Sparkles } from "lucide-react";

import { heroContent, aboutContent } from "@/data/content";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.8rem] border border-[#e2e6f0] bg-white/90 px-6 py-16 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] sm:px-14">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#1f3ba6]/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0f172a]/5 blur-3xl" />
        <div className="absolute inset-6 rounded-[2.4rem] border border-white/40" />
      </div>
      <div className="relative grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_0.8fr]">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#cfd7eb] px-5 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#003b95]">
            <Sparkles className="h-3.5 w-3.5" /> {heroContent.tagline}
          </span>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.6em] text-[#7f8ea8]">Engineer Research Portfolio</p>
            <h1 className="font-display text-[2.8rem] leading-[1.1] text-[#0b1330] sm:text-[3.6rem]">
              {heroContent.name}
            </h1>
            <p className="text-lg text-[#4c5673]">{heroContent.focus}</p>
            <p className="text-base text-[#4c5673]">{heroContent.description}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="gap-2 rounded-full bg-[#0f348c] px-8 py-6 text-base font-semibold tracking-wide hover:bg-[#0a2870]">
              <Link href="#projects">
                View projects <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 rounded-full border-[#cfd7eb] bg-transparent px-8 py-6 text-base font-semibold text-[#0b1330] hover:bg-[#f3f6ff]"
            >
              <Link href={aboutContent.cv} target="_blank" rel="noreferrer">
                Download CV <Download className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            {heroContent.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#dfe4f4] bg-white/80 p-5 transition duration-500 hover:-translate-y-1 hover:border-[#b4c6ff]"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.5em] text-[#5c6b99]">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-[#0b1330]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-4 rounded-[2.3rem] border border-[#d5dcf1] bg-gradient-to-br from-white via-white to-[#eef2ff] shadow-[0_30px_60px_-45px_rgba(30,64,175,0.75)]" />
          <div className="relative flex flex-col items-center gap-4 rounded-[2rem] border border-white/60 bg-white/80 p-8 text-sm text-[#4c5673] backdrop-blur">
            <div className="relative h-64 w-64 overflow-hidden rounded-[1.6rem] border border-[#e5e9f6]">
              <Image
                src={heroContent.image}
                alt={heroContent.name}
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center gap-2 text-[#0f348c]">
              <MapPin className="h-4 w-4" />
              <span>{heroContent.location}</span>
            </div>
            <Link href={`mailto:${heroContent.email}`} className="text-[#0f348c] hover:underline">
              {heroContent.email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

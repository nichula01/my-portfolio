import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { heroContent } from "@/data/content";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="scroll-m-32 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 lg:gap-24 items-start">
        
        {/* Main content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">Kandy · Sri Lanka</p>
            <h1 className="text-4xl font-bold text-foreground leading-tight sm:text-5xl lg:text-6xl tracking-tight">
              {heroContent.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl font-normal">
              {heroContent.tagline}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {heroContent.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full font-medium">
              <Link href="/projects">
                Projects <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full font-medium">
              <Link href="/research">
                Research
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-medium">
              <Link href="/#contact">
                Get in Touch <Mail className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Profile section */}
        <div className="order-1 lg:order-2 max-w-sm mx-auto lg:mx-0 lg:ml-auto flex flex-col items-center lg:items-end">
          <div className="space-y-6 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted to-border/30 blur-2xl opacity-50"></div>
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src={heroContent.image}
                  alt={heroContent.name}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground/80">{heroContent.location}</span>
              </div>
              <Link 
                href={`mailto:${heroContent.email}`} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block underline-offset-2 hover:underline"
              >
                {heroContent.email}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-border/40">
        <div className="grid gap-12 sm:grid-cols-3">
          {heroContent.highlights.map((item) => (
            <div key={item.label} className="text-center sm:text-left space-y-2">
              <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">{item.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

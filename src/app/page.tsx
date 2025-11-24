import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ResearchAreasSection } from "@/components/sections/research";
import { PublicationsSection } from "@/components/sections/publications";
import { SkillsSection } from "@/components/sections/skills";
import { AwardsSection } from "@/components/sections/awards";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Navigation />
        <div className="space-y-12">
          <HeroSection />
          <AboutSection />
          <ResearchAreasSection />
          <PublicationsSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <AwardsSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}

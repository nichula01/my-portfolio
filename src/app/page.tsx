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
    <main className="bg-white text-foreground">
      <Navigation />
      <div className="mx-auto w-full max-w-[680px] px-5 pb-20 sm:px-8 lg:max-w-[1080px]">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          <HeroSection />
          <AboutSection />
          <ResearchAreasSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}

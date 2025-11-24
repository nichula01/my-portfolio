import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Globe, Calendar, Award } from "lucide-react";

export function ExperienceSection() {
  const stats = [
    { icon: Calendar, label: "Duration", value: "1yr 7mo" },
    { icon: Users, label: "Different Roles", value: "4" },
    { icon: Globe, label: "Functional Areas", value: "3" },
    { icon: Award, label: "Major Conference", value: "1" }
  ];

  const highlights = [
    "Team Lead - IGT B2B and Volunteer Development",
    "Public Relations & Engagement Specialist",
    "NOVA 2023 Organizing Committee Member",
    "Cross-cultural leadership with international volunteers"
  ];

  return (
    <section id="experience" className="scroll-m-24 py-16 md:py-24">
      <div className="space-y-16 md:space-y-20">
        <SectionHeading 
          eyebrow="Experience" 
          title="Leadership & youth development" 
          description="1.7 years of experience with AIESEC, managing international programs and driving youth development initiatives."
        />
        
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-3 p-6 rounded-lg border border-border/50 hover:border-border hover:shadow-sm transition-all">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                AIESEC Leadership Journey
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Developed leadership skills through managing international volunteer programs, 
                coordinating cross-cultural exchanges, and driving youth development initiatives 
                across multiple functional areas.
              </p>
            </div>
            
            <div className="space-y-5">
              <h4 className="text-base font-semibold text-foreground">Key Roles & Achievements</h4>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 bg-foreground rounded-full flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Button asChild size="lg" variant="outline" className="rounded-full font-medium">
                <Link href="/experience">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

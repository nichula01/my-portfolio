import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Users, Globe, Award } from "lucide-react";

export default function ExperiencePage() {
  const timelineData = [
    {
      title: "Public Relations & Engagement",
      organization: "AIESEC in University of Peradeniya",
      period: "Aug 2023 - Present",
      type: "Leadership Role",
      description: "Expanded role to include Public Relations and engagement activities, focusing on building AIESEC's brand presence, managing communications, and creating engagement strategies to attract and retain members.",
      achievements: [
        "Developed comprehensive PR strategies for youth engagement",
        "Managed brand communications across multiple platforms",
        "Created content strategies that increased member engagement",
        "Built partnerships with local and international organizations"
      ],
      tags: ["Public Relations", "Brand Management", "Engagement", "Communications"]
    },
    {
      title: "Team Lead - IGT B2B and VD",
      organization: "AIESEC in University of Peradeniya",
      period: "Aug 2023 - Present",
      type: "Leadership Role",
      description: "Promoted to Team Lead position, taking on leadership responsibilities in managing team members, coordinating projects, and driving the growth of incoming global talent and volunteer development initiatives.",
      achievements: [
        "Led cross-functional teams in international exchange programs",
        "Coordinated volunteer development initiatives across multiple projects",
        "Managed B2B partnerships for global talent acquisition",
        "Mentored new team members and facilitated their professional growth"
      ],
      tags: ["Leadership", "Team Management", "Project Coordination", "Mentoring"]
    },
    {
      title: "Organizing Committee Member",
      organization: "NOVA 2023 Conference",
      period: "Jun 2023",
      type: "Event Management",
      description: "Served as an organizing committee member for NOVA 2023, gaining valuable experience in event management and large-scale conference organization with participants from across Sri Lanka.",
      achievements: [
        "Contributed to planning and execution of a major national conference",
        "Coordinated logistics for 500+ participants",
        "Managed speaker coordination and venue arrangements",
        "Facilitated workshops on leadership and youth development"
      ],
      tags: ["Event Management", "Conference Organization", "Logistics", "Workshop Facilitation"]
    },
    {
      title: "Member - IGT B2B and VD",
      organization: "AIESEC in University of Peradeniya",
      period: "Feb 2023 - Aug 2023",
      type: "Membership",
      description: "Started my AIESEC journey as a member in the Incoming Global Talent B2B and Volunteer Development function, learning about global exchanges and youth development programs.",
      achievements: [
        "Completed comprehensive training on AIESEC programs and values",
        "Supported international volunteer placements and orientations",
        "Participated in cultural exchange programs with international interns",
        "Developed foundational skills in cross-cultural communication"
      ],
      tags: ["Cultural Exchange", "Volunteer Coordination", "International Programs", "Personal Development"]
    }
  ];

  const stats = [
    { icon: Calendar, label: "Total Experience", value: "1yr 7mo" },
    { icon: Users, label: "Different Roles", value: "4" },
    { icon: Globe, label: "Functional Areas", value: "3" },
    { icon: Award, label: "Major Conference", value: "1" }
  ];

  const skills = [
    "Leadership & Team Management",
    "Cross-Cultural Communication", 
    "Project Management",
    "Public Relations & Communication",
    "Personal Development",
    "Partnership Development",
    "Event Management",
    "Brand Management"
  ];

  const aiesecValues = [
    { name: "Leadership", description: "Developing leadership potential through practical experiences" },
    { name: "Cross-Cultural", description: "Understanding and embracing cultural diversity" },
    { name: "Peace & Fulfillment", description: "Contributing to a more peaceful and fulfilling world" },
    { name: "Integrity", description: "Acting with honesty and strong moral principles" }
  ];

  return (
    <main className="bg-white text-foreground">
      <Navigation />
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 md:px-12">
        <div className="space-y-20 pt-32">
          {/* Header */}
          <div className="space-y-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-normal leading-tight lg:text-6xl">
                Experience & Leadership
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                My journey with AIESEC, the world's largest youth organization, where I developed 
                leadership skills, managed international programs, and contributed to youth development 
                initiatives across multiple functional areas.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center border-border/40">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-foreground" />
                <div className="text-3xl font-normal text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* About AIESEC */}
          <Card className="p-12 border-border/40 bg-muted/20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-normal">About AIESEC</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AIESEC is the world's largest non-profit youth organization, present in over 120 countries and territories. 
                Founded in 1948, AIESEC empowers young people to develop leadership skills and make a positive impact on society 
                through cross-cultural global exchanges and volunteer experiences.
              </p>
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 pt-6">
                <div>
                  <div className="text-2xl font-normal text-foreground">120+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-normal text-foreground">40K+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-normal text-foreground">75+</div>
                  <div className="text-sm text-muted-foreground">Years of Impact</div>
                </div>
                <div>
                  <div className="text-2xl font-normal text-foreground">1M+</div>
                  <div className="text-sm text-muted-foreground">Alumni</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Journey Timeline */}
          <div className="space-y-12">
            <h2 className="text-4xl font-normal text-center">My AIESEC Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block"></div>
              
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div key={item.title} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-foreground rounded-full border-4 border-white shadow-sm hidden lg:block"></div>
                    
                    <Card className="lg:ml-20 p-8 border-border/40">
                      <div className="space-y-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-normal leading-tight">{item.title}</h3>
                            <p className="text-lg text-muted-foreground">{item.organization}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Badge variant="secondary" className="self-start">
                              {item.period}
                            </Badge>
                            <Badge variant="outline" className="self-start">
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="text-base font-medium">Key Achievements</h4>
                          <ul className="space-y-3">
                            {item.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                                <span className="mt-1.5 h-2 w-2 bg-foreground rounded-full flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Developed */}
          <div className="space-y-8">
            <h2 className="text-4xl font-normal text-center">Skills Developed</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <Card key={skill} className="p-4 text-center border-border/40">
                  <p className="text-sm font-medium leading-relaxed">{skill}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* AIESEC Values */}
          <div className="space-y-8">
            <h2 className="text-4xl font-normal text-center">AIESEC Values</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {aiesecValues.map((value) => (
                <Card key={value.name} className="p-6 border-border/40">
                  <h3 className="text-xl font-medium mb-3">{value.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <Card className="p-12 border-border/40 bg-muted/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="text-6xl text-muted-foreground/30 font-serif">"</div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                My AIESEC experience has been transformative, teaching me that true leadership 
                isn't about holding titles, but about empowering others to reach their potential. 
                Through managing international programs and working with diverse teams, I've learned 
                that the most impactful solutions come from combining technical expertise with 
                cultural understanding and genuine human connection.
              </blockquote>
              <footer className="text-base font-medium text-foreground">
                — Nichula Sathmith Wasalathilaka
              </footer>
            </div>
          </Card>

          {/* Contact CTA */}
          <div className="text-center space-y-6 pt-8">
            <h2 className="text-3xl font-normal">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, leadership opportunities, or discussing 
              youth development initiatives? I'd love to hear from you.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
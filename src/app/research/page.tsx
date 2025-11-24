import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { publications } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Download } from "lucide-react";

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Remote Sensing & Change Detection",
      description: "Advanced deep learning techniques for analyzing satellite imagery, focusing on spatio-temporal feature fusion and robust change detection methods.",
      techniques: ["U-Net Architecture", "ResNet Encoders", "Spatio-Temporal Analysis", "Semantic Segmentation"],
      applications: ["Urban Planning", "Environmental Monitoring", "Agricultural Assessment", "Disaster Management"]
    },
    {
      title: "Computer Vision & AI",
      description: "Development of novel architectures for image analysis and pattern recognition, with emphasis on remote sensing applications.",
      techniques: ["Mamba Architecture", "Transformer Models", "Attention Mechanisms", "Feature Fusion"],
      applications: ["Slum Detection", "Urban Segmentation", "Land Use Classification", "Change Monitoring"]
    },
    {
      title: "Signal Processing & Control Systems",
      description: "Integration of advanced signal processing techniques with control systems for real-world engineering applications.",
      techniques: ["Digital Signal Processing", "Adaptive Control", "Sensor Fusion", "Real-time Processing"],
      applications: ["IoT Systems", "Automated Control", "Environmental Monitoring", "Smart Agriculture"]
    }
  ];

  const metrics = [
    { label: "Publications Under Review", value: "3+" },
    { label: "Research Areas", value: "3" },
    { label: "Collaboration Projects", value: "2" },
    { label: "Open Source Contributions", value: "5+" }
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
                Research & Publications
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Contributing to cutting-edge research in remote sensing, AI, and computer vision 
                with multiple papers under review in prestigious IEEE conferences. Focus on developing 
                practical solutions for real-world applications in urban planning and environmental monitoring.
              </p>
            </div>
          </div>

          {/* Research Metrics */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-6 text-center border-border/40">
                <div className="text-3xl font-normal text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </div>

          {/* Research Areas */}
          <div className="space-y-12">
            <h2 className="text-4xl font-normal text-center">Research Areas</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {researchAreas.map((area) => (
                <Card key={area.title} className="p-8 border-border/40">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-normal leading-tight">{area.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Key Techniques</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.techniques.map((technique) => (
                          <Badge key={technique} variant="secondary" className="text-sm">
                            {technique}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.applications.map((app) => (
                          <Badge key={app} variant="outline" className="text-sm">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-12">
            <h2 className="text-4xl font-normal text-center">Publications</h2>
            <div className="space-y-8">
              {publications.map((publication) => (
                <Card key={publication.title} className="p-8 border-border/40 border-l-4 border-l-foreground/20">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <Badge 
                          variant={publication.status.includes('Under Review') ? 'secondary' : 'default'}
                          className="text-sm"
                        >
                          {publication.status}
                        </Badge>
                        <h3 className="text-2xl font-normal leading-tight lg:text-3xl">
                          {publication.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      <strong>Authors:</strong> {publication.authors}
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                      {publication.description}
                    </p>
                    
                    {publication.keywords && (
                      <div className="space-y-3">
                        <h4 className="text-base font-medium">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {publication.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-sm">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {publication.link && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild variant="outline">
                          <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : undefined}>
                            {publication.link.includes('arxiv') ? (
                              <ExternalLink className="mr-2 h-4 w-4" />
                            ) : publication.link.includes('.pdf') ? (
                              <Download className="mr-2 h-4 w-4" />
                            ) : (
                              <FileText className="mr-2 h-4 w-4" />
                            )}
                            {publication.link.includes('arxiv') ? 'View on arXiv' : 
                             publication.link.includes('.pdf') ? 'Download PDF' : 'View Paper'}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Philosophy */}
          <Card className="p-12 border-border/40 bg-muted/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-normal">Research Philosophy</h2>
              <div className="text-6xl text-muted-foreground/30 font-serif">"</div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                I believe in research that bridges the gap between theoretical advancement and practical application. 
                My work focuses on developing robust, scalable solutions that can address real-world challenges in 
                urban planning, environmental monitoring, and smart agriculture. Every algorithm should serve a purpose, 
                every model should solve a problem, and every publication should contribute to making our world better.
              </blockquote>
              <footer className="text-base font-medium text-foreground">
                — Research Approach
              </footer>
            </div>
          </Card>

          {/* Collaboration */}
          <div className="space-y-8">
            <h2 className="text-4xl font-normal text-center">Research Collaborations</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-8 border-border/40">
                <div className="space-y-4">
                  <h3 className="text-2xl font-normal">University of Peradeniya</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Collaborating with faculty members and research groups in the Department of 
                    Electrical & Electronic Engineering on projects related to signal processing, 
                    control systems, and AI applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Signal Processing</Badge>
                    <Badge variant="outline">Control Systems</Badge>
                    <Badge variant="outline">AI Applications</Badge>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-border/40">
                <div className="space-y-4">
                  <h3 className="text-2xl font-normal">International Research Network</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Contributing to research projects with international collaborators, focusing on 
                    remote sensing applications, change detection methodologies, and urban analysis 
                    using satellite imagery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Remote Sensing</Badge>
                    <Badge variant="outline">Change Detection</Badge>
                    <Badge variant="outline">Urban Analysis</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Future Research */}
          <div className="space-y-8">
            <h2 className="text-4xl font-normal text-center">Future Research Directions</h2>
            <Card className="p-8 border-border/40">
              <div className="space-y-6">
                <h3 className="text-2xl font-normal">Upcoming Projects</h3>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">Edge AI for IoT</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing lightweight AI models for deployment on edge devices in IoT systems.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">Multimodal Remote Sensing</h4>
                    <p className="text-sm text-muted-foreground">
                      Integrating multiple satellite data sources for enhanced environmental monitoring.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">Sustainable Agriculture AI</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-driven solutions for sustainable farming practices and crop optimization.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-6 pt-8">
            <h2 className="text-3xl font-normal">Research Collaboration</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on research projects or discussing potential 
              opportunities in remote sensing, AI, or embedded systems?
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Let's Discuss</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
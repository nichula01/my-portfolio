import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

const contactMethods = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nichula-wasalathilaka",
    href: contactInfo.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "github.com/nichula01",
    href: contactInfo.github,
    icon: Github
  },
  {
    label: "Location",
    value: contactInfo.location,
    href: undefined,
    icon: MapPin
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-m-24 py-16 md:py-24">
      <div className="space-y-12 md:space-y-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s engineer the future together"
          description="Available for remote sensing, embedded automation, and AI research collaborations."
        />
        <div className="grid gap-12 md:gap-16 rounded-xl border border-border/50 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] bg-white shadow-sm">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I collaborate with research groups, innovation labs, and startups on sensing, automation, and deep-learning projects.
            </p>
            <div className="space-y-5 text-base">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-3 text-foreground">
                  <method.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  {method.href ? (
                    <Link
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="transition hover:text-muted-foreground leading-relaxed underline-offset-2 hover:underline"
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <span className="leading-relaxed">{method.value}</span>
                  )}
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8 rounded-full font-medium">
              <Link href={`mailto:${contactInfo.email}`}>
                <Mail className="h-4 w-4" /> Email me
              </Link>
            </Button>
          </div>
          <form method="POST" action="https://formspree.io/f/xanyqybv" className="space-y-8 text-base">
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_next" value="/?message=sent" />
            <Field label="Name" name="name" required />
            <Field label="Email" name="_replyto" type="email" required />
            <Field label="Message" name="message" as="textarea" required />
            <Button type="submit" className="w-full mt-10 rounded-full font-medium" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
}) {
  return (
    <label className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
      {label}
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full border-b-2 border-border/40 bg-transparent pb-3 text-base text-foreground outline-none transition focus:border-foreground leading-relaxed resize-none"
          placeholder="Tell me about your project"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full border-b-2 border-border/40 bg-transparent pb-3 text-base text-foreground outline-none transition focus:border-foreground"
        />
      )}
    </label>
  );
}

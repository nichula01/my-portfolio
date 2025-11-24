import Link from "next/link";
import { Mail, MapPin, MessageSquare, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/content";

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
    <section id="contact" className="rounded-[2.5rem] border border-[#e3e7f3] bg-white p-10 text-foreground shadow-[0_50px_120px_-80px_rgba(15,23,42,0.8)] sm:p-14">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#6473a1]">Contact</p>
      <h2 className="mt-4 text-3xl font-semibold text-[#0b1330] sm:text-4xl">Let&apos;s engineer the future together</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.8rem] border border-[#e1e6f6] bg-[#f9faff] p-6 text-[#4c5673]">
          <p className="text-sm">
            I collaborate with research groups, innovation labs, and startups on sensing, automation, and deep-learning projects.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            {contactMethods.map((method) => (
              <div key={method.label} className="flex items-center gap-3 text-[#0b1330]">
                <method.icon className="h-4 w-4 text-[#0f348c]" />
                {method.href ? (
                  <Link href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-[#0f348c] hover:underline">
                    {method.value}
                  </Link>
                ) : (
                  <span>{method.value}</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-[#0f348c] px-6 py-5 text-sm font-semibold tracking-[0.25em] hover:bg-[#0a2870]">
              <Link href={`mailto:${contactInfo.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email me
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-[#dfe3f3] px-6 py-5 text-sm font-semibold text-[#0b1330] hover:bg-[#f1f4ff]">
              <Link href="https://cal.com/" target="_blank" rel="noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> Book a call
              </Link>
            </Button>
          </div>
        </div>
        <form
          method="POST"
          action={contactInfo.formAction}
          className="rounded-2xl border border-[#edf0f8] p-6 text-sm"
        >
          <div className="grid gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Message" name="message" as="textarea" required />
          </div>
          <Button type="submit" className="mt-6 w-full rounded-full bg-[#0f348c] py-5 text-sm font-semibold tracking-[0.3em] hover:bg-[#0a2870]">
            Send message
          </Button>
        </form>
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
    <label className="text-sm font-medium text-foreground">
      {label}
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          className="mt-2 w-full rounded-xl border border-[#dfe3f3] bg-white/70 p-4 text-sm text-[#0b1330] outline-none transition focus:border-[#0f348c]"
          rows={5}
          placeholder="Tell me about your project"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full rounded-xl border border-[#dfe3f3] bg-white/70 p-4 text-sm text-[#0b1330] outline-none transition focus:border-[#0f348c]"
        />
      )}
    </label>
  );
}

'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#research-areas", label: "Research Areas" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-6 z-20 mb-12">
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-6 py-3 transition-all",
          scrolled
            ? "border-[#dfe3f4] bg-white/85 text-[#0b1330] shadow-[0_25px_70px_-50px_rgba(15,23,42,0.8)] backdrop-blur"
            : "border-transparent bg-white/60 text-[#0b1330]"
        )}
      >
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Nichula Wasalathilaka
        </Link>
        <nav className="hidden gap-4 text-xs font-semibold uppercase tracking-[0.25em] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1 transition",
                scrolled
                  ? "text-[#6e7897] hover:text-[#0b1330]"
                  : "text-[#6e7897] hover:text-[#0b1330]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="mailto:nichula2001@gmail.com"
          className={cn(
            "rounded-full border px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.5em]",
            scrolled ? "border-[#dfe3f4] text-[#0b1330]" : "border-[#e5e9f7] text-[#0b1330]"
          )}
        >
          Available
        </Link>
      </div>
    </header>
  );
}

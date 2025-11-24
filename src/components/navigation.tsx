"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#research-areas", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Publications" },
  { href: "/#contact", label: "Contact" }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="mx-auto max-w-[680px] px-5 sm:px-8 lg:max-w-[1080px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-lg md:text-xl font-semibold text-foreground tracking-tight"
            >
              Nichula Wasalathilaka
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {links.slice(0, 6).map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground relative group py-2 font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <Button asChild size="sm" className="hidden sm:flex rounded-full font-medium">
              <Link href="/#contact">
                Get in Touch
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <nav className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="pt-4 space-y-1 border-t border-border/10">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-2"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="mailto:nichula2001@gmail.com" 
              className="sm:hidden block text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-2"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

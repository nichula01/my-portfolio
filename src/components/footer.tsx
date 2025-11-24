import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-border/40">
      <div className="space-y-12">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Description */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              Nichula Wasalathilaka
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Undergraduate researcher focused on remote sensing, embedded systems, and AI applications for sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                About
              </Link>
              <Link 
                href="/research" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Publications
              </Link>
              <Link 
                href="/projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Experience
              </Link>
              <Link 
                href="/#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <Link 
                href="mailto:nichula2001@gmail.com" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
              <Link 
                href="https://github.com/nichula01" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/nichula-wasalathilaka/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-border/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left pb-8">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nichula Sathmith Wasalathilaka. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

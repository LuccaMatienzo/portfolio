"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: "#sobre-mi" },
    { name: t.nav.experience, href: "#experiencia" },
    { name: t.nav.projects, href: "#proyectos" },
    { name: t.nav.stack, href: "#stack" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12">
          
          {/* Left Side: Info & Links */}
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {t.footer.name}<span className="text-primary">.</span>
            </h2>
            <p className="text-foreground/70 mb-1 leading-relaxed">
              {t.footer.role}
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              {t.footer.bio}
            </p>
            
            <div className="flex items-center space-x-6 text-sm font-medium">
              <a
                href="https://github.com/LuccaMatienzo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline decoration-foreground/30 underline-offset-4 hover:decoration-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucca-nicol%C3%A1s-matienzo-293682195/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline decoration-foreground/30 underline-offset-4 hover:decoration-primary"
              >
                LinkedIn
              </a>
              <a
                href="mailto:12matienzo@gmail.com"
                className="text-foreground hover:text-primary transition-colors underline decoration-foreground/30 underline-offset-4 hover:decoration-primary"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right Side: Navigation */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-end">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground/10 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/50 font-mono">
          <div>
            &copy; {currentYear} {t.footer.name}
          </div>
          <div>
            {t.footer.madeWith} <span className="text-primary font-medium">Next.js</span> - {t.footer.in} <span className="opacity-70 ml-1">AR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

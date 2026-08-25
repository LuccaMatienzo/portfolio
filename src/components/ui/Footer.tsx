import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="#inicio" className="text-xl font-bold text-primary tracking-tighter">
            LM<span className="text-foreground">.</span>
          </Link>
          <p className="text-sm text-foreground/70 mt-2">
            Desarrollador Web Full Stack.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:lucca@example.com"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="text-sm text-foreground/60">
          &copy; {currentYear} Lucca Matienzo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

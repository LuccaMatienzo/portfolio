"use client";

import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../ui/Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contacto" title={t.contact.sectionTitle} subtitle={t.contact.sectionSubtitle}>
      <div className="max-w-4xl mx-auto">
        <p className="text-foreground/80 text-lg mb-12">
          {t.contact.text}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:12matienzo@gmail.com"
            className="flex items-center justify-center gap-3 bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-8 py-4 rounded-xl hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
          >
            <Mail className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">12matienzo@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lucca-nicol%C3%A1s-matienzo-293682195/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-8 py-4 rounded-xl hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 group"
          >
            <FaLinkedin className="group-hover:scale-110 transition-transform" size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="tel:+5493814120331"
            className="flex items-center justify-center gap-3 bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 group"
          >
            <Phone className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">+54 9 3814 12-0331</span>
          </a>

          <a
            href="https://github.com/LuccaMatienzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-8 py-4 rounded-xl hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
          >
            <FaGithub className="group-hover:scale-110 transition-transform" size={24} />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

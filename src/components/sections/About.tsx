"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import Section from "../ui/Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre-mi" title={t.about.sectionTitle} className="pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Photo and Stats */}
        <div className="lg:col-span-4 flex flex-col space-y-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative self-start"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/profile.jpg" 
                alt="Lucca Nicolás Matienzo" 
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 400px, 500px"
                quality={100}
                priority
              />
            </div>
            {/* Badge overlapping bottom center */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-2 rounded-md whitespace-nowrap shadow-lg">
              {t.about.badge}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 pt-4"
          >
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">{t.about.stats.roleLabel}</p>
              <p className="font-semibold text-foreground">{t.about.stats.roleValue}</p>
            </div>
            <div className="w-[30%] h-px bg-foreground/10"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">{t.about.stats.locationLabel}</p>
              <p className="font-semibold text-foreground">{t.about.stats.locationValue}</p>
            </div>
            <div className="w-[30%] h-px bg-foreground/10"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">{t.about.stats.experienceLabel}</p>
              <p className="font-semibold text-foreground">{t.about.stats.experienceValue}</p>
            </div>
            <div className="w-[30%] h-px bg-foreground/10"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">{t.about.stats.educationLabel}</p>
              <p className="font-semibold text-foreground">{t.about.stats.educationValue}</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Title, Bio, Buttons */}
        <div className="lg:col-span-8 flex flex-col items-start text-left pt-2 lg:pt-0">
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8"
          >
            {t.about.bio.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 space-y-6 mb-10 leading-relaxed"
          >
            <p dangerouslySetInnerHTML={{ __html: t.about.bio.p1 }}></p>
            <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t.about.bio.p2 }}></p>
            <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t.about.bio.p3 }}></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="/cv_lucca_matienzo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-primary text-background px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              <span>{t.about.buttons.downloadCV}</span>
              <Download size={18} />
            </a>
            <a href="#contacto" className="flex items-center space-x-2 bg-foreground/5 border border-foreground/10 text-foreground px-8 py-3 rounded-full font-semibold hover:bg-foreground/10 transition-colors">
              <span>{t.about.buttons.talk}</span>
            </a>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}

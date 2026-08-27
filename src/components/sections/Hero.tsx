"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col min-h-[80vh]">
        
        <div className="flex-grow flex flex-col justify-center">
          {/* Name & Short Description row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm text-foreground/80 font-medium font-mono">
              <h2 className="text-foreground font-bold tracking-wide">
                {t.hero.titleName}
              </h2>
              <span className="hidden md:inline-block text-foreground/30">—</span>
              <p className="text-foreground/60">
                {t.hero.titleRole}
              </p>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mb-12"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-foreground tracking-tighter leading-[1.05]">
              {t.hero.headlinePart1}{" "}
              <span className="text-foreground">{t.hero.headlinePart2}</span>{" "}
              {t.hero.headlinePart3}{" "}
              <span className="text-foreground">{t.hero.headlinePart4}</span>{" "}
              <br className="hidden md:block" />
              <span className="text-primary">{t.hero.headlinePart5}</span>
            </h1>
          </motion.div>

          {/* Description & Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {t.hero.description}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 lg:justify-end"
            >
              <a href="#contacto" className="bg-primary text-background px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                {t.hero.buttons.workTogether}
              </a>
              <a href="#experiencia" className="bg-transparent border border-foreground text-foreground px-6 py-3 rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors">
                {t.hero.buttons.viewExperience}
              </a>
              <a href="/cv_lucca_matienzo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors pl-2">
                {t.hero.buttons.downloadCV} <span className="text-xl leading-none">↓</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 mt-auto border-t border-foreground/10"
        >
          {t.hero.stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-foreground mb-1">{stat.value}</span>
              <span className="text-xs md:text-sm font-mono text-foreground/60">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

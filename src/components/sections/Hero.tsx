"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Name & Short Description row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm md:text-base text-foreground/80 font-medium">
            <h2 className="text-primary font-bold tracking-wide">
              {t.hero.titleName}
            </h2>
            <span className="hidden md:inline-block text-foreground/30">—</span>
            <p>
              {t.hero.titleRole}
            </p>
          </div>
        </motion.div>
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[1.1] mb-8">
            {t.hero.headlinePart1}{" "}
            <span className="text-primary/70">{t.hero.headlinePart2}</span>{" "}
            {t.hero.headlinePart3}{" "}
            <span className="text-foreground">{t.hero.headlinePart4}</span>{" "}
            <br className="hidden md:block" />
            <span className="text-primary">{t.hero.headlinePart5}</span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
}

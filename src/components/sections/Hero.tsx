"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-sm md:text-base font-medium text-foreground/70 mb-8 border-b border-white/10 pb-4 w-full"
        >
          <span className="font-semibold text-foreground tracking-wide">Lucca Nicolás Matienzo</span>
          <span className="hidden sm:inline">—</span>
          <span>Computer Engineer | IT Infrastructure & Networking | Full-Stack Developer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl"
        >
          Construyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">software</span><br /> 
          y diseño infraestructura<br />
          IT robusta.
        </motion.h1>
      </div>
    </section>
  );
}

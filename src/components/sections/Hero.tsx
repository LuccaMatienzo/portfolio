"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-sm md:text-base font-medium text-foreground/70 mb-12 border-b border-white/10 pb-4 w-full"
        >
          <span className="font-semibold text-foreground tracking-wide">Lucca Nicolás Matienzo</span>
          <span className="hidden sm:inline">—</span>
          <span>Computer Engineer | IT Infrastructure & Networking | Full-Stack Developer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.05]"
        >
          Construyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">software</span><br /> 
          y diseño infraestructura<br />
          IT robusta.
        </motion.h1>
      </div>

      {/* Metrics Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-6 md:px-12 mt-auto pt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10 text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">UNT</h3>
            <p className="text-sm text-foreground/60 mt-1 uppercase tracking-wider font-medium">Ingeniería en Computación</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center md:justify-start gap-2">
              <Briefcase size={28} /> Pro
            </h3>
            <p className="text-sm text-foreground/60 mt-1 uppercase tracking-wider font-medium">Infraestructura & Redes</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
              <Terminal size={28} /> Full
            </h3>
            <p className="text-sm text-foreground/60 mt-1 uppercase tracking-wider font-medium">Stack Developer</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">ES / EN</h3>
            <p className="text-sm text-foreground/60 mt-1 uppercase tracking-wider font-medium">Bilingüe Profesional</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

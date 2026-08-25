"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8"
        >
          <Code2 size={18} className="text-primary" />
          <span className="text-sm font-medium tracking-wide">Desarrollador Web Full Stack</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Construyendo <span className="text-primary">experiencias</span><br /> digitales excepcionales.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10"
        >
          Hola, soy Lucca Matienzo. Especializado en crear aplicaciones web rápidas, escalables y seguras utilizando tecnologías modernas como Next.js, TypeScript y PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="#proyectos" className="bg-primary text-background px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Ver Proyectos
          </Link>
          <Link href="#contacto" className="glass px-8 py-3 rounded-md font-semibold hover:bg-white/5 transition-colors">
            Contactarme
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground/50"
      >
        <Link href="#sobre-mi">
          <ArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
}

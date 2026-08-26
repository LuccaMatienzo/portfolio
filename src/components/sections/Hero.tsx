"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (8 columns) */}
          <div className="lg:col-span-8 order-2 lg:order-1 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-sm md:text-base font-medium text-foreground/70 mb-8 border-b border-white/10 pb-4 w-full"
            >
              <span className="font-semibold text-foreground">Lucca Nicolás Matienzo</span>
              <span className="hidden sm:inline">—</span>
              <span className="hidden sm:inline">Computer Engineer | IT Infrastructure & Networking | Full-Stack Developer</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
            >
              Ingeniería en <br className="hidden md:block"/> Computación aplicada a <br className="hidden md:block"/> la <span className="bg-primary/20 text-primary px-2">resolución de problemas.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-10 space-y-4"
            >
              <p>
                Me motiva explorar continuamente distintas áreas de la tecnología, aprender de cada experiencia y aportar valor en proyectos que representen un verdadero desafío.
              </p>
              <p>
                Mi experiencia actual se centra en la ingeniería de proyectos e infraestructura de red. Además, mantengo un fuerte interés en el desarrollo de software (área en la que desarrollé mi tesis de grado de cero a despliegue), la Inteligencia Artificial y las automatizaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <Link href="#contacto" className="bg-primary text-background px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Trabajemos juntos
              </Link>
              <Link href="#experiencia" className="text-foreground hover:text-primary transition-colors font-medium border-b border-foreground/30 hover:border-primary pb-1">
                Ver mi experiencia
              </Link>
              <a href="/cv_lucca_matienzo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors group">
                <span className="font-medium border-b border-transparent group-hover:border-foreground pb-1">Descargar CV</span>
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Profile Image (4 columns) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <Image 
                src="/profile.jpg" 
                alt="Lucca Nicolás Matienzo" 
                fill
                className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-background/50 shadow-2xl z-10"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Metrics Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-6 md:px-12 mt-20"
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

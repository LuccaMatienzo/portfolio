"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="sobre-mi" title="00 sobre mí" className="pt-0">
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
                sizes="(max-width: 768px) 224px, 256px"
                priority
              />
            </div>
            {/* Badge overlapping bottom center */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-2 rounded-md whitespace-nowrap shadow-lg">
              abierto a trabajar
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pt-4"
          >
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">Rol Actual</p>
              <p className="font-semibold text-foreground">Full Stack Developer & IT Infrastructure</p>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">Ubicación</p>
              <p className="font-semibold text-foreground">Tucumán, Argentina</p>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">Experiencia</p>
              <p className="font-semibold text-foreground">+2 años profesionales</p>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div>
              <p className="text-xs text-foreground/50 tracking-widest uppercase mb-1">Formación</p>
              <p className="font-semibold text-foreground">Ing. en Computación (UNT)</p>
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
            Soy Lucca Matienzo
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 space-y-6 mb-10 leading-relaxed"
          >
            <p>
              Ingeniero en Computación y Full Stack Developer. No solo escribo código: diseño la solución, la construyo y me hago cargo de que corra bien en producción.
            </p>
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Ingeniero en Computación</strong> graduado en la UNT. Me esfuerzo por mantenerme continuamente informado y actualizado.
            </p>
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Full Stack Developer & Infraestructura IT</strong> con más de dos años de <strong className="text-foreground">experiencia laboral</strong>. No solo desarrollo: también <strong className="text-foreground">diseño y opero la infraestructura de red</strong>, asegurando el rendimiento y la escalabilidad de cada proyecto tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="/cv_lucca_matienzo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-primary text-background px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              <span>Descargar CV</span>
              <Download size={18} />
            </a>
            <a href="#contacto" className="flex items-center space-x-2 bg-white/5 border border-white/10 text-foreground px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              <span>Hablemos</span>
            </a>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}

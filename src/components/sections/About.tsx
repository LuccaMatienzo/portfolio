"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="sobre-mi" className="pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-foreground/80 max-w-3xl mb-8 space-y-4"
          >
            <p>
              Mi experiencia se centra en la ingeniería de proyectos e infraestructura de red, abarcando desde consultoría técnica hasta el despliegue de redes.
            </p>
            <p>
              En paralelo, desarrollo software Full Stack, automatizaciones e integro Inteligencia Artificial para optimizar procesos y resolver problemas complejos en entornos productivos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <a href="/cv_lucca_matienzo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-primary text-background px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <span>Descargar CV</span>
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <Image 
              src="/profile.jpg" 
              alt="Lucca Nicolás Matienzo" 
              fill
              className="object-cover rounded-full transition-transform duration-500 hover:scale-105 border-4 border-background/50 shadow-2xl z-10"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

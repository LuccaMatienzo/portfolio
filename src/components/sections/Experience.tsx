"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Section from "../ui/Section";

const experiences = [
  {
    id: 1,
    role: "Ingeniero de Proyectos e Infraestructura de Redes",
    company: "SISTELCO S.R.L.",
    logo: "/sistelco.png",
    date: "Actualidad",
    location: "Tucumán, Argentina",
    description: "Liderazgo y ejecución de proyectos integrales de infraestructura. Diseño de arquitectura de redes, consultoría técnica preventa, elaboración de propuestas técnicas y resolución de incidencias.",
    tags: ["Consultoría Preventa", "TCP/IP", "Fibra Óptica", "CCTV IP", "Telefonía IP", "Gestión de Proyectos", "Gestión de Activos IT"],
  },
  {
    id: 2,
    role: "Técnico en Mesa de Ayuda IT",
    company: "ipsst",
    logo: "/ipsst.png",
    date: "Experiencia Previa",
    location: "Tucumán, Argentina",
    description: "Soporte técnico integral y gestión de incidentes. Administración de identidades y accesos (IAM), uso avanzado de GLPI y capacitación técnica continua a usuarios.",
    tags: ["Gestión de Incidentes", "Soporte Técnico", "IAM", "GLPI", "Comunicación", "Trabajo en Equipo"],
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experiencia" title="01 experiencia" subtitle="Trayectoria profesional y roles desempeñados.">
      <div ref={ref} className="max-w-4xl mx-auto space-y-16 relative">
        
        {/* Background static line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>
        
        {/* Animated filling line */}
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }} 
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary md:left-1/2 md:-translate-x-1/2 z-0" 
        />
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group"
          >
            {/* Dot/Logo */}
            <div className="absolute left-6 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-white shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] shrink-0 z-10 overflow-hidden">
              {exp.logo ? (
                <Image src={exp.logo} alt={exp.company} fill className="object-contain p-1" sizes="48px" />
              ) : (
                <Briefcase size={20} className="text-primary" />
              )}
            </div>
            
            {/* Card Content */}
            <div className="ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 md:p-8 rounded-xl border border-white/5 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10">
              <div className="flex flex-col space-y-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-6">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </Section>
  );
}

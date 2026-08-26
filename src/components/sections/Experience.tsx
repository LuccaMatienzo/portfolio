"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import Section from "../ui/Section";

const experiences = [
  {
    id: 1,
    role: "Ingeniero de Proyectos e Infraestructura de Redes",
    company: "SISTELCO S.R.L.",
    logo: "/sistelco.png",
    dateTag: "Abril 2026 - Actualidad",
    workType: "Presencial",
    description: "Liderazgo y ejecución de proyectos integrales de infraestructura. Diseño de arquitectura de redes, consultoría técnica preventa, elaboración de propuestas técnicas y resolución de incidencias.",
    tags: ["Consultoría Preventa", "TCP/IP", "Fibra Óptica", "CCTV IP", "Telefonía IP", "Gestión de Proyectos", "Gestión de Activos IT"],
  },
  {
    id: 2,
    role: "Técnico en Mesa de Ayuda IT",
    company: "Instituto de Previsión y Seguridad Social de Tucumán",
    logo: "/ipsst.png",
    dateTag: "Julio 2025 - Junio 2026",
    workType: "Presencial",
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
    <Section id="experiencia" title="02 experiencia" subtitle="Trayectoria profesional y roles desempeñados.">
      <div ref={ref} className="max-w-4xl mx-auto space-y-12 relative pt-8 pb-12 pl-6 sm:pl-12">

        {/* Background static line */}
        <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 rounded-full"></div>

        {/* Animated filling line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-6 sm:left-12 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2 z-0 rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start group"
          >
            {/* Dot/Logo Container on the line */}
            <div className="absolute -left-6 sm:-left-12 -translate-x-1/2 mt-4 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-background bg-white shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-10 overflow-hidden transition-transform duration-300 group-hover:scale-110">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              ) : (
                <Briefcase size={24} className="text-primary" />
              )}
            </div>

            {/* Card Content */}
            <div className="w-full ml-10 sm:ml-16 bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden">

              {/* Large faded number in background */}
              <div className="absolute top-4 right-6 text-7xl font-bold text-white/5 select-none pointer-events-none">
                0{index + 1}
              </div>

              {/* Date & Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>{exp.dateTag}</span>
                <span className="text-primary/40 text-xs">|</span>
                <span className="text-foreground/70">{exp.workType}</span>
              </div>

              <div className="flex flex-col space-y-1 mb-5 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{exp.company}</h3>
                <h4 className="text-lg font-medium text-primary">{exp.role}</h4>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-foreground/80 hover:bg-white/10 transition-colors"
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

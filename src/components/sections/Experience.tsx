"use client";

import { motion } from "framer-motion";
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
  return (
    <Section id="experiencia" title="01 experiencia" subtitle="Trayectoria profesional y roles desempeñados.">
      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon / Logo */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative overflow-hidden">
              {exp.logo ? (
                <Image src={exp.logo} alt={exp.company} fill className="object-contain p-1" sizes="48px" />
              ) : (
                <Briefcase size={20} className="text-primary" />
              )}
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 md:p-8 rounded-xl border border-white/5 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5">
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

"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Server, Database, Code } from "lucide-react";
import Section from "../ui/Section";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Tesis de Grado: Desarrollo e Infraestructura",
    description: "Desarrollo completo de cero a despliegue productivo. Arquitectura diseñada para ser escalable, implementando buenas prácticas de ingeniería de software, automatización de procesos y optimización de recursos en la nube.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Placeholder
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Traefik", "CI/CD"],
    links: [
      { label: "Visitar Landing", url: "https://disfracesly.com.ar/" },
      { label: "Admin", url: "https://disfracesly.com.ar/admin" }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Sistema de Gestión de Activos IT (Ejemplo)",
    description: "Plataforma interna para el seguimiento y mantenimiento preventivo de infraestructura de red. Integración con GLPI y herramientas de monitoreo en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder
    tags: ["Python", "Vue.js", "MySQL", "API REST"],
    links: [
      { label: "Ver Demo", url: "#" }
    ],
    featured: false
  }
];

export default function Projects() {
  return (
    <Section id="proyectos" title="03 Proyectos" subtitle="Proyectos en producción y arquitectura de software.">
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 glass shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
              {project.featured && (
                <span className="text-primary font-medium tracking-wider text-sm uppercase">
                  Proyecto Destacado
                </span>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                {project.title}
              </h3>

              <div className="glass p-6 rounded-xl border border-white/5 shadow-lg relative z-10 w-full lg:-ml-12 lg:mr-0">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 w-full lg:pl-12">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/70">
                    <Code size={14} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-4 w-full lg:pl-12">
                {project.links?.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 font-medium">
                    {link.label === "Admin" ? <Database size={20} /> : <ExternalLink size={20} />}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

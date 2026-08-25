import Section from "../ui/Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// Estos datos luego podrían venir de Supabase
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Escalar",
    description: "Plataforma de comercio electrónico con Next.js, Stripe y Tailwind. Optimización extrema de rendimiento y SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Sistema de Gestión",
    description: "Dashboard administrativo con roles y permisos complejos, gráficos en tiempo real y arquitectura de microservicios.",
    tags: ["React", "Node.js", "Express", "Supabase"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <Section id="proyectos" className="bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mis Proyectos</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project) => (
          <div key={project.id} className="glass rounded-2xl overflow-hidden group">
            {/* Imagen del proyecto (placeholder por ahora) */}
            <div className="h-48 md:h-64 bg-primary/10 relative overflow-hidden flex items-center justify-center border-b border-primary/20">
              <span className="text-foreground/30">Imagen / Preview</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                  <a href={project.demoUrl} className="bg-primary text-background p-2 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.repoUrl} className="glass p-2 rounded-full hover:scale-110 transition-transform">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-foreground/70 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

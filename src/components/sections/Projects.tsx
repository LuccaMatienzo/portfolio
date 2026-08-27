"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Section from "../ui/Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="proyectos" title={t.projects.sectionTitle} subtitle={t.projects.sectionSubtitle}>
      <div className="space-y-24">
        {t.projects.list.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-0 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-2xl">
                {/* Note: Project images are not in dictionary. Assuming same image. */}
                <Image 
                  src="/disfracesly.jpeg" 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Project Content */}
            <div className={`w-full lg:w-1/2 flex flex-col ${
              index % 2 !== 0 ? "lg:items-start lg:text-left lg:pr-12" : "lg:items-end lg:text-right lg:pl-12"
            }`}>
              
              <div className="text-primary font-mono text-sm mb-3 font-semibold tracking-wider">
                Featured Project
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {project.title}
              </h3>
              
              <div className={`bg-foreground/5 backdrop-blur-md p-6 rounded-xl border border-foreground/10 shadow-lg relative z-10 w-full ${
                index % 2 !== 0 ? "lg:-mr-12 lg:ml-0" : "lg:-ml-12 lg:mr-0"
              }`}>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className={`flex flex-wrap gap-3 mt-6 mb-8 text-sm font-mono text-foreground/60 ${
                index % 2 !== 0 ? "justify-start" : "justify-start lg:justify-end"
              }`}>
                {project.tags.map(tag => (
                  <span key={tag} className="hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`flex items-center gap-4 ${
                index % 2 !== 0 ? "justify-start" : "justify-start lg:justify-end"
              }`}>
                {project.links.map(link => (
                  <a 
                    key={link.url}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <span>{link.text}</span>
                    <ExternalLink size={20} />
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

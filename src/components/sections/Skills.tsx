"use client";

import { motion } from "framer-motion";
import { Server, Code2, Users, Database, Network, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";

const skillCategories = [
  {
    title: "Infraestructura y Redes",
    icon: <Network className="text-primary mb-4" size={32} />,
    skills: ["Arquitectura de Redes", "TCP/IP & DHCP", "Fibra Óptica", "Telefonía IP", "CCTV & Videovigilancia IP", "Gestión de Incidentes (GLPI)", "Soporte Técnico IT"],
  },
  {
    title: "Desarrollo e Ingeniería",
    icon: <Code2 className="text-primary mb-4" size={32} />,
    skills: ["Full-Stack Development", "HTML5 & CSS", "Vue.js & Node.js", "Python & Java", "C / C++", "Estructuras de Datos", "Bases de Datos Relacionales (SQL, MySQL)"],
  },
  {
    title: "Gestión y Soft Skills",
    icon: <Users className="text-primary mb-4" size={32} />,
    skills: ["Gestión de Proyectos IT", "Consultoría Técnica Preventa", "Resolución de Problemas", "Administración de Accesos (IAM)", "Trabajo en Equipo", "Comunicación Eficaz", "Inglés Técnico"],
  }
];

export default function Skills() {
  return (
    <Section id="stack" title="04 Stack" subtitle="Conocimientos técnicos, herramientas y habilidades de gestión.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass p-8 rounded-2xl border border-white/5 shadow-lg hover:border-primary/30 transition-colors"
          >
            {category.icon}
            <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>

            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">▹</span>
                  <span className="text-foreground/80 font-medium leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </Section>
  );
}

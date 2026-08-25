import Section from "../ui/Section";
import { Database, Layout, Server, Shield, Smartphone, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-primary mb-4" size={32} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & BD",
    icon: <Database className="text-primary mb-4" size={32} />,
    skills: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "Arquitectura",
    icon: <Server className="text-primary mb-4" size={32} />,
    skills: ["Microservicios", "Vercel", "Edge Functions", "Modularidad"],
  },
  {
    title: "Seguridad",
    icon: <Shield className="text-primary mb-4" size={32} />,
    skills: ["Rate Limiting", "DDoS Mitigation", "Auth Segura", "OWASP"],
  },
];

export default function Skills() {
  return (
    <Section id="habilidades">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Habilidades Técnicas</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
            <ul className="space-y-2 text-center text-foreground/70">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

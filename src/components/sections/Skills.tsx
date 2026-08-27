"use client";

import { motion } from "framer-motion";
import { Server, Layout, PenTool, CheckCircle2 } from "lucide-react";
import Section from "../ui/Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  // Helper function to get icon based on category index
  const getIconForCategory = (index: number) => {
    switch(index) {
      case 0: return <Layout className="w-10 h-10 text-primary mb-6" />;
      case 1: return <Server className="w-10 h-10 text-primary mb-6" />;
      default: return <PenTool className="w-10 h-10 text-primary mb-6" />;
    }
  };

  return (
    <Section id="stack" title={t.skills.sectionTitle} subtitle={t.skills.sectionSubtitle}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {t.skills.categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Background glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl"></div>
            
            {getIconForCategory(index)}
            <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </Section>
  );
}

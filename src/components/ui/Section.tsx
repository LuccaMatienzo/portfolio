"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 md:py-32 ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {(title || subtitle) && (
          <div className="mb-16">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-foreground/60 max-w-2xl">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-primary mt-6 rounded-full opacity-50"></div>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

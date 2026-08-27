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
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-lg md:text-xl font-medium text-primary tracking-wide">
                  {title}
                </h2>
                <div className="flex-grow h-px bg-foreground/10"></div>
              </div>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl font-bold text-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

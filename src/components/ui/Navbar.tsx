"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: t.nav.about, href: "#sobre-mi" },
    { name: t.nav.experience, href: "#experiencia" },
    { name: t.nav.projects, href: "#proyectos" },
    { name: t.nav.stack, href: "#stack" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-foreground/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#inicio" className="text-2xl font-bold text-primary tracking-tighter z-50">
          LM<span className="text-foreground">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 border-l border-foreground/10 pl-6">
            {/* Language Toggle */}
            <div className="flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/10">
              {(["ES", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                    lang === l ? "bg-primary text-background" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/10 text-foreground/70 hover:text-primary hover:border-primary/50 bg-foreground/5 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark")) 
                ? <Sun size={16} /> 
                : <Moon size={16} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden z-50">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/10 text-foreground/70 bg-foreground/5 transition-all"
          >
            {mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark")) 
              ? <Sun size={16} /> 
              : <Moon size={16} />
          }
          </button>
          <button
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full min-h-screen bg-background/95 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/10 mt-8">
              {(["ES", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-bold px-6 py-2 rounded-full transition-colors ${
                    lang === l ? "bg-primary text-background" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "sobre mí", href: "#sobre-mi" },
  { name: "experiencia", href: "#experiencia" },
  { name: "proyectos", href: "#proyectos" },
  { name: "stack", href: "#stack" },
  { name: "contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("ES");

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-foreground/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#inicio" className="text-2xl font-bold text-primary tracking-tighter">
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
              {["ES", "EN"].map((l) => (
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
        <div className="flex items-center space-x-4 md:hidden">
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl shadow-xl flex flex-col items-center py-6 space-y-6 md:hidden border-b border-foreground/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/10 mt-4">
            {["ES", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${
                  lang === l ? "bg-primary text-background" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

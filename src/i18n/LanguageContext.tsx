"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { es, Dictionary } from "./dictionaries/es";
import { en } from "./dictionaries/en";

type Language = "ES" | "EN";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ES");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Try to load language preference from localStorage
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang && (savedLang === "ES" || savedLang === "EN")) {
      setLang(savedLang);
    } else {
      // Default to browser language if available and no preference saved
      const browserLang = navigator.language.startsWith("en") ? "EN" : "ES";
      setLang(browserLang);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferred-language", newLang);
  };

  // Prevent hydration mismatch by defaulting to ES on first render, then updating
  const t = lang === "EN" && mounted ? en : es;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

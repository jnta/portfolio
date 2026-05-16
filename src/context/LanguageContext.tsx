"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "PT" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("PT");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang === "PT" || savedLang === "EN") {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang === "PT" ? "pt-BR" : "en";
    } else {
      document.documentElement.lang = "pt-BR";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang === "PT" ? "pt-BR" : "en";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

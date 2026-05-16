"use client";

import { useState } from "react";
import { translations } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <a className="font-display-lg text-2xl md:text-3xl text-primary tracking-tighter hover:opacity-80 transition-opacity duration-300" href="#hero">
          Jônata Albuquerque
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {t.navLinks.map((link) => (
            <a
              key={link.label}
              className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-2 mr-6 border-r border-outline-variant pr-6">
            <button
              className={`font-technical-label text-[10px] hover:text-on-surface transition-colors ${
                language === "PT" ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
              onClick={() => setLanguage("PT")}
            >
              PT
            </button>
            <span className="text-outline-variant text-[10px]">|</span>
            <button
              className={`font-technical-label text-[10px] hover:text-on-surface transition-colors ${
                language === "EN" ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
          </div>
          <div className="flex items-center space-x-4 pl-4 border-l border-outline-variant">
            <a
              href={`/resume?lang=${language}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-label text-technical-label uppercase tracking-widest text-primary hover:underline underline-offset-4 cursor-pointer active:opacity-70"
            >
              {t.topNav.resume}{" "}
              <span className="material-symbols-outlined align-middle ml-1 text-sm">
                download
              </span>
            </a>
          </div>
        </nav>
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant px-margin-mobile py-6 flex flex-col space-y-6">
          {t.navLinks.map((link) => (
            <a
              key={link.label}
              className="font-technical-label text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-outline-variant">
            <button
              className={`font-technical-label text-xs ${
                language === "PT" ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
              onClick={() => {
                setLanguage("PT");
                setIsOpen(false);
              }}
            >
              PT
            </button>
            <span className="text-outline-variant text-xs">|</span>
            <button
              className={`font-technical-label text-xs ${
                language === "EN" ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
              onClick={() => {
                setLanguage("EN");
                setIsOpen(false);
              }}
            >
              EN
            </button>
          </div>
          <div className="pt-2">
            <a
              href={`/resume?lang=${language}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-label text-xs uppercase tracking-widest text-primary flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer"
            >
              {t.topNav.resume}{" "}
              <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

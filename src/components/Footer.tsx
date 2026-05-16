"use client";

import { translations } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 md:w-1/2">
            <div className="font-technical-label text-technical-label text-primary tracking-tighter text-xl uppercase">
              {t.footerData.brand}
            </div>
            <div className="font-technical-label text-technical-label text-outline leading-relaxed">
              {t.footerData.infoLine1}
              <span className="text-on-surface">{t.footerData.infoVersion}</span>
              <br />
              {t.footerData.infoLine2}
            </div>
            <div className="flex items-center space-x-3 text-primary bg-primary-container/20 px-4 py-2 border border-primary/20 inline-flex">
              <span
                className="material-symbols-outlined text-sm animate-pulse"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                terminal
              </span>
              <span className="font-technical-label text-technical-label">
                {t.footerData.systemStatus}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-16 gap-8 md:w-1/2 justify-end">
            <div className="flex flex-col space-y-4 font-technical-value text-technical-value">
              <span className="font-technical-label text-[10px] text-outline uppercase tracking-[0.2em] mb-2">
                {t.footerSection.connect}
              </span>
              {t.footerData.connectLinks.map((link) => {
                const isEmail = link.href === "#email";
                return (
                  <a
                    key={link.label}
                    className="text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline decoration-primary underline-offset-8"
                    href={link.href}
                    {...(!isEmail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col space-y-4 font-technical-value text-technical-value">
              <span className="font-technical-label text-[10px] text-outline uppercase tracking-[0.2em] mb-2">
                {t.footerSection.navigation}
              </span>
              {t.footerData.navLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

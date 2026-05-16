"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function EmailModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#email");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const close = () => {
    window.location.hash = "";
    setIsOpen(false);
    setSubject("");
    setMessage("");
  };

  if (!isOpen) return null;

  const t = {
    PT: {
      title: "Nova Mensagem",
      subtitle: "jonata.a@outlook.com",
      subjectLabel: "Assunto",
      messageLabel: "Sua mensagem",
      cancel: "Cancelar",
      send: "Escrever Email",
    },
    EN: {
      title: "New Message",
      subtitle: "jonata.a@outlook.com",
      subjectLabel: "Subject",
      messageLabel: "Your message",
      cancel: "Cancel",
      send: "Compose Email",
    },
  }[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-surface border border-outline-variant p-8 shadow-2xl">
        <button
          onClick={close}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="mb-6">
          <h2 className="font-display-sm text-3xl text-on-surface mb-1">
            {t.title}
          </h2>
          <div className="font-technical-label text-xs text-primary uppercase tracking-wider">
            {t.subtitle}
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <label className="block font-technical-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2">
              {t.subjectLabel}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant p-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md"
            />
          </div>
          <div>
            <label className="block font-technical-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2">
              {t.messageLabel}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-surface-container border border-outline-variant p-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md resize-none"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 pt-4 border-t border-outline-variant/30">
            <button
              onClick={close}
              className="font-technical-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors px-4 py-3"
            >
              {t.cancel}
            </button>
            <a
              href={`mailto:jonata.a@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
              onClick={() => setTimeout(close, 50)}
              className="font-technical-label text-xs uppercase tracking-widest bg-primary text-on-primary hover:bg-primary/90 transition-colors px-6 py-3 flex items-center space-x-2 cursor-pointer"
            >
              <span>{t.send}</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

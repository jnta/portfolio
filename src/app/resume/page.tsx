"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { translations, Language } from "@/data/mockData";

function ResumeContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang");
  const lang: Language = langParam === "EN" ? "EN" : "PT";
  const t = translations[lang];

  useEffect(() => {
    // Small timeout to ensure everything is rendered and styles applied
    const timeout = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            margin: 0;
          }
        }
      `}} />
      <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-12 print:p-16 print:max-w-none">
        
        {/* Header */}
        <header className="mb-8 border-b-2 border-black pb-6 flex justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Jônata Albuquerque</h1>
            <h2 className="text-xl text-gray-700 font-medium">{t.heroData.roleLabel}</h2>
          </div>
          
          <div className="text-sm flex flex-col items-end space-y-1">
            <a href="mailto:jonata.a@outlook.com" className="text-black hover:underline">
              jonata.a@outlook.com
            </a>
            <a href="tel:+5561974038781" className="text-black hover:underline">
              +55 61 97403-8781
            </a>
            <a href="https://www.linkedin.com/in/jonataalbuquerque/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              linkedin.com/in/jonataalbuquerque
            </a>
            <a href="https://github.com/jnta" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              github.com/jnta
            </a>
          </div>
        </header>

        {/* Bio */}
        <section className="mb-10">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
            {lang === "EN" ? "About" : "Sobre"}
          </h3>
          <p className="text-base leading-relaxed text-gray-800">
            {t.heroData.description}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-5">
            {t.experienceSection.experience}
          </h3>
          <div className="space-y-8">
            {t.careerTimeline.map((job) => (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold">{job.role}</h4>
                  <span className="text-sm text-gray-600 font-medium">{job.period}</span>
                </div>
                <div className="text-sm text-gray-700 font-medium mb-2">{job.company}{job.location ? ` • ${job.location}` : ""}</div>
                <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line mb-3">
                  {job.description}
                </p>
                <div className="text-xs text-gray-600">
                  <span className="font-semibold">Tech:</span> {job.techStack.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-5">
            {t.experienceSection.academic}
          </h3>
          <div className="space-y-4">
            {t.academicTimeline.map((edu) => (
              <div key={edu.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold">{edu.course}</h4>
                  <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
                </div>
                <div className="text-sm text-gray-700">{edu.institution}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
    </>
  );
}

export default function ResumePage() {
  return (
    <Suspense fallback={<div className="p-8 text-black bg-white min-h-screen">Loading...</div>}>
      <ResumeContent />
    </Suspense>
  );
}

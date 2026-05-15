"use client";

import { useEffect } from "react";
import { heroData } from "@/data/mockData";

export default function AnimatedHero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rings = document.querySelectorAll(".compass-ring, [data-speed]");
      const heroElement = document.getElementById("hero");
      
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;

        if (scrollPosition < heroHeight + 200) {
          rings.forEach((r) => {
            const ring = r as HTMLElement;
            const speed = parseFloat(ring.getAttribute("data-speed") || "0");
            const rotation = scrollPosition * speed * 0.5;
            const translateY = scrollPosition * 0.2;
            const opacity = 1 - scrollPosition / (heroHeight * 0.8);

            ring.style.transform = `rotate(${rotation}deg) translateY(${translateY}px) scale(${
              1 + scrollPosition / 2000
            })`;
            ring.style.opacity = Math.max(0, opacity).toString();
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-outline-variant"
      id="hero"
    >
      <div className="absolute inset-0 z-0 opacity-10 industrial-grid"></div>
      <div className="compass-center hidden lg:block z-0" id="compass-bg">
        <div
          className="compass-ring w-[600px] h-[600px] border-dashed"
          data-speed="0.2"
        ></div>
        <div className="compass-ring w-[500px] h-[500px]" data-speed="-0.3">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-primary/20"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-primary/20"></div>
        </div>
        <div
          className="compass-ring w-[400px] h-[400px] border-2 border-primary/10"
          data-speed="0.5"
        ></div>
        <div
          className="compass-ring w-[300px] h-[300px] border-dotted"
          data-speed="-0.1"
        ></div>
        <div
          className="compass-ring w-[200px] h-[200px] bg-primary/5 blur-3xl"
          data-speed="0"
        ></div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full font-technical-label text-[10px] text-primary/40 uppercase tracking-tighter"
          data-speed="0.1"
        >
          N // 0.00°
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full font-technical-label text-[10px] text-primary/40 uppercase tracking-tighter"
          data-speed="0.1"
        >
          S // 180.00°
        </div>
      </div>
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full grid lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 flex flex-col justify-center py-16">
          <div className="mb-6 flex items-center space-x-3">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="font-technical-label text-technical-label text-primary uppercase tracking-[0.3em]">
              {heroData.roleLabel}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg lg:text-[72px] lg:leading-[80px] mb-8 text-on-surface max-w-4xl drop-shadow-2xl">
            {heroData.titlePart1}
            <span className="text-primary italic">
              {heroData.titleHighlight}
            </span>
            {heroData.titlePart2}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-12 leading-relaxed bg-surface/40 backdrop-blur-sm p-4 -ml-4 rounded-DEFAULT">
            {heroData.description}
          </p>
          <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-outline-variant/30">
            {heroData.links.map((link) => (
              <a
                key={link.label}
                className="flex items-center space-x-2 group"
                href={link.href}
              >
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="font-technical-label text-technical-label text-outline group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-technical-label text-technical-label uppercase tracking-widest satin-glow hover:opacity-90 transition-all">
              {heroData.primaryAction}
            </button>
            <div className="flex items-center space-x-3 text-outline">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span className="font-technical-label text-technical-label">
                {heroData.certification}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-end space-y-4 pb-20"></div>
      </div>
    </section>
  );
}

import { experienceCases, githubProjects } from "@/data/mockData";

export default function ExperienceSection() {
  return (
    <section
      className="py-24 border-y border-outline-variant relative overflow-hidden bg-surface-container-lowest"
      id="experience"
    >
      <div className="absolute inset-0 z-0 opacity-5 industrial-grid"></div>
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <div>
            <span className="font-technical-label text-technical-label text-primary uppercase tracking-widest block mb-4">
              Portfolio
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl">Engineering Cases</h2>
          </div>
          <div className="font-technical-value text-outline">
            SELECTED_WORKS_V24
          </div>
        </div>
        <div className="flex flex-col gap-16 mb-24">
          {experienceCases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`group relative bg-surface border border-outline-variant overflow-hidden flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden relative min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={caseItem.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={caseItem.image}
                />
              </div>
              <div className="p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline-lg text-2xl md:text-3xl">
                    {caseItem.title}
                  </h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    arrow_outward
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-8">
                  {caseItem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container font-technical-label text-[10px] uppercase border border-outline-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-primary px-3 py-1 font-technical-label text-[10px] text-on-primary">
                {caseItem.id}
              </div>
            </div>
          ))}
        </div>

        <div id="open-source">
          <div className="flex items-center space-x-4 mb-8">
            <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface">Open Source</h3>
            <div className="h-[1px] flex-grow bg-outline-variant/50"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                className="p-8 bg-surface-container border border-outline-variant hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center space-x-2 text-outline mb-6">
                  <span className="material-symbols-outlined text-sm">
                    terminal
                  </span>
                  <span className="font-technical-label text-technical-label">
                    GITHUB_REPO / {project.id}
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl md:text-2xl mb-4 text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8">
                  {project.description}
                </p>
                <a
                  className="font-technical-label text-technical-label text-primary uppercase flex items-center hover:underline"
                  href={project.href}
                >
                  View Source{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    code
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

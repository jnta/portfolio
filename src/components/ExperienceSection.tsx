import { careerTimeline, academicTimeline, githubProjects } from "@/data/mockData";

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
              Career Timeline
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl">Experience</h2>
          </div>
          <div className="font-technical-value text-outline">
            SYS_RECORD_V26
          </div>
        </div>

        <div className="mb-24">
          <div className="relative border-l border-outline-variant ml-2 md:ml-4 space-y-16 pb-8">
            {careerTimeline.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-16 group">
                {/* Node dot */}
                <div className="absolute w-3 h-3 bg-surface border-2 border-primary -left-[6.5px] top-2 transition-colors group-hover:bg-primary"></div>
                {/* Line extension on hover (optional tech detail) */}
                <div className="absolute w-8 h-[1px] bg-primary/0 group-hover:bg-primary/50 top-[13px] left-0 transition-colors hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface">
                    {item.company}
                  </h3>
                  <span className="font-technical-label text-primary uppercase tracking-wider text-sm">
                    {item.role}
                  </span>
                </div>
                
                <div className="font-technical-value text-outline text-sm mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  {item.period}
                </div>
                
                <div className="font-body-md text-on-surface-variant mb-8 whitespace-pre-line max-w-4xl">
                  {item.description}
                </div>
                
                <div className="flex flex-wrap gap-2 max-w-4xl">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface-container font-technical-label text-[10px] uppercase border border-outline-variant text-on-surface hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface">Academic</h3>
            <div className="h-[1px] flex-grow bg-outline-variant/50"></div>
          </div>
          <div className="relative border-l border-outline-variant ml-2 md:ml-4 space-y-12 pb-8">
            {academicTimeline.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-16 group">
                <div className="absolute w-3 h-3 bg-surface border-2 border-outline -left-[6.5px] top-2 transition-colors group-hover:border-primary"></div>
                
                <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface mb-2">
                  {item.institution}
                </h3>
                <div className="font-body-md text-on-surface-variant mb-3">
                  {item.course}
                </div>
                <div className="font-technical-value text-outline text-sm">
                  {item.period}
                </div>
              </div>
            ))}
          </div>
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

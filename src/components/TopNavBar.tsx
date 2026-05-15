import { navLinks } from "@/data/mockData";

export default function TopNavBar() {
  return (
    <header className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <div className="font-display-lg text-headline-lg text-primary tracking-tighter">
          Jônata Albuquerque
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-2 mr-6 border-r border-outline-variant pr-6">
            <button className="font-technical-label text-[10px] text-primary hover:text-on-surface transition-colors font-bold">
              PT
            </button>
            <span className="text-outline-variant text-[10px]">|</span>
            <button className="font-technical-label text-[10px] text-on-surface-variant hover:text-on-surface transition-colors">
              EN
            </button>
          </div>
          <div className="flex items-center space-x-4 pl-4 border-l border-outline-variant">
            <button className="font-technical-label text-technical-label uppercase tracking-widest text-primary hover:underline underline-offset-4 cursor-pointer active:opacity-70">
              Resume{" "}
              <span className="material-symbols-outlined align-middle ml-1 text-sm">
                download
              </span>
            </button>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-DEFAULT font-technical-label text-technical-label uppercase tracking-widest satin-glow hover:bg-primary-fixed hover:text-on-primary-fixed transition-all">
              Hire
            </button>
          </div>
        </nav>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

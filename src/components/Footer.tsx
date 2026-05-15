import { footerData } from "@/data/mockData";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 md:w-1/2">
            <div className="font-technical-label text-technical-label text-primary tracking-tighter text-xl uppercase">
              {footerData.brand}
            </div>
            <div className="font-technical-label text-technical-label text-outline leading-relaxed">
              {footerData.infoLine1}
              <span className="text-on-surface">{footerData.infoVersion}</span>
              <br />
              {footerData.infoLine2}
            </div>
            <div className="flex items-center space-x-3 text-primary bg-primary-container/20 px-4 py-2 border border-primary/20 inline-flex">
              <span
                className="material-symbols-outlined text-sm animate-pulse"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                terminal
              </span>
              <span className="font-technical-label text-technical-label">
                {footerData.systemStatus}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-16 gap-8 md:w-1/2 justify-end">
            <div className="flex flex-col space-y-4 font-technical-value text-technical-value">
              <span className="font-technical-label text-[10px] text-outline uppercase tracking-[0.2em] mb-2">
                Connect
              </span>
              {footerData.connectLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline decoration-primary underline-offset-8"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-4 font-technical-value text-technical-value">
              <span className="font-technical-label text-[10px] text-outline uppercase tracking-[0.2em] mb-2">
                Navigation
              </span>
              {footerData.navLinks.map((link) => (
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

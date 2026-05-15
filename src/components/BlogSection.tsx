import { blogPosts } from "@/data/mockData";

export default function BlogSection() {
  return (
    <section className="py-24 bg-surface relative" id="blog">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 space-y-4 md:space-y-0">
          <h2 className="font-display-lg text-display-lg">Infantaria Tech</h2>
          <div className="flex items-center space-x-4">
            <span className="font-technical-label text-technical-label text-outline uppercase">
              Engineering Diary
            </span>
            <div className="hidden md:block h-[1px] w-24 bg-outline-variant"></div>
            <a
              className="text-primary font-technical-label text-technical-label uppercase hover:underline"
              href="#"
            >
              Substack Feed
            </a>
          </div>
        </div>
        <div className="mb-20 flex justify-center">
          <div className="p-1 bg-outline-variant/30 rounded-DEFAULT satin-glow border border-outline-variant">
            <iframe
              className="grayscale hover:grayscale-0 transition-all duration-500"
              frameBorder="0"
              height="320"
              scrolling="no"
              src="https://infantariatech.substack.com/embed"
              style={{
                border: "1px solid var(--color-outline-variant)",
                background: "#121414",
              }}
              width="480"
            ></iframe>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`p-8 border border-outline-variant bg-surface-container-lowest satin-glow flex flex-col h-full relative overflow-hidden group ${
                index === 0 ? "lg:col-span-12 lg:p-12" : "lg:col-span-6"
              }`}
            >
              <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                <span className="material-symbols-outlined text-[120px]">
                  {post.icon}
                </span>
              </div>
              <span className="font-technical-label text-technical-label text-primary mb-4 block">
                {post.id} {"//"} {post.date}
              </span>
              <h3 className={`font-headline-lg text-headline-lg mb-6 leading-tight group-hover:text-primary transition-colors ${
                index === 0 ? "lg:text-[40px] lg:leading-tight lg:max-w-3xl" : ""
              }`}>
                {post.title}
              </h3>
              <p className={`font-body-md text-on-surface-variant mb-8 flex-grow ${
                index === 0 ? "lg:max-w-2xl lg:text-lg" : ""
              }`}>
                {post.description}
              </p>
              <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                <span className="font-technical-value text-technical-value text-outline">
                  {post.readTime}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

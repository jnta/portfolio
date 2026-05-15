import TopNavBar from "@/components/TopNavBar";
import AnimatedHero from "@/components/AnimatedHero";
import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <AnimatedHero />
        <BlogSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}

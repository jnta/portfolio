import TopNavBar from "@/components/TopNavBar";
import AnimatedHero from "@/components/AnimatedHero";
import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";

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
      <EmailModal />
    </>
  );
}

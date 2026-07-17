import HeroSlider from "@/components/sections/HeroSlider";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSlider />
      <Logos />
      <Features />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </main>
  );
}
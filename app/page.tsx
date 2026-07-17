import HeroSlider from "@/components/sections/HeroSlider";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSlider />
      <Features />
      <Testimonials />
      <Contact />
      <CTA />
    </main>
  );
}
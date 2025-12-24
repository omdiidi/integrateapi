import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { ModularSolutions } from "@/components/sections/ModularSolutions";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ScaleSection } from "@/components/sections/ScaleSection";
import { CardCarousel } from "@/components/sections/CardCarousel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <ModularSolutions />
        <FeatureSplit />
        <ScaleSection />
        <CardCarousel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Insturctors from "@/components/Insturctors";
import Testimonialcards from "@/components/Testimonialcards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <Testimonialcards />
      <UpcomingWebinars/>
      <Insturctors/>
    </main>
  );
}

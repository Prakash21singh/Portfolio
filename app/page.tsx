import Skills from "@/components/shared/Skills";
import Hero from "@/components/shared/Hero";
import Offering from "@/components/shared/Offering";
import Testimonials from "@/components/shared/Testimonials";
import Project from "../components/shared/Project";
import Experience from "@/components/shared/Experience";

export default function Home() {
  return (
    <main className="w-full text-white bg-dark-1  h-full">
      <Hero />
      <Skills />
      <Offering />
      <Project />
      <Experience />
      <Testimonials />
    </main>
  );
}

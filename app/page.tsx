import Skills from "@/components/shared/Skills";
import Hero from "@/components/shared/Hero";
import Offering from "@/components/shared/Offering";
import Experience from "../components/shared/Experience";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <main className="w-full text-white bg-dark-1  h-full">
      <Hero />
      <Skills />
      <Offering />
      <Experience />
      <Testimonials />
    </main>
  );
}

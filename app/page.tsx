import { IconMailFilled } from "@tabler/icons-react";

import Link from "next/link";
import Technologies from "@/components/Technologies";
import { GitHub, Linkedin } from "@/techonologies";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div
      className="
      w-full
      mx-auto
      max-w-2xl
      border-primary-text 
      font-sans
      text-primary-text
      py-16
    "
    >
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-primary">Prakash</h1>
          <div className="flex items-center gap-2">
            <Link
              href="mailto:pk87096639@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <IconMailFilled size={30} fill="#f2f2f230" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/prakash21singh/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <Linkedin size={23} />
            </Link>
            <Link
              href="https://www.github.com/prakash21singh"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <GitHub size={26} />
            </Link>
          </div>
        </div>
        <p>
          Hey, <br /> I'm Prakash — a software developer and freelancer who
          builds scalable, modern web applications. I enjoy working across the
          stack, contributing to open source, and turning ideas into real-world
          products.
        </p>
      </div>
      <div className="w-full h-px bg-stone-800 my-4" />
      <Technologies />
      <div className="w-full h-px bg-stone-800 my-4" />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

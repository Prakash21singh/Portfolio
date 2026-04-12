import { GitHub, NextJS, Postgres, Prisma, Redis } from "@/techonologies";
import Image from "next/image";
import Link from "next/link";
import FadeImage from "./FadeImage";

const PROJECTS = [
  {
    title: "Syync",
    description:
      "Seamlessly move files across cloud providers without manual downloads.",
    details:
      "Built a multi-cloud data orchestration platform supporting Google Drive, Dropbox, and S3 with background job and queue based processing using Redis and BullMQ.",
    tech: [NextJS, Prisma, Postgres, Redis],
    live: "https://sync-pied.vercel.app",
    github: "https://github.com/Prakash21singh/syync_",
    image: "/sync.png",
  },
  {
    title: "Codora",
    description:
      "AI-powered documentation assistant that generates comprehensive documentation from codebases connected to your github.",
    details:
      "Developed an AI-powered documentation assistant that automatically generates comprehensive documentation from codebases connected to your GitHub repository.",
    tech: [NextJS, Prisma, Postgres, Redis, GitHub],
    live: "https://codora-git-main-prakashs-projects-29909feb.vercel.app/",
    github: "https://github.com/Prakash21singh/codora",
    image: "/codora.png",
  },
];
export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-2">Projects</h2>

      <p className="text-primary-text mb-6">
        A selection of projects where I focused on building scalable and
        real-world systems.
      </p>

      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className=" p-5 bg-primary-dark transition relative z-0 overflow-hidden"
          >
            <div className="absolute left-3/5 select-none -z-10 top-0  h-full w-96 bg-gradient-to-tl rotate-45 -skew-y-30 from-primary-dark/50 to-transparent">
              <FadeImage
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover mb-4 opacity-10"
              />
            </div>
            <h3 className="text-lg font-medium text-white z-10">
              {project.title}
            </h3>

            <p className="text-primary-text  mt-1">{project.description}</p>

            <p className="text-primary-text  mt-3">{project.details}</p>

            <div className="flex items-center justify-between z-10">
              <div className="flex gap-4 mt-4 text-sm">
                <Link
                  target="_blank"
                  href={project.live}
                  className="text-white hover:underline"
                >
                  Live
                </Link>
                <Link
                  target="_blank"
                  href={project.github}
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </Link>
              </div>

              <div className="flex gap-0.5">
                {project.tech.map((Tech, index) => (
                  <span
                    title={Tech.name}
                    key={index}
                    className="text-gray-400 bg-black/20 hover:bg-white/10 transition-all p-1 border border-stone-600 rounded"
                  >
                    <Tech key={index} size={16} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-stone-800 mt-8 mb-4" />
    </div>
  );
}

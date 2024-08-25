"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Cover } from "../ui/Cover";
import { PinContainer } from "../ui/CardPin";
import { projects } from "@/lib/constant";
import ReactIcon from "../icons/ReactIcon";

const Project = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render nothing on the server

  return (
    <section className="w-full relative min-h-screen" id="project">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        A small section of
        <br /> at{" "}
        <Cover className="">
          <p className="text-purple">Recent Projects</p>
        </Cover>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full max-w-7xl mx-auto mt-10">
        {projects.map((project, i) => (
          <div
            className="h-[40rem] w-full flex items-center justify-center  "
            key={project.name}>
            <PinContainer
              title={project.title}
              href={project.href}
              className=" w-[22rem] lg:w-[35rem] h-[30rem] border m-0">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full ">
                <Image
                  src={project.image}
                  alt="project-image"
                  key={project.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal text-ellipsis">
                  <span className="text-slate-500 text-ellipsis text-balance">
                    {project.description}
                  </span>
                </div>
                <div className="w-full p-3 relative flex">{project.stacks}</div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

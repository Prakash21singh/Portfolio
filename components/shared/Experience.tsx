"use client";
import React from "react";
import Image from "next/image";
import { Cover } from "../ui/Cover";
import { StickyScroll } from "../ui/StikcyScrollReveal";
import { content } from "@/lib/constant";

const Experience = () => {
  return (
    <section className="w-full h-screen">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing websites <br /> at{" "}
        <Cover className="">
          <p className="text-purple">warp speed</p>
        </Cover>
      </h1>
      <div className="w-full custom-scroll h-full ">
        <StickyScroll content={content} contentClassName="w-96" />
      </div>
    </section>
  );
};

export default Experience;

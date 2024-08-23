import React from "react";
import { BackgroundBeams } from "../ui/Backgroundbeam";
import { TextGenerateEffect } from "../ui/Textgenerate";

const Hero = () => {
  return (
    <div className="text-white h-auto ">
      <BackgroundBeams />
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center h-full">
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </p>
          <TextGenerateEffect
            words="Transforming ideas into Seamless User Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mt-2 font-light text-center text-md mx-4">
            Hi! I&apos;m Prakash, a Next.js Developer based in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

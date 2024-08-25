import React from "react";
import { BackgroundBeams } from "../ui/Backgroundbeam";
import { TextGenerateEffect } from "../ui/Textgenerate";
import { Button } from "../ui/Button";
import Link from "next/link";

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
          <Link href={"#expertise"} className="relative">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 cursor-pointer pointer-events-none">
              See my work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

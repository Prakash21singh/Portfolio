import React from "react";
import { CanvasRevealEffect } from "../ui/CanvasReveal";
import { CanvasRevealEffectDemo } from "../ui/CanvasRevealDemo";

const Skills = () => {
  return (
    <section className="h-screen">
      <h2 className="text-center text-[30px] md:text-4xl lg:text-5xl text-purple mb-10 uppercase font-semibold">
        Core skills
      </h2>
      <div className="flex justify-around items-center gap-5 ">
        <div className="w-[90%] h-96">
          <CanvasRevealEffectDemo key={"one"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

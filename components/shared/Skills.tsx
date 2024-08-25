import React from "react";
import { CanvasRevealEffect } from "../ui/CanvasReveal";
import { CanvasRevealEffectDemo } from "../ui/CanvasRevealDemo";

const Skills = () => {
  return (
    <section className="h-auto" id="expertise">
      <div className="flex justify-around items-center gap-5 h-full relative">
        <div className="w-[90%] ">
          <CanvasRevealEffectDemo key={"one"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

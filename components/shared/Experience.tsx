import React from "react";
import { FocusCards } from "../ui/FocusCard";
import { cards } from "@/lib/constant";

const Experience = () => {
  return (
    <section className="w-full p-5">
      <h1 className="text-center text-3xl lg:text-5xl text-purple">
        Experience
      </h1>
      <div className="w-full h-auto p-5 flex flex-col min-h-[80vh]">
        <div className="w-full border-y py-10 border-dark-1 flex flex-col sm:flex-row  justify-around">
          <div className="flex-1">
            <p className="text-4xl text-center  text-black-300">Rework AI</p>
          </div>
          <div className="w-full flex-1">
            <FocusCards cards={cards} />
          </div>
        </div>
        <div>Apna College</div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCard";
import { items, people } from "@/lib/constant";
import { AnimatedTooltip } from "../ui/Tooltip";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center my-3">
        <AnimatedTooltip items={people} />
      </div>
      <div className="w-full  p-5 lg:p-20">
        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="fast"
          className="p-5"
        />
      </div>
    </section>
  );
};

export default Testimonials;

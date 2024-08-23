import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCard";
import { items } from "@/lib/constant";

const Testimonials = () => {
  return (
    <section className="w-full ">
      <h1 className="text-3xl lg:text-5xl text-purple text-center">
        Testimonials
      </h1>
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

import React from "react";

export function GridBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.9] bg-grid-black/[1] relative flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(225, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(180deg, rgba(225, 255, 255, 0.2) 1px, transparent 1px)",
        backgroundSize: "30px 30px", // Increase this value to reduce the number of grids
      }}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/[1]  bg-white/[0.9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-xl sm:text-4xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </div>
    </div>
  );
}

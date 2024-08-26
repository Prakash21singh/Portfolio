"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasReveal";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Experienced in MongoDB for efficient database management."
          icon={<MongoIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-dark"
            colors={[[228, 0, 255]]}
          />
        </Card>
        <Card
          title="Skilled in Express for building robust web applications"
          icon={<ExpressIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-dark-600"
            colors={[[255, 0, 190]]}
          />
        </Card>
        <Card
          title="Expert in React, state management, hooks, and UI integration."
          icon={<ReactIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-dark-300"
            colors={[
              [115, 93, 165], // #735DA5
              [211, 197, 229],
            ]}
          />
        </Card>
        <Card
          title="Proficient in Node.js for server-side JavaScript development."
          icon={<NodeIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-dark-400"
            colors={[[167, 0, 255]]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[25rem] lg:h-[30rem] ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-purple text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-purple text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-purple text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-purple text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-6 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center mt-20">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

const ReactIcon = () => {
  return (
    <svg viewBox="0 0 34 32" fill="currentColor" height="60px" width="60px">
      <path
        fill="currentColor"
        d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
      />
      <path
        fill="currentColor"
        d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
      />
    </svg>
  );
};

const NodeIcon = function () {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" height="60px" width="60px">
      <path
        fill="currentColor"
        d="M15.998 28.895a1.94 1.94 0 01-.969-.259l-3.086-1.826c-.46-.257-.235-.349-.083-.402.614-.213.739-.262 1.394-.635.069-.038.159-.024.231.018l2.37 1.407a.304.304 0 00.287 0l9.241-5.333a.292.292 0 00.141-.25V10.95a.3.3 0 00-.143-.255l-9.237-5.329a.29.29 0 00-.285 0l-9.235 5.331a.296.296 0 00-.146.253v10.666c0 .102.056.198.145.247l2.532 1.462c1.374.687 2.215-.122 2.215-.935V11.86c0-.149.12-.266.269-.266h1.172c.146 0 .267.117.267.266v10.53c0 1.833-.998 2.885-2.736 2.885-.534 0-.955 0-2.129-.579L5.79 23.301a1.953 1.953 0 01-.969-1.686V10.95c0-.693.371-1.339.969-1.684l9.242-5.34a2.023 2.023 0 011.942 0l9.241 5.34c.599.346.971.992.971 1.684v10.665c0 .693-.372 1.337-.971 1.686l-9.241 5.335a1.942 1.942 0 01-.973.259zm2.855-7.348c-4.045 0-4.892-1.857-4.892-3.414 0-.148.118-.266.266-.266h1.195c.133 0 .245.096.265.226.18 1.216.717 1.831 3.164 1.831 1.946 0 2.775-.441 2.775-1.473 0-.596-.234-1.037-3.26-1.334-2.528-.25-4.093-.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233a.27.27 0 01-.267.291h-1.2a.266.266 0 01-.259-.209c-.288-1.28-.988-1.689-2.886-1.689-2.126 0-2.373.74-2.373 1.295 0 .673.292.869 3.161 1.248 2.84.375 4.19.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"
      />
    </svg>
  );
};

const MongoIcon = () => {
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
      width={70}
      height={70}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>mongodb</title>{" "}
        <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>{" "}
      </g>
    </svg>
  );
};

const ExpressIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="70px" width="70px">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
  );
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

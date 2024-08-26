import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const experience = [
  {
    title: "Mern Engineer intern",
    description:
      "Assisted in the development of web-based platform using Reactjs, Nodejs, Mongodb, Expressjs",
    image: "/mern.png",
  },
  {
    title: "Lead Frontend Developer",
    description:
      "Developed and maintianed product and code using modern React technology.",
    image: "/tech.png",
  },
  {
    title: "Lead Backend Developer",
    description:
      "Developed and maintianed product and code using modern Express and Node technology.",
    image: "/backend.png",
  },
  {
    title: "Teaching Assistent (MERN)",
    description:
      "Helped students and developers to overcome from their issues and doubts as a TA.",
    image: "/teacher.png",
  },
];

const Experience = () => {
  return (
    <section className="w-full p-5" id="experience">
      <h1 className="text-center text-2xl lg:text-5xl">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="lg:w-[85%] mx-auto h-auto p-5 flex min-h-[60vh] gap-8 flex-wrap">
        {experience.map((work, i) => (
          <ExperienceCard
            title={work.title}
            description={work.description}
            image={work.image}
            key={`key-${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

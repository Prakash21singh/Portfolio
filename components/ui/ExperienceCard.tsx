import Image from "next/image";
import React from "react";

interface IProp {
  title: string;
  description: string;
  image: string;
}
const ExperienceCard = ({ title, description, image }: IProp) => {
  return (
    <div className="w-full lg:w-[48%] h-full flex items-center justify-center border border-dark-200 rounded-lg p-4 bg-black-100 ">
      <div className="m-2 w-[22%]">
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="w-24 h-24 object-contain "
        />
      </div>
      <div className="flex flex-1 flex-col items-start">
        <h1 className="text-base lg:text-3xl font-semibold text-white text-ellipsis">
          {title}
        </h1>
        <p className="text-xs lg:text-sm text-white-200">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

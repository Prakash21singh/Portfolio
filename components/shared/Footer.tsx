import React from "react";
import { GridBackgroundDemo } from "../ui/Gridbackground";
import { Button } from "../ui/Button";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
  {
    id: 1,
    image: "/instagram.svg",
    link: "https://www.instagram.com/prakash_21._/",
  },
  {
    id: 2,
    image: "/linkedin.svg",
    link: "https://www.linkedin.com/in/prakash21singh/",
  },
  {
    id: 3,
    image: "/twitter.svg",
    link: "https://x.com/Prakash87096639",
  },
];

const Footer = () => {
  return (
    <section className="w-full min-h-28 relative flex flex-col items-center justify-between">
      <GridBackgroundDemo>
        Ready to take <span className="text-purple">Your </span>digital
        <p>product at next level</p>
        <p className="text-center text-xs text-wrap lg:text-sm my-2 text-white-200">
          React me out today let&apos;s discuss <br /> how can i help you with
          your thing
        </p>
        <div className="lg:w-1/2 mx-auto bg-black-100">
          <Link href={"https://www.linkedin.com/in/prakash21singh"}>
            <Button className="text-lg text-primary shadow-purple bg-dark-100 rounded-sm">
              Contact me Now
            </Button>
          </Link>
        </div>
        <div className="w-full flex gap-3 flex-col items-center justify-between  mt-10 text-sm">
          <p>Copyright &copy;2024 Prakash</p>
          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((media) => (
              <Link href={media.link} key={media.id} target="_blank">
                <div className="w-12 h-12 p-1 border border-zinc-700 rounded-sm flex items-center justify-center">
                  <Image
                    src={media.image}
                    alt={media.link}
                    width={200}
                    height={200}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </GridBackgroundDemo>
    </section>
  );
};

export default Footer;

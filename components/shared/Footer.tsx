import React from "react";
import { GridBackgroundDemo } from "../ui/Gridbackground";
import { Button } from "../ui/Button";
import { toast, Toaster } from "sonner";
import Link from "next/link";
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
        <div className="lg:w-1/2 mx-auto">
          <Link href={"https://www.linkedin.com/in/prakash21singh"}>
            <Button className="text-lg text-primary shadow-sm shadow-purple bg-dark-100">
              Contact me Now
            </Button>
          </Link>
        </div>
        <div></div>
      </GridBackgroundDemo>
    </section>
  );
};

export default Footer;

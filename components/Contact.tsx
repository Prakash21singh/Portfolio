"use client";
import { GitHub, Linkedin } from "@/techonologies";
import { IconCheck, IconMailFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pk870966339@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-2">Get in touch</h2>

      <p className="text-primary-text max-w-xl leading-relaxed">
        I’m open to freelance work and full-time opportunities. If you have
        something interesting to build, let’s talk.
      </p>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm">
        <button
          onClick={handleCopyEmail}
          title="Copy Email"
          className="text-primary-text cursor-pointer transition"
        >
          {isCopied ? (
            <IconCheck size={30} color="#f2f2f230" />
          ) : (
            <IconMailFilled size={32} fill="#f2f2f230" />
          )}
        </button>

        <Link
          href="https://linkedin.com/in/prakash21singh"
          target="_blank"
          className="text-primary-text hover:text-white transition"
        >
          <Linkedin size={25} />
        </Link>

        <Link
          href="https://github.com/prakash21singh"
          target="_blank"
          className="text-primary-text hover:text-white transition"
        >
          <GitHub size={25} />
        </Link>
      </div>

      <div className="w-full h-px bg-white/5 mt-10" />
    </div>
  );
}
